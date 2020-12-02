window.onscroll = function() {myFunction()};

var header = document.getElementById("navScroll");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById("navLogo").style.width = "100%";
    document.getElementById("navLogo").style.height = "100%";
  } else {
    header.classList.remove("sticky");
    document.getElementById("navLogo").style.width = "0";
    document.getElementById("navLogo").style.height = "0";
  }
}