/** ACTIVITY CLICK **/

$('.activity').click(function(){
    $('#activities-content').css({'right':'0px','transition':'all ease 1s','opacity':'1'});
   
});

$('#close-activity').click(function(){
    
    $('#activities-content').css({'right':'-100%','transition':'all ease 1s','opacity':'0'});
     $('#activities-html').css({'opacity':'0','transition':'all ease 1s'});
    
    
});

/** ACTIVITY LOAD **/

$('#memory').click(function(){
    $('#activities-content').css('background-color','#db0a5b')
    $( "#activities-html" ).css({'opacity':'1','transition':'all ease 1s'}).load( "nos-activites-contenu/memoire-et-stimulation.html" );
   
});


$('#outings').click(function(){
    $('#activities-content').css('background-color','#f64747');
    $( "#activities-html" ).css({'opacity':'1','transition':'all ease 1s'}).load( "nos-activites-contenu/sorties-et-balades.html" );
 
   
});

$('#sport').click(function(){
    $('#activities-content').css('background-color','#f7ca18');
    $( "#activities-html" ).css({'opacity':'1','transition':'all ease 1s'}).load( "nos-activites-contenu/activites-physiques-adaptees.html" );
   
});

$('#private-classes').click(function(){
    $('#activities-content').css('background-color','#4ecdc4');
    $( "#activities-html" ).css({'opacity':'1','transition':'all ease 1s'}).load( "nos-activites-contenu/cours-a-domicile.html" );
   
});

$('#beauty').click(function(){
    $('#activities-content').css('background-color','#a2ded0');
    $( "#activities-html" ).css({'opacity':'1','transition':'all ease 1s'}).load( "nos-activites-contenu/atelier-beaute.html" );
   
});

$('#fun-activities').click(function(){
    $('#activities-content').css('background-color','#ccc');
    $( "#activities-html" ).css({'opacity':'1','transition':'all ease 1s'}).load( "nos-activites-contenu/activities-ludiques.html" );
   
});

