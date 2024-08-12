(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } 
    // else {
    //   $("header").removeClass("background-header");
    // }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
  
  $("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

$(function() {
		// Calling Login Form
		$("#login_form").click(function() {
				$(".social_login").hide();
				$(".user_login").show();
				return false;
		});

		// Calling Register Form
		$("#register_form").click(function() {
				$(".social_login").hide();
				$(".user_register").show();
				$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
				$(".user_login").hide();
				$(".user_register").hide();
				$(".social_login").show();
				$(".header_title").text('Login');
				return false;
		});
});

  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        if (refElement.length) {  // Ensure refElement exists
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        }
    });
}



  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);
// Exxtra
const Accordion = {
  settings: {
    // Expand the first item by default
    first_expanded: false,
    // Allow items to be toggled independently
    toggle: false
  },

  openAccordion: function(toggle, content) {
    if (content.children.length) {
    toggle.classList.add("is-open");
    let final_height = Math.floor(content.children[0].offsetHeight);
    content.style.height = final_height + "px";
    }
  },

  closeAccordion: function(toggle, content) {
    toggle.classList.remove("is-open");
    content.style.height = 0;
  },

  init: function(el) {
    const _this = this;

    // Override default settings with classes
    let is_first_expanded = _this.settings.first_expanded;
    if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
    let is_toggle = _this.settings.toggle;
    if (el.classList.contains("is-toggle")) is_toggle = true;

    // Loop through the accordion's sections and set up the click behavior
    const sections = el.getElementsByClassName("accordion");
    const all_toggles = el.getElementsByClassName("accordion-head");
    const all_contents = el.getElementsByClassName("accordion-body");
    for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const toggle = all_toggles[i];
    const content = all_contents[i];

    // Click behavior
    toggle.addEventListener("click", function(e) {
      if (!is_toggle) {
      // Hide all content areas first
      for (let a = 0; a < all_contents.length; a++) {
        _this.closeAccordion(all_toggles[a], all_contents[a]);
      }

      // Expand the clicked item
      _this.openAccordion(toggle, content);
      } else {
      // Toggle the clicked item
      if (toggle.classList.contains("is-open")) {
        _this.closeAccordion(toggle, content);
      } else {
        _this.openAccordion(toggle, content);
      }
      }
    });

    // Expand the first item
    if (i === 0 && is_first_expanded) {
      _this.openAccordion(toggle, content);
    }
    }
  }
  };

  (function() {
  // Initiate all instances on the page
  const accordions = document.getElementsByClassName("accordions");
  for (let i = 0; i < accordions.length; i++) {
    Accordion.init(accordions[i]);
  }
  })();
  // 
  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    autoplay: true,
    responsiveClass: true,
    responsive:{
        0:{
            items: 2,
        },
        767:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    }
});