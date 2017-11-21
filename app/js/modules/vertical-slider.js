$('.vertical_slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 1,
                 slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
                arrows:false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // slidesToScroll: 5,
                vertical: false,
                verticalSwiping: false,
                arrows:false
            }
        }
    ]
});
lightbox.option({
  'disableScrolling': true,
  'showImageNumberLabel': false,
    'wrapAround' : true,
});

