$(document).ready(function() {

  // Hover sur les captions
  $('.caption').hover ( function() {
    $(this).children(".overlay").fadeToggle("fast");
  });
  // Charge country sur le formulaire
  $('.flagstrap').flagStrap();

  $('#signUp').on('show', function() {
    console.log("coucou");
  });
});
