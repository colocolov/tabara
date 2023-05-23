const tabs1 = new KlsTabs('tab', {
  // получаем объект табов
  // isChanged: (tabs) => {
  //   console.log(tabs);
  // }
});

// активный по умолчанию второй таб
// tabs1.switchTabs(document.querySelector('#tab2'));


const tabProgram = document.querySelector('.tab-program');
const tabProgramItems = document.querySelectorAll('.tabs__nav-figure');
//const misiuneaTabara = document.querySelector('.misiunea_tabara');
// const misiuneaInstitut = document.querySelector('.misiunea_institut');
// const misiuneaInvatamint = document.querySelector('.misiunea_invatamint');

tabProgramItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e.target);
    const urlImg = item.dataset.url;
    // console.log(urlImg);
    tabProgram.style.backgroundImage = `url('${urlImg}')`;
  });
});
