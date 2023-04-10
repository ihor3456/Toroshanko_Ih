let userName = prompt("Ваше ім'я");
while (userName.length <= 2) {
  userName = prompt("Введіть конкретне ім'я");
}
let userAge = +prompt("Вік");
while (isNaN(userAge)) {
  userAge = +prompt("Введіть коректний вік");
}

if (userAge < 18) {
  alert("You are not allowed to visit this website.");
} else if (userAge >= 18 && userAge <= 22) {
  let rec = confirm("Are you sure you want to continue?");
  if (rec) {
    alert("Welcome " + userName);
  } else {
    alert("You are not allowed to visit this website.");
  }
} else if (userAge > 22) {
  alert("Welcome " + userName);
}
