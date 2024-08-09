document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 15,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    keyboard: {
      enabled: true,
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  function updateSlideClasses() {
    // Reset all slides to regular class
    document.querySelectorAll('.mySwiper .swiper-slide').forEach(function(slide) {
      var pricingItem = slide.querySelector('.pricing-item-regular, .pricing-item-pro');
      if (pricingItem) {
        pricingItem.classList.remove('pricing-item-pro');
        pricingItem.classList.add('pricing-item-regular');
      }
    });

    // Get the active slide's real index
    var activeSlide = swiper.slides[swiper.realIndex];
    var activePricingItem = activeSlide.querySelector('.pricing-item-regular, .pricing-item-pro');
    if (activePricingItem) {
      activePricingItem.classList.remove('pricing-item-regular');
      activePricingItem.classList.add('pricing-item-pro');
    }
  }

  // Update classes on slide change
  swiper.on('slideChange', updateSlideClasses);

  // Set initial active slide class on load
  updateSlideClasses();
});