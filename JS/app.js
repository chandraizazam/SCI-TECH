let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')

};

window.onscroll = () => {
    menu.remove.toggle('fa-times')
    navbar.remove.toggle('active')

}