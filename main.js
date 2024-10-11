const burgerMenu = document.querySelector(".burger-menu__list");
const togglers = document.querySelector(".burger-menu__toggle");
const logoIcon = document.querySelector(".logo__icon");

console.log(togglers);
function toggleBurgerMenu () {
    burgerMenu.classList.toggle("burger-menu--collapse");
}
togglers.addEventListener("click", toggleBurgerMenu);


