$(function() {
  $(".menu-btn").click(function() {
    $(this).toggleClass("active");
    $('.menu-drawer').toggleClass("open");
    $('.overlay').toggleClass("open2");
    
  });
});


$(function() {
  $(".close-menu").click(function() {
    $(this).toggleClass("active");
    $('.menu-drawer').removeClass("open");
    $('.overlay').removeClass("open2");
    
  });
});