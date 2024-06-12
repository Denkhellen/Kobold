document.addEventListener('DOMContentLoaded', function() {
  const beeCursor = document.getElementById('bee-cursor');

  // Bee Cursor sichtbar machen und positionieren
  let cursor=document.querySelector('.bee-cursor');
  document.addEventListener('mousemove', function(e) {
    const beeCursor = document.getElementById('bee-cursor');
    beeCursor.style.left = e.pageX + 'px';
    beeCursor.style.top = e.pageY + 'px';
      });
  document.addEventListener('touchmove', function(e) {
    beeCursor.style.left = X + 'px';
    beeCursor.style.top = Y + 'px';
     });
});

let cursor=document.querySelector('.ball');

document.onmousemove = function(e) {  
    let x= e.clientX;
    let y= e.clientY;

    cursor.style.left= x+'px';
    cursor.style.top= y+'px';
};

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
  
document.addEventListener("DOMContentLoaded", function() {
  var backgroundImage = document.querySelector('.background-image');
  var contentBelow = document.querySelector('.content-below');
  var height = contentBelow.getBoundingClientRect().top; // Distanz von contentBelow zum oberen Rand des Viewports
  backgroundImage.style.height = `${height}px`; // Setzt die Höhe des Hintergrundbilds dynamisch
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.nav-button a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const synonyms = {
      "banner1": ["FEEL", "AURA", "SENSE", "TOUCH", "NOTICE"],
      "banner2": ["SMELL", "AROMA", "SCENT", "PERFUME", "ODOR"],
      "banner3": ["TASTE", "FLAVOR", "SAVOR", "RELISH", "PALATE"]
  };

  const interval = 4000; // Intervallzeit in Millisekunden
  let index = 0;

  function changeText() {
      Object.keys(synonyms).forEach(id => {
          const element = document.querySelector(`#${id} .banner-text`);
          const newText = synonyms[id][index % synonyms[id].length];
          element.innerHTML = '';
          for (let i = 0; i < newText.length; i++) {
              setTimeout(() => {
                  element.innerHTML += newText[i];
              }, i * 150); // Zeit zwischen Buchstaben
          }
      });
      index++;
  }

  setInterval(changeText, interval);
});
document.addEventListener("DOMContentLoaded", function() {
  const colors = ['yellow', 'green', 'pink', 'blue'];
  const numLights = 50; // Anzahl der Lichter pro Bild

  function createLight(color) {
    const light = document.createElement('div');
    light.classList.add('light', color);
    light.style.width = `${Math.random() * 10 + 5}px`; // Zufällige Größe zwischen 5px und 15px
    light.style.height = light.style.width;
    light.style.top = `${Math.random() * 100}%`;
    light.style.left = `${Math.random() * 100}%`;
    light.style.animationDelay = `${Math.random() * 2}s`; // Zufällige Verzögerung der Animation
    return light;
  }

  document.querySelectorAll('.grid-item.image').forEach(item => {
    for (let i = 0; i < numLights; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const light = createLight(color);
      item.appendChild(light);
    }
  });
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "flex";
  dots[slideIndex].className += " active";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 5 seconds
}

document.addEventListener('DOMContentLoaded', function() {
  const birdSounds = document.getElementById('bird-sounds');
  const loungeMusic = document.getElementById('lounge-music');
  const transitionSection = document.getElementById('new-grid');
  let hasTransitioned = false;

  // Start bird sounds on page load
  birdSounds.play();
  birdSounds.volume = 1;
  loungeMusic.volume = 0;
  loungeMusic.pause(); // Ensure lounge music is paused initially

  function checkTransition() {
    const rect = transitionSection.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);

    if (isVisible && !hasTransitioned) {
      hasTransitioned = true;
      transitionToLoungeMusic();
    } else if (!isVisible && hasTransitioned) {
      hasTransitioned = false;
      transitionToBirdSounds();
    }
  }

  function transitionToLoungeMusic() {
    loungeMusic.play();
    let fadeOutInterval = setInterval(function() {
      if (birdSounds.volume > 0) {
        birdSounds.volume -= 0.01;
        loungeMusic.volume += 0.01;
      } else {
        clearInterval(fadeOutInterval);
        birdSounds.pause();
        birdSounds.volume = 0;
      }
    }, 50);
  }

  function transitionToBirdSounds() {
    birdSounds.play();
    let fadeInInterval = setInterval(function() {
      if (loungeMusic.volume > 0) {
        loungeMusic.volume -= 0.01;
        birdSounds.volume += 0.01;
      } else {
        clearInterval(fadeInInterval);
        loungeMusic.pause();
        loungeMusic.volume = 0;
      }
    }, 50);
  }

  window.addEventListener('scroll', checkTransition);
  checkTransition(); // Initial check in case the section is already visible on load
});

// Helper property to track if an audio element is playing
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function(){
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const banners = document.querySelectorAll('.banner');

  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // Stop observing once the animation has started
      }
    });
  }, options);

  banners.forEach(banner => {
    observer.observe(banner);
  });
});