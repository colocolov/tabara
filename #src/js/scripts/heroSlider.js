// слайдер на главной
const heroSlider = new Swiper(".hero__slider", {
  // loop: true,
  autoplay: {
    delay: 4000,
  },
  //скорость переключения слайдов
  speed: 800,


  // буллеты
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  //эффект перехода слайда (только если показ по 1-му слайду)
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  // переключение при клике на слайд
  slideToClickedSlide: true,
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
});
//----- END

// количество слайдов на главной
let heightScrollDefault = getComputedStyle(document.documentElement).getPropertyValue('--quantityHeroSlider');
const quantitySliders = document.querySelector('.hero__pagination').children.length;
//задаем значание
document.documentElement.style.setProperty('--quantityHeroSlider', quantitySliders );
