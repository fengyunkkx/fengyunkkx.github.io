(function(){
  const q=new URLSearchParams(location.search), cards=[...document.querySelectorAll('.post-card[data-year]')];
  if(!cards.length)return;
  const years=[...new Set(cards.map(c=>Number(c.dataset.year)))].sort((a,b)=>a-b), min=Math.min(...years), max=Math.max(...years);
  const range=document.getElementById('year-filter'), ticks=document.getElementById('year-ticks'), month=document.getElementById('month-filter'), status=document.getElementById('filter-status');
  range.min=min; range.max=max; range.value=q.get('year')||max;
  years.forEach(y=>{const b=document.createElement('button');b.type='button';b.dataset.year=y;b.textContent=y;b.addEventListener('click',()=>{range.value=y;apply(y)});ticks.appendChild(b)});
  month.value=q.get('month')||'';
  function apply(year){const m=month.value;cards.forEach(c=>{c.hidden=m?c.dataset.month!==m:Number(c.dataset.year)!==Number(year)});status.value=m?m:String(year);status.textContent=m||String(year);const u=new URL(location.href);u.searchParams.delete('from');u.searchParams.delete('to');m?u.searchParams.set('month',m):u.searchParams.set('year',year);u.hash='notes';history.replaceState(null,'',u);}
  range.addEventListener('input',()=>apply(range.value)); month.addEventListener('change',()=>apply(range.value));
  document.getElementById('timeline-all').addEventListener('click',()=>{cards.forEach(c=>c.hidden=false);range.value=max;month.value='';status.textContent='ALL NOTES';const u=new URL(location.href);['from','to','year','month'].forEach(k=>u.searchParams.delete(k));u.hash='notes';history.replaceState(null,'',u)});
  if(q.has('month'))apply(range.value); else if(q.has('year'))apply(q.get('year')); else if(q.has('from')||q.has('to')){const from=Number(q.get('from')||min),to=Number(q.get('to')||max);cards.forEach(c=>c.hidden=Number(c.dataset.year)<from||Number(c.dataset.year)>to);status.textContent=from+'—'+to}
})();
