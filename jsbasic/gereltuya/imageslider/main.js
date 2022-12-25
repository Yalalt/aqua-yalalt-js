const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

function toggleExpand(event){
    if(event.target.classList.contains('slide')) {
        event.target.classList.toggle('expanded');
    }
}

setInterval(nextSlide, 3000);
document.addEventListener('click', toggleExpand);