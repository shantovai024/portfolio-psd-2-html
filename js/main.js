$(document).ready(function(){

   // wow js 

    new WOW().init();

    // counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

        // Testimonial slider 
        $('.testi-active').owlCarousel({
            loop:true,
            nav:true,
            navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
            dots:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        })


})