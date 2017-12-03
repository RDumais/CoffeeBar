$('#menuText').click(function() {
  if ($(window).width() < 768) {
    $('.collapse').collapse('toggle');
  }
});
