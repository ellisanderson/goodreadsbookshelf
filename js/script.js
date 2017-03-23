$(document).ready(function(){
  $('.dropdown-menu').hide();
  $('.hamburger').click(function(){
    $('.dropdown-menu').slideToggle('slow');
  })
});
