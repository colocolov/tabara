// слайдер на Tabara секция ECHIPA
let echipalSlider = new Swiper(".tab-echipa__slider", {
  loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  // //скорость переключения слайдов
  speed: 800,

  navigation: {
    nextEl: ".tab-echipa-next",
    prevEl: ".tab-echipa-prev",
    // prevEl: ".material__btn-prev",
    // disabledClass: "stories-button__unactive",
    // clickable: true,
    // для ппрвильного направления
  },

  // swipeDirection: 'next',

  // controller: {
  //   inverse: false,
  // },

  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },


  //эффект перехода слайда (только если показ по 1-му слайду)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

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
