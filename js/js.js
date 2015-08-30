$(document).on('ready', function () {

    function scrollViewport() {
        $(".main-nav a").on('click', function () {
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 'slow');
            return false; //zeby sie nie przeladowala strona po klinknieciu na li
        });
    }
    scrollViewport();


        var scrollPosition = $(window).scrollTop();
        $(window).scroll(function (){
        if (scrollPosition > 10) {
            myNavigation.addClass('sticky');
        } else {
            myNavigation.removeClass('sticky');
        }
    });



});

