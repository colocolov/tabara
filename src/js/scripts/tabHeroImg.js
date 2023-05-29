// фоновое изображение на Tabara на первом экране
const tabHero = document.querySelector('.tab-hero__container');
if (tabHero) {
  const tabHeroImg = `url("${tabHero.dataset.hero}")`;
  document.documentElement.style.setProperty('--bgImgTabHero', tabHeroImg);
}
