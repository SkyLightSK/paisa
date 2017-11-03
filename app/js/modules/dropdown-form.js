$(document).ready( function () {


    $('.form-horizontal').fadeOut();
    $('.dropdown_button, .fa-angle-double-down').click( function () {

        $('.form-horizontal').toggleClass('dropped');
        $('.form-horizontal').fadeToggle('slow');

        $('.consultation_button_wrapper').fadeToggle('fast');

        $('.consultation_button').toggleClass('rotated');
    })



});