const menu=document.querySelector('.menu'),nav=document.querySelector('.nav-wrap nav');
menu?.addEventListener('click',()=>{nav?.classList.toggle('open');menu.setAttribute('aria-expanded',String(nav?.classList.contains('open')))});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(node=>node.textContent=new Date().getFullYear());
