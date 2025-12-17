var navabr = document.getElementById('navigation');

window.onscroll = function() {
    if (window.scrollY > 50) {
        navabr.classList.add('scrolled');   
    } else {
        navabr.classList.remove('scrolled');
    }
};