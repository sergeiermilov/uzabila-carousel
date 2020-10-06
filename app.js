(function() {
    $prev = $('#prev');
    $next = $('#next');
    $carouselWindow = $('#carousel_window');
    $slides = $('.slide');
    var slideCount = $slides.length;
    var step = parseInt($carouselWindow.css('width'));

    $('.carousel-button').on('click', function(e) {
        var dir = $(e.target).attr('id');
        var diff = (dir == "prev") ? step : -(step);

        var currLeft = parseInt($slides.css('left'));
        var newLeft = Math.min(0, currLeft + diff);
        newLeft = Math.max(-((slideCount - 1) * step), newLeft);

        $slides.css('left', newLeft);
    })
})()