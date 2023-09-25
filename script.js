var swiper = new Swiper(".slide-content", {
  effect: "coverflow",
  //   spaceBetween: 25,
  grabCursor: "true",
  loop: true,
  coverflowEffect: {
    centeredSlides: "true",
    rotate: 0,
    depth: 25,
    slideShadows: false,
    stretch: -100,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
