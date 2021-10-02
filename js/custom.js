$(function () {

  // preloader
  $(window).on('load', function () {
    $(".preloader").addClass("complete")
  })

  // navbar click active
  var removecls = $('.nav-link').click(function () {

    removecls.removeClass('active');
    $(this).addClass('active');
    $(".sign-up").removeClass('active');
  });


  // back to top button

  $(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll > 50) {
      $(".back-to").addClass("back-to-top");
      $("nav").addClass("nav-fixed");
      $(".navbar-brand").removeClass("logo-padding");
    } else {
      $(".back-to").removeClass("back-to-top");
      $("nav").removeClass("nav-fixed");
      $(".navbar-brand").addClass("logo-padding");

    }


    // nav active
    var remove = $('.nav-link');
    if (scroll < 20) {
      $(remove).removeClass("active");
      $(".home").addClass("active");

    }


  });

  $(".back-to").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });



  });

// color settings
$(".one").click(function(){

  $("body").get(0).style.setProperty('--brandcol', '#e23e34');
  $("body").get(0).style.setProperty('--overlay', 'rgba(226, 62, 56, 0.5)');
  $("body").get(0).style.setProperty('--hcol', '#353535');
});



$(".two").click(function(){

  $("body").get(0).style.setProperty('--brandcol', '#404DC7');
  $("body").get(0).style.setProperty('--overlay', 'rgba(64, 78, 199, 0.5)');
  $("body").get(0).style.setProperty('--hcol', '#404DC7');
  
});

$(".three").click(function(){

  $("body").get(0).style.setProperty('--brandcol', 'linear-gradient(to right top, #55f0da, #00d2f2, #9c46aa)');
  $("body").get(0).style.setProperty('--overlay', 'linear-gradient(to right top, #55f0d980, #00d2f280, #9d46aa80)');
  $("body").get(0).style.setProperty('--hcol', 'linear-gradient(to right top, #55f0da, #9c46aa');
});

$(".four").click(function(){

  $("body").get(0).style.setProperty('--brandcol', '#e234f1');
  $("body").get(0).style.setProperty('--overlay', 'rgba(225, 52, 241, 0.5)');
  $("body").get(0).style.setProperty('--hcol', '#e234f1');
});

$(".five").click(function(){

  $("body").get(0).style.setProperty('--brandcol', '#92c41e');
  $("body").get(0).style.setProperty('--overlay', 'rgba(146, 196, 30, 0.5)');
  $("body").get(0).style.setProperty('--hcol', '#92c41e');
  
});

$(".six").click(function(){

  $('body').toggleClass("dark");
  $("body").get(0).style.setProperty('--hcol', '#55a5d3e1');
 
 
});







  // banner slider 
  $('.banner-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  // venobox video play
  $('.venobox').venobox({
    closeBackground: '#e23e38',
    spinner: 'wave',

  });

  // team slider 

  $('.team-slider').slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,

        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: true,

        }
      },


    ]
  });


  // custom cursor

  var kursorx = new kursor({

    type: 1,
    color: '#e23e38',

  });


  // testimonial slider

  $('.testimonial-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,

        }
      },


    ]
  });


  // counter in funfact
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });


  // brand slider
  $('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="slick-prev fas fa-chevron-left common-arr left-arrow"></i>',
    nextArrow: '<i class="slick-prev fas fa-chevron-right common-arr right-arrow"></i>',
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]

  });

























})