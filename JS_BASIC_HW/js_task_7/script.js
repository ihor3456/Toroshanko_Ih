//Написати функцію filterBy(), яка прийматиме 2 аргументи.
//Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
//Функція повинна повернути новий масив, який міститиме всі дані, 
//які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом.
//Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string',
//то функція поверне масив [23, null].

function filterBy(array, type) {
  return array.reduce((res, currentItem) => {
    if (typeof currentItem != type) {
      res.push(currentItem);
    }
    return res;
  }, []);
}

console.log(filterBy(["hello", "world", 23, "23", null], "string"));
