const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme")) {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

if (localStorage.getItem("theme")) {
  document.body.classList.add("dark-theme");
}
// document.addEventListener("DOMContentLoaded", () => {
//   init();
// });
// function init() {
//   if (localStorage.getItem("theme")) {
//     document.documentElement.setAttribute("theme", "dark");
//   } else {
//     document.documentElement.removeAttribute("theme");
//   }
// }
// const toggleBtn = document.querySelector("#toggle-theme");
// toggleBtn.addEventListener("click", function () {
//   if (document.documentElement.hasAttribute("theme")) {
//     document.documentElement.removeAttribute("theme");
//     localStorage.removeItem("theme");
//   } else {
//     document.documentElement.setAttribute("theme", "dark");
//     localStorage.setItem("theme", 1);
//   }
// });
