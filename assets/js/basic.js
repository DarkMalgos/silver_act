window.onscroll = function toto() {
    if ($('body').scrollTop() < 979){
        console.log('ouiiiii');
    }
    else if ($('body').scrollTop() >= 980) {
        console.log('toto');
    } 
}
var titi;

function bouh() {
        $('#sticky input[type=tel]').click(function() {
        console.log('fix');
        $('#sticky').css({
            'right': '0px',
            'transition': 'all ease 1s'
        });
        console.log('after');
    });
}

bouh();


$('#sticky input[type=submit]').click(function(e) {
    e.preventDefault();
    $('#sticky form').css({
        'display': 'none'
    });
    $('#send').css({
        'display': 'inline-block'
    });
    titi = setTimeout(wait_third_sec, 3000);
});

function wait_third_sec() {
    $('#sticky').css({
        'right': '-730px',
        'transition': 'all ease 1s'
    });
    $('#sticky form').css({
        'display': 'flex'
    });
    $('#send').css({
        'display': 'none'
    });
    $('#sticky').hover(function() {
        console.log('in');
        $('#sticky').css({
            'right': '0px',
            'transition': 'all ease 1s'
        });
    }, function() {
        console.log('out');
        $('#sticky').css({
            'right': '0px',
            'transition': 'all ease 1s'
        });
    });
    bouh();
    clearTimeout(titi);
}