document.addEventListener('DOMContentLoaded', function() {
  let scrollTimeout = null;

  const video = document.getElementById('background-video');
  const content = document.querySelector('.content');
  const beeCursor = document.getElementById('bee-cursor');

  // Video pausieren, wenn das Scrollen aufhört
  function pauseVideoOnScrollEnd() {
    if (scrollTimeout !== null) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      video.pause();
    }, 100); // Warte 100ms nach dem Scrollen, bevor das Video pausiert wird
  }

  // Scroll-Event, das das Video steuert
  window.addEventListener('scroll', function() {
    if (video.paused) {
      video.play();
    }
    pauseVideoOnScrollEnd();

    // Entfernen der 'hidden' Klasse, wenn gescrollt wird
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    if (scrollPos >= window.innerHeight) {
      content.classList.remove('hidden');
    }
  });

  // Bewegen der Biene, die dem Mauszeiger folgt
  document.addEventListener('mousemove', (e) => {
    beeCursor.style.left = e.pageX + 'px';
    beeCursor.style.top = e.pageY + 'px';
    beeCursor.style.display = 'block';
  });
});
