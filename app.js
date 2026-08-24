/* PRISME — logique de l'app (locale-first, zéro dépendance) */

const APP = document.getElementById('app');
const backBtn = document.getElementById('backBtn');
const XP_PER_LEVEL = 100;

/* ---------- État persistant ---------- */
const store = {
  load(){
    try{ return JSON.parse(localStorage.getItem('prisme') || '{}'); }
    catch(e){ return {}; }
  },
  save(s){ localStorage.setItem('prisme', JSON.stringify(s)); }
};
let state = Object.assign({ xp:0, done:{} }, store.load());
// state.done[domId] = { fiches:true, quizBest: 0..N }

function addXP(n){
  const before = level();
  state.xp += n;
  store.save(state);
  renderXP();
  if(level() > before) levelToast(level());
}
function level(){ return Math.floor(state.xp / XP_PER_LEVEL) + 1; }

function renderXP(){
  document.getElementById('xpLevel').textContent = 'Niv.' + level();
  const pct = (state.xp % XP_PER_LEVEL) / XP_PER_LEVEL * 100;
  document.getElementById('xpBar').style.width = pct + '%';
}

function levelToast(lv){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = '✦ Niveau ' + lv + ' atteint !';
  document.body.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('show'));
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),400); }, 2200);
}

/* ---------- Navigation ---------- */
let currentView = { name:'home', arg:null };
function go(view, arg){
  window.scrollTo(0,0);
  currentView = { name:view, arg };
  if(view === 'home'){ backBtn.hidden = true; renderHome(); }
  else if(view === 'domain'){ backBtn.hidden = false; renderDomain(arg); }
  else if(view === 'defi'){ backBtn.hidden = false; renderDefi(); }
  else if(view === 'journal'){ backBtn.hidden = false; renderJournal(); }
  else if(view === 'partie'){ backBtn.hidden = false; renderPartie(arg); }
  else if(view === 'entree'){ backBtn.hidden = false; renderEntree(arg); }
}
function goBack(){
  const v = currentView;
  if(v.name === 'entree') go('partie', v.arg.partieId);
  else if(v.name === 'partie') go('journal');
  else go('home');
}
backBtn.onclick = goBack;

/* ---------- Outils communs ---------- */
function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr;
}
// Renvoie une copie d'un exo avec l'ordre des choix mélangé (et 'bonne' recalculé).
function shuffledExo(e){
  const order = shuffle(e.choix.map((_,k)=>k));
  return {
    q: e.q,
    choix: order.map(k=>e.choix[k]),
    bonne: order.indexOf(e.bonne),
    explication: e.explication,
    tags: e.tags
  };
}
const DOM_BY_ID = {};
DATA.domaines.forEach(d=> DOM_BY_ID[d.id] = { emoji:d.emoji, nom:d.nom });
function themeLabel(tags){
  if(!tags || !tags.length) return '';
  return tags.map(t=> DOM_BY_ID[t] ? `${DOM_BY_ID[t].emoji} ${DOM_BY_ID[t].nom}` : t).join('  ×  ');
}

/* ---------- Accueil ---------- */
function domainProgress(d){
  const done = state.done[d.id] || {};
  let pts = 0, total = 2; // 1 pt lecture fiches, 1 pt quiz complet
  if(done.fiches) pts++;
  if(done.quizBest === d.exos.length && d.exos.length) pts++;
  const quizPart = d.exos.length ? (done.quizBest||0)/d.exos.length : 0;
  const frac = ( (done.fiches?1:0) + quizPart ) / total;
  return Math.round(frac*100);
}

