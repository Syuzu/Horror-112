window.onscroll = function() {displaynavlogo()};

var navbar = document.getElementById("navbarcontainer");
var sticky = navbar.offsetTop;

function displaynavlogo() {
  if (window.pageYOffset >= sticky) {
    document.getElementById("navbarimage").style.display = "inline-block";
  } else {
    document.getElementById("navbarimage").style.display = "none";
  }
}
