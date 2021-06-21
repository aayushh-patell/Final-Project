// Upon click of the hamburger icon in the navigation bar on small screens, this code will execute to display all
// navigation options rather than only the home page option when the navigation bar is minimized
function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className == "topnav") {
        x.className += " responsive";
    } 
    
    else {
        x.className = "topnav";
    }
}