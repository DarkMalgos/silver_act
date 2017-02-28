var titi;

$('#sticky input[type=tel]').click(function() {
    $('#sticky').css({
        'right': '0px',
        'transition': 'all ease 1s'
    });
});


$('#sticky input[type=submit]').click(function(e) {
    e.preventDefault();
    $('#sticky form').css({
        'display': 'none'
    });
    $('#send').css({
        'display': 'flex'
    });
    titi = setTimeout(wait_third_sec, 3000);
});

function wait_third_sec() {
    $('#sticky').css({
        'right': '-830px',
        'transition': 'all ease 1s'
    });
    clearTimeout(titi);
}

window.onscroll = function () {
    $('body').bind('DOMMouseScroll', function(e) {
        console.log('ta mere');
        if (e.originalEvent.detail < 0) {
            console.log($('body').scrollTop())
            if ($('body').scrollTop() > 160) {
                console.log('ta soeur')
                if ($('#header-move').css('display') == 'none') {
                    $('#header-move').css({
                        display : 'block',
                        opacity : '1',
                        transition : 'all ease 1s'
                    });
                }
            } else {
                if ($('#header-move').css('display') == 'block') {
                    $('#header-move').css({
                        display : 'none',
                        opacity : '0',
                        transition : 'all ease 1s'
                    });
                }
            }
        }
    });
    //IE, Opera, Safari, Chrome
    $('body').bind('mousewheel', function(e) {
        console.log($('body').scrollTop());
        if (e.originalEvent.wheelDelta > 0) {
            if ($('body').scrollTop() > 160) {
                if ($('#header-move').css('display') == 'none') {
                    $('#header-move').css({
                        display : 'block',
                        opacity : '1',
                        transition : 'all ease 1s'
                    });
                }
            } else {
                if ($('#header-move').css('display') == 'block') {
                    $('#header-move').css({
                        display : 'none',
                        opacity : '0',
                        transition : 'all ease 1s'
                    });
                }
            }
        }
    });
    //Firefox
    
}