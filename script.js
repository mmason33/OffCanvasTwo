$(document).ready( function () {

   // Button click for mobile
   $('.menu-btn').click( function (e) {
      e.preventDefault();
      $(this).toggleClass('btn-right');
      $('header.banner').toggleClass('open');
      $('body').toggleClass('to-right');
   });

   // Hove for desktop
   $('.menu-main-menu-container').hover( function () {
      $('header.banner').toggleClass('open');
      $(this).children('ul.sub-menu').toggleClass('animated fadeIn');
      $('body').toggleClass('to-right');
   });

   // Scroll for color of the button on mobile
   $(window).scroll( function () {
      if ($(window).scrollTop() > 200) {
         $('.menu-btn').addClass('blue-menu');
      } else {
         $('.menu-btn').removeClass('blue-menu');
      }
   });

});