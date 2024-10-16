let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick= () => {
    menu.classList.toggle('bg-x');
    navbar.classList.toggle('open');
}
