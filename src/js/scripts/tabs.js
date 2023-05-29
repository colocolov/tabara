// const tabs1 = new KlsTabs('tab2', {
//   // получаем объект табов
//   // isChanged: (tabs) => {
//   //   console.log(tabs);
//   // }
// });

// активный по умолчанию второй таб
// tabs1.switchTabs(document.querySelector('#tab2'));

const tabProgram = document.querySelector('.tab-program');

if (tabProgram) {

  const tabProgramItems = document.querySelectorAll('.tabs__nav-figure');
  const tabsNav = document.querySelectorAll('.tabs__nav-btn');
  const tabsText = document.querySelectorAll('.tabs__panel-text');


  tabProgramItems.forEach((item) => {
    item.addEventListener("click", (e) => {

      // удалить крестик у btn
      tabsNav.forEach((el) => {
        el.classList.remove('tabs__nav-btn--active');
      });
      // удалить текст под кнопкой
      tabsText.forEach((el) => {
        el.classList.remove('tabs__panel-text--active');
      });

      // добавляем класс --active кнопке
      item.parentElement.classList.add('tabs__nav-btn--active');
      // добавляем класс --active тексту
      item.parentElement.nextElementSibling.classList.add('tabs__panel-text--active');

      // фоновое изображение при клике
      const urlImg = item.dataset.url;
      tabProgram.style.backgroundImage = `url('${urlImg}')`;
      // end
    });
  });
}
