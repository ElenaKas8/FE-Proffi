// function seyHello(name) {
//   console.log("-_".repeat(10));
//   console.log(`Hello, ${name}!`);
//   console.log("-_".repeat(10));
// }
// seyHello("Alex", 10);
//
// seyHello("Steven", 5);
//
// seyHello("Neena", 20);
//
//&--------------Return----внутри функции--
//& 1)return позволяет вернуть выхожное значение за пределами этой функции

//& 2) если в функции отсутствует return, то функция возвращает undefined

//& 3) функция может вернуть только одно выходное значение и мы выходим из функции завершая ее работу

// function handle() {
//   let a = 10 + 50;
//   return a;
// }
// let result = handle();
// console.log(result);

// let result = handle() + 10;
// console.log(result);
//

//&4) return внутри цикла и условнго оператора

// function handle(num) {
//   for (let i = 1; i <= 10; i++) {
// if (num === i) {
//   return;
// }
// console.log(i);
//   }
//   handle(5);
// }
//

//& Напишите функцию,которая будет возвращать сообщение,существует ли указанный элемент в массиве

// let array = [1, 2, 3, 4, 5, 6];
// function checkElem(num) {
//   for (let elem of array) {
// if (elem === num) {
//   console.log("Элемент был найден");
//
//   return;
// }
//   }
//   console.log("Элемент не был найден");
// }
//
// checkElem(5);

//* Задача №3

//* Напишите функцию even(2), которая будет возвращать строку с ответом на вопрос.
//* Делится ли указанный аргумент на 2 без остатка

// let result = even(10);
// число делиться на 2
//   let result = even(7);
// число не делится на 2

// function even(number) {
//   if (number % 2 === 0) {
// return "число делится на 2";
//   } else {
// return "число не делится на 2";
//   }
// }
// console.log("result", result);

// function even(number) { //   return number % 2 === 0 ? "число делится на 2" : "число не делится на 2";
// }
//

//* Напишите функцию coverString(string), которая будет получать строку в качестве аргумент
//* Функция должна вернуть бинарное значение (0 или 1) по условию
//* Если длина строки будет больше 10 символов - тогда функция должна вернуть 1
//* В противном случае - 0

// function coverString(string) {
//   return string.length > 10 ? 1 : 0;
// }
// let result1 = coverString("12345678901");
// console.log(result1); // Вывод: 1
//
// let result2 = coverString("123456789");
// console.log(result2); // Вывод: 0

//* Задача №5

//* Напшиите функцию sum(num), которая будет возвращать сумму чисел от 1 до num включительно
// console.log(sum(5)) => 1 + 2 + 3 + 4 + 5 => 15
// console.log(sum(8)) => 1 + 2 + 3 + 4 + 5 + 6 + 8 => 29

// function sum(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
// result += i;
//   }
//   return result;
// }
// console.log(sum(5));
//

//* Задача №6

// *Напишите функцию countWord(str), которая будет возвращать количество слов в указанном аргументе
//countWord('hello') => 1
// countWord('hello test') => 2
// countWord('hello test hello') => 3
//⁡⁣⁢⁣МЕТОД МАССИВА СТРОК

//& function countWord(str) {
//&   return str.split(" ").length;
//& }

//* Напишите фунцию, getCalc(num1, num2, num3)
//* num1 - начальная ставка
//* num2 - годовой процент (0 - 100)
//* num3 - срок вклада (в годах)

// Решение 2
function getCalc(start, perc, year) {
  let sum = start;
  for (let i = 1; i <= year; i++) {
    sum += sum * (perc / 100);
  }
  return sum;
}

console.log(getCalc(100, 10, 2));
console.log(getCalc(2000, 10, 3));
console.log(getCalc(100, 10, 30));
