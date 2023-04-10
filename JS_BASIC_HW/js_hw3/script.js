const userNumber = prompt("Введіть число");
let isNumber = true;
for (let i = 1; i < userNumber; i++) {
  if (i % 5 === 0) {
    console.log(i);
    isNumber = false;
  }
}

if (isNumber) {
  console.log("Sorry, no numbers");
}
