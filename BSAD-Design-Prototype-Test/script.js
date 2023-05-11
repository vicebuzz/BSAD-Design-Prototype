/*'use strict'*/

/*Function for toggling between showing and hiding the dropdown content*/
function profile_drop_down() {
    document.getElementById("profile_drop_down").classList.toggle("show");
}

/*Closes the dropdown if the user clicks anywhere else*/
window.onclick = function(event) {
    if (!event.target.matches('.profile')) {
        var drop_downs = document.getElementsByClassName("drop_down_content");
        var i;
        for (i = 0; i < drop_downs.length; i++) {
            var open_drop_down = drop_downs[i];
            if (open_drop_down.classList.contains("show")) {
                open_drop_down.classList.remove("show");
            }
        }
    }
}