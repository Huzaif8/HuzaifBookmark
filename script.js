
(function(){
"use strict";

/* ============================= ICONS ============================= */
const ICONS = {
  globe:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" stroke-width="1.5"/></svg>`,
  github:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 3 1.4 3.7 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>`,
  package:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 8l9 5 9-5M12 13v8" stroke="currentColor" stroke-width="1.6"/></svg>`,
  book:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" stroke="currentColor" stroke-width="1.6"/></svg>`,
  video:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="m17 9 4-2.5v11L17 15" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  tool:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 0 0 2.9 2.9l6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  api:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M11 7h4a2 2 0 0 1 2 2v4" stroke="currentColor" stroke-width="1.6"/></svg>`,
  article:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  folder:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2.5h8.5A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V6.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  dots:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>`,
  star:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  starFill:`<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3.5z"/></svg>`,
  lock:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.7"/><path class="lock-lid" d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="1.7"/></g></svg>`,
  pin:`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14.7 2.3a1 1 0 0 0-1.4 0l-1.6 1.6a3 3 0 0 0-3.5.6L6.5 6.2a1 1 0 0 0 0 1.4l9.9 9.9a1 1 0 0 0 1.4 0l1.7-1.7a3 3 0 0 0 .6-3.5l1.6-1.6a1 1 0 0 0 0-1.4l-7-7zM4 20l4.5-1.5L4 14 2.5 18.5 4 20z"/></svg>`,
  copy:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="1.6"/></svg>`,
  edit:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 20h9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  trash:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7m2 0v13a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20V7h10z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  open:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  move:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 9V5.5A1.5 1.5 0 0 1 6.5 4H10l2 2.5h5.5A1.5 1.5 0 0 1 19 8v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17V9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 13h5m0 0-1.8-1.8M14 13l-1.8 1.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  dup:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 16V6a2 2 0 0 1 2-2h10" stroke="currentColor" stroke-width="1.6"/></svg>`,
  note:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12h6M9 16h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  key:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="15" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M11 12 19 4M15 8l2 2M19 4l2 2-3 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  unlock:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V7a4 4 0 0 1 7.5-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  download:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3v13m0 0-4-4m4 4 4-4M4 20h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  upload:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 20V7m0 0-4 4m4-4 4 4M4 4h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  check:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  x:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  grid:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/></svg>`,
  list:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  sun:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  moon:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
};
function ic(name){return ICONS[name] || ICONS.globe;}
function typeIcon(type){
  const map={GitHub:'github',Package:'package',Documentation:'book',Video:'video',Tool:'tool',API:'api',Article:'article',Repository:'github',Tutorial:'book',Website:'globe',Other:'globe'};
  return ic(map[type]||'globe');
}

/* ============================= STATE ============================= */
const STORAGE_KEY = 'devvault_data';
const CAT_COLORS = ['#5EEAD4','#F0B429','#8B7CF6','#F1666B','#4FA8F0','#68D391','#F591B2','#E0A96D'];
let appState = null;
let ui = {
  view:'dashboard',
  activeCategory:null,
  activeFolder:null,
  activeTag:null,
  searchQuery:'',
  filter:'all',
  sort:'newest',
  viewMode:'grid',
  settingsTab:'appearance',
};
let pendingCtxMenu = null;
let dragBookmarkId = null;

function uid(prefix){ return prefix+'_'+Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
function nowISO(){ return new Date().toISOString(); }

function defaultCategories(){
  return ['Frontend','Backend','JavaScript','React','Node.js','Database','API','DevOps','Git/GitHub','CSS','Python','AI','Tools','Documentation','Tutorials','Other']
    .map((name,i)=>({id:uid('cat'), name, color:CAT_COLORS[i%CAT_COLORS.length]}));
}
function defaultFolders(){
  return ['Projects','Learning','Important'].map(name=>({id:uid('fold'), name, passwordHash:null, createdAt:nowISO()}));
}
function sampleBookmarks(categories, folders){
  const catByName = n => (categories.find(c=>c.name===n)||categories[0]).id;
  const foldByName = n => (folders.find(f=>f.name===n)||folders[0]).id;
  const items = [
    ['GitHub','https://github.com/','Git/GitHub','Important','Where all the code lives.',['git','social'],'GitHub'],
    ['MDN Web Docs','https://developer.mozilla.org/','Documentation','Learning','The reference for web platform APIs.',['docs','html','css','js'],'Documentation'],
    ['React','https://react.dev/','React','Learning','Official React docs and tutorial.',['react','frontend'],'Documentation'],
    ['Node.js','https://nodejs.org/','Node.js','Learning','Runtime docs and downloads.',['node','backend'],'Documentation'],
    ['npm','https://www.npmjs.com/','JavaScript','Projects','Package registry search.',['npm','packages'],'Package'],
    ['Mongoose','https://mongoosejs.com/','Database','Projects','ODM for MongoDB and Node.js.',['mongodb','mongoose','nodejs'],'Documentation'],
    ['Stack Overflow','https://stackoverflow.com/','Other','Important','Where bugs go to get fixed.',['qa','community'],'Website'],
    ['Vite','https://vite.dev/','Tools','Projects','Fast frontend build tool.',['build','tooling'],'Tool'],
  ];
  return items.map(([name,url,cat,fold,note,tags,type],i)=>({
    id: uid('bm'), name, url, category: catByName(cat), folderId: foldByName(fold),
    note, tags, favorite: i<2, pinned: i===0, protectedItem:false, passwordHash:null,
    type, openCount: [24,19,15,11,9,6,3,2][i]||0, isSample:true,
    createdAt: new Date(Date.now()-i*86400000).toISOString(),
    updatedAt: new Date(Date.now()-i*86400000).toISOString(),
    lastOpenedAt: i<5 ? new Date(Date.now()-i*3600000).toISOString() : null,
  }));
}
function freshState(){
  const categories = defaultCategories();
  const folders = defaultFolders();
  return {
    bookmarks: sampleBookmarks(categories, folders),
    folders, categories,
    settings:{ theme:'dark' },
    meta:{ version:1 }
  };
}
function loadData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){ appState = JSON.parse(raw); }
    else { appState = freshState(); saveData(); }
  }catch(e){ appState = freshState(); }
  if(!appState.categories) appState.categories = defaultCategories();
  if(!appState.folders) appState.folders = [];
  if(!appState.bookmarks) appState.bookmarks=[];
  if(!appState.settings) appState.settings={theme:'dark'};
}
function saveData(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); }
  catch(e){ toast('Storage error — could not save', 'danger'); }
}

/* ============================= UTIL ============================= */
function escapeHtml(str){
  return String(str==null?'':str).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function domainOf(url){
  try{ return new URL(url).hostname.replace(/^www\./,''); }catch(e){ return url; }
}
function faviconUrl(url){
  const d = domainOf(url);
  return `https://www.google.com/s2/favicons?sz=64&domain=${d}`;
}
function normalizeUrl(raw){
  let u = raw.trim();
  if(!u) return '';
  if(!/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(u)){ u = 'https://' + u; }
  return u;
}
function isValidUrl(u){
  try{ const x = new URL(u); return x.protocol==='http:'||x.protocol==='https:'; }catch(e){ return false; }
}
function catById(id){ return appState.categories.find(c=>c.id===id); }
function foldById(id){ return appState.folders.find(f=>f.id===id); }
function catColor(id){ const c=catById(id); return c?c.color:'var(--border)'; }
async function sha256(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
function timeAgo(iso){
  if(!iso) return '';
  const s = Math.floor((Date.now()-new Date(iso).getTime())/1000);
  if(s<60) return 'just now';
  if(s<3600) return Math.floor(s/60)+'m ago';
  if(s<86400) return Math.floor(s/3600)+'h ago';
  if(s<2592000) return Math.floor(s/86400)+'d ago';
  return new Date(iso).toLocaleDateString();
}

/* ============================= TOASTS ============================= */
function toast(msg, kind, iconName){
  const stack = document.getElementById('toastStack');
  const el = document.createElement('div');
  el.className = 'toast' + (kind==='danger' ? ' t-danger':'');
  el.innerHTML = `<span class="t-ic">${ic(iconName || (kind==='danger'?'x':'check'))}</span><span>${escapeHtml(msg)}</span>`;
  stack.appendChild(el);
  setTimeout(()=>{ el.classList.add('leaving'); setTimeout(()=>el.remove(), 200); }, 2800);
}

/* ============================= MODALS ============================= */
function closeModal(){
  const root = document.getElementById('modalRoot');
  root.innerHTML='';
  document.removeEventListener('keydown', modalEscHandler);
}
function modalEscHandler(e){ if(e.key==='Escape') closeModal(); }
function openModal(html, opts){
  opts = opts||{};
  const root = document.getElementById('modalRoot');
  root.innerHTML = `<div class="modal-overlay" id="modalOverlay"><div class="modal ${opts.wide?'modal-wide':''}" role="dialog" aria-modal="true">${html}</div></div>`;
  const overlay = document.getElementById('modalOverlay');
  overlay.addEventListener('mousedown', (e)=>{ if(e.target===overlay) closeModal(); });
  document.addEventListener('keydown', modalEscHandler);
  const firstInput = root.querySelector('input,textarea,select,button');
  if(firstInput) setTimeout(()=>firstInput.focus(), 30);
}

function confirmModal({title, text, confirmLabel, danger, onConfirm}){
  openModal(`
    <div class="modal-head"><h2>${escapeHtml(title)}</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="confirm-icon">${ic('trash')}</div>
      <div class="confirm-text">${text}</div>
    </div>
    <div class="modal-foot">
      <button class="btn" onclick="DV.closeModal()">Cancel</button>
      <button class="btn ${danger!==false?'btn-danger':'btn-primary'}" id="confirmActionBtn">${escapeHtml(confirmLabel||'Confirm')}</button>
    </div>
  `);
  document.getElementById('confirmActionBtn').onclick = ()=>{ onConfirm(); closeModal(); };
}

/* ---- Add / Edit Bookmark Modal ---- */
function openBookmarkModal(existing){
  const isEdit = !!existing;
  const cats = appState.categories;
  const folders = appState.folders;
  const types = ['Website','GitHub','Documentation','Package','Tutorial','Video','Article','Tool','API','Repository','Other'];
  const tags = existing ? [...existing.tags] : [];
  openModal(`
    <div class="modal-head"><h2>${isEdit?'Edit Bookmark':'Add Bookmark'}</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="field">
        <label for="f-name">Bookmark Name *</label>
        <input type="text" id="f-name" value="${escapeHtml(existing?existing.name:'')}" placeholder="Mongoose Documentation">
        <div class="field-error" id="err-name">Name is required.</div>
      </div>
      <div class="field">
        <label for="f-url">URL *</label>
        <input type="text" id="f-url" value="${escapeHtml(existing?existing.url:'')}" placeholder="https://mongoosejs.com/docs/">
        <div class="field-error" id="err-url">Enter a valid URL.</div>
      </div>
      <div class="field-row">
        <div class="field">
          <label for="f-cat">Category</label>
          <select id="f-cat">${cats.map(c=>`<option value="${c.id}" ${existing&&existing.category===c.id?'selected':''}>${escapeHtml(c.name)}</option>`).join('')}</select>
        </div>
        <div class="field">
          <label for="f-folder">Folder</label>
          <select id="f-folder"><option value="">— None —</option>${folders.map(f=>`<option value="${f.id}" ${existing&&existing.folderId===f.id?'selected':''}>${escapeHtml(f.name)}</option>`).join('')}</select>
        </div>
      </div>
      <div class="field">
        <label for="f-type">Type</label>
        <select id="f-type">${types.map(t=>`<option ${existing&&existing.type===t?'selected':''}>${t}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label for="f-note">Note <span class="hint">(multiline supported)</span></label>
        <textarea id="f-note" placeholder="What's this useful for?">${escapeHtml(existing?existing.note:'')}</textarea>
      </div>
      <div class="field">
        <label for="f-tag-in">Tags</label>
        <div class="tag-input-wrap" id="tagWrap">
          ${tags.map(t=>`<span class="tag-pill" data-tag="${escapeHtml(t)}">${escapeHtml(t)}<span class="rm">${ic('x')}</span></span>`).join('')}
          <input type="text" id="f-tag-in" placeholder="Type and press Enter">
        </div>
      </div>
      <label class="checkbox-row"><input type="checkbox" id="f-fav" ${existing&&existing.favorite?'checked':''}><span>Add to Favorites</span></label>
      <label class="checkbox-row"><input type="checkbox" id="f-pin" ${existing&&existing.pinned?'checked':''}><span>Pin to Quick Access</span></label>
      <label class="checkbox-row"><input type="checkbox" id="f-protect" ${existing&&existing.protectedItem?'checked':''}><span>Protect with Password</span></label>
      <div id="protectFields" class="${existing&&existing.protectedItem?'':'hidden'}">
        <div class="field-row">
          <div class="field"><label>Password</label><input type="password" id="f-pass" placeholder="${existing&&existing.protectedItem?'Leave blank to keep current':'••••••••'}"></div>
          <div class="field"><label>Confirm</label><input type="password" id="f-pass2" placeholder="••••••••"></div>
        </div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" onclick="DV.closeModal()">Cancel</button>
      <button class="btn btn-primary" id="saveBookmarkBtn">${isEdit?'Save Changes':'Save Bookmark'}</button>
    </div>
  `, {wide:true});

  const tagWrap = document.getElementById('tagWrap');
  const tagInput = document.getElementById('f-tag-in');
  function addTagPill(t){
    t=t.trim().toLowerCase(); if(!t) return;
    if(tags.includes(t)) return;
    tags.push(t);
    const pill = document.createElement('span');
    pill.className='tag-pill'; pill.dataset.tag=t;
    pill.innerHTML = `${escapeHtml(t)}<span class="rm">${ic('x')}</span>`;
    pill.querySelector('.rm').onclick=()=>{ const i=tags.indexOf(t); if(i>-1) tags.splice(i,1); pill.remove(); };
    tagWrap.insertBefore(pill, tagInput);
  }
  tagInput.addEventListener('keydown', e=>{
    if(e.key==='Enter'||e.key===','){ e.preventDefault(); addTagPill(tagInput.value); tagInput.value=''; }
  });
  tagWrap.querySelectorAll('.tag-pill .rm').forEach(rm=>{
    rm.onclick = function(){ const pill=this.closest('.tag-pill'); const t=pill.dataset.tag; const i=tags.indexOf(t); if(i>-1) tags.splice(i,1); pill.remove(); };
  });

  document.getElementById('f-protect').addEventListener('change', function(){
    document.getElementById('protectFields').classList.toggle('hidden', !this.checked);
  });

  document.getElementById('saveBookmarkBtn').onclick = async ()=>{
    const nameEl = document.getElementById('f-name');
    const urlEl = document.getElementById('f-url');
    let ok = true;
    const name = nameEl.value.trim();
    let url = normalizeUrl(urlEl.value);
    if(!name){ nameEl.classList.add('input-err'); document.getElementById('err-name').classList.add('show'); ok=false; }
    else { nameEl.classList.remove('input-err'); document.getElementById('err-name').classList.remove('show'); }
    if(!url || !isValidUrl(url)){ urlEl.classList.add('input-err'); document.getElementById('err-url').classList.add('show'); ok=false; }
    else { urlEl.classList.remove('input-err'); document.getElementById('err-url').classList.remove('show'); }
    if(!ok) return;

    const protect = document.getElementById('f-protect').checked;
    let passwordHash = existing ? existing.passwordHash : null;
    if(protect){
      const p1 = document.getElementById('f-pass').value;
      const p2 = document.getElementById('f-pass2').value;
      if(p1 || !passwordHash){
        if(p1.length<3){ toast('Password must be at least 3 characters','danger'); return; }
        if(p1!==p2){ toast('Passwords do not match','danger'); return; }
        passwordHash = await sha256(p1);
      }
    } else { passwordHash = null; }

    // duplicate detection (only when adding new, or url changed)
    const dupe = appState.bookmarks.find(b => b.url===url && (!existing || b.id!==existing.id));
    const commitSave = ()=>{
      if(isEdit){
        Object.assign(existing, {
          name, url, category: document.getElementById('f-cat').value,
          folderId: document.getElementById('f-folder').value || null,
          note: document.getElementById('f-note').value.trim(),
          tags: [...tags], favorite: document.getElementById('f-fav').checked,
          pinned: document.getElementById('f-pin').checked,
          protectedItem: protect, passwordHash, type: document.getElementById('f-type').value,
          updatedAt: nowISO(),
        });
        toast('Bookmark updated','ok');
      } else {
        appState.bookmarks.unshift({
          id: uid('bm'), name, url, category: document.getElementById('f-cat').value,
          folderId: document.getElementById('f-folder').value || null,
          note: document.getElementById('f-note').value.trim(), tags:[...tags],
          favorite: document.getElementById('f-fav').checked, pinned: document.getElementById('f-pin').checked,
          protectedItem: protect, passwordHash, type: document.getElementById('f-type').value,
          openCount:0, isSample:false, createdAt: nowISO(), updatedAt: nowISO(), lastOpenedAt:null,
        });
        toast('Bookmark added successfully','ok');
      }
      saveData(); closeModal(); render();
    };
    if(dupe){
      closeModal();
      confirmModal({
        title:'This URL already exists',
        text:`<p>Existing bookmark: <b>${escapeHtml(dupe.name)}</b></p><p>Do you want to create another bookmark anyway?</p>`,
        confirmLabel:'Create Anyway', danger:false,
        onConfirm: commitSave,
      });
      return;
    }
    commitSave();
  };
}

/* ---- Password prompt modal (protect / unlock) ---- */
function openUnlockModal(bookmark, onSuccess){
  openModal(`
    <div class="modal-head"><h2>${ic('lock')} Protected Bookmark</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <p class="confirm-text">This bookmark is password protected.</p>
      <div class="field"><label>Password</label><input type="password" id="unlock-pass" autocomplete="off"></div>
      <div class="field-error show" id="unlock-err" style="display:none;">Incorrect password.</div>
    </div>
    <div class="modal-foot">
      <button class="btn" onclick="DV.closeModal()">Cancel</button>
      <button class="btn btn-primary" id="unlockBtn">Unlock</button>
    </div>
  `);
  const input = document.getElementById('unlock-pass');
  const err = document.getElementById('unlock-err');
  async function attempt(){
    const h = await sha256(input.value);
    if(h===bookmark.passwordHash){ closeModal(); onSuccess(); }
    else { err.style.display='block'; input.classList.add('input-err'); }
  }
  document.getElementById('unlockBtn').onclick = attempt;
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') attempt(); });
}

function openSetPasswordModal({title, onSet, onRemove, hasExisting}){
  openModal(`
    <div class="modal-head"><h2>${escapeHtml(title)}</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="field"><label>Create Password</label><input type="password" id="np1" autocomplete="off"></div>
      <div class="field"><label>Confirm Password</label><input type="password" id="np2" autocomplete="off"></div>
    </div>
    <div class="modal-foot ${hasExisting?'spread':''}">
      ${hasExisting?`<button class="btn btn-danger" id="removeProtectBtn">Remove Password</button>`:'<span></span>'}
      <div style="display:flex;gap:10px;">
        <button class="btn" onclick="DV.closeModal()">Cancel</button>
        <button class="btn btn-primary" id="setProtectBtn">Protect</button>
      </div>
    </div>
  `);
  document.getElementById('setProtectBtn').onclick = async ()=>{
    const p1=document.getElementById('np1').value, p2=document.getElementById('np2').value;
    if(p1.length<3){ toast('Password must be at least 3 characters','danger'); return; }
    if(p1!==p2){ toast('Passwords do not match','danger'); return; }
    const hash = await sha256(p1);
    closeModal(); onSet(hash);
  };
  if(hasExisting){
    document.getElementById('removeProtectBtn').onclick = ()=>{ closeModal(); onRemove(); };
  }
}

/* ---- Folder / Category modals ---- */
function openFolderModal(existing){
  openModal(`
    <div class="modal-head"><h2>${existing?'Rename Folder':'Create Folder'}</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="field"><label>Folder Name</label><input type="text" id="fold-name" value="${existing?escapeHtml(existing.name):''}" placeholder="e.g. Freelancing"></div>
    </div>
    <div class="modal-foot">
      <button class="btn" onclick="DV.closeModal()">Cancel</button>
      <button class="btn btn-primary" id="saveFolderBtn">${existing?'Save':'Create Folder'}</button>
    </div>
  `);
  const input = document.getElementById('fold-name');
  document.getElementById('saveFolderBtn').onclick = ()=>{
    const name = input.value.trim();
    if(!name){ input.classList.add('input-err'); return; }
    if(existing){ existing.name = name; toast('Folder renamed','ok'); }
    else { appState.folders.push({id:uid('fold'), name, passwordHash:null, createdAt:nowISO()}); toast('Folder created','ok'); }
    saveData(); closeModal(); render();
  };
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('saveFolderBtn').click(); });
}
function openCategoryModal(existing){
  openModal(`
    <div class="modal-head"><h2>${existing?'Rename Category':'Add Category'}</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="field"><label>Category Name</label><input type="text" id="cat-name" value="${existing?escapeHtml(existing.name):''}" placeholder="e.g. Testing"></div>
    </div>
    <div class="modal-foot">
      <button class="btn" onclick="DV.closeModal()">Cancel</button>
      <button class="btn btn-primary" id="saveCatBtn">${existing?'Save':'Add Category'}</button>
    </div>
  `);
  const input = document.getElementById('cat-name');
  document.getElementById('saveCatBtn').onclick = ()=>{
    const name = input.value.trim();
    if(!name){ input.classList.add('input-err'); return; }
    if(existing){ existing.name = name; toast('Category renamed','ok'); }
    else { appState.categories.push({id:uid('cat'), name, color: CAT_COLORS[appState.categories.length%CAT_COLORS.length]}); toast('Category created','ok'); }
    saveData(); closeModal(); render();
  };
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('saveCatBtn').click(); });
}
function openMoveModal(bookmark){
  openModal(`
    <div class="modal-head"><h2>Move to Folder</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="field"><label>Folder</label>
        <select id="move-folder"><option value="">— None —</option>${appState.folders.map(f=>`<option value="${f.id}" ${bookmark.folderId===f.id?'selected':''}>${escapeHtml(f.name)}</option>`).join('')}</select>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" onclick="DV.closeModal()">Cancel</button>
      <button class="btn btn-primary" id="moveSaveBtn">Move</button>
    </div>
  `);
  document.getElementById('moveSaveBtn').onclick = ()=>{
    bookmark.folderId = document.getElementById('move-folder').value || null;
    bookmark.updatedAt = nowISO();
    saveData(); closeModal(); render(); toast('Bookmark moved','ok');
  };
}
function openNoteModal(bookmark){
  openModal(`
    <div class="modal-head"><h2>Add Note</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="field"><textarea id="note-ta" style="min-height:140px;">${escapeHtml(bookmark.note||'')}</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn" onclick="DV.closeModal()">Cancel</button>
      <button class="btn btn-primary" id="noteSaveBtn">Save Note</button>
    </div>
  `);
  document.getElementById('noteSaveBtn').onclick = ()=>{
    bookmark.note = document.getElementById('note-ta').value.trim();
    bookmark.updatedAt = nowISO();
    saveData(); closeModal(); render(); toast('Bookmark updated','ok');
  };
}
function openQuickAddModal(){
  openModal(`
    <div class="modal-head"><h2>Paste URL</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <div class="field"><label>URL</label><input type="text" id="qa-url" placeholder="https://github.com/facebook/react"></div>
      <button class="btn btn-block" id="qaDetectBtn">Detect</button>
      <div id="qaResult" style="margin-top:14px;"></div>
    </div>
    <div class="modal-foot"><button class="btn" onclick="DV.closeModal()">Close</button></div>
  `);
  document.getElementById('qaDetectBtn').onclick = ()=>{
    const url = normalizeUrl(document.getElementById('qa-url').value);
    if(!isValidUrl(url)){ toast('Enter a valid URL','danger'); return; }
    const domain = domainOf(url);
    let name = domain.split('.')[0]; name = name.charAt(0).toUpperCase()+name.slice(1);
    let type = 'Website';
    if(domain.includes('github.com')) type='GitHub';
    else if(domain.includes('npmjs.com')) type='Package';
    document.getElementById('qaResult').innerHTML = `
      <div class="field"><label>Name</label><input type="text" id="qa-name" value="${escapeHtml(name)}"></div>
      <div class="field"><label>Domain</label><input type="text" value="${escapeHtml(domain)}" disabled></div>
      <div class="field"><label>Type</label><input type="text" value="${escapeHtml(type)}" disabled></div>
      <button class="btn btn-primary btn-block" id="qaSaveBtn">Save Bookmark</button>
    `;
    document.getElementById('qaSaveBtn').onclick = ()=>{
      const finalName = document.getElementById('qa-name').value.trim() || name;
      appState.bookmarks.unshift({id:uid('bm'), name:finalName, url, category: appState.categories[appState.categories.length-1].id, folderId:null, note:'', tags:[], favorite:false, pinned:false, protectedItem:false, passwordHash:null, type, openCount:0, isSample:false, createdAt:nowISO(), updatedAt:nowISO(), lastOpenedAt:null});
      saveData(); closeModal(); render(); toast('Bookmark added successfully','ok');
    };
  };
}

/* ============================= CONTEXT MENUS ============================= */
function closeCtxMenu(){
  document.getElementById('ctxRoot').innerHTML='';
  document.removeEventListener('mousedown', ctxOutsideHandler);
  document.removeEventListener('keydown', ctxEscHandler);
}
function ctxOutsideHandler(e){ if(!e.target.closest('.ctx-menu')) closeCtxMenu(); }
function ctxEscHandler(e){ if(e.key==='Escape') closeCtxMenu(); }
function openCtxMenu(anchorEl, items){
  closeCtxMenu();
  const root = document.getElementById('ctxRoot');
  const menu = document.createElement('div');
  menu.className='ctx-menu';
  menu.innerHTML = items.map(it=>{
    if(it==='—') return '<hr>';
    return `<button class="${it.danger?'danger':''}" data-key="${it.key}">${ic(it.icon)}${escapeHtml(it.label)}</button>`;
  }).join('');
  root.appendChild(menu);
  const rect = anchorEl.getBoundingClientRect();
  const menuW = 200, menuH = menu.offsetHeight || items.length*36+16;
  let left = rect.right - menuW;
  let top = rect.bottom + 6;
  if(left < 8) left = 8;
  if(left + menuW > window.innerWidth-8) left = window.innerWidth-menuW-8;
  if(top + menuH > window.innerHeight-8) top = rect.top - menuH - 6;
  menu.style.left = left+'px'; menu.style.top = top+'px';
  items.forEach(it=>{
    if(it==='—') return;
    menu.querySelector(`[data-key="${it.key}"]`).onclick = (e)=>{ e.stopPropagation(); closeCtxMenu(); it.action(); };
  });
  setTimeout(()=>{
    document.addEventListener('mousedown', ctxOutsideHandler);
    document.addEventListener('keydown', ctxEscHandler);
  },10);
}

function bookmarkMenuItems(bm){
  if(bm.protectedItem){
    return [
      {key:'open', label:'Open', icon:'open', action:()=>openBookmarkUrl(bm)},
      {key:'edit', label:'Edit', icon:'edit', action:()=>requireUnlock(bm, ()=>openBookmarkModal(bm))},
      {key:'chpass', label:'Change Password', icon:'key', action:()=>requireUnlock(bm, ()=>setBookmarkPassword(bm))},
      {key:'rmpass', label:'Remove Password', icon:'unlock', action:()=>requireUnlock(bm, ()=>{ bm.protectedItem=false; bm.passwordHash=null; saveData(); render(); toast('Password protection removed','ok'); })},
      {key:'copy', label:'Copy URL', icon:'copy', action:()=>copyUrl(bm)},
      '—',
      {key:'del', label:'Delete', icon:'trash', danger:true, action:()=>deleteBookmark(bm)},
    ];
  }
  return [
    {key:'open', label:'Open Link', icon:'open', action:()=>openBookmarkUrl(bm)},
    {key:'edit', label:'Edit', icon:'edit', action:()=>openBookmarkModal(bm)},
    {key:'dup', label:'Duplicate', icon:'dup', action:()=>duplicateBookmark(bm)},
    {key:'move', label:'Move to Folder', icon:'move', action:()=>openMoveModal(bm)},
    {key:'fav', label: bm.favorite?'Remove Favorite':'Add to Favorites', icon:'star', action:()=>{ bm.favorite=!bm.favorite; saveData(); render(); }},
    {key:'pin', label: bm.pinned?'Unpin':'Pin', icon:'pin', action:()=>{ bm.pinned=!bm.pinned; saveData(); render(); }},
    {key:'note', label:'Add Note', icon:'note', action:()=>openNoteModal(bm)},
    {key:'copy', label:'Copy URL', icon:'copy', action:()=>copyUrl(bm)},
    {key:'protect', label:'Protect', icon:'lock', action:()=>setBookmarkPassword(bm)},
    {key:'export', label:'Export', icon:'download', action:()=>exportSingle(bm)},
    '—',
    {key:'del', label:'Delete', icon:'trash', danger:true, action:()=>deleteBookmark(bm)},
  ];
}
function folderMenuItems(f){
  const protectedF = !!f.passwordHash;
  return [
    {key:'open', label:'Open', icon:'open', action:()=>{ ui.view='folder'; ui.activeFolder=f.id; render(); }},
    {key:'rename', label:'Rename', icon:'edit', action:()=>openFolderModal(f)},
    protectedF
      ? {key:'rmpass', label:'Remove Password', icon:'unlock', action:()=>requireFolderUnlock(f, ()=>{ f.passwordHash=null; saveData(); render(); toast('Password protection removed','ok'); })}
      : {key:'chpass', label:'Change Password', icon:'key', action:()=>setFolderPassword(f)},
    {key:'exp', label:'Export Folder', icon:'download', action:()=>exportFolder(f)},
    '—',
    {key:'del', label:'Delete Folder', icon:'trash', danger:true, action:()=>deleteFolder(f)},
  ];
}

/* ============================= ACTIONS ============================= */
function requireUnlock(bm, cb){
  if(!bm.protectedItem){ cb(); return; }
  openUnlockModal(bm, cb);
}
function requireFolderUnlock(f, cb){
  if(!f.passwordHash){ cb(); return; }
  openModal(`
    <div class="modal-head"><h2>${ic('lock')} Protected Folder</h2><button class="modal-close" onclick="DV.closeModal()">${ic('x')}</button></div>
    <div class="modal-body">
      <p class="confirm-text">Enter the folder password to continue.</p>
      <div class="field"><label>Password</label><input type="password" id="funlock-pass" autocomplete="off"></div>
      <div class="field-error show" id="funlock-err" style="display:none;">Incorrect password.</div>
    </div>
    <div class="modal-foot"><button class="btn" onclick="DV.closeModal()">Cancel</button><button class="btn btn-primary" id="funlockBtn">Unlock</button></div>
  `);
  const input = document.getElementById('funlock-pass');
  async function attempt(){
    const h = await sha256(input.value);
    if(h===f.passwordHash){ closeModal(); cb(); }
    else { document.getElementById('funlock-err').style.display='block'; input.classList.add('input-err'); }
  }
  document.getElementById('funlockBtn').onclick = attempt;
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') attempt(); });
}
function openBookmarkUrl(bm){
  const go = ()=>{
    bm.openCount = (bm.openCount||0)+1;
    bm.lastOpenedAt = nowISO();
    saveData();
    window.open(bm.url, '_blank', 'noopener');
    render();
  };
  if(bm.protectedItem){ requireUnlock(bm, go); } else { go(); }
}
function copyUrl(bm){
  navigator.clipboard.writeText(bm.url).then(()=>toast('URL copied!','ok','copy'))
    .catch(()=>toast('Could not copy URL','danger'));
}
function duplicateBookmark(bm){
  const copy = {...bm, id:uid('bm'), name: bm.name+' (copy)', createdAt:nowISO(), updatedAt:nowISO(), openCount:0, isSample:false, pinned:false};
  appState.bookmarks.unshift(copy); saveData(); render(); toast('Bookmark duplicated','ok','dup');
}
function deleteBookmark(bm){
  confirmModal({
    title:'Delete Bookmark?',
    text:`Are you sure you want to delete <b>"${escapeHtml(bm.name)}"</b>? This action cannot be undone.`,
    confirmLabel:'Delete',
    onConfirm(){
      appState.bookmarks = appState.bookmarks.filter(b=>b.id!==bm.id);
      saveData(); render(); toast('Bookmark deleted','ok','trash');
    }
  });
}
function setBookmarkPassword(bm){
  openSetPasswordModal({
    title:'Protect Bookmark', hasExisting:bm.protectedItem,
    onSet(hash){ bm.protectedItem=true; bm.passwordHash=hash; bm.updatedAt=nowISO(); saveData(); render(); toast('Password protection enabled','ok','lock'); },
    onRemove(){ bm.protectedItem=false; bm.passwordHash=null; saveData(); render(); toast('Password protection removed','ok'); },
  });
}
function setFolderPassword(f){
  openSetPasswordModal({
    title:'Protect Folder', hasExisting:!!f.passwordHash,
    onSet(hash){ f.passwordHash=hash; saveData(); render(); toast('Password protection enabled','ok','lock'); },
    onRemove(){ f.passwordHash=null; saveData(); render(); toast('Password protection removed','ok'); },
  });
}
function deleteFolder(f){
  const count = appState.bookmarks.filter(b=>b.folderId===f.id).length;
  confirmModal({
    title:'Delete Folder?',
    text:`Are you sure you want to delete <b>"${escapeHtml(f.name)}"</b>?${count?` ${count} bookmark(s) inside will be unfiled (kept, folder removed).`:''} This action cannot be undone.`,
    confirmLabel:'Delete',
    onConfirm(){
      appState.bookmarks.forEach(b=>{ if(b.folderId===f.id) b.folderId=null; });
      appState.folders = appState.folders.filter(x=>x.id!==f.id);
      if(ui.activeFolder===f.id){ ui.view='all'; ui.activeFolder=null; }
      saveData(); render(); toast('Folder deleted','ok','trash');
    }
  });
}
function deleteCategory(c){
  const count = appState.bookmarks.filter(b=>b.category===c.id).length;
  let other = appState.categories.find(x=>x.name==='Other' && x.id!==c.id);
  confirmModal({
    title:'Delete Category?',
    text:`What should happen to the ${count} bookmark(s) in <b>"${escapeHtml(c.name)}"</b>? They will be moved to "${other?'Other':'Uncategorized'}".`,
    confirmLabel:'Delete Category',
    onConfirm(){
      if(!other){ other = {id:uid('cat'), name:'Other', color:CAT_COLORS[CAT_COLORS.length-1]}; appState.categories.push(other); }
      appState.bookmarks.forEach(b=>{ if(b.category===c.id) b.category=other.id; });
      appState.categories = appState.categories.filter(x=>x.id!==c.id);
      if(ui.activeCategory===c.id){ ui.view='all'; ui.activeCategory=null; }
      saveData(); render(); toast('Category deleted','ok','trash');
    }
  });
}
function exportBlob(obj, filename){
  const blob = new Blob([JSON.stringify(obj,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click();
  a.remove(); URL.revokeObjectURL(url);
}
function exportAll(){
  exportBlob({
    exportedAt: nowISO(), app:'DevVault', version:1,
    bookmarks: appState.bookmarks, folders: appState.folders, categories: appState.categories, settings: appState.settings,
  }, 'devvault-backup.json');
  toast('Backup exported','ok','download');
}
function exportFolder(f){
  const items = appState.bookmarks.filter(b=>b.folderId===f.id);
  exportBlob({exportedAt:nowISO(), app:'DevVault', folder:f.name, bookmarks:items}, `devvault-${f.name.toLowerCase().replace(/\s+/g,'-')}.json`);
  toast('Folder exported','ok','download');
}
function exportSingle(bm){
  exportBlob({exportedAt:nowISO(), app:'DevVault', bookmark:bm}, `devvault-${bm.name.toLowerCase().replace(/\s+/g,'-').slice(0,30)}.json`);
  toast('Bookmark exported','ok','download');
}
function importData(file, mode){
  const reader = new FileReader();
  reader.onload = ()=>{
    let data;
    try{ data = JSON.parse(reader.result); }catch(e){ toast('Invalid backup file','danger'); return; }
    if(!data || (!Array.isArray(data.bookmarks) && !data.bookmark)){ toast('This file does not look like a DevVault backup','danger'); return; }
    const incomingBookmarks = data.bookmarks || (data.bookmark?[data.bookmark]:[]);
    const incomingFolders = data.folders || [];
    const incomingCats = data.categories || [];
    if(mode==='replace'){
      appState.bookmarks = incomingBookmarks;
      appState.folders = incomingFolders.length?incomingFolders:appState.folders;
      appState.categories = incomingCats.length?incomingCats:appState.categories;
    } else {
      const existingIds = new Set(appState.bookmarks.map(b=>b.id));
      incomingBookmarks.forEach(b=>{ if(!existingIds.has(b.id)) appState.bookmarks.push(b); });
      const existingFold = new Set(appState.folders.map(f=>f.id));
      incomingFolders.forEach(f=>{ if(!existingFold.has(f.id)) appState.folders.push(f); });
      const existingCat = new Set(appState.categories.map(c=>c.id));
      incomingCats.forEach(c=>{ if(!existingCat.has(c.id)) appState.categories.push(c); });
    }
    saveData(); render(); toast('Backup imported','ok','upload');
  };
  reader.readAsText(file);
}
function resetAllData(){
  confirmModal({
    title:'Reset All Data?',
    text:`This will permanently delete all bookmarks, folders, categories and settings from this browser. This action cannot be undone.`,
    confirmLabel:'Reset Everything',
    onConfirm(){
      localStorage.removeItem(STORAGE_KEY);
      appState = freshState(); saveData();
      ui = {view:'dashboard', activeCategory:null, activeFolder:null, activeTag:null, searchQuery:'', filter:'all', sort:'newest', viewMode:'grid', settingsTab:'appearance'};
      render(); toast('All data has been reset','ok');
    }
  });
}
function removeSampleData(){
  confirmModal({
    title:'Remove Sample Data?',
    text:`This removes the demo bookmarks that shipped with DevVault. Your own bookmarks are not affected.`,
    confirmLabel:'Remove Samples', danger:false,
    onConfirm(){ appState.bookmarks = appState.bookmarks.filter(b=>!b.isSample); saveData(); render(); toast('Sample data removed','ok'); }
  });
}

/* ============================= FILTER / SORT / SEARCH ============================= */
function matchesSearch(b, q){
  if(!q) return true;
  q = q.toLowerCase();
  const cat = catById(b.category); const fold = foldById(b.folderId);
  const hay = [b.name, b.url, domainOf(b.url), b.note, cat?cat.name:'', fold?fold.name:'', ...(b.tags||[])].join(' ').toLowerCase();
  return hay.includes(q);
}
function getFilteredSorted(){
  let list = appState.bookmarks.slice();

  if(ui.view==='favorites') list = list.filter(b=>b.favorite);
  else if(ui.view==='protected') list = list.filter(b=>b.protectedItem);
  else if(ui.view==='recent') list = list.filter(b=>b.lastOpenedAt).sort((a,b)=>new Date(b.lastOpenedAt)-new Date(a.lastOpenedAt));
  else if(ui.view==='category') list = list.filter(b=>b.category===ui.activeCategory);
  else if(ui.view==='folder') list = list.filter(b=>b.folderId===ui.activeFolder);
  else if(ui.view==='tag') list = list.filter(b=>(b.tags||[]).includes(ui.activeTag));

  if(ui.filter==='favorites') list = list.filter(b=>b.favorite);
  if(ui.filter==='protected') list = list.filter(b=>b.protectedItem);

  if(ui.searchQuery) list = list.filter(b=>matchesSearch(b, ui.searchQuery));

  if(ui.view!=='recent'){
    const sorters = {
      newest:(a,b)=>new Date(b.createdAt)-new Date(a.createdAt),
      oldest:(a,b)=>new Date(a.createdAt)-new Date(b.createdAt),
      az:(a,b)=>a.name.localeCompare(b.name),
      za:(a,b)=>b.name.localeCompare(a.name),
      updated:(a,b)=>new Date(b.updatedAt)-new Date(a.updatedAt),
      most:(a,b)=>(b.openCount||0)-(a.openCount||0),
    };
    list.sort(sorters[ui.sort] || sorters.newest);
    list.sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0) || (b.favorite?1:0)-(a.favorite?1:0) ? 0 : 0);
    // stable priority: pinned first, then favorites, preserving chosen sort within groups
    list = list.filter(b=>b.pinned).concat(list.filter(b=>!b.pinned && b.favorite), list.filter(b=>!b.pinned && !b.favorite));
  }
  return list;
}

/* ============================= RENDER ============================= */
function render(){
  renderSidebar();
  renderHeaderState();
  const content = document.getElementById('content');
  if(ui.view==='dashboard') content.innerHTML = renderDashboard();
  else if(ui.view==='settings') content.innerHTML = renderSettings();
  else content.innerHTML = renderBookmarksPage();
  bindContentEvents();
  updateActiveNav();
}

function renderHeaderState(){
  const btn = document.getElementById('themeToggleBtn');
  btn.innerHTML = appState.settings.theme==='dark' ? ic('sun') : ic('moon');
}

function renderSidebar(){
  document.getElementById('cnt-all').textContent = appState.bookmarks.length;
  document.getElementById('cnt-fav').textContent = appState.bookmarks.filter(b=>b.favorite).length;
  document.getElementById('cnt-prot').textContent = appState.bookmarks.filter(b=>b.protectedItem).length;

  const catList = document.getElementById('catList');
  catList.innerHTML = appState.categories.map(c=>{
    const count = appState.bookmarks.filter(b=>b.category===c.id).length;
    return `<div class="cat-row" data-cat="${c.id}">
      <button class="nav-item" data-view="category" data-cat-id="${c.id}">
        <span class="dot" style="background:${c.color}"></span>${escapeHtml(c.name)}<span class="count">${count}</span>
      </button>
      <button class="row-menu-btn" data-catmenu="${c.id}" aria-label="Category options">${ic('dots')}</button>
    </div>`;
  }).join('') || `<div style="padding:8px 10px; font-size:12px; color:var(--text-faint);">No categories yet.</div>`;

  const foldList = document.getElementById('folderList');
  foldList.innerHTML = appState.folders.map(f=>{
    const count = appState.bookmarks.filter(b=>b.folderId===f.id).length;
    return `<div class="folder-row" data-folder="${f.id}">
      <button class="nav-item" data-view="folder" data-folder-id="${f.id}">
        ${ic('folder')}${escapeHtml(f.name)} ${f.passwordHash?`<span style="color:var(--amber);display:flex;">${ic('lock')}</span>`:''}<span class="count">${count}</span>
      </button>
      <button class="row-menu-btn" data-foldmenu="${f.id}" aria-label="Folder options">${ic('dots')}</button>
    </div>`;
  }).join('') || `<div style="padding:8px 10px; font-size:12px; color:var(--text-faint);">No folders yet.</div>`;

  // drag & drop targets
  foldList.querySelectorAll('.folder-row').forEach(row=>{
    row.addEventListener('dragover', e=>{ e.preventDefault(); row.style.background='var(--surface-3)'; });
    row.addEventListener('dragleave', ()=>{ row.style.background=''; });
    row.addEventListener('drop', e=>{
      e.preventDefault(); row.style.background='';
      if(!dragBookmarkId) return;
      const bm = appState.bookmarks.find(b=>b.id===dragBookmarkId);
      if(bm){ bm.folderId = row.dataset.folder; saveData(); render(); toast(`Moved to folder`,'ok','move'); }
      dragBookmarkId=null;
    });
  });
}

function updateActiveNav(){
  document.querySelectorAll('.sidebar .nav-item, .bottom-nav .bn-btn').forEach(el=>el.classList.remove('active'));
  if(['dashboard','all','favorites','recent','protected'].includes(ui.view)){
    document.querySelectorAll(`.nav-item[data-view="${ui.view}"]`).forEach(el=>el.classList.add('active'));
  }
  if(ui.view==='category'){
    const el = document.querySelector(`.nav-item[data-view="category"][data-cat-id="${ui.activeCategory}"]`);
    if(el) el.classList.add('active');
  }
  if(ui.view==='folder'){
    const el = document.querySelector(`.nav-item[data-view="folder"][data-folder-id="${ui.activeFolder}"]`);
    if(el) el.classList.add('active');
  }
  document.querySelectorAll('.bottom-nav .bn-btn').forEach(b=>{ if(b.dataset.view===ui.view) b.classList.add('active'); });
}

function renderDashboard(){
  const bms = appState.bookmarks;
  const stats = [
    ['Total Bookmarks', bms.length],
    ['Favorites', bms.filter(b=>b.favorite).length],
    ['Folders', appState.folders.length],
    ['Categories', appState.categories.length],
    ['Protected', bms.filter(b=>b.protectedItem).length],
  ];
  const mostUsed = bms.slice().sort((a,b)=>(b.openCount||0)-(a.openCount||0)).slice(0,5);
  const recentAdded = bms.slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,6);
  const quickAccess = bms.filter(b=>b.pinned).slice(0,8);

  return `
    <div class="page-head"><div><h1 class="page-title">Dashboard</h1><div class="page-sub">Your developer resource library at a glance.</div></div></div>
    <div class="stats-grid">
      ${stats.map(([lbl,num])=>`<div class="stat-card"><div class="num">${num}</div><div class="lbl">${lbl}</div></div>`).join('')}
    </div>

    ${quickAccess.length ? `
    <h3 style="font-family:var(--font-display); font-size:15px; margin:0 0 10px;">Quick Access</h3>
    <div class="qa-row">
      ${quickAccess.map(b=>`<a href="#" class="qa-chip" data-open="${b.id}"><span class="qa-ic"><img src="${faviconUrl(b.url)}" onerror="this.style.display='none'" alt=""></span>${escapeHtml(b.name)}</a>`).join('')}
    </div>` : ''}

    <div class="dash-row">
      <div class="panel">
        <h3>Recently Added</h3>
        <div class="mini-list">
          ${recentAdded.length? recentAdded.map(b=>`<a href="#" class="mini-row" data-open="${b.id}"><span class="rank">${ic('globe')}</span><span class="name">${escapeHtml(b.name)}</span><span class="meta">${timeAgo(b.createdAt)}</span></a>`).join('') : `<div style="color:var(--text-faint); font-size:13px; padding:8px;">Nothing added yet.</div>`}
        </div>
      </div>
      <div class="panel">
        <h3>Most Used</h3>
        <div class="mini-list">
          ${mostUsed.filter(b=>b.openCount>0).length ? mostUsed.map((b,i)=>`<a href="#" class="mini-row" data-open="${b.id}"><span class="rank">${i+1}.</span><span class="name">${escapeHtml(b.name)}</span><span class="meta">${b.openCount||0}× opened</span></a>`).join('') : `<div style="color:var(--text-faint); font-size:13px; padding:8px;">Open some bookmarks to see your most used.</div>`}
        </div>
      </div>
    </div>

    <div class="page-head"><h2 class="page-title" style="font-size:18px;">All Bookmarks</h2><span class="result-count">${bms.length} total</span></div>
    ${renderFilterBar()}
    ${renderBookmarkGrid(getFilteredSorted())}
  `;
}

function viewTitle(){
  if(ui.view==='all') return 'All Bookmarks';
  if(ui.view==='favorites') return 'Favorites';
  if(ui.view==='recent') return 'Recently Opened';
  if(ui.view==='protected') return 'Protected Bookmarks';
  if(ui.view==='category'){ const c=catById(ui.activeCategory); return c?c.name:'Category'; }
  if(ui.view==='folder'){ const f=foldById(ui.activeFolder); return f?f.name:'Folder'; }
  if(ui.view==='tag') return '#'+ui.activeTag;
  return 'Bookmarks';
}
function renderBookmarksPage(){
  if(ui.view==='folder'){
    const f = foldById(ui.activeFolder);
    if(f && f.passwordHash && !ui._unlockedFolders?.has(f.id)){
      return renderFolderLocked(f);
    }
  }
  const list = getFilteredSorted();
  return `
    <div class="page-head">
      <div><h1 class="page-title">${escapeHtml(viewTitle())}</h1><div class="page-sub">${list.length} bookmark${list.length===1?'':'s'} found</div></div>
    </div>
    ${renderFilterBar()}
    ${renderBookmarkGrid(list)}
  `;
}
function renderFolderLocked(f){
  return `<div class="empty-state"><div class="emoji">${ic('lock')}</div><h3>${escapeHtml(f.name)} is protected</h3><p>Enter the folder password to view its bookmarks.</p><button class="btn btn-primary" id="unlockFolderInline">Unlock Folder</button></div>`;
}

function renderFilterBar(){
  const sortOptions = [['newest','Newest First'],['oldest','Oldest First'],['az','Name A-Z'],['za','Name Z-A'],['updated','Recently Updated'],['most','Most Used']];
  return `
  <div class="filter-bar">
    <div class="chip-row">
      <button class="chip ${ui.filter==='all'?'active':''}" data-filter="all">All</button>
      <button class="chip ${ui.filter==='favorites'?'active':''}" data-filter="favorites">Favorites</button>
      <button class="chip ${ui.filter==='protected'?'active':''}" data-filter="protected">Protected</button>
    </div>
    <select class="select-control" id="sortSelect">${sortOptions.map(([v,l])=>`<option value="${v}" ${ui.sort===v?'selected':''}>${l}</option>`).join('')}</select>
    <div class="spacer"></div>
    <div class="view-toggle">
      <button class="${ui.viewMode==='grid'?'active':''}" data-viewmode="grid" aria-label="Grid view">${ic('grid')}</button>
      <button class="${ui.viewMode==='list'?'active':''}" data-viewmode="list" aria-label="List view">${ic('list')}</button>
    </div>
  </div>`;
}

function renderBookmarkGrid(list){
  if(!list.length){
    const q = ui.searchQuery;
    if(q){
      return `<div class="empty-state"><div class="emoji">🔍</div><h3>No bookmarks found.</h3><p>Try another search term.</p></div>`;
    }
    return `<div class="empty-state"><div class="emoji">🔖</div><h3>No bookmarks yet.</h3><p>Start building your developer resource library.</p><button class="btn btn-primary" id="emptyAddBtn"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>Add Your First Bookmark</button></div>`;
  }
  return `<div class="bm-grid ${ui.viewMode==='list'?'list-view':''}">${list.map(renderCard).join('')}</div>`;
}

function renderCard(b){
  const cat = catById(b.category);
  const fold = foldById(b.folderId);
  const locked = b.protectedItem;
  return `
  <article class="bm-card" draggable="true" data-id="${b.id}" style="--card-accent:${cat?cat.color:'var(--border)'}" tabindex="0">
    ${locked ? `<span class="protected-badge" title="Protected">${ic('lock')}</span>` : ''}
    <button class="menu-btn" data-menu="${b.id}" style="position:absolute; top:12px; right:10px;" aria-label="More options">${ic('dots')}</button>
    <div class="bm-top">
      <div class="bm-favicon"><img src="${faviconUrl(b.url)}" alt="" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML=DV.typeIcon('${b.type}');"></div>
      <div class="bm-titleblock">
        <p class="bm-name">${b.pinned?`<span class="pin-ic">${ic('pin')}</span>`:''}${escapeHtml(b.name)}</p>
        <div class="bm-domain">${escapeHtml(domainOf(b.url))}</div>
      </div>
      <div class="bm-card-actions">
        <button class="fav-btn ${b.favorite?'active':''}" data-fav="${b.id}" aria-label="Toggle favorite">${b.favorite?ic('starFill'):ic('star')}</button>
      </div>
    </div>
    ${b.note ? `<p class="bm-note">${escapeHtml(locked?'Protected note — unlock to view.':b.note)}</p>` : ''}
    <div class="tag-row">
      ${cat?`<span class="tag-pill cat-pill">${escapeHtml(cat.name)}</span>`:''}
      ${(locked?[]:(b.tags||[])).slice(0,4).map(t=>`<span class="tag-pill" data-tag="${escapeHtml(t)}">#${escapeHtml(t)}</span>`).join('')}
    </div>
    <div class="bm-bottom">
      <span class="bm-folder">${fold?ic('folder'):''} ${fold?escapeHtml(fold.name):'No folder'}</span>
      <span class="card-open-hint">Open ${ic('open')}</span>
    </div>
  </article>`;
}

/* ============================= SETTINGS PAGE ============================= */
function renderSettings(){
  const usedBytes = new Blob([localStorage.getItem(STORAGE_KEY)||'']).size;
  const pct = Math.min(100, (usedBytes/(5*1024*1024))*100).toFixed(2);
  const tabs = [['appearance','Appearance'],['data','Data'],['categories','Categories'],['storage','Storage'],['about','About']];
  return `
  <div class="page-head"><h1 class="page-title">Settings</h1></div>
  <div class="settings-grid">
    <nav class="settings-nav">${tabs.map(([k,l])=>`<button class="${ui.settingsTab===k?'active':''}" data-stab="${k}">${l}</button>`).join('')}</nav>
    <div>
      <div class="panel settings-panel ${ui.settingsTab==='appearance'?'active':''}" data-spanel="appearance">
        <h3>Appearance</h3>
        <div class="theme-swatches">
          <div class="theme-swatch ${appState.settings.theme==='dark'?'active':''}" data-settheme="dark">
            <div class="prev" style="background:linear-gradient(135deg,#0B0E14,#181D28);"></div><span>Dark Mode</span>
          </div>
          <div class="theme-swatch ${appState.settings.theme==='light'?'active':''}" data-settheme="light">
            <div class="prev" style="background:linear-gradient(135deg,#F5F6F8,#FFFFFF); border:1px solid #ddd;"></div><span>Light Mode</span>
          </div>
        </div>
      </div>

      <div class="panel settings-panel ${ui.settingsTab==='data'?'active':''}" data-spanel="data" style="margin-top:16px;">
        <h3>Data</h3>
        <p style="font-size:12.5px; color:var(--text-faint); margin-top:-6px;">Export a backup, restore from one, or start fresh.</p>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:12px;">
          <button class="btn btn-primary" id="exportBtn">${ic('download')} Export Data</button>
          <label class="btn" for="importFile">${ic('upload')} Import Data</label>
          <input type="file" id="importFile" accept="application/json" class="hidden">
          <button class="btn btn-danger" id="resetBtn">${ic('trash')} Reset All Data</button>
        </div>
        <div id="importModeRow" class="hidden" style="margin-top:14px; display:flex; gap:10px; align-items:center;">
          <span style="font-size:12.5px; color:var(--text-dim);">File selected —</span>
          <button class="btn btn-sm" id="importReplaceBtn">Import and Replace</button>
          <button class="btn btn-sm btn-primary" id="importMergeBtn">Import and Merge</button>
        </div>
        <div class="security-note">This application is designed for personal organization. Password protection is client-side and should not be considered a replacement for a secure server-side password manager. Export a backup regularly — clearing your browser data will remove everything stored here.</div>
        ${appState.bookmarks.some(b=>b.isSample) ? `<button class="btn btn-sm" id="rmSampleBtn">Remove Sample Data</button>` : ''}
      </div>

      <div class="panel settings-panel ${ui.settingsTab==='categories'?'active':''}" data-spanel="categories" style="margin-top:16px;">
        <h3>Manage Categories</h3>
        <div class="mini-list">
          ${appState.categories.map(c=>`
            <div class="mini-row" style="cursor:default;">
              <span class="dot" style="width:9px;height:9px;border-radius:50%;background:${c.color};"></span>
              <span class="name">${escapeHtml(c.name)}</span>
              <span class="meta">${appState.bookmarks.filter(b=>b.category===c.id).length} bookmarks</span>
              <button class="row-menu-btn" style="opacity:1;" data-editcat="${c.id}" aria-label="Rename">${ic('edit')}</button>
              <button class="row-menu-btn" style="opacity:1;" data-delcat="${c.id}" aria-label="Delete">${ic('trash')}</button>
            </div>`).join('')}
        </div>
        <button class="btn btn-sm" id="addCatBtn2" style="margin-top:12px;">+ Add Category</button>
      </div>

      <div class="panel settings-panel ${ui.settingsTab==='storage'?'active':''}" data-spanel="storage" style="margin-top:16px;">
        <h3>Storage</h3>
        <p style="font-size:12.5px; color:var(--text-dim);">Bookmarks stored locally in this browser via localStorage.</p>
        <div class="storage-bar"><div style="width:${pct}%"></div></div>
        <p style="font-size:11.5px; color:var(--text-faint);">${(usedBytes/1024).toFixed(1)} KB used</p>
      </div>

      <div class="panel settings-panel ${ui.settingsTab==='about'?'active':''}" data-spanel="about" style="margin-top:16px;">
        <h3>About</h3>
        <div class="about-block">
          <p><b>DevVault</b><br>Personal Developer Bookmark Manager<br>Version 1.0.0</p>
          <p>Runs entirely in your browser — no backend, no account, no tracking. Built with HTML, CSS and vanilla JavaScript.</p>
        </div>
      </div>
    </div>
  </div>`;
}

/* ============================= EVENT BINDING ============================= */
function bindContentEvents(){
  const content = document.getElementById('content');

  content.querySelectorAll('[data-open]').forEach(el=>{
    el.addEventListener('click', e=>{ e.preventDefault(); const bm = appState.bookmarks.find(b=>b.id===el.dataset.open); if(bm) openBookmarkUrl(bm); });
  });
  content.querySelectorAll('.bm-card').forEach(card=>{
    card.addEventListener('click', e=>{
      if(e.target.closest('.menu-btn') || e.target.closest('.fav-btn')) return;
      const bm = appState.bookmarks.find(b=>b.id===card.dataset.id);
      if(bm) openBookmarkUrl(bm);
    });
    card.addEventListener('keydown', e=>{
      if(e.key==='Enter'){ const bm = appState.bookmarks.find(b=>b.id===card.dataset.id); if(bm) openBookmarkUrl(bm); }
    });
    card.addEventListener('dragstart', ()=>{ dragBookmarkId = card.dataset.id; card.classList.add('dragging'); });
    card.addEventListener('dragend', ()=>{ card.classList.remove('dragging'); });
  });
  content.querySelectorAll('[data-fav]').forEach(el=>{
    el.addEventListener('click', e=>{ e.stopPropagation(); const bm = appState.bookmarks.find(b=>b.id===el.dataset.fav); bm.favorite=!bm.favorite; saveData(); render(); });
  });
  content.querySelectorAll('[data-menu]').forEach(el=>{
    el.addEventListener('click', e=>{ e.stopPropagation(); const bm = appState.bookmarks.find(b=>b.id===el.dataset.menu); openCtxMenu(el, bookmarkMenuItems(bm)); });
  });
  content.querySelectorAll('[data-tag]').forEach(el=>{
    el.addEventListener('click', e=>{ e.stopPropagation(); ui.view='tag'; ui.activeTag=el.dataset.tag; ui.searchQuery=''; document.getElementById('globalSearch').value=''; render(); });
  });
  content.querySelectorAll('[data-filter]').forEach(el=>{
    el.addEventListener('click', ()=>{ ui.filter=el.dataset.filter; render(); });
  });
  const sortSel = content.querySelector('#sortSelect');
  if(sortSel) sortSel.addEventListener('change', ()=>{ ui.sort=sortSel.value; render(); });
  content.querySelectorAll('[data-viewmode]').forEach(el=>{
    el.addEventListener('click', ()=>{ ui.viewMode=el.dataset.viewmode; appState.settings.viewMode=ui.viewMode; saveData(); render(); });
  });
  const emptyAddBtn = content.querySelector('#emptyAddBtn');
  if(emptyAddBtn) emptyAddBtn.addEventListener('click', ()=>openBookmarkModal(null));
  const unlockFolderInline = content.querySelector('#unlockFolderInline');
  if(unlockFolderInline){
    unlockFolderInline.addEventListener('click', ()=>{
      const f = foldById(ui.activeFolder);
      requireFolderUnlock(f, ()=>{ ui._unlockedFolders = ui._unlockedFolders||new Set(); ui._unlockedFolders.add(f.id); render(); });
    });
  }

  // settings
  content.querySelectorAll('[data-stab]').forEach(el=>{
    el.addEventListener('click', ()=>{ ui.settingsTab=el.dataset.stab; render(); });
  });
  content.querySelectorAll('[data-settheme]').forEach(el=>{
    el.addEventListener('click', ()=>{ setTheme(el.dataset.settheme); render(); });
  });
  const exportBtn = content.querySelector('#exportBtn');
  if(exportBtn) exportBtn.addEventListener('click', exportAll);
  const importFile = content.querySelector('#importFile');
  let pendingImportFile = null;
  if(importFile){
    importFile.addEventListener('change', ()=>{
      if(importFile.files[0]){ pendingImportFile=importFile.files[0]; content.querySelector('#importModeRow').classList.remove('hidden'); }
    });
  }
  const replaceBtn = content.querySelector('#importReplaceBtn');
  if(replaceBtn) replaceBtn.addEventListener('click', ()=>{ if(pendingImportFile) importData(pendingImportFile,'replace'); });
  const mergeBtn = content.querySelector('#importMergeBtn');
  if(mergeBtn) mergeBtn.addEventListener('click', ()=>{ if(pendingImportFile) importData(pendingImportFile,'merge'); });
  const resetBtn = content.querySelector('#resetBtn');
  if(resetBtn) resetBtn.addEventListener('click', resetAllData);
  const rmSampleBtn = content.querySelector('#rmSampleBtn');
  if(rmSampleBtn) rmSampleBtn.addEventListener('click', removeSampleData);
  const addCatBtn2 = content.querySelector('#addCatBtn2');
  if(addCatBtn2) addCatBtn2.addEventListener('click', ()=>openCategoryModal(null));
  content.querySelectorAll('[data-editcat]').forEach(el=>{
    el.addEventListener('click', ()=>openCategoryModal(catById(el.dataset.editcat)));
  });
  content.querySelectorAll('[data-delcat]').forEach(el=>{
    el.addEventListener('click', ()=>deleteCategory(catById(el.dataset.delcat)));
  });
}

function bindSidebarNav(){
  document.getElementById('sidebar').addEventListener('click', e=>{
    const navBtn = e.target.closest('.nav-item');
    if(navBtn && navBtn.dataset.view){
      ui.view = navBtn.dataset.view;
      ui.activeCategory = navBtn.dataset.catId || null;
      ui.activeFolder = navBtn.dataset.folderId || null;
      ui.searchQuery=''; document.getElementById('globalSearch').value='';
      ui.filter='all';
      render(); closeSidebarMobile();
      return;
    }
    const catMenuBtn = e.target.closest('[data-catmenu]');
    if(catMenuBtn){
      const c = catById(catMenuBtn.dataset.catmenu);
      openCtxMenu(catMenuBtn, [
        {key:'rename', label:'Rename', icon:'edit', action:()=>openCategoryModal(c)},
        {key:'del', label:'Delete', icon:'trash', danger:true, action:()=>deleteCategory(c)},
      ]);
      return;
    }
    const foldMenuBtn = e.target.closest('[data-foldmenu]');
    if(foldMenuBtn){
      const f = foldById(foldMenuBtn.dataset.foldmenu);
      openCtxMenu(foldMenuBtn, folderMenuItems(f));
      return;
    }
  });
  document.getElementById('addCatBtn').addEventListener('click', ()=>openCategoryModal(null));
  document.getElementById('addFolderBtn').addEventListener('click', ()=>openFolderModal(null));
}

/* ============================= THEME ============================= */
function setTheme(t){
  appState.settings.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  saveData();
  renderHeaderState();
}

/* ============================= MOBILE SIDEBAR ============================= */
function openSidebarMobile(){ document.getElementById('sidebar').classList.add('open'); document.getElementById('sidebarScrim').classList.add('show'); }
function closeSidebarMobile(){ document.getElementById('sidebar').classList.remove('open'); document.getElementById('sidebarScrim').classList.remove('show'); }

/* ============================= INIT ============================= */
function initGlobalListeners(){
  document.getElementById('addBookmarkBtn').addEventListener('click', ()=>openBookmarkModal(null));
  document.getElementById('settingsBtn').addEventListener('click', ()=>{ ui.view='settings'; render(); });
  document.getElementById('logoHome').addEventListener('click', e=>{ e.preventDefault(); ui.view='dashboard'; render(); });
  document.getElementById('themeToggleBtn').addEventListener('click', ()=>{ setTheme(appState.settings.theme==='dark'?'light':'dark'); });
  document.getElementById('hamburgerBtn').addEventListener('click', openSidebarMobile);
  document.getElementById('sidebarScrim').addEventListener('click', closeSidebarMobile);

  const search = document.getElementById('globalSearch');
  search.addEventListener('input', ()=>{
    ui.searchQuery = search.value.trim();
    if(ui.searchQuery && !['all','favorites','recent','protected','category','folder','tag'].includes(ui.view)) ui.view='all';
    render();
  });

  document.addEventListener('keydown', e=>{
    const inField = ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName);
    if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); search.focus(); search.select(); }
    else if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='b'){ e.preventDefault(); openBookmarkModal(null); }
  });

  document.querySelectorAll('.bottom-nav .bn-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(btn.dataset.view){ ui.view=btn.dataset.view; render(); window.scrollTo({top:0,behavior:'smooth'}); }
      else if(btn.dataset.action==='focus-search'){ search.focus(); }
      else if(btn.dataset.action==='open-sidebar'){ openSidebarMobile(); }
    });
  });
}

// expose minimal API for inline handlers
window.DV = { closeModal, typeIcon };

function boot(){
  loadData();
  document.documentElement.setAttribute('data-theme', appState.settings.theme || 'dark');
  if(appState.settings.viewMode) ui.viewMode = appState.settings.viewMode;
  bindSidebarNav();
  initGlobalListeners();
  render();
}
document.addEventListener('DOMContentLoaded', boot);
})();