function renderHome(){
  const totalFiches = DATA.domaines.reduce((a,d)=>a+d.decouvertes.length,0);
  const totalExos = DATA.domaines.reduce((a,d)=>a+d.exos.length,0);
  const nbDefis = (DATA.defis||[]).length;
  const best = state.defiBest||0;
  const jp = (state.journal && state.journal.parties) || [];
  const jParts = jp.length;
  const jCount = jp.reduce((a,p)=>a+p.entrees.length,0);

  APP.className = 'fade';
  APP.innerHTML = `
    <section class="hero">
      <h1>La science, décomposée.</h1>
      <p>Chaque domaine réunit ses grandes découvertes, les notions à comprendre,
         un ancrage dans ton quotidien (et ses dangers), et un quiz pour vérifier.</p>
    </section>

    <div class="statRow">
      <div class="statBox"><b>${DATA.domaines.length}</b><span>Domaines</span></div>
      <div class="statBox"><b>${totalFiches}</b><span>Découvertes</span></div>
      <div class="statBox"><b>${totalExos + nbDefis}</b><span>Exercices</span></div>
    </div>

    <button class="defiCard" id="defiBtn">
      <span class="defiIcon">🎯</span>
      <span class="defiTxt">
        <b>Mode Défi</b>
        <small>${DEFI_N} questions au hasard, tous domaines mêlés — plus poussées, faites pour réfléchir.</small>
      </span>
      <span class="defiGo">${best?`record ${best}/${DEFI_N}`:'▶'}</span>
    </button>

    <button class="journalCard" id="journalBtn">
      <span class="jIcon">📓</span>
      <span class="jTxt">
        <b>Mon carnet de recherches</b>
        <small>${jCount ? `${jCount} entrée${jCount>1?'s':''} · ${jParts} partie${jParts>1?'s':''} — reprends tes recherches` : 'Écris tes propres recherches, organisées en parties.'}</small>
      </span>
      <span class="jGo">${jCount?'▶':'＋'}</span>
    </button>

    <div class="sectionTitle">Explore un domaine</div>
    <div class="domGrid">
      ${DATA.domaines.map(d=>{
        const p = domainProgress(d);
        return `
        <button class="domCard" data-id="${d.id}">
          <span class="glow" style="background:${d.accent}"></span>
          <span class="emoji">${d.emoji}</span>
          <h3>${d.nom}</h3>
          <div class="tag">${d.tagline}</div>
          <div class="domProg"><i style="width:${p}%;background:${d.accent}"></i></div>
          <div class="domMeta"><span>${d.decouvertes.length} fiches · ${d.exos.length} exos</span><span>${p}%</span></div>
        </button>`;
      }).join('')}
    </div>
  `;
  APP.querySelectorAll('.domCard').forEach(b=>{
    b.onclick = ()=> go('domain', b.dataset.id);
  });
  const db = document.getElementById('defiBtn');
  if(db) db.onclick = ()=> go('defi');
  const jb = document.getElementById('journalBtn');
  if(jb) jb.onclick = ()=> go('journal');
  renderXP();
}

/* ---------- Page domaine ---------- */
let currentTab = 'decouvertes';

function renderDomain(id){
  const d = DATA.domaines.find(x=>x.id===id);
  if(!d){ go('home'); return; }
  currentTab = 'decouvertes';

  APP.className = 'fade';
  APP.innerHTML = `
    <div class="domHead">
      <span class="big">${d.emoji}</span>
      <div>
        <h2>${d.nom}</h2>
        <p class="sub">${d.tagline}</p>
      </div>
    </div>
    <div class="tabs">
      <button class="tab" data-t="decouvertes">Découvertes</button>
      <button class="tab" data-t="notions">Notions</button>
      <button class="tab" data-t="quotidien">Quotidien</button>
      <button class="tab" data-t="exos">Quiz</button>
    </div>
    <div id="tabBody"></div>
  `;
  APP.querySelectorAll('.tab').forEach(t=>{
    t.onclick = ()=>{ currentTab = t.dataset.t; paintTabs(d); };
  });
  paintTabs(d);
}

