const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');
if(menuBtn){
    menuBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('open');
menuBtn.textContent=mobileMenu.classList.contains('open')?'✕':'☰'}
)}
const track=document.querySelector('.gallery-track');
const images=track?track.querySelectorAll('img'):[];
let current=0;
function showSlide(i){
    if(!track||!images.length)return;
current=(i+images.length)%images.length;
track.scrollTo({
    left:track.clientWidth*current,behavior:'smooth'}
);
document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===current))}
document.querySelector('.arrow.left')?.addEventListener('click',()=>showSlide(current-1));
document.querySelector('.arrow.right')?.addEventListener('click',()=>showSlide(current+1));
document.querySelectorAll('.dot').forEach((d,n)=>d.addEventListener('click',()=>showSlide(n)));
