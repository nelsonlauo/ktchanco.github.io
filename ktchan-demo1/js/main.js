const yearEl=document.getElementById('y');if(yearEl)yearEl.textContent=new Date().getFullYear();
const navToggle=document.getElementById('navToggle');const navList=document.querySelector('.nav-list');
if(navToggle){navToggle.addEventListener('click',()=>{const open=navList.style.display==='flex';navList.style.display=open?'none':'flex';navList.style.flexDirection='column';navList.style.gap='0.25rem';});}
const observer=new IntersectionObserver((entries)=>{entries.forEach((e)=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:0.16});
document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));