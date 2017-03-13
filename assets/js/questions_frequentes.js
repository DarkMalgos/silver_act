
    
    $('.question-answer').click(function(){
        $(this).toggleClass('rotated-q');  
    });


   $('.q-impots').click(function(){
        $(this).toggleClass('q-impots-clicked');  
       $('.question-answer+.question-answer').toggleClass('q-opacity');  
    });

  $('.q-securite').click(function(){
        $(this).toggleClass('q-securite-clicked');  
       $('.question-answer').toggleClass('q-opacity'); 
      $('.question-answer:nth-child(5)').toggleClass('q-opacity');
    });

