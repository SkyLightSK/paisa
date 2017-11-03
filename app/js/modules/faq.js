$(document).ready(function () {

    $('.faq_item_description').each(function () {

        var elemHeight = $(this).height();
        var elemTitle = $(this).parent().find('.faq_item_title');

        elemTitle.on('click',function () {

            $(this).parent().find('.faq_item_description').toggle(
                function(){$(this).css({"max-height":  "0px", "transition": "max-height .4s linear"});},
                function(){$(this).css({"max-height":  elemHeight+"px", "transition": "max-height .4s linear"});
            });

        });

        elemTitle.click();

    });


});
