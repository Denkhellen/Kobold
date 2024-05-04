document.addEventListener('DOMContentLoaded', function() {
  const beeCursor = document.getElementById('bee-cursor');

  // Bee Cursor sichtbar machen und positionieren

  document.addEventListener('mousemove', function(e) {
    const beeCursor = document.getElementById('bee-cursor');
    beeCursor.style.left = e.pageX + 'px';
    beeCursor.style.top = e.pageY + 'px';
    beeCursor.style.display = 'block';
  });
  document.addEventListener('touchmove', function(e) {
    const touch = e.touches[0];
    beeCursor.style.left = touch.pageX + 'px';
    beeCursor.style.top = touch.pageY + 'px';
    e.preventDefault(); // Verhindert Scrollen beim Bewegen
  });

  // Karussell Funktionalität
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel__button--right');
  const prevButton = document.querySelector('.carousel__button--left');
  const dotsNav = document.querySelector('.carousel__nav');
  const dots = Array.from(dotsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  // Position der Slides
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });

  // Navigationsbuttons
  nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
  });

  // Update aktiver Dot
  carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const index = Math.round(scrollLeft / itemWidth);

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
      dots[index].classList.add('active');
    }
  });
});
