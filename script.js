$(function () {
    let header = $('#header');
    let introH = $('#intro');
    let scrollOffset = 0;

    $(window).on('scroll', function () {

        scrollOffset = $(this).scrollTop();

        if ( scrollOffset >= introH) {
            header.addClass('fixed');
        }else {
            header.removeClass('fixed');
        }

    });

});