//вывести в консоль только положительные числа
// const numbers = [5, 2, 1, 9, -6];

// numbers.forEach((elem) => (elem > 0 ? console.log(elem) : null));

//Метод map()-возвращает новый массив
//
//Filter()-возвращает новый массив из элементов которые удовлетворяют условию

const numbers = ["5", "2", 2, 1, 9, "fghj", -6];

numbers.sort((a, b) => {
  return a.charCodeAt(0) - b.charCodeAt(0);
});
console.log("numbers", numbers);
