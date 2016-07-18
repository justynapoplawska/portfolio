
var currentHash = '';
var nowClick;
$('.main').delegate('a', 'click', function () {
  var currentHash = $(this).attr('href');
  window.location.hash = currentHash;
  $('.overlay__header i').html($(this).find($('h5')).text());
  $('.overlay__content').load($(this).attr('href'));
  $('.overlay').fadeIn();
  $('html, body').addClass('overflow-hidden');
  return false;
});

$('.overlay__close').click(function () {
  $('.overlay').fadeOut();
  $('html, body').removeClass('overflow-hidden');
});

$(window).on('hashchange', function () {
  if (currentHash !== '') {} else {};
});

// var newHash     = '',
//    $overlay = $('.overlay');

// $('.main').delegate('a', 'click', function() {
//   window.location.hash = $(this).attr('href');
//   $('.overlay__header i').html($(this).find($('h5')).text());
//   $('.overlay__content').load($(this).attr('href'));
//   $('.overlay').fadeIn();
//   $('html, body').addClass('overflow-hidden');
//   return false;
// });

// $( ".overlay__close" ).click(function() {
//   $( ".overlay" ).fadeOut();
//   $('html, body').removeClass('overflow-hidden');
// });
//# sourceMappingURL=main.js.map
