// мобильное меню

// меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__item");
const menuSub = document.querySelector(".menu__submenu");
const menuArrow = document.querySelector(".menu__arrow");
const menuSocial = document.querySelector(".menu__social.social__list");

// ver 1
if (iconMenu) {
  iconMenu.addEventListener("click", (e) => {
    if (menuBody) {

      iconMenu.addEventListener("click", (e) => {
        if (iconMenu.classList.contains("_active")) {
          // menuSub.classList.remove("_active");
        }
      });

      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      //console.log(menuBody);
    }

  });
}

// клик по доп меню
document.addEventListener("click", documentActions);
function documentActions(el) {
  const targetElement = el.target;
  // console.log(targetElement);
  if (targetElement.classList.contains("menu__arrow")) {
    el.preventDefault();
    targetElement.closest(".menu__item").classList.toggle("_active");
    targetElement.classList.toggle("_active");
  } else {
    menuSub.classList.remove("_active");
    menuArrow.classList.remove("_active");
  }
}

// закрытие при клике по меню
if (menuLink.length) {
  menuLink.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu__arrow")) {
        // e.preventDefault();
      } else {
        removeActiveClass();
      }
    });
  });
}

// закрытие при клике по соцменю
if (menuSocial) {
  menuSocial.addEventListener('click', (e) => {
    removeActiveClass();
  });
}

function removeActiveClass () {
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  menuSub.classList.remove("_active");
  menuArrow.classList.remove("_active");
}
