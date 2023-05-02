// слайдер на главной
let servicesSlider = new Swiper(".services__slider", {
  // loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  // //скорость переключения слайдов
  speed: 800,

  navigation: {
    nextEl: ".services__nav-next",
    prevEl: ".services__nav-prev",
    // prevEl: ".material__btn-prev",
    // disabledClass: "stories-button__unactive",
    clickable: true,
    // для ппрвильного направления
  },
  slidesPerView: 2,
  // расстояние между слайдами
  spaceBetween: 20,

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
  // observer: true,
  // observeParents: true,
  // observeSlideChildren: true,
});
//----- END
