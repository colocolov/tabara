const misiunea = document.querySelector('.misiunea');
const misiuneaTabara = document.querySelector('.misiunea_tabara');
const misiuneaInstitut = document.querySelector('.misiunea_institut');
const misiuneaInvatamint = document.querySelector('.misiunea_invatamint');

misiuneaTabara.addEventListener("mouseenter", (e) => {
  misiunea.style.backgroundImage = "url('images/bg/misiunea.jpg')";
});

misiuneaInstitut.addEventListener("mouseenter", (e) => {
  misiunea.style.backgroundImage = "url('images/bg/hero.jpg')";
});

misiuneaInvatamint.addEventListener("mouseenter", (e) => {
  misiunea.style.backgroundImage = "url('images/bg/misiunea.jpg')";
});


// misiunea.mouseenter = function(event){
//   const targetElement = event.target;
//   console.log(targetElement);
//   if (targetElement.classList.contains('misiunea_tabara')){
//     misiunea.style.backgroundImage = "url('images/bg/misiunea.jpg')";
//   } else if (targetElement.classList.contains('misiunea_institut')){
//     misiunea.style.backgroundImage = "url('images/bg/hero.jpg')";
//   } else if (targetElement.classList.contains('misiunea_invatamint')) {
//     misiunea.style.backgroundImage = "url('images/bg/misiunea.jpg')";
//   }

// };
