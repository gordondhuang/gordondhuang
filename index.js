var slideIndex = 0;
const nameId = document.getElementById('name');
const slideContainer = document.getElementsByClassName("slideshow_container");
var slideshowImg = document.getElementsByClassName("slideshow_img");
start();

function start(){
    carousel();
    slideshowImg.clientHeight = slideshow_container.clientHeight;
}
function carousel(){
    var i;
    for(i = 0; i < slideshowImg.length; i++){
        slideshowImg[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slideshowImg.length) {slideIndex = 1}
    slideshowImg[slideIndex-1].style.display = "block";
    setTimeout(carousel, 10000); // change image every 10 seconds
}

function slideShowAni(){
    
}
