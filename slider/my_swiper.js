document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    keyboard: {
      enabled: true,
    },
    grabCursor: true,
    on: {
      slideChangeTransitionEnd: function () {
        updateSlideClasses();
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  function updateSlideClasses() {
    var current=document.querySelector(".swiper-slide-active .pricing-item-regular");
    if (current){
      current.classList.add("pricing-item-pro")
      current.classList.remove("pricing-item-regular")
    }
    //reset previous slide
    var current=document.querySelector(".swiper-slide-prev .pricing-item-pro");
    if (current){
      current.classList.add("pricing-item-regular")
      current.classList.remove("pricing-item-pro")
    }
    //reset next slide
    var current=document.querySelector(".swiper-slide-next .pricing-item-pro");
    if (current){
      current.classList.add("pricing-item-regular")
      current.classList.remove("pricing-item-pro")
    }
  }

  // Set initial active slide class on load
  updateSlideClasses();
});
