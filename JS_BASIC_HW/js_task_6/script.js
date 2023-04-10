const createNewUser = function (firstName, lastName) {
  const _firstName = prompt("Enter your name.");
  const _lastName = prompt("Enter your last name.");
  let _birthday = prompt("Enter your birthday date (dd.mm.yyyy)");
  _birthday = new Date(_birthday.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1"));
  return (newUser = {
    firstName: _firstName,
    lastName: _lastName,
    birthday: _birthday,
    getLogin: function () {
      return (
        this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
      );
    },
    getAge: function () {
      let todayDate = new Date();

      return Math.floor(
        (todayDate - this.birthday) / (1000 * 60 * 24 * 60 * 365)
      );
    },
    getPassword: function () {
      return (
        this.firstName.charAt(0).toUpperCase() +
        this.lastName.toLowerCase() +
        this.birthday.getFullYear()
      );
    },
  });
};

createNewUser();
newUser.getLogin();

console.log(newUser);
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());
