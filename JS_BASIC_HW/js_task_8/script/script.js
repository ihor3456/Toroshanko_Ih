let paragraphs = document.querySelectorAll("p");
for (let paragraph of paragraphs) {
  paragraph.style.backgroundColor = "#ff0000";
}

console.log(document.getElementById("optionsList"));
console.log(document.getElementById("optionsList").parentElement);
// console.log(document.getElementById("optionsList").childNodes);

let childs = document.getElementById("optionsList").childNodes;
for (let child of childs) {
  console.log(child);
  console.log(child.nodeType);
}

document.getElementById("testParagraph").textContent = "This is a paragraph";

let header = document.getElementsByClassName("main-header")[0];
// console.log(header);
// console.log(header.children);
for (let child of header.children) {
    child.classList.add("nav-item")
}

let section = document.getElementsByClassName("section-title")
for (let i of Array.from(section)) {
    i.classList.remove("section-title")
}
