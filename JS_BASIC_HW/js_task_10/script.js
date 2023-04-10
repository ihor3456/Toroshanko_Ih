let mainTabs = document.getElementById("tabs-btn");

let liText = document.getElementById("tabs-text");

liText.style.visibility = "hidden";

mainTabs.addEventListener("click", changeColors);

function changeColors(event) {
  Array.from(mainTabs.children).forEach((elem) => {
    if (elem === event.target) {
      elem.style.color = "#23201D";
      elem.style.backgroundColor = "#937341";
    } else {
      elem.style.color = "#937341";
      elem.style.backgroundColor = "#23201D";
    }
  });

  let li = document.querySelectorAll("[data-name]");

  Array.from(li).forEach((i) => {
    if (event.target.innerText === i.dataset.name) {
      i.style.visibility = "visible";
    } else {
      i.style.visibility = "hidden";
    }
  });
}
