export function initSmoothScroll() {
  const nav = document.getElementById('site-nav');
  const offset = () => (nav?.offsetHeight ?? 80) + 8;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - offset();
      window.scrollTo({ behavior: 'smooth', top });
      history.pushState(null, '', href);
    });
  });
}
