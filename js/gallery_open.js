var mainImages = document.getElementsByClassName("img-gallery-2");
var modal = document.getElementById("myModal");
var button = document.getElementById("close-button");
var slideIndex = 1;

function open() {
  for (let i = 0; i < mainImages.length; i++) {
    mainImages[i].addEventListener("click", function () {
      modal.style.display = "block";
      showSlides((slideIndex = i + 1));
    });
  }
}
open();

function close() {
  button.addEventListener("click", function () {
    modal.style.display = "none";
  });
}
close();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
