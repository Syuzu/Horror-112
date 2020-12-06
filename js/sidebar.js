var targetwidth = window.matchMedia("(max-width: 768px)")

refreshsidebar(targetwidth) // Call listener function at run time
targetwidth.addEventListener("change", refreshsidebar) // Attach listener function on state changes

function refreshsidebar(targetwidth) {
    if (targetwidth.matches) { // If media query matches
        console.log("Switched to Mobile Mode");
    } 
    else {
        console.log("Switched to Desktop Mode");
        document.getElementById("sidebar").style.width = "0%";
    }
}

closesearchbar(targetwidth)
targetwidth.addEventListener("change", closesearchbar)

function closesearchbar(targetwidth) {
  if (targetwidth.matches && searchstate == 1) {
    document.getElementById("dropdownsearch").classList.toggle("showsearch");
    searchstate -= 1;
    console.log("Search bar was left open. Minimised.")
  }
}

mclosesearchbar(targetwidth)
targetwidth.addEventListener("change", mclosesearchbar)

function mclosesearchbar(targetwidth) {
  if (targetwidth.matches && msearchstate == 1) {
    document.getElementById("mdropdownsearch").classList.toggle("mshowsearch");
    msearchstate -= 1;
    console.log("Search bar was left open. Minimised.")
  }
}

function opensidebar() {
    document.getElementById("sidebar").style.width = "100%";
}

function closesidebar() {
    document.getElementById("sidebar").style.width = "0%";
}

var acc = document.getElementsByClassName("sidemenubtn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("sidemenubtnactive");
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } 
    else {
      panel.style.maxHeight = panel.scrollHeight + "1vw";
    } 
  });
}