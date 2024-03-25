$(function(){
  var reqID;
  function fnScrollMotion (){
    var scrT = $(window).scrollTop();
    var winH = $(window).height();

    var offY = $('.ex1').offset().top
    if(scrT >= offY * 0.6){
      $('.ex1').addClass('active');
    } else {
      $('.ex1').removeClass('active')
    }

    var ex2Top = $('.ex2').offset().top;
    if(scrT >= ex2Top) $('.ex2').addClass('active');
    else $('.ex2').removeClass('active');
  }
  fnScrollMotion();
  
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fnScrollMotion);
  }).resize(function(){
    reqID = requestAnimationFrame(fnScrollMotion);
  })
})

