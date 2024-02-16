const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Websites to use in future

// BUTTON HOVER EFFECTS

// https://www.proglobalbusinesssolutions.com/css-hover-effects/
// https://www.sliderrevolution.com/resources/css-button-hover-effects/


// PORTFOLIO INSPIRATION

// https://www.byronmcnally.co.uk/