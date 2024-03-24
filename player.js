document.addEventListener("DOMContentLoaded", function() {
  var myButton = document.getElementById("myButton");
  var target = document.getElementById(myButton.getAttribute("data-bs-target").slice(1)); // убираем # из id

  if (target.classList.contains("show")) {
      myButton.setAttribute("aria-expanded", "true");
  } else {
      myButton.setAttribute("aria-expanded", "false");
  }
});