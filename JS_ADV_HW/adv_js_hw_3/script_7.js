const array = ["value", () => "showValue"];

// Допишіть код тут

let [value, showValue] = array;

alert(value); // має бути виведено 'value'
alert(showValue()); // має бути виведено 'showValue'
