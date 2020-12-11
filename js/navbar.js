window.onscroll = function() {displaynavlogo()};


var navbar = document.getElementById("navbarcontainer");
var sticky = navbar.offsetTop;

function displaynavlogo() {
  if (window.pageYOffset >= sticky) {
    document.getElementById("navbarimage").style.display = "inline-block";
  } else {
    document.getElementById("navbarimage").style.display = "";
  }
}

var mobilewidth = window.matchMedia("(max-width: 768px)")

fixnavbar(mobilewidth)
mobilewidth.addEventListener("change", fixnavbar)

function fixnavbar(mobilewidth) {
  if (mobilewidth.matches){
    document.getElementById("navbarcontainer").classList.add('fixed-top');
    document.getElementById("navbarcontainer").classList.remove('sticky-top');
    document.getElementById("navbarimagecontainer").style.padding = "0 0 0 15px";
  }
  else {
    document.getElementById("navbarcontainer").classList.add('sticky-top');
    document.getElementById("navbarcontainer").classList.remove('fixed-top');
  }
}