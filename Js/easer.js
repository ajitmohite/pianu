$(function() {
  if ($('.nav').attr('fix') == 'True') {
      var nav = $('.nav');
      var h = nav.offset().top;
      $(window).scroll(function() {
          if ($(this).scrollTop() > h) {
              nav.addClass('fixed');
          }

          else {
              nav.removeClass('fixed');
          }
      });
  }
});