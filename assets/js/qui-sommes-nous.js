$(function(){
    
     $(window).scroll(function(){
        scrollVal=$(window).scrollTop();
              
         
         
         if(scrollVal>250){
             
            
            $('header nav>ul').removeClass('center-col');   
            $('header nav').css({'transition':'all ease 1s','position':'fixed','top':'0px'});
            $('header nav>ul>li:first-child').css({'transition':'all ease 1s','display':'block'});

        }
        
         if(scrollVal>900){
             
            
//            $('#sticky').css({'right':'-800px'}); 

        }
         
        else{
          $('header nav>ul').addClass('center-col');   
            $('header nav').css({'transition':'all ease 1s','position':'relative','top':'0px'});
            $('header nav>ul>li:first-child').css({'transition':'all ease 1s','display':'none'});  
              $('#sticky').css({'right':'-730px'}); 
        } 
         
        });
         
  
    
    
});