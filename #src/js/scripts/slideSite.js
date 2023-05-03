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

  // откл автоинициализацию
  init: false,

  // События
  on: {
    // событие инициализации
    init: function() {
      menuSlider();
    },
    // событие смены слайда
    slideChange: function () {
      menuSliderRemove();
      menuLinks[homeSlider.realIndex].classList.add('_active');
    },
  },
});

// переход по меню
let menuLinks = document.querySelectorAll('.menu__item');
function menuSlider() {
  if (menuLinks.length > 0) {
    menuLinks[homeSlider.realIndex].classList.add('_active');
    for (let index = 0; index < menuLinks.length; index++){
      const menuItem = menuLinks[index];
      menuItem.addEventListener('click', function (e) {
        e.preventDefault();
        // console.log(menuItem);
        menuSliderRemove();
        homeSlider.slideTo(index, 800);
        menuItem.classList.add('_active');
      });
    }
  }
}

// удаление активного класса у ссылки
function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.menu__item._active');
  if (menuLinkActive) {
    // console.log('YES');
    // console.log(menuLinkActive);
    menuLinkActive.classList.remove('_active');
  }
}

// инициализация слайда
homeSlider.init();
