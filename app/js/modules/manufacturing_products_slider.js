
$('.slider-1').slick({
    slidesToShow: 1,
    prevArrow: '<div class="arrow feat-prev"></div>',
    nextArrow: '<div class="arrow feat-next"></div>',
    slide: '.featured-slide-1',
    asNavFor: '.slider-nav-1',
    fade: true,
    autoplay: true,
});

$('.slider-nav-1').slick({
    slidesToShow: 4,
    slide: '.slide-link-1',
    asNavFor: '.slider-1',
    arrows: false,
    focusOnSelect: true,
});
