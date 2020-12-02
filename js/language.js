/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function clickLanguage() {
    document.getElementById("language").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event){
    if (!event.target.matches(".clickdropbtn")){
        var dropdowns = document.getElementsByClassName("clickdropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}