var time;
var width = window.innerWidth;
console.log(width);
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;




    $('#burger').click(function(){
        $('#burger').toggleClass('clickedburger');
         $('header').toggleClass('responsivetab');
        //ERASE CONSOLE LOGS   
        if($('#burger').hasClass('clickedburger')){
           $('header>h1>img').attr("src", '/assets/img/logo-silver-act-white.svg');
            $('header').css({'height': height,'transition':'all ease 1s'});
             $('body').css({'overflow': 'hidden','transition':'all ease 1s'});
        }else{
            $('header>h1>img').attr("src", '/assets/img/logo-silver-act.svg');
           $('header').css({'height':'100px','transition':'all ease 1s'});
             $('body').css({'overflow': 'scroll','transition':'all ease 1s'});
            
        }
            
    });
    $('#sticky input[type=submit]').click(function(e) {
    e.preventDefault();
    $('#sticky').css({
          'opacity': '0',
        'position': 'absolute',
        'right':'-830px',
        'transition': 'all ease 1s'
    });
        
});
    


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
    time = setTimeout(wait_third_sec, 1500);
});

function wait_third_sec() {
    $('#sticky').css({
        'right': '-830px',
        'transition': 'all ease 1s'
    });
    clearTimeout(time);
}


window.onscroll = function () {
    $('body').bind('DOMMouseScroll', function(e) {
        if (e.originalEvent.detail < 0) {
            console.log($('body').scrollTop());
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
    //IE, Opera, Safari, Chrome
    $('body').bind('mousewheel', function(e) {
        if (e.originalEvent.wheelDelta > 0) {
            if ($('body').scrollTop() > 370) {
                console.log($('#header-move').css('top'));
                if ($('#header-move').css('top') == '-80px') {
                    console.log('oui');
                    $('#header-move').css({
                        top : '0px',
                        opacity : 1,
                        transition : 'all ease 1s'
                    });
                }
            } else {
                if ($('#header-move').css('top') == '0px') {
                    $('#header-move').css({
                        top : '-80px',
                        opacity : 0,
                        transition : 'all ease 1s'
                    });
                }
            }
        }
    });
    //Firefox
    
}
