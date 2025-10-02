
const buttons = document.querySelectorAll('.bodya');

// Control sparkle rate with throttling
let lastSparkleTime = 0;
const sparkleInterval = 30; // ms between sparkles (higher = fewer sparkles)

buttons.forEach(button => {
  button.addEventListener('mousemove', (event) => {
    const now = Date.now();
    if (now - lastSparkleTime < sparkleInterval) return;

    lastSparkleTime = now;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    createSparkle(button, x, y);
  });
});

function createSparkle(container, x, y) {
  const sparkle = document.createElement('div');

  // Random offsets to scatter the sparkles slightly
  const offsetX = (Math.random() - 0.5) * 20; 
  const offsetY = (Math.random() - 0.5) * 20;
  const scale = 0.6 + Math.random() * 0.4; 
  const rotation = Math.floor(Math.random() * 360);
  const opacity = 0.5 + Math.random() * 0.5;  

  sparkle.classList.add('sparkle');
  sparkle.innerText = '✦';

  // Smaller sparkle size
  const size = 8 + Math.random() * 4; 
  sparkle.style.fontSize = `${size}px`;

  // Position and style
  sparkle.style.position = 'absolute';
  sparkle.style.left = `${x + offsetX - size / 2}px`;
  sparkle.style.top = `${y + offsetY - size / 2}px`;
  sparkle.style.color = '#ffffff';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.userSelect = 'none';
  sparkle.style.opacity = `${opacity}`;
  sparkle.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
  sparkle.style.textShadow = '0 0 4px #ffffff, 0 0 8px #f0f8ff';
  sparkle.style.transition = 'opacity 1s ease-in-out, transform 1.4s ease-in-out';
  sparkle.style.borderRadius = '500%';

  container.style.position = 'relative';
  container.appendChild(sparkle);

  requestAnimationFrame(() => {
    sparkle.style.opacity = '0';
    sparkle.style.transform = 'scale(1.6)';
  });

  setTimeout(() => {
    sparkle.remove();
  }, 1200);
}