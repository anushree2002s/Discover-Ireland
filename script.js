// swiper
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

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

