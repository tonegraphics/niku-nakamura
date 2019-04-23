// humburger
$(function(){
  $('#nav-toggle').click(function(){
      $('.p-hero__header').toggleClass('open');
      $('nav').slideToggle(500);
      console.log("hoge");
  });

  $(window).resize(function(){
      var w = $(window).width();
      console.log(w);
      var x = 1024;
      if (w >= x) {
          $('.p-hero__header').removeClass('open');
          $('nav').css('display', 'block');
      }else {
          $('nav').css('display', 'none');
      }
  });
});


// scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});