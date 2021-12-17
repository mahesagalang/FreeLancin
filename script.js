// humburger menu

let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let navbar = document.querySelector("nav ul");
menu.addEventListener("click", function () {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("close-menu");
});

// if user click projects image
let clickImage = document.querySelector(".quarter");

clickImage.addEventListener("click", function () {
  clickImage.classList.toggle("clickImage");
});

// header section

let tombol = document.querySelector(".button");
let sectionRight = document.querySelector(".section-header-right");
let sectionLeft = document.querySelector(".section-header-left");
let headerRight = document.querySelector("section .section-header-right");

tombol.addEventListener("click", function () {
  sectionLeft.classList.toggle("replace-card-element");
  sectionRight.classList.toggle("replace-card-element2");
  headerRight.classList.toggle("add-Profile");
});
