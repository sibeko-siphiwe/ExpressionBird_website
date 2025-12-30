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

    //  date

var year = document.getElementById('Year')

var date = new Date();

year.innerHTML = date.getFullYear();

//  Testimonial Slider

const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;
  let interval;

  function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[i].classList.add('active');
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  }

  document.getElementById('next').addEventListener('click', () => {
    nextTestimonial();
    resetInterval();
  });

  document.getElementById('prev').addEventListener('click', () => {
    prevTestimonial();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextTestimonial, 5000);
  }

  interval = setInterval(nextTestimonial, 5000);

  /*    nav */

  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');

  let lastScrollY = window.scrollY;
  let heroBottom = hero.offsetTop + hero.offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    heroBottom = hero.offsetTop + hero.offsetHeight;

    // While hero is visible → header always visible
    if (currentScrollY < heroBottom) {
      header.style.transform = 'translateY(0)';
      header.style.opacity = '1';
      return;
    }

    // After hero
    if (currentScrollY > lastScrollY) {
      // scrolling down
      header.style.transform = 'translateY(-120%)';
      header.style.opacity = '0';
    } else {
      // scrolling up
      header.style.transform = 'translateY(0)';
      header.style.opacity = '1';
    }

    lastScrollY = currentScrollY;
  });