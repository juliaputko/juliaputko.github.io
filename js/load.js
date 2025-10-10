window.addEventListener('load', function() {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  if (loaderWrapper) {
    loaderWrapper.style.transition = 'opacity 0.5s ease-out'; // Add a fade-out transition
    loaderWrapper.style.opacity = '1';
    setTimeout(() => {
      loaderWrapper.remove(); // Remove after transition
    }, 500); // Match the transition duration
  }
});

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.top-header');
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

   window.scrollTo(0, 0);

   if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

