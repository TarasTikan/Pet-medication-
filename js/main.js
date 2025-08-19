const btnMenuOpen = document.querySelector('.btn-menu');
const btnMenuClose = document.querySelector('.close-btn');
const menu = document.querySelector('.mob-menu')
const btnTogleMenu = () => {
    menu.classList.toggle('is-hidden')
}
const keyCloseMenu = (event) => {
    if (event.code === "Escape") {
        menu.classList.toggle('is-hidden')
    }
}
document.addEventListener("keyup", keyCloseMenu);

btnMenuOpen.addEventListener('click', btnTogleMenu)
btnMenuClose.addEventListener('click', btnTogleMenu)

