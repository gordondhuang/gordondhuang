let slideIndex = 0;
const SLIDE_CONTAINER = document.getElementsByClassName("slideshow_container");
let slideshowImg = document.getElementsByClassName("slideshow_img");
start();

function start(){
    update();
}
function update(){
    carousel();
}
function carousel(){
    let i;
    for(i = 0; i < slideshowImg.length; i++){
        slideshowImg[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slideshowImg.length) {slideIndex = 1}
    slideshowImg[slideIndex-1].style.display = "block";
    slideshowImg[slideIndex-1].clientHeight = SLIDE_CONTAINER.clientHeight;
    setTimeout(carousel, 10000); // change image every 10 seconds
}


