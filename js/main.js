


let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
      this.firstElementChild.src = "images/light.svg";
    } else {
        this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});