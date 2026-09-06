(function(){
  const cards=[...document.querySelectorAll('.post-card[data-year]')]; if(!cards.length)return;
  const q=new URLSearchParams(location.search);
  // Build the axis from real post months only, newest first. Empty periods never enter the scale.
  const months=[...new Set(cards.map(c=>c.dataset.month))].sort().reverse();
  const max=Math.max(months.length-1,1), slider=document.querySelector('.timeline-slider'), rail=document.querySelector('.timeline-rail'), fill=document.querySelector('.timeline-fill'), ticks=document.getElementById('timeline-ticks'), status=document.getElementById('filter-status');
  const handles={from:document.querySelector('[data-handle="from"]'),to:document.querySelector('[data-handle="to"]')}; let from=0,to=max,dragging=null;
  const text=m=>m ? m.replace('-','.') : '';
  const index=value=>{const i=months.indexOf(value);return i<0?null:i};
  if(q.has('from')){const i=index(q.get('from'));if(i!==null)from=i} if(q.has('to')){const i=index(q.get('to'));if(i!==null)to=i} if(q.has('year')){const i=months.findIndex(m=>m.startsWith(q.get('year')));if(i>=0)from=to=i} if(from>to)[from,to]=[to,from];
  [...new Set(months.map(m=>m.slice(0,4)))].forEach(year=>{const i=months.findIndex(m=>m.startsWith(year)),tick=document.createElement('button');tick.type='button';tick.className='timeline-tick';tick.textContent=year;tick.style.top=(i/max*100)+'%';tick.addEventListener('click',()=>{from=to=i;render()});ticks.appendChild(tick)});
  function render(update=true){
    if(from>to)[from,to]=[to,from]; cards.forEach(c=>{const i=months.indexOf(c.dataset.month);c.hidden=i<from||i>to});
    const start=months[from],end=months[to], span=max||1; handles.from.style.setProperty('--range-position',(from/span*100)+'%');handles.to.style.setProperty('--range-position',(to/span*100)+'%');fill.style.top=(from/span*100)+'%';fill.style.height=((to-from)/span*100)+'%';
    [handles.from,handles.to].forEach((h,i)=>{const n=i?to:from;h.setAttribute('aria-valuemin','0');h.setAttribute('aria-valuemax',String(max));h.setAttribute('aria-valuenow',String(n));h.setAttribute('aria-valuetext',text(months[n]));h.querySelector('.timeline-handle-label').textContent=text(months[n])});
    status.textContent=from===0&&to===max?'ALL NOTES':(start===end?text(start):text(start)+'—'+text(end));
    if(!update)return; const u=new URL(location.href);['from','to','year','month'].forEach(k=>u.searchParams.delete(k));if(from!==0||to!==max){u.searchParams.set('from',start);u.searchParams.set('to',end)}u.hash='notes';history.replaceState(null,'',u);
  }
  function pointer(e){const r=rail.getBoundingClientRect(),next=Math.round(Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))*max);if(dragging==='from')from=Math.min(next,to);else to=Math.max(next,from);render()}
  [handles.from,handles.to].forEach(h=>{h.addEventListener('pointerdown',e=>{dragging=h.dataset.handle;h.setPointerCapture(e.pointerId);h.classList.add('is-dragging')});h.addEventListener('pointermove',e=>{if(dragging)pointer(e)});h.addEventListener('pointerup',()=>{dragging=null;h.classList.remove('is-dragging')});h.addEventListener('keydown',e=>{const d=e.key==='ArrowUp'?-1:e.key==='ArrowDown'?1:0;if(!d)return;e.preventDefault();if(h.dataset.handle==='from')from=Math.max(0,Math.min(to,from+d));else to=Math.min(max,Math.max(from,to+d));render()})});
  rail.addEventListener('pointerdown',e=>{if(e.target!==rail&&e.target!==fill)return;const r=rail.getBoundingClientRect(),next=Math.round(Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))*max);dragging=Math.abs(next-from)<=Math.abs(next-to)?'from':'to';pointer(e);dragging=null});
  document.getElementById('timeline-all').addEventListener('click',()=>{from=0;to=max;render()}); render(false);
})();
