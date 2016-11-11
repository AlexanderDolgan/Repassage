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

    //button animation
    $(function() {
        $('.btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        $('[href=#]').click(function(){return false});
    });

});