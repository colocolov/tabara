// мобильное меню

//выпадающее меню для мобильных устройств
//document.addEventListener("click", documentActions);

// function documentActions(e) {
//   const targetElement = e.target;
//   if (window.innerWidth > 900) {
//     if (targetElement.classList.contains("menu__arrow")) {
//       targetElement.closest(".menu__item").classList.toggle("_hover");
//     }
//     if (
//       !targetElement.closest(".menu__item") &&
//       document.querySelectorAll(".menu__item._hover").length > 0
//     ) {
//       // console.log("ehhh");
//       // _removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
//     }
//   }
// }

// проверка, является ли уствройство мобильным
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

// if (isMobile.any()) {
  // document.querySelector('html').classList.add('_touch');
  // document.body.classList.add("_touch");
// }

// меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__item");

// ver 1
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    if (menuBody){
      //document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    }
  });
}
// ver 2
// document.addEventListener('click', function (e) {
//   const targetElement = e.target;
//   // console.log(targetElement.parentElement);
//   if (iconMenu) {
//   iconMenu.addEventListener("click", function (e) {
//     if (menuBody){
//       //document.body.classList.toggle("_lock");
//       iconMenu.classList.toggle("_active");
//       menuBody.classList.toggle("_active");
//     }
//   });
// }
//   if (targetElement.classList.contains('menu__body')) {
//     iconMenu.classList.toggle("_active");
//       menuBody.classList.toggle("_active");
//   }
// });


// закрытие при клике
/**
 * переделать на другую логику
 * 1) отслеживать клик на menu__body как по меню так и по тел/соцсети
 * 2) проверить через условие, если клик по меню/тел/сети то закрывать меню и делать переход
 * 3) если клик вне меню то закрывать его
 */
if (menuLink.length) {
  menuLink.forEach((item) => {

    // console.log(item);
    item.addEventListener("click", (e) => {
      console.log(e.target);

      //document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    });
  });
}
