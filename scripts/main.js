
//var currentHash = '/';
//window.location.hash = currentHash;

currentHash = window.location.hash;
if (currentHash === '' || currentHash === '/' || currentHash === '/#' || currentHash === '/#/') {
  console.log('currentHash');
} else {
  var cleanHash = currentHash.replace('/', '').replace('#', '');
  $('.overlay__content').load(cleanHash);
  var textTitle = $('a[href="' + cleanHash + '"]').find($('h5')).text();
  //    alert(textTitle);
  /////////////////////////////////////// CLOSE IS THERE IS NOT

  $('.overlay__header i').html(textTitle);
  $('.overlay').fadeIn();
  $('html, body').addClass('overflow-hidden');
};

$('.main').delegate('a', 'click', function () {

  var currentPositionTop = $(this).offset().top - $(window).scrollTop();
  var currentPositionLeft = $(this).offset().left;
  var currentWidth = $(this).width();
  var currentHeight = $(this).height();
  var currentColor = $(this).css('background-color');

  var mainWidth = $('.main').width();
  var mainPositionLeft = $('.main').offset().left;

  var currentHash = $(this).attr('href');
  window.location.hash = '/' + currentHash;
  $('.overlay__header i').html($(this).find($('h5')).text());
  $('.overlay__content').load($(this).attr('href'));
  $('.main').append('<div class="box--transition"></div>');
  $('.overlay').delay(200).fadeIn();
  $('.overlay__header').delay(100).fadeIn();
  $('.box--transition').css('top', currentPositionTop).css('left', currentPositionLeft).css('width', currentWidth).css('height', currentHeight).css('background-color', currentColor);
  $('.box--transition').animate({
    top: '8rem',
    left: mainPositionLeft,
    width: mainWidth,
    height: '56rem'
  }, 300, function () {
    $('.overlay__content').fadeIn();
    $('.box--transition').fadeOut();
  });

  $('html, body').addClass('overflow-hidden');
  return false;
});

$('.overlay__close').click(function () {
  $('.overlay').fadeOut();
  $('html, body').removeClass('overflow-hidden');
  window.location.hash = '/';
  $('.overlay__content').empty().hide();
});

$(window).on('hashchange', function () {
  if (currentHash !== '') {} else {};
});
//# sourceMappingURL=main.js.map
