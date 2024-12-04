document.getElementById('planet-about').addEventListener('click', () => {
    console.log('About planet clicked');
    window.location.href = 'about.html';
});

function showInfo(text) {
    infoText.textContent = text;
    infoPanel.style.display = 'block';
  }

console.log('script.js loaded');

function createAsteroid() {
    const asteroid = document.createElement('div');
    asteroid.classList.add('asteroid');
    asteroid.setAttribute('data-info', 'Asteroid: Rocky celestial object.');
    space.appendChild(asteroid);
  
    asteroid.addEventListener('click', () => {
      showInfo(asteroid.getAttribute('data-info'));
    });
  
    setTimeout(() => asteroid.remove(), 5000); // Remove after 5 seconds
  }