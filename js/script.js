document.addEventListener('scroll', function(){
  var element = document.getElementById('bottom_dr')
  element.classList.remove('bottom_dr-hidden')

  if (document.getElementById('wrapper').scrollTop === 0) {
    element.classList.add('bottom_dr-hidden')
  }
})


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  let someItemActive = false;
  $('.seccioMenu').each(function() {
    const menuItem = $('#' + $(this).data('id_item_menu'))
    if ($(this).isInViewport()) {
      if (!someItemActive) menuItem.addClass('active');
      someItemActive = true;
    } else {
      menuItem.removeClass('active');
    }
  });
});