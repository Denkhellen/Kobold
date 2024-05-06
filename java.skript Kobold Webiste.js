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
});

document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
  });

  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', function() {
      currentSlide(index + 1);
    });
  });
});
  


let cursor=document.querySelector('.ball');

document.onmousemove = function(e) {  
    let x= e.clientX;
    let y= e.clientY;

    cursor.style.left= x+'px';
    cursor.style.top= y+'px';
};

