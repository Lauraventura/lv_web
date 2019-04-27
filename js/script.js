document.addEventListener('scroll', function(){
  var element = document.getElementById('bottom_dr')
  element.classList.remove('bottom_dr-hidden')

  if (document.getElementById('wrapper').scrollTop === 0) {
    element.classList.add('bottom_dr-hidden')
    //clearInterval(a)
  }
})


//function descreaseScroll() {
//  console.log('HOLA')
//  var element = document.getElementById('wrapper')
//  element.scrollTop -= 10
//}
// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//  var a = setInterval(descreaseScroll, 1)
//}