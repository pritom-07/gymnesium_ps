$(function(){

    // preloader
    $(window).on('load',function(){
        $(".preloader").addClass("complete")
    })

    // navbar click active
    var removecls = $('.nav-link').click(function(){

        removecls.removeClass('active');
        $(this).addClass('active');
    });


    // banner slider 
    $('.banner-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
    });


    // venobox video play
    $('.venobox').venobox({
        closeBackground:'#e23e38',
        spinner:'wave',
        
    }); 

    // team slider 

    $('.team-slider').slick({
        arrows:false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false,
              arrows:false,
              autoplay:true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay:true,
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
              
            }
          }
          
        ]
      });
      

   // custom cursor
   
    var kursorx = new kursor({

    type: 1,
    color: '#e23e38',

    });


    // testimonial slider

    $('.testimonial-slider').slick({
      arrows:false,
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows:false,
            autoplay:true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            dots: true,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            dots: true,
            
          }
        }
        
      ]
    });


    // counter in funfact
    $('.counter').counterUp({
      delay: 10,
      time: 1000,
  });


  // brand slider
  $('.brand-slider').slick({
    slidesToShow:5,
    slidesToScroll:1,
    prevArrow:'<i class="slick-prev fas fa-chevron-left common-arr left-arrow"></i>',
    nextArrow:'<i class="slick-prev fas fa-chevron-right common-arr right-arrow"></i>',
    centerMode:true,
    centerPadding:'0px',
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          autoplay:true,
          autoplaySpeed:2000,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          autoplay:true,
          autoplaySpeed:2000,
          slidesToShow: 1
        }
      }
    ]

  });

// back to top button
 
  $(window).scroll(function(){

    var scroll =$(window).scrollTop();
    
    if(scroll > 50){
      $(".back-to").addClass("back-to-top");
      $("nav").addClass("nav-fixed");
      $(".navbar-brand").removeClass("logo-padding");
    }

    else{
      $(".back-to").removeClass("back-to-top");
      $("nav").removeClass("nav-fixed");
      $(".navbar-brand").addClass("logo-padding");

    }


    // nav active
    var remove = $('.nav-link');
    if(scroll < 20){
      $(remove).removeClass("active");
      $(".home").addClass("active");
      
    }


  });

  $(".back-to").click(function(){
    $("html,body").animate({
      scrollTop:0,
    });
    


  });

  



    





















})