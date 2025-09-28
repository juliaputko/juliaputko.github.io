let lastScrollTop = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop < lastScrollTop) {
    if (Math.random() < 0.2) {  // 30% chance to create sparkles
      createScrollSparkle();
    }
  }

  lastScrollTop = currentScrollTop;
});

function createScrollSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'scroll-sparkle';

  // Random x anywhere in viewport width
  const x = Math.random() * window.innerWidth;

  // Random y anywhere between current scroll top and scroll top + viewport height (visible area)
  const y = window.scrollY + Math.random() * window.innerHeight;

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  sparkle.innerText = '✦';

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1200);
}