function paintTabs(d){
  APP.querySelectorAll('.tab').forEach(t=>
    t.classList.toggle('active', t.dataset.t===currentTab));
  const body = document.getElementById('tabBody');
  body.className = 'fade';
  if(currentTab==='decouvertes') body.innerHTML = viewDecouvertes(d);
  else if(currentTab==='notions') body.innerHTML = viewNotions(d);
  else if(currentTab==='quotidien') body.innerHTML = viewQuotidien(d);
  else if(currentTab==='exos') mountQuiz(d, body);

  // marque les fiches comme lues (+ XP une seule fois)
  if(currentTab==='decouvertes'){
    const done = state.done[d.id] || (state.done[d.id]={});
    if(!done.fiches){ done.fiches = true; store.save(state); addXP(15); }
  }
}

function viewDecouvertes(d){
  return d.decouvertes.map(f=>`
    <article class="fiche">
      <div class="fh"><h3>${f.titre}</h3><span class="year">${f.annee}</span></div>
      <div class="qui">${f.qui}</div>
      <p class="resume">${f.resume}</p>
      <div class="why"><b>Pourquoi ça compte —</b> ${f.pourquoi}</div>
    </article>
  `).join('');
}

function viewNotions(d){
  return d.notions.map(n=>{
    // Schéma riche (accroche + blocs + retenir) avec repli sur l'ancien champ texte.
    const blocs = n.blocs
      ? n.blocs.map(b=> `${b.h?`<h4>${b.h}</h4>`:''}<p>${b.t}</p>`).join('')
      : `<p>${n.texte||''}</p>`;
    return `
    <article class="notion">
      <h3>${n.titre}</h3>
      ${n.accroche?`<p class="accroche">${n.accroche}</p>`:''}
      ${blocs}
      ${n.retenir?`<div class="retenir"><b>À retenir —</b> ${n.retenir}</div>`:''}
    </article>`;
  }).join('');
}

function viewQuotidien(d){
  return d.quotidien.map(q=>`
    <article class="qcard ${q.danger?'danger':''}">
      <h3>${escapeH(q.titre)}${q.danger?'<span class="dangerBadge">danger</span>':''}</h3>
      <p>${q.texte}</p>
    </article>
  `).join('');
}

/* ---------- Moteur de quiz générique ---------- */
// list : tableau d'exos {q, choix, bonne, explication, tags?}
// opts : { label, showTheme, onFinish(score,total) }
function runQuiz(list, body, opts){
  opts = opts || {};
  const total = list.length;
  let i = 0, score = 0, answered = false;

  function paint(){
    const q = list[i];
    const theme = (opts.showTheme && q.tags) ? `<div class="qTheme">${themeLabel(q.tags)}</div>` : '';
    body.innerHTML = `
      <div class="quizWrap">
        <div class="quizTop"><span>${opts.label||'Question'} ${i+1}/${total}</span><span>Score ${score}</span></div>
        <div class="quizProg"><i style="width:${(i)/total*100}%"></i></div>
        ${theme}
        <p class="question">${q.q}</p>
        <div class="choices">
          ${q.choix.map((c,idx)=>`<button class="choice" data-i="${idx}">${c}</button>`).join('')}
        </div>
        <div id="afterQ"></div>
      </div>`;
    answered = false;
    body.querySelectorAll('.choice').forEach(b=>{
      b.onclick = ()=> pick(parseInt(b.dataset.i,10), q);
    });
  }

  function pick(idx, q){
    if(answered) return;
    answered = true;
    body.querySelectorAll('.choice').forEach((b,k)=>{
      if(k===q.bonne) b.classList.add('correct');
      else if(k===idx) b.classList.add('wrong');
      else b.classList.add('dim');
      b.style.pointerEvents='none';
    });
    const ok = idx===q.bonne;
    if(ok) score++;
    const after = body.querySelector('#afterQ');
    after.innerHTML = `
      <div class="explain ${ok?'ok':'no'}">${ok?'✓ ':'✗ '}${q.explication}</div>
      <button class="nextBtn">${i < total-1 ? 'Question suivante' : 'Voir le résultat'}</button>`;
    after.querySelector('.nextBtn').onclick = ()=>{
      if(i < total-1){ i++; paint(); }
      else opts.onFinish(score, total);
    };
  }

  paint();
}

