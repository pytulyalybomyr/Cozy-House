var burger_button = document.querySelector(".header__nav-burger")
var burger = document.querySelector(".header__menu")

burger_button.addEventListener('click', () => {
    burger.classList.toggle("show_burger")
    burger_button.classList.toggle("fixed")
})