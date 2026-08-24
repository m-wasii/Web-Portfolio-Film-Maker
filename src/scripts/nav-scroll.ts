export function initNavScroll() {
  const nav = document.getElementById('site-nav');
  const links = document.querySelectorAll('.nav-link[data-section]');
  const sections = Array.from(links)
    .map((link) => {
      const id = link.getAttribute('data-section');
      const el = id ? document.getElementById(id) : null;
      return el ? { id, el, link } : null;
    })
    .filter(Boolean) as { id: string; el: HTMLElement; link: Element }[];

  function onScroll() {
    if (nav) {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    }

    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0]?.id;

    for (const section of sections) {
      if (section.el.offsetTop <= scrollPos) {
        current = section.id;
      }
    }

    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('data-section') === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
