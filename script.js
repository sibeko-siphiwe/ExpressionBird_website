var navabr = document.getElementById('navigation');

window.onscroll = function() {
    if (window.scrollY > 50) {
        navabr.classList.add('scrolled');   
    } else {
        navabr.classList.remove('scrolled');
    }
};

//  Animation

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target)
            }
            else{
                entry.target.classList.remove('show');
            }
        });
    },
    {threshold: 0.15}
);

document.querySelectorAll('.animate')
    .forEach(el => observer.observe(el));