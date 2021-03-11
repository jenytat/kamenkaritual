$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.m-menu').toggleClass('mm-wrapper_opening');
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
        appendArrows: $('.slider'),
        prevArrow: '<svg class="prev" width="34" height="64" viewBox="0 0 34 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 2.9375L2 32.469L32 62" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        nextArrow: '<svg class="next" width="34" height="64" viewBox="0 0 34 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 61.0625L32 31.531L2 2" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    });
});

