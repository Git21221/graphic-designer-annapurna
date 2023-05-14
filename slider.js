$(document).ready(function () {
    var slideWidth = $('.slider').width() / 2;

    $('.slides-container').css('transform', 'translateX(-' + slideWidth + 'px)');

    $('.slider').on('click', '.prev', function (e) {
        e.preventDefault();
        $('.slides-container').animate({
            left: '+=' + slideWidth
        }, 1, function () {
            $('.slide:last-child').prependTo('.slides-container');
            $('.slides-container').css('left', -slideWidth);
        });
    });

    $('.slider').on('click', '.next', function (e) {
        e.preventDefault();
        $('.slides-container').animate({
            left: '-=' + slideWidth
        }, 1, function () {
            $('.slide:first-child').appendTo('.slides-container');
            $('.slides-container').css('left', -slideWidth);
        });
    });
});
