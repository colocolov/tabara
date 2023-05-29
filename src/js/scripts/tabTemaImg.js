// фоновое изображение на Tabara секция TEMA
const tabTema = document.querySelector('.tab-tema__container');
if (tabTema) {
  const tabTemaImg = `url("${tabTema.dataset.tema}")`;
  document.documentElement.style.setProperty('--bgImgTabTema', tabTemaImg);
}
