$(window).scroll(function(event) {
    var scorll=$(window).scrollTop();
   if(scorll>$('header').height()){
    $('.card').css({
      'position':'fixed',
      'top':0+'px',
    });
      
   }else{
     $('.card').css({
      'position':'absolute',
      'top':$('header').height()+'px',
    });
   }

  /* Act on the event */
});