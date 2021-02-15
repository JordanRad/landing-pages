console.log("Slider.js file loaded.")
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 5,
        // slidesPerGroup: 3,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }
  });