var toggle = document.getElementById("toggle-click");
var display = document.getElementById("navbar-display");
var item = document.getElementsByClassName("nav-item");

toggle.addEventListener("click", function () {
  if (display.style.height === "0px") {
    display.style.height = "50vh";
    display.style.visibility = "visible";
  } else {
    display.style.height = "0px";
    display.style.visibility = "hidden";
  }
});
