// слайдер на главной секция SERVICES
let servicesSlider = new Swiper(".services__slider", {
  // loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  // //скорость переключения слайдов
  speed: 800,

  navigation: {
    nextEl: ".services-next",
    prevEl: ".services-prev",
    // prevEl: ".material__btn-prev",
    // disabledClass: "stories-button__unactive",
    clickable: true,
    // для ппрвильного направления
  },

  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },

  slidesPerView: 1.3,
  // расстояние между слайдами
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  },

  // swipeDirection: 'next',

  // controller: {
  //   inverse: false,
  // },


  //эффект перехода слайда (только если показ по 1-му слайду)
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  // переключение при клике на слайд
  // slideToClickedSlide: true,
  // отключение прокрутки при наведении мыши
  // on: {
  //   init() {
  //     this.el.addEventListener("mouseenter", () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener("mouseleave", () => {
  //       this.autoplay.start();
  //     });
  //   },
  // },
  //
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});
//----- END
