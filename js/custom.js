$(function(){

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
        slidesToShow:4,
        slidesToScroll:1,
    });



})