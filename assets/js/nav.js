$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $(this).toggleClass('open');
  $('.page-wrap').toggleClass('disabled');
  $('body').toggleClass('disabled');
});
