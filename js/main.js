const buttonMenu = document.querySelector('.button-menu');
const buttonMenuClose = document.querySelector('.menu-close');
const navBar = document.querySelector('.navbar-container');

buttonMenu.addEventListener('click', () => {
    navBar.classList.add('active');
});

buttonMenuClose.addEventListener('click', () => {
    console.log("fff");
    navBar.classList.remove('active');
});