/* ---------- Quiz d'un domaine ---------- */
function mountQuiz(d, body){
  if(!d.exos.length){ body.innerHTML = `<div class="emptyExo">Pas encore d'exercices ici.</div>`; return; }
  runQuiz(d.exos, body, {
    onFinish(score, total){
      const done = state.done[d.id] || (state.done[d.id]={});
      const prevBest = done.quizBest || 0;
      const gain = score > prevBest ? (score - prevBest) * 10 : 0;
      if(gain){ addXP(gain); done.quizBest = score; store.save(state); }
      const pct = Math.round(score/total*100);
      const msg = pct===100 ? "Sans faute. Ce domaine n'a plus de secret pour toi." :
                  pct>=60  ? "Solide. Relis les fiches sur ce qui a coincé et retente." :
                             "Le quiz t'a piégée — c'est le moment de relire les découvertes et notions.";
      body.innerHTML = `
        <div class="quizWrap result">
          <div>Résultat</div>
          <div class="score" style="color:${pct===100?'var(--good)':pct>=60?'var(--warn)':'var(--bad)'}">${score}/${total}</div>
          <div class="msg">${msg}</div>
          ${gain?`<div class="xpGain">+${gain} XP</div>`:`<div class="xpGain" style="color:var(--ink-dim)">Meilleur score déjà enregistré : ${prevBest}/${total}</div>`}
          <button class="nextBtn" id="retry">Recommencer le quiz</button>
        </div>`;
      body.querySelector('#retry').onclick = ()=> mountQuiz(d, body);
    }
  });
}

/* ---------- Mode Défi (transversal, aléatoire) ---------- */
const DEFI_N = 10; // questions par défi

function renderDefi(){
  APP.className = 'fade';
  APP.innerHTML = `
    <div class="domHead">
      <span class="big">🎯</span>
      <div>
        <h2>Mode Défi</h2>
        <p class="sub">Questions mêlées, tous domaines — pensées pour te faire réfléchir.</p>
      </div>
    </div>
    <div id="defiBody"></div>`;
  mountDefi(document.getElementById('defiBody'));
}

function mountDefi(body){
  const pool = DATA.defis || [];
  if(pool.length < 1){ body.innerHTML = `<div class="emptyExo">Aucun défi disponible.</div>`; return; }
  const n = Math.min(DEFI_N, pool.length);
  const set = shuffle(pool.slice()).slice(0, n).map(shuffledExo); // tirage + choix mélangés
  runQuiz(set, body, {
    label: 'Défi', showTheme: true,
    onFinish(score, total){
      addXP(score * 10); // les défis rapportent, et sont rejouables
      const prevBest = state.defiBest || 0;
      const record = score > prevBest;
      if(record) state.defiBest = score;
      state.defiPlayed = (state.defiPlayed||0) + 1;
      store.save(state);
      const pct = Math.round(score/total*100);
      const msg = pct===100 ? "Parfait. Tu ne fais pas que réviser : tu raisonnes." :
                  pct>=70  ? "Très bon niveau — ces questions ne sont pas données." :
                  pct>=40  ? "Pas mal ! Relis les notions croisées et retente un tirage." :
                             "Ces défis piochent partout et croisent les idées : reviens-y, c'est comme ça qu'on progresse.";
      body.innerHTML = `
        <div class="quizWrap result">
          <div>${record?'🏆 Nouveau record !':'Résultat du défi'}</div>
          <div class="score" style="color:${pct>=70?'var(--good)':pct>=40?'var(--warn)':'var(--bad)'}">${score}/${total}</div>
          <div class="msg">${msg}</div>
          <div class="xpGain">+${score*10} XP${record?` · record ${state.defiBest}/${total}`:` · record ${state.defiBest}/${total}`}</div>
          <button class="nextBtn" id="again">Nouveau défi</button>
          <button class="nextBtn ghostBtn" id="home">Retour à l'accueil</button>
        </div>`;
      body.querySelector('#again').onclick = ()=> mountDefi(body);
      body.querySelector('#home').onclick = ()=> go('home');
    }
  });
}

