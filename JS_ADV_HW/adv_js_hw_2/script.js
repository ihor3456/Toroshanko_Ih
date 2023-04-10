const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

const root = document.getElementById("root");

// Создаем элемент списка ul
const ul = document.createElement("ul");

// Проходимся по каждому объекту в массиве и добавляем его в список
books.forEach((book) => {
  try {
    // Проверяем наличие всех свойств в объекте
    if (!book.hasOwnProperty("author")) {
      throw new Error('Ошибка: объект не содержит свойство "author"');
    }

    if (!book.hasOwnProperty("name")) {
      throw new Error('Ошибка: объект не содержит свойство "name"');
    }

    if (!book.hasOwnProperty("price")) {
      throw new Error('Ошибка: объект не содержит свойство "price"');
    }

    // Создаем элемент списка li
    const li = document.createElement("li");

    // Заполняем элемент списка li данными из объекта
    li.innerHTML = `${book.author}, "${book.name}", ${book.price}$`;

    // Добавляем элемент списка li в список ul
    ul.appendChild(li);
  } catch (err) {
    console.error(err.message);
  }
});

// Добавляем список ul в элемент div с id "root"
root.appendChild(ul);
