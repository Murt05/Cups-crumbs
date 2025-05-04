
// Sticky nav colour change
const navbar=document.querySelector('.navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>10));
// Mobile menu
const navToggle=document.getElementById('nav-toggle');
const navMenu=document.querySelector('.navbar ul');
navToggle.addEventListener('click',()=>{navMenu.classList.toggle('open');navToggle.classList.toggle('open');});
// Current year
document.getElementById('year').textContent=new Date().getFullYear();
// Slider functionality
const slides=document.querySelectorAll('.slide');
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
let current=0;
function showSlide(i){
  slides[current].classList.remove('active');
  current=(i+slides.length)%slides.length;
  slides[current].classList.add('active');
}
prevBtn.addEventListener('click',()=>showSlide(current-1));
nextBtn.addEventListener('click',()=>showSlide(current+1));
