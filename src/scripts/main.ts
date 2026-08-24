import { initCursor } from './cursor';
import { initReveal } from './reveal';
import { initSmoothScroll } from './smooth-scroll';
import { initNavScroll } from './nav-scroll';
import { initVideoModal, initLoadMore, initHeroVideo } from './video-modal';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initReveal();
  initSmoothScroll();
  initNavScroll();
  initVideoModal();
  initLoadMore();
  initHeroVideo();
});
