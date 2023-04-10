let numFirst = +prompt("Введіть перше число");
while (isNaN(numFirst)) {
  numFirst = +prompt("Введіть правильне число");
}
let numSecond = +prompt("Введіть друге число");
while (isNaN(numSecond)) {
  numSecond = +prompt("Введіть коректне число");
}
let operator = prompt("Введите знак операции");

function calcResult(numFirst, numSecond, operator) {
  return eval(numFirst + operator + numSecond);
}

console.log(calcResult(numFirst, numSecond, operator));
