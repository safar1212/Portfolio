const burgerIcon1 = document.querySelector("#burgerIcon");
const crossIcon1 = document.querySelector("#crossIcon");
const section = document.querySelectorAll("#n1");

burgerIcon1.addEventListener("click", () => {
  document.getElementById("cover").style.cssText =
    "width: 100%; height: 2000px;";
  document.getElementById("crossIcon").style.cssText =
    "display:block; z-index: 2";
  document.getElementById("menu").style.cssText = "display: flex; z-index: 2;";
});
section.forEach((e) => {
  e.addEventListener("click", function () {
    document.getElementById("cover").style.cssText = " width: 0%; height: 0%; ";
    document.getElementById("menu").style.cssText = "display: none;";
    document.getElementById("crossIcon").style.cssText = "display: none;";
  });
});

crossIcon1.addEventListener("click", function () {
  document.getElementById("cover").style.cssText = " width: 0%; height: 0%; ";
  document.getElementById("menu").style.cssText = "display: none;";
  document.getElementById("crossIcon").style.cssText = "display: none;";
});
