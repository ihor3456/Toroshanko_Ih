class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
    this._salary = salary * 3;
  }
  // get salary() {
  //   return (this._salary = salary * 3);
  // }
}

const backEnd = new Programmer("Ihor", 21, 5000, "Node.js");
const frontEnd = new Programmer("Illia", 32, 4000, "JS");
const devOps = new Programmer("Vasya", 25, 7000, "Docker");
console.log(backEnd);
console.log(frontEnd);
console.log(devOps);
