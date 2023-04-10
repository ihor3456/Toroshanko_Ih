const user1 = {
  name: "John",
  years: 30,
};

// Деструктурирующее присваивание:
const { name: name, years: age, isAdmin = false } = user1;

console.log(name); // "John"
console.log(age); // 30
console.log(isAdmin); // false, если свойства isAdmin нет
