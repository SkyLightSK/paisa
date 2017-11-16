$(document).ready( function () {


    $('.form-horizontal').fadeOut();
    $('.dropdown_button, .fa-angle-double-down').click( function () {

        $('.form-horizontal').toggleClass('dropped');
        $('.form-horizontal').fadeToggle(1);

        $('.consultation_button_wrapper').fadeToggle(1);

        $('.consultation_button').toggleClass('rotated');
    })



});