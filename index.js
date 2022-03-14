var slideIndex = 0;
const nameId = document.getElementById('name');
const slideContainer = document.getElementsByClassName("slideshow_container");
var slideshowImg = document.getElementsByClassName("slideshow_img");
start();

function start(){
    update();
}
function update(){
    carousel();
}
function carousel(){
    var i;
    for(i = 0; i < slideshowImg.length; i++){
        slideshowImg[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slideshowImg.length) {slideIndex = 1}
    slideshowImg[slideIndex-1].style.display = "block";
    slideshowImg[slideIndex-1].clientHeight = slideContainer.clientHeight;
    setTimeout(carousel, 10000); // change image every 10 seconds
}


