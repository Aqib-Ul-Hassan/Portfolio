$(function(){
  /*var effect = 'animated zoomOutLeft';*/
  var stopEffect = 'animationend';

  $('.box-1').click(function(){
    $(this).addClass('animated zoomOutLeft').one(stopEffect, function(){
      $(this).removeClass('animated zoomOutLeft');
    });
  });

  $('.box-2').click(function(){
    $(this).addClass('animated heartBeat').one(stopEffect, function(){
      $(this).removeClass('animated heartBeat slow');
    });
  });

  $('.box-3').click(function(){
    $(this).addClass('animated zoomOutRight').one(stopEffect, function(){
      $(this).removeClass('animated zoomOutRight');
    });
  });
});
