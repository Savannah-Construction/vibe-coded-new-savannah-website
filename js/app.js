const navToggle=document.querySelector('.nav-toggle');
const siteNav=document.querySelector('.site-nav');
if(navToggle&&siteNav){navToggle.addEventListener('click',()=>{const open=siteNav.classList.toggle('is-open');navToggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
if(typeof window.initSavannahCinemaCoverflow==='function'){
  window.initSavannahCinemaCoverflow({onActivateCenter:function(index){window.location.href='projects.html#project-'+encodeURIComponent(index);}});
}
