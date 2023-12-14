let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
  showSlide(currentIndex);
  startAutoSlide();

  document.querySelector('.next-button').addEventListener('click', function () {
    clearInterval(intervalId);
    nextSlide();
    startAutoSlide();
  });

  document.querySelector('.prev-button').addEventListener('click', function () {
    clearInterval(intervalId);
    prevSlide();
    startAutoSlide();
  });

  // Pausar el intervalo al pasar el ratón sobre el carrusel
  document.querySelector('.carousel-container').addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  // Reanudar el intervalo al retirar el ratón del carrusel
  document.querySelector('.carousel-container').addEventListener('mouseleave', function () {
    startAutoSlide();
  });
});
