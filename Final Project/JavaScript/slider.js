// Essentially this JavaScript code receives an input from the next or previous buttons on the slideshow that signal
// for the designated functions plusSlides and showSlides to display the next image if the next button is clicked
// or to display the previous image if the previous button is pressed.
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}