document.addEventListener('DOMContentLoaded', function() {
  let scrollTimeout = null;

   const beeCursor = document.getElementById('bee-cursor');
});

  // Event für Mausbewegungen
  document.addEventListener('mousemove', (e) => {
    beeCursor.style.left = e.pageX + 'px';
    beeCursor.style.top = e.pageY + 'px';
    beeCursor.style.display = 'block'; // Zeigt die Biene an, wenn die Maus bewegt wird
  });

  // Event für Touch-Bewegungen (für Touch-Geräte wie Handys und Tablets)
  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    beeCursor.style.left = touch.pageX + 'px';
    beeCursor.style.top = touch.pageY + 'px';
    beeCursor.style.display = 'block'; // Zeigt die Biene an, wenn der Finger bewegt wird
    e.preventDefault(); // Verhindert das Scrollen der Seite beim Bewegen
  });

  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel__button- -right');
  const prevButton = document.querySelector('.carousel__button- -right');
  const dotsNav = documen.querySelector('.carousel__nav');
  const dots = Array.from(dotsNav.children);
  
  const slideWidth = slides[0].getBoundingClientRect().width;
  
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  }
  
  sliedes.forEach(setSlidePosition);
  
  nextButton.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
  })
  

  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const indicators = document.querySelectorAll('.carousel-indicator');
  
    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      const itemWidth = document.querySelector('.carousel-item').offsetWidth;
      const index = Math.round(scrollLeft / itemWidth);
      
      indicators.forEach(indicator => indicator.classList.remove('active'));
      if (indicators[index]) {
        indicators[index].classList.add('active');
      }
    });
  });
