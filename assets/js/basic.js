$(function(){
    $(window).scroll(function(){
        scrollVal=$(window).scrollTop();
        if(scrollVal>250) {
                $('header nav>ul').removeClass('center-col');   
                $('header nav').css({
                    'transition':'all ease 1s',
                    'position':'fixed',
                    'top':'0px'
                });
                $('header nav>ul>li:first-child').css({
                    'transition':'all ease 1s',
                    'display':'block'
                });
            } else {
                $('header nav>ul').addClass('center-col');   
                $('header nav').css({
                    'transition':'all ease 1s',
                    'position':'relative',
                    'top':'0px'
                });
                $('header nav>ul>li:first-child').css({
                    'transition':'all ease 1s',
                    'display':'none'
                }); 
            } 
    });
});
var titi;

function toto() {
    
    $('#sticky input[type=tel]').click(function() {
        console.log('fix');
        $('#sticky').css({
            'right': '0px',
            'transition': 'all ease 1s'
        });
        console.log('after');
});
}

toto();

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
            'right': '-730px',
            'transition': 'all ease 1s'
        });
    });
    clearTimeout(titi);
}