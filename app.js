/*  light/dark theme  */

var icon = document.getElementById("icon");
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "dark");
}
let localData = localStorage.getItem("theme");
if (localData == "dark") {
  icon.src = "img/sun.png";
  avatar.src = "img/avatar2.png";
  document.body.classList.remove("light-theme");
} else if (localData == "light") {
  icon.src = "img/moon.png";
  avatar.src = "img/avatar.png";
  document.body.classList.add("light-theme");
}
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "img/moon.png";
    avatar.src = "img/avatar.png";
    localStorage.setItem("theme", "light");
  } else {
    icon.src = "img/sun.png";
    avatar.src = "img/avatar2.png";
    localStorage.setItem("theme", "dark");
  }
};

/*  active dashboard link  */

function clickSingleA(a) {
  items = document.querySelectorAll(".link.active");
  if (items.length) {
    items[0].className = "link";
  }
  a.className = "link active";
}
