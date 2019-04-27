document.addEventListener('scroll', function(){
  var element = document.getElementById('bottom_dr')
  element.classList.remove('bottom_dr-hidden')

  if (document.getElementById('wrapper').scrollTop === 0) {
    element.classList.add('bottom_dr-hidden')
  }
})


