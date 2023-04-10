const buttons = document.querySelectorAll(".btn");

//1.Це перший варіант через дата-атрибути)
// document.addEventListener("keyup", (event) => {
//   buttons.forEach((element) => {
//     element.style.backgroundColor = "black";
//     if (event.code === element.dataset.code) {
//       element.style.backgroundColor = "blue";
//     }
//   });
// });

window.addEventListener("keydown", (e) => {
  // console.log(e.key);
  document.querySelector(".active")?.classList.remove("active");
  buttons.forEach((btn) => {
    if (btn.textContent.toLowerCase() === e.key.toLowerCase()) {
      btn.classList.add("active");
    }
  });
});
