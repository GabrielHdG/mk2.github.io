var toggle = document.getElementById("toggle-click");
var display = document.getElementById("navbar-display");

toggle.addEventListener("click", function () {
  if ((display.style.display === "none")) {
    display.style.display = "flex";
    display.style.position = "absolute"
    display.style.marginTop = "220px"
  } else {
    display.style.display = "none";
  }
});
