// слайдер на главной
let conditiiSlider = new Swiper(".tab-conditii__slider", {
  loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  // //скорость переключения слайдов
  speed: 800,

  navigation: {
    nextEl: ".tab-conditii-next",
    prevEl: ".tab-conditii-prev",
    // prevEl: ".material__btn-prev",
    // disabledClass: "stories-button__unactive",
    clickable: true,
    // для ппрвильного направления
  },

  slidesPerView: 1.2,
  // расстояние между слайдами
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 0
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