/* ================= CARNET DE RECHERCHES ================= */
const J_EMOJIS = ['🔬','🧪','🧬','🔭','🪐','⚛️','🧠','💡','📐','🌌','🧲','⚗️','🌱','📊','🦴','🌍'];
const J_COLORS = ['#8b7dff','#4fd1c5','#fbbf24','#4ade80','#f472b6','#38bdf8'];

function journal(){ if(!state.journal) state.journal = { parties: [] }; return state.journal; }
function jSave(){ store.save(state); }
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function findPartie(id){ return journal().parties.find(p=>p.id===id); }

function fmtDate(ts){
  if(!ts) return '';
  const d = new Date(ts);
  const m = ['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
}
function escapeAttr(s){ return escapeH(s).replace(/"/g,'&quot;'); }
function snippet(txt, n){
  const t = String(txt||'').replace(/\s+/g,' ').trim();
  return escapeH(t.length>n ? t.slice(0,n).trim()+'…' : t);
}

/* --- Vue : liste des parties --- */
function renderJournal(){
  const j = journal();
  APP.className = 'fade';
  APP.innerHTML = `
    <div class="domHead">
      <span class="big">📓</span>
      <div><h2>Mon carnet</h2><p class="sub">Tes recherches à toi, rangées en parties.</p></div>
    </div>
    <div class="jTools">
      <button class="addPartieBtn" id="addPartie">＋ Nouvelle partie</button>
      ${j.parties.length ? `<button class="exportBtn" id="exportJ">⬇︎ Exporter (.md)</button>` : ''}
    </div>
    <div id="jFormSlot"></div>
    <div id="jList"></div>`;

  const slot = document.getElementById('jFormSlot');
  const listEl = document.getElementById('jList');

  function drawList(){
    if(!j.parties.length){
      listEl.innerHTML = `<div class="emptyExo">Aucune partie pour l'instant.<br>Crée-en une (ex. « Trous noirs », « Théorie du chaos », « Idées à creuser »)<br>puis écris tes recherches dedans.</div>`;
      return;
    }
    listEl.innerHTML = j.parties.map(p=>{
      const n = p.entrees.length;
      const last = p.entrees.slice().sort((a,b)=>b.maj-a.maj)[0];
      return `
      <button class="partieCard" data-id="${p.id}">
        <span class="pBar" style="background:${p.couleur||'#8b7dff'}"></span>
        <span class="pEmoji">${p.emoji||'🔬'}</span>
        <span class="pMain">
          <b>${escapeH(p.titre)}</b>
          <small>${n} entrée${n>1?'s':''}${last&&(last.titre||last.corps)?` · ${snippet(last.titre||last.corps,44)}`:''}</small>
        </span>
        <span class="pGo">›</span>
      </button>`;
    }).join('');
    listEl.querySelectorAll('.partieCard').forEach(b=> b.onclick = ()=> go('partie', b.dataset.id));
  }

  document.getElementById('addPartie').onclick = ()=> partieForm(slot, null, renderJournal);
  const ex = document.getElementById('exportJ');
  if(ex) ex.onclick = exportJournal;
  drawList();
}

/* --- Formulaire créer / renommer une partie --- */
function partieForm(slot, existing, onDone){
  const isEdit = !!existing;
  let emoji   = existing ? (existing.emoji||'🔬') : '🔬';
  let couleur = existing ? (existing.couleur||J_COLORS[0]) : J_COLORS[0];
  slot.innerHTML = `
    <div class="newInline">
      <input id="pfTitre" class="eTitre" placeholder="Nom de la partie" value="${existing?escapeAttr(existing.titre):''}" maxlength="60">
      <div class="pickLabel">Icône</div>
      <div class="emojiPick">${J_EMOJIS.map(e=>`<button class="emojiOpt${e===emoji?' sel':''}" data-e="${e}">${e}</button>`).join('')}</div>
      <div class="pickLabel">Couleur</div>
      <div class="colorPick">${J_COLORS.map(c=>`<button class="colorOpt${c===couleur?' sel':''}" data-c="${c}" style="background:${c}"></button>`).join('')}</div>
      <div class="formRow">
        <button class="nextBtn" id="pfSave">${isEdit?'Enregistrer':'Créer la partie'}</button>
        <button class="nextBtn ghostBtn" id="pfCancel">Annuler</button>
      </div>
    </div>`;
  const titreEl = slot.querySelector('#pfTitre');
  slot.scrollIntoView({behavior:'smooth', block:'nearest'});
  setTimeout(()=>titreEl.focus(), 60);
  slot.querySelectorAll('.emojiOpt').forEach(b=> b.onclick = ()=>{ emoji=b.dataset.e; slot.querySelectorAll('.emojiOpt').forEach(x=>x.classList.toggle('sel',x===b)); });
  slot.querySelectorAll('.colorOpt').forEach(b=> b.onclick = ()=>{ couleur=b.dataset.c; slot.querySelectorAll('.colorOpt').forEach(x=>x.classList.toggle('sel',x===b)); });
  slot.querySelector('#pfCancel').onclick = ()=>{ slot.innerHTML=''; };
  slot.querySelector('#pfSave').onclick = ()=>{
    const titre = titreEl.value.trim();
    if(!titre){ titreEl.classList.add('shake'); setTimeout(()=>titreEl.classList.remove('shake'),400); titreEl.focus(); return; }
    if(isEdit){ existing.titre=titre; existing.emoji=emoji; existing.couleur=couleur; }
    else { journal().parties.push({ id:uid(), titre, emoji, couleur, entrees:[] }); }
    jSave();
    slot.innerHTML='';
    onDone && onDone();
  };
}

/* --- Vue : une partie (ses entrées) --- */
function renderPartie(id){
  const p = findPartie(id);
  if(!p){ go('journal'); return; }
  // nettoie les entrées vides laissées en plan
  const before = p.entrees.length;
  p.entrees = p.entrees.filter(e=> (e.titre&&e.titre.trim()) || (e.corps&&e.corps.trim()));
  if(p.entrees.length!==before) jSave();

  APP.className = 'fade';
  APP.innerHTML = `
    <div class="domHead">
      <span class="big">${p.emoji||'🔬'}</span>
      <div><h2>${escapeH(p.titre)}</h2><p class="sub">${p.entrees.length} entrée${p.entrees.length>1?'s':''}</p></div>
    </div>
    <div class="jTools">
      <button class="addPartieBtn" id="addEntree">＋ Nouvelle entrée</button>
      <button class="iconTextBtn" id="editP">✎ Renommer</button>
      <button class="iconTextBtn danger" id="delP">🗑 Supprimer</button>
    </div>
    <div id="pFormSlot"></div>
    <div id="eList"></div>`;

  const slot = document.getElementById('pFormSlot');
  const listEl = document.getElementById('eList');

  function drawList(){
    if(!p.entrees.length){
      listEl.innerHTML = `<div class="emptyExo">Rien d'écrit ici pour l'instant.<br>Ouvre une nouvelle entrée et note ta recherche.</div>`;
      return;
    }
    listEl.innerHTML = p.entrees.slice().sort((a,b)=>b.maj-a.maj).map(e=>`
      <button class="entreeCard" data-id="${e.id}">
        <div class="ecTop">
          <b>${e.titre&&e.titre.trim()?escapeH(e.titre):'<span class="untitled">Sans titre</span>'}</b>
          <span class="ecDate">${fmtDate(e.maj)}</span>
        </div>
        ${e.corps&&e.corps.trim()?`<p class="ecPrev">${snippet(e.corps,140)}</p>`:''}
      </button>`).join('');
    listEl.querySelectorAll('.entreeCard').forEach(b=> b.onclick = ()=> go('entree',{partieId:p.id, entreeId:b.dataset.id}));
  }

  document.getElementById('addEntree').onclick = ()=>{
    const e = { id:uid(), titre:'', corps:'', cree:Date.now(), maj:Date.now() };
    p.entrees.push(e); jSave();
    go('entree', { partieId:p.id, entreeId:e.id });
  };
  document.getElementById('editP').onclick = ()=> partieForm(slot, p, ()=> renderPartie(id));
  document.getElementById('delP').onclick = ()=>{
    if(confirm(`Supprimer la partie « ${p.titre} » et ses ${p.entrees.length} entrée(s) ? C'est définitif.`)){
      journal().parties = journal().parties.filter(x=>x.id!==p.id);
      jSave(); go('journal');
    }
  };
  drawList();
}

/* --- Vue : éditeur d'une entrée (auto-sauvegarde) --- */
function renderEntree(arg){
  const p = findPartie(arg.partieId);
  const e = p && p.entrees.find(x=>x.id===arg.entreeId);
  if(!p || !e){ go('journal'); return; }

  APP.className = 'fade';
  APP.innerHTML = `
    <button class="crumb" id="crumb">‹ ${p.emoji||'🔬'} ${escapeH(p.titre)}</button>
    <input id="eTitre" class="eTitre big" placeholder="Titre de la recherche" value="${escapeAttr(e.titre)}" maxlength="120">
    <div class="eMeta">
      <span id="savedTag" class="savedTag">${(e.titre&&e.titre.trim())||(e.corps&&e.corps.trim())?'Enregistré ✓':'Nouvelle entrée'}</span>
      <span class="eDate">${e.cree?('créée le '+fmtDate(e.cree)):''}</span>
    </div>
    <textarea id="eCorps" class="eCorps" placeholder="Écris ta recherche ici… hypothèse, sources, calculs, conclusions — comme tu veux.">${escapeH(e.corps)}</textarea>
    <button class="delEntry" id="delEntry">Supprimer cette entrée</button>`;

  const titreEl = document.getElementById('eTitre');
  const corpsEl = document.getElementById('eCorps');
  const tag = document.getElementById('savedTag');

  function autosize(){ corpsEl.style.height='auto'; corpsEl.style.height = Math.max(260, corpsEl.scrollHeight+4)+'px'; }
  function persist(){
    e.titre = titreEl.value; e.corps = corpsEl.value; e.maj = Date.now();
    if(!e.xpAwarded && (e.titre.trim() || e.corps.trim())){ e.xpAwarded = true; addXP(10); } // addXP sauvegarde déjà
    jSave();
    tag.textContent = 'Enregistré ✓';
  }
  titreEl.oninput = persist;
  corpsEl.oninput = ()=>{ autosize(); persist(); };

  document.getElementById('crumb').onclick = ()=> go('partie', p.id);
  document.getElementById('delEntry').onclick = ()=>{
    if(confirm('Supprimer cette entrée ? C\'est définitif.')){
      p.entrees = p.entrees.filter(x=>x.id!==e.id); jSave();
      go('partie', p.id);
    }
  };
  autosize();
}

/* --- Export du carnet en Markdown --- */
function exportJournal(){
  const j = journal();
  let md = `# Mon carnet de recherches — PRISME\n\n_Exporté le ${fmtDate(Date.now())}_\n`;
  j.parties.forEach(p=>{
    md += `\n\n## ${p.emoji||''} ${p.titre}\n`;
    if(!p.entrees.length){ md += `\n_(vide)_\n`; return; }
    p.entrees.slice().sort((a,b)=>a.cree-b.cree).forEach(e=>{
      md += `\n### ${e.titre&&e.titre.trim()?e.titre:'Sans titre'}\n`;
      md += `_${fmtDate(e.maj)}_\n\n`;
      md += `${(e.corps||'').trim()}\n`;
    });
  });
  try{
    const blob = new Blob([md], {type:'text/markdown;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'carnet-prisme.md';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 1500);
  }catch(err){ alert('Export impossible sur cet appareil.'); }
}

/* ---------- utils ---------- */
function escapeH(s){ return String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

/* ---------- Service worker (offline) ---------- */
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js').catch(()=>{}));
}

/* ---------- boot ---------- */
renderXP();
go('home');
