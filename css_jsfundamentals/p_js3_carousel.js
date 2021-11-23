const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

var carouselBtnnext = document.getElementById("carousel-button-next");
var carouselBtnprev = document.getElementById("carousel-button-prev");

carouselBtnnext.addEventListener('click', moveToNextSlide);
carouselBtnprev.addEventListener('click', moveToPrevSlide);

function moveToNextSlide(){

if(slidePosition === totalSlides -1){
    slidePosition = 0;
}else{
    slidePosition++;
}

    slides[slidePosition].classList.add("carousel-item-visible")
     
}

function moveToPrevSlide(){

}