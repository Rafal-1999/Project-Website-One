(() => {
    const button = document.querySelector(".main-navigation__menu-button");
    const menu = document.querySelector(".main-navigation__menu");

    const toggleClass = () => {
        menu.classList.toggle("main-navigation__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();