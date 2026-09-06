(function(){
  const cards=[...document.querySelectorAll('.post-card[data-year]')]; if(!cards.length)return;
  const query=new URLSearchParams(location.search), months=[...new Set(cards.map(c=>c.dataset.month))].sort(), max=months.length-1;
  const slider=document.querySelector('.timeline-slider'), rail=document.querySelector('.timeline-rail'), fill=document.querySelector('.timeline-fill'), handles={from:document.querySelector('[data-handle="from"]'),to:document.querySelector('[data-handle="to"]')}, monthInput=document.getElementById('month-filter'), status=document.getElementById('filter-status');
  let from=0,to=max, dragging=null;
  const monthText=m=>m ? m.replace('-', '.') : '';
  function indexFor(value,fallback){const i=months.indexOf(value);return i<0?fallback:i}
  if(query.has('from'))from=indexFor(query.get('from'),0); if(query.has('to'))to=indexFor(query.get('to'),max); if(query.has('year')){const i=months.findIndex(m=>m.startsWith(query.get('year')));if(i>=0)from=to=i} if(from>to)[from,to]=[to,from]; monthInput.value=query.get('month')||'';
  function render(updateUrl=true){
    if(from>to)[from,to]=[to,from]; const exact=monthInput.value;
    cards.forEach(c=>{const i=months.indexOf(c.dataset.month);c.hidden=exact?c.dataset.month!==exact:i<from||i>to});
    const start=months[from],end=months[to]; handles.from.style.setProperty('--range-position',(from/max*100)+'%'); handles.to.style.setProperty('--range-position',(to/max*100)+'%'); fill.style.setProperty('--range-start',(from/max*100)+'%');fill.style.setProperty('--range-size',((to-from)/max*100)+'%');
    [handles.from,handles.to].forEach((h,i)=>{const value=monthText(months[i?to:from]);h.setAttribute('aria-valuemin','0');h.setAttribute('aria-valuemax',String(max));h.setAttribute('aria-valuenow',String(i?to:from));h.setAttribute('aria-valuetext',value);h.querySelector('.timeline-handle-label').textContent=value});
    status.textContent=exact||(from===0&&to===max?'ALL NOTES':(!start?'ALL NOTES':start===end?start:start+'—'+end));
    if(!updateUrl)return; const u=new URL(location.href);['from','to','year','month'].forEach(k=>u.searchParams.delete(k));if(exact)u.searchParams.set('month',exact);else if(from===0&&to===max){}else if(from===to)u.searchParams.set('month',start);else{u.searchParams.set('from',start);u.searchParams.set('to',end)}u.hash='notes';history.replaceState(null,'',u);
  }
  function setFromPointer(e){const r=rail.getBoundingClientRect(), pos=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height)), next=Math.round(pos*max);if(dragging==='from')from=Math.min(next,to);else to=Math.max(next,from);render()}
  [handles.from,handles.to].forEach(h=>{h.addEventListener('pointerdown',e=>{dragging=h.dataset.handle;h.setPointerCapture(e.pointerId);h.classList.add('is-dragging')});h.addEventListener('pointermove',e=>{if(dragging)setFromPointer(e)});h.addEventListener('pointerup',()=>{dragging=null;h.classList.remove('is-dragging')});h.addEventListener('keydown',e=>{const delta=e.key==='ArrowUp'?-1:e.key==='ArrowDown'?1:0;if(!delta)return;e.preventDefault();if(h.dataset.handle==='from')from=Math.max(0,Math.min(to,from+delta));else to=Math.min(max,Math.max(from,to+delta));render()})});
  rail.addEventListener('pointerdown',e=>{if(e.target===rail||e.target===fill){const r=rail.getBoundingClientRect(),next=Math.round(Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))*max);if(Math.abs(next-from)<=Math.abs(next-to))from=Math.min(next,to);else to=Math.max(next,from);render()}});
  monthInput.addEventListener('change',()=>render()); document.getElementById('timeline-all').addEventListener('click',()=>{from=0;to=max;monthInput.value='';render()}); render(false);
})();
