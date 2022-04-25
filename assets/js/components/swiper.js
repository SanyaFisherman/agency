const swiper1 = new Swiper('.team__slider', {  
    slidesPerView: 'auto',
    spaceBetween: 30,
    // slidesPerGroup: 1,
    pagination: {
        el: '.team__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.team__arrow--next',
        prevEl: '.team__arrow--prev'
    },
});

const swiper2 = new Swiper('.testimonials__slider', {  
    slidesPerView: 1,
    pagination: {
        el: '.testimonials__pagination',
        clickable: true,
    },
    centeredSlides: true,
    loop: true,

    breakpoints: {
        480: {
            slidesPerView: 1.3
        },
        767: {
            slidesPerView: 1.875
        },
    }
});