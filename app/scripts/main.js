
//var currentHash = '/';
//window.location.hash = currentHash;

  currentHash = window.location.hash;
  if ((currentHash === '') ||  (currentHash === '/') || (currentHash === '/#') ||  (currentHash === '/#/')) {
    console.log('currentHash');
  } else {
    var cleanHash = currentHash.replace('/','').replace('#','');
    $('.overlay__content').load(cleanHash);
    var textTitle = $('a[href="' + cleanHash + '"]').find($('h5')).text();
    $('.overlay__header i').html(textTitle);
    $('.overlay').fadeIn();
    $('html, body').addClass('overflow-hidden');
  }; 


  ///////////////////////////////////////  Resuelve el problema de las entradas fuera de la home. dos situaciones
/////////////////////////////////////// buscar el titulo que está en el contenedor que enlaza al hash actual
$('.main').delegate('a', 'click', function() {
  var currentHash = $(this).attr('href');
  window.location.hash = '/' + currentHash;
  $('.overlay__header i').html($(this).find($('h5')).text());
  $('.overlay__content').load($(this).attr('href'));
  $('.overlay').fadeIn('slow');
  $('html, body').addClass('overflow-hidden');
  return false;
});

$( '.overlay__close' ).click(function() {
  $( '.overlay' ).fadeOut();
  $('html, body').removeClass('overflow-hidden');
  window.location.hash = '/';
  $('.overlay__content').empty();
});

$(window).on('hashchange',function(){ 
  if (currentHash !== '') {
  } else {
  };
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

