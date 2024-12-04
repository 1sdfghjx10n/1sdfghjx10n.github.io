document.getElementById('planet-about').addEventListener('click', () => {
    console.log('About planet clicked');
    window.location.href = 'about.html';
});

function showInfo(text) {
    infoText.textContent = text;
    infoPanel.style.display = 'block';
  }

console.log('script.js loaded');