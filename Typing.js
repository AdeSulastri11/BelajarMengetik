// toggle 
const navbarNav = document.querySelector('.navbar-nav');

// ketika #navbar-menu di klik
document.querySelector('#navbar-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// ketika bukan #navbar-mnu dan .navbar-nav di klik maka sidebar akan hilang

const navbarMenu = document.querySelector('#navbar-menu');

document.addEventListener('click', function(e) {
    if(!navbarMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});