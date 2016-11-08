//hamburger button top-nav

$(document).ready(function () {

    var $nav = $('.top-nav'),
        $hamBtn = $('.ham-btn'),
        $lHero = $('.l-hero');

    $hamBtn.stop().on('click touchstart', function (evt) {
        evt.preventDefault();
        $hamBtn.toggleClass('ham-open');
        $lHero.fadeToggle(0);

        if ($nav.css('display') === 'flex') {
            $nav.css('display', 'none');
            console.log($nav.css('display'));
        } else {
            $nav.css('display', 'flex');
            console.log($nav.css('display'));
        }
    }); // ham-btn on click/touch event

});