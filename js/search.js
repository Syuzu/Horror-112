/* When the user clicks on the search icon, toggle between hiding and showing the search bars */
var searchstate = 0
var msearchstate = 0

function togglesearch() {
  if (searchstate == 0) {
    document.getElementById("dropdownsearch").classList.toggle("showsearch");
    searchstate += 1;
    console.log(searchstate);
  }
  else if (searchstate == 1) {
    document.getElementById("dropdownsearch").classList.toggle("showsearch");
    searchstate -= 1;
    console.log(searchstate);
  }
}

function mtogglesearch() {
  if (msearchstate == 0) {
    document.getElementById("mdropdownsearch").classList.toggle("mshowsearch");
    msearchstate += 1;
    console.log(msearchstate);
  }
  else if (msearchstate == 1) {
    document.getElementById("mdropdownsearch").classList.toggle("mshowsearch");
    msearchstate -= 1;
    console.log(msearchstate);
  }
}

//  !! Toggling of search bar states is in sidebar.js !!