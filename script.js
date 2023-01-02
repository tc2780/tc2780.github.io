const navBar = document.querySelector('.navbar');

window.onscroll = function() {
    if(window.scrollY >= (window.innerHeight - 110)) {
        // navBar.classList.add('navbar-dark');
        navBar.classList.add('navBarDark');
    } else {
        // navBar.classList.remove('navbar-dark');
        navBar.classList.remove('navBarDark');
    }
}