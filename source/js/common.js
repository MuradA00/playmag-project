let featuresSlider = new Swiper('.features__slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: '.features__arrow_next',
    prevEl: '.features__arrow_prev'
  }
})
