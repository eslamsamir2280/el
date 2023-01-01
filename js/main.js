var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");

sidenav.style.right = "-250px";
sidenav.style.top = "80px";
menubtn.onclick = function () {
  if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";
  } else {
    sidenav.style.right = "-250px";
  }
};
let span = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 400
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
new TomSelect("#select-beast-empty", {
  allowEmptyOption: true,
  create: true,
});
new TomSelect("#select-gov", {
  allowEmptyOption: true,
  create: true,
});
