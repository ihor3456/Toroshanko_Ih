//Створити функцію, яка прийматиме на вхід масив і опціональний другий аргумент parent - DOM-елемент,
//до якого буде прикріплений список (по дефолту має бути document.body.
//кожен із елементів масиву вивести на сторінку у вигляді пункту списку;

function createdItemList(arr, arg = document.body) {
  arr.forEach((element) => {
    const itemList = document.createElement("li");
    itemList.innerHTML = element;
    document.body.append(itemList);
  });
}
createdItemList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]);
