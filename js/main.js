let burgerBlock = document.querySelector('.header__burger');
let burger = document.querySelector('.burger');

let nav = document.querySelector('.header__block-nav');
let menu = document.querySelector('.icon');



burgerBlock.addEventListener('click', miFunction);

function miFunction() {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('menu--active');
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}
