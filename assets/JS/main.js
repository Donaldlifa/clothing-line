
/*========== CHANGE BACKGROUND HEADER =========*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

/*========== SWIPER PRODUCTS ==========*/

let swiperProducts = new Swiper(".products-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        
        1024: {
            spaceBetween: 72,
        },
    }
});

/*========== SCROLL SECTION ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId)

        if(scrollY > sectionTop && scrollY <= sectionTop - 58){
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link')
        }
    });
}

/*========== SHOW SCROLL UP ==========*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
 
/*========== DARK LIGHT THEME ==========*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected any)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtains the current theme the interface has the validating the dark-them class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-fill' : 'ri-sun-line'

// Validates if the user previously chose an a topic
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activates/deactivate theme manually with button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('.home-data, .products-container, .footer-container')
sr.reveal('.home-images', {delay:600, origin: 'bottom'})
sr.reveal('.new-card, .brand-image', {interval: 100})
sr.reveal('.collection-explorer:nth-child(1)', {origin: 'right'})
sr.reveal('.collection-explorer:nth-child(2)', {origin: 'left'})