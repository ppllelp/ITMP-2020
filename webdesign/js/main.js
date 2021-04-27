
// scroll หน้าจอ
jQuery(document).ready(function($) {

    'use strict';

    var top_header = $('.first');
    top_header.css({'background-position':'center center'}); 
    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(5% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.buttonontheright',
        offset: 200
    });
      
    // slide หน้า port
    var owl = $("#owl-testimonials");

      owl.owlCarousel({
        
        pagination : true,
        paginationNumbers: false,
        autoPlay: 2300, //เวลาในการขยับ
        items : 4, //โชว์4อันก่อน หน้าจอใหญ่
        itemsDesktop :  [992, 4], 
        itemsDesktopSmall : [974, 2], 
        itemsTablet:  false, 
        itemsMobile :  [558, 1], 
        
    });


});
