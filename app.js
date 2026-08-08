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
function go(view, arg){
  window.scrollTo(0,0);
  if(view === 'home'){ backBtn.hidden = true; renderHome(); }
  else if(view === 'domain'){ backBtn.hidden = false; renderDomain(arg); }
  else if(view === 'defi'){ backBtn.hidden = false; renderDefi(); }
}
backBtn.onclick = ()=> go('home');

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

/* ---------- utils ---------- */
function escapeH(s){ return String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

/* ---------- Service worker (offline) ---------- */
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js').catch(()=>{}));
}

/* ---------- boot ---------- */
renderXP();
go('home');
