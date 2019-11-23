$(window).scroll(function(event) {
var scroll=$(window).scrollTop();
if(scroll>$('header').height()){
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