let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelectorAll('.gallery img');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
