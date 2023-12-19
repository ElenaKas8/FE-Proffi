//методы строк

// let string = 'hello world';

// string.toUpperCase();
// string.toLowerCase();
//возвращают новую строку

//индексация строк

// let string = 'hello world';
// console.log(string[3]);

//------------------
//--includes(substring) --поиск подстроки в строке
//метод возвращает true или false булевый тип

// 'Привет мой друг';

// //   startWith(substring)проверяет начало  строки
// //   endWith(substring)проверяет конец строки
// let string = 'Привет мой друг';
// console.log(string.startsWith('Привет'));
// console.log(string.startsWith('мой'));
// //

// console.log(string.endsWith('друг'));
// Task1
// let string = '7-987-493-423'
// Напишите программу, которая будет проверять переменную string. 
// Программа должна проверить строку по условию:
// 1. Если номер телефона начинается на 7, тогда программа также должна проверить, указан ли в номере дефис
// Если это так, программма должна вывести в консоль "Номер телефона сформирован верно"
// 2. Если номер начинается на 7, но дефис отсутствует - вывести "Отсутствует дефис"
// 3. Если номер не начинается на 7, тогда вывести сообщение "Номер не соответствует формату"
// function checkPhone() {
//     if (string.startsWith('7') && string.includes('-')) {
//         console.log('Номер телефона сформирован верно');
//     } else if (string.startsWith('7') && !string.includes('-')) {
//         console.log('Отсутствует дефис');
//     } else {
//         console.log('Номер не соответствует формату');
//     }
// }
// checkPhone();

//-----------------indexOf(substring) - поиск индекса подстроки в строке

//  let string = 'Привет мой друг';
//  console.log(string.indexOf('мой'));
//  console.log(string.indexOf('наш'));-//возвращает -1 если нет

//-----------------lastIndexOf(substring) - поиск последнего индекса подстроки в строке-справа на лево

// let string = 'Привет мой друг';
// console.log(string.lastIndexOf('мой'));



//---------------------------------------replace-метод который заменяет подстроку на другую подстроку

// let string = 'Привет мой друг';
// console.log(string.replace('мой', 'наш'));


// slice метод позволяет получить подстроку по указанному индексу


// let string = 'Привет мой друг'
// console.log(string.slice(7));
// console.log(string.slice(-4));


// МИНИ - ДЗ
let card = '4321 4567 8833 0000'
// Напишите функцию clearData(str), которая обезличит полученный аргмуент в виде номера карты
// сформировав новую строку (в консоль) по паттерну:
// clearData('4321 4567 8833 0000') => '**** 4567 88** ****'
// clearData('4321 1234 3333 0000') => '**** 1234 33** ****'
function clearData(str) {
    console.log(str.slice(0, 4) + ' ' + str.slice(4, 8) + ' ' + str.slice(8, 12) + ' ' + str.slice(12, 16));
}
clearData(card);