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
}
backBtn.onclick = ()=> go('home');

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
  const explored = DATA.domaines.filter(d=> (state.done[d.id]||{}).fiches).length;

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
      <div class="statBox"><b>${totalExos}</b><span>Exercices</span></div>
    </div>

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
  return d.notions.map(n=>`
    <article class="notion">
      <h3>${n.titre}</h3>
      <p>${n.texte}</p>
    </article>
  `).join('');
}

function viewQuotidien(d){
  return d.quotidien.map(q=>`
    <article class="qcard ${q.danger?'danger':''}">
      <h3>${escapeH(q.titre)}${q.danger?'<span class="dangerBadge">danger</span>':''}</h3>
      <p>${q.texte}</p>
    </article>
  `).join('');
}

/* ---------- Quiz ---------- */
function mountQuiz(d, body){
  if(!d.exos.length){ body.innerHTML = `<div class="emptyExo">Pas encore d'exercices ici.</div>`; return; }
  let i = 0, score = 0, answered = false;

  function paint(){
    const q = d.exos[i];
    body.innerHTML = `
      <div class="quizWrap">
        <div class="quizTop"><span>Question ${i+1}/${d.exos.length}</span><span>Score ${score}</span></div>
        <div class="quizProg"><i style="width:${(i)/d.exos.length*100}%"></i></div>
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
    const btns = body.querySelectorAll('.choice');
    btns.forEach((b,k)=>{
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
      <button class="nextBtn">${i < d.exos.length-1 ? 'Question suivante' : 'Voir le résultat'}</button>`;
    after.querySelector('.nextBtn').onclick = ()=>{
      if(i < d.exos.length-1){ i++; paint(); }
      else finish();
    };
  }

  function finish(){
    // XP : 10 par bonne réponse, sauf ce qui a déjà été gagné (on récompense le progrès)
    const done = state.done[d.id] || (state.done[d.id]={});
    const prevBest = done.quizBest || 0;
    if(score > prevBest){
      addXP( (score - prevBest) * 10 );
      done.quizBest = score;
      store.save(state);
    }
    const pct = Math.round(score/d.exos.length*100);
    const msg = pct===100 ? "Sans faute. Ce domaine n'a plus de secret pour toi." :
                pct>=60  ? "Solide. Relis les fiches sur ce qui a coincé et retente." :
                           "Le quiz t'a piégée — c'est le moment de relire les découvertes et notions.";
    body.innerHTML = `
      <div class="quizWrap result">
        <div>Résultat</div>
        <div class="score" style="color:${pct===100?'var(--good)':pct>=60?'var(--warn)':'var(--bad)'}">${score}/${d.exos.length}</div>
        <div class="msg">${msg}</div>
        ${score>prevBest?`<div class="xpGain">+${(score-prevBest)*10} XP</div>`:`<div class="xpGain" style="color:var(--ink-dim)">Meilleur score déjà enregistré : ${prevBest}/${d.exos.length}</div>`}
        <button class="nextBtn" id="retry">Recommencer le quiz</button>
      </div>`;
    body.querySelector('#retry').onclick = ()=> mountQuiz(d, body);
  }

  paint();
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
