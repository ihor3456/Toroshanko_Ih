const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

const newEmployee = { ...employee, age: 30, salary: 50000 };

console.log(newEmployee);
