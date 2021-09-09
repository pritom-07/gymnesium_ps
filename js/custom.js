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
    })

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
              slidesToShow: 3,
              slidesToScroll: 3,
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

    })














})