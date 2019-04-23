$(function(){
    $('#nav_toggle').click(function(){
        $('.p-hero__header').toggleClass('open');
        $('nav').slideToggle(500);
    });
});