
$('.main').delegate('a', 'click', function() {
   window.location.hash = $(this).attr('href');
   return false;
});
 
$(window).on('hashchange',function(){ 
  if (window.location.hash !== "") {
    alert('content');
  } else {
    alert('welcome home');
  };
});

function showContent(page) {
  alert(page);
}
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

