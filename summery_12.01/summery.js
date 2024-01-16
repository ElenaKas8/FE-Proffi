//forEach() - для перебора массива
//принимает callback функцию в качестве аргумента и возвращает undefined

// let array = [11,22,13,4,5,66,7,8,9]
// array.forEach(elem => console.log(elem))
// const numbers = [5, 2, 1, 9, -6];
//вывести в консоль только положительные числа
numbers.forEach((elem) => (elem > 0 ? console.log(elem) : null));

//вывести в консоль только положительные числа
// const numbers = [5, 2, 1, 9, -6];

// numbers.forEach((elem) => (elem > 0 ? console.log(elem) : null));

//Метод map()-возвращает новый массив
//
//Filter()-возвращает новый массив из элементов которые удовлетворяют условию

// const numbers = ["5", "2", 2, 1, 9, "fghj", -6];

// numbers.sort((a, b) => {
//   return a.charCodeAt(0) - b.charCodeAt(0);
// });
// console.log("numbers", numbers);
