type WorkItem = {
  title: string;
  vimeoId: string;
};

let currentItems: WorkItem[] = [];
let currentIndex = 0;

function getModal() {
  return document.getElementById('video-modal') as HTMLDialogElement | null;
}

function getFrame() {
  return document.getElementById('video-modal-frame') as HTMLIFrameElement | null;
}

function getTitle() {
  return document.getElementById('video-modal-title');
}

function loadVideo(index: number) {
  const modal = getModal();
  const frame = getFrame();
  const titleEl = getTitle();
  if (!modal || !frame || !currentItems[index]) return;

  currentIndex = index;
  const item = currentItems[index];
  frame.src = `https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
  if (titleEl) titleEl.textContent = item.title;
}

export function initVideoModal() {
  const modal = getModal();
  if (!modal) return;

  document.querySelectorAll('[data-video-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      const index = Number(btn.getAttribute('data-index') ?? 0);
      const script = document.getElementById(`works-data-${category}`);
      if (!script) return;

      currentItems = JSON.parse(script.textContent || '[]');
      loadVideo(index);
      modal.showModal();
      document.body.style.overflow = 'hidden';
    });
  });

  modal.querySelector('[data-modal-close]')?.addEventListener('click', () => {
    closeModal();
  });

  modal.querySelector('[data-modal-prev]')?.addEventListener('click', () => {
    const next = (currentIndex - 1 + currentItems.length) % currentItems.length;
    loadVideo(next);
  });

  modal.querySelector('[data-modal-next]')?.addEventListener('click', () => {
    const next = (currentIndex + 1) % currentItems.length;
    loadVideo(next);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  modal.addEventListener('cancel', () => {
    closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.open) return;
    if (e.key === 'ArrowLeft') {
      const next = (currentIndex - 1 + currentItems.length) % currentItems.length;
      loadVideo(next);
    }
    if (e.key === 'ArrowRight') {
      const next = (currentIndex + 1) % currentItems.length;
      loadVideo(next);
    }
  });
}

function closeModal() {
  const modal = getModal();
  const frame = getFrame();
  if (!modal) return;
  modal.close();
  if (frame) frame.src = '';
  document.body.style.overflow = '';
}

export function initLoadMore() {
  document.querySelectorAll('[data-load-more]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-load-more');
      if (!targetId) return;
      const hidden = document.querySelectorAll(`#${targetId} [data-hidden-work]`);
      hidden.forEach((el) => el.classList.remove('hidden'));
      btn.classList.add('hidden');
    });
  });
}

export function initHeroVideo() {
  const video = document.getElementById('hero-video') as HTMLVideoElement | null;
  if (!video) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    return;
  }

  const play = () => {
    video.play().catch(() => {});
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
  } else {
    play();
  }
}
