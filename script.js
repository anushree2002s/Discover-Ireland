
// swiper

   document.addEventListener('DOMContentLoaded', function () {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            },
        });
    });


    // hamburgermenu
function toggleNavMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show'); 

    if (navMenu.classList.contains('show')) {
        document.addEventListener('click', closeNavMenuOnClickOutside);
    } else {
        document.removeEventListener('click', closeNavMenuOnClickOutside);
    }
}

// to close the navigation menu when clicking outside of the hamburger menu
function closeNavMenuOnClickOutside(e) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');

    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('show'); 
        document.removeEventListener('click', closeNavMenuOnClickOutside); 
    }
}
