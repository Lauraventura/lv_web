// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("bottom_dr").style.display = "block";
  } else {
    document.getElementsByClassName("bottom_dr").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//$(document).ready(function () {
//  $(window).scroll(function () {
//    var top =  $(".bottom_dr");
//        if ( $('body').height() <= (    $(window).height() + $(window).scrollTop() + 200 )) {
//  top.animate({"margin-left": "0px"},1500);
//        } else {
//            top.animate({"margin-left": "-100%"},1500);
//        }
//    });

//    $(".bottom_dr").on('click', function () {
//        $("html, body").animate({scrollTop: 0}, 400);
//    });
//});
