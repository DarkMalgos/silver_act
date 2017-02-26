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