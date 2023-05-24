// слайдер на главной
let sezonSlider = new Swiper(".tab-sezon__slider", {
  loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  // //скорость переключения слайдов
  speed: 600,

  navigation: {
    nextEl: ".tab-sezon-next",
    // prevEl: ".tab-sezon-prev",
    // prevEl: ".material__btn-prev",
    // disabledClass: "stories-button__unactive",
    clickable: true,
    // для ппрвильного направления
  },

  // swipeDirection: 'next',

  // controller: {
  //   inverse: false,
  // },

  // slideClass: "",
  // width: 288,
  slidesPerView: 1.2,
  slidesPerGroup: 1,
  // расстояние между слайдами
  // spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      // spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 10
    },
    992: {
      slidesPerGroup: 2,
      slidesPerView: 3,
      // spaceBetween: 10
    },
  },


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
