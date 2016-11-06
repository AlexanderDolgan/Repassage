//hamburger button top-nav

$(document).ready(function () {

    var $nav = $('.top-nav'),
        $hamBtn = $('.ham-btn');

    $hamBtn.on('click touchstart', function (evt) {
        evt.preventDefault();
        $hamBtn.toggleClass('ham-open');
        if ($nav.css('display') === 'flex') {
            $nav.css('display', 'none');
            console.log($nav.css('display'));
        } else {
            $nav.css('display', 'flex');
            console.log($nav.css('display'));
        }
    }); // ham-btn on click/touch event

});