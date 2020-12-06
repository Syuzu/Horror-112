window.onscroll = function() {navbarsticky()};

var navbar = document.getElementById("navigationbar");
var sticky = navbar.offsetTop;

function navbarsticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById("navbarlogo-container").style.display = "inline-block";
    console.log("Navbar Stickied");
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("navbarlogo-container").style.display = "none";
    console.log("Navbar Unstickied");
  }
}
