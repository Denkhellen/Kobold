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


