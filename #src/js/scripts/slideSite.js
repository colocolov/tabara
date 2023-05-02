let homeSlider = new Swiper ('.home', {

  // свои классы
  wrapperClass: 'home__wrapper',
  slideClass: 'home__screen',

  // вертикальный слайдер
  direction: 'vertical',

  // количество слайдов для показа
  slidesPerView: 'auto',

  // включаем параллакс
  parallax: true,

  // управление клавиатурой
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // управление колесом мыши
  mousewheel: {
    sensitivity: 1,
  },

  // откл функционал, если слайдов меньше чем нужно
  watchOverflow: true,

  speed: 800,

  // обновить swiper при изменении элементов слайдера
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  // буллеты
  pagination: {
    el: '.home__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'home__bullet',
    bulletActiveClass: 'home__bullet_active',
  },

  // скролл
  scrollbar: {
    el: '.home__scroll',
    dragClass: 'home__drag-scroll',
    draggable: true,
  },
});
