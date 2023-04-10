let createNewUser = function () {
  let newuser = {
    firstName: prompt("Введіть ваше ім'я"),
    lastName: prompt("Введіть ваше прізвище"),

    getLogin() {
      return `${this.firstName[0]}${this.lastName}`.toLowerCase();
    },
  };
  return newuser;
};
let user1 = createNewUser();
console.log(user1.getLogin());
