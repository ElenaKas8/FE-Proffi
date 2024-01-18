//Date

//Metod getTime()
//возвращает миллисекунды с 1970 года до указанной в объекте даты

// let date = new Date("2020-01-01 11:30:00");

// console.log(date.getTime());

// Task

// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики.

//  let date = new Date();

//  let millisecond = currentDate.getTime();
//  let hoursSince1970 = Math.round(millisecond / 1000 / 60 / 60);
//  console.log("hoursSince1970", hoursSince1970);

// Получаем текущую дату и время
// let currentDate = new Date();

// let millisecondsSince1970 = currentDate.getTime();

// let hoursSince1970 = Math.round(millisecondsSince1970 / (1000 * 60 * 60));

// console.log("Часов с 1970 года:", hoursSince1970);

// let currentTime = Date.now();
// let countHours = Math.round(currentTime / (1000 * 60 * 60));

//--Task
//  Какое количество дней прошло с начала 2000 года до текущего момент времени?
//  Примечание: полученное значение округлите по правилам математики

// let date = new Date();
// let newDate = new Date("2000-01-01");
// let seconds = date-newDate;
// let daysNow = Math.round(seconds/(1000*60*60*24));

// console.log(daysNow);
//------вариант--------------
// let date = new Date(2000,0)
// let countDays = (Date.now()-date)/(3600000*24); 
// console.log(countDays);

// 1 сутки = 3600000 миллисекунд

// Задача 4
// Напишите функцию checkYear(date), которая получает дату (объект) и проверяет, является ли год в дате високосным. 
// Если да - функция должна вернуть true, в противном случае false
// примечание високосный год - это год который делится на 4 без остатка и кратны 400 и 100

// function checkYear(date) {
//     let year = date.getFullYear();
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkYear(new Date(2024,0,1)));


// let Date = new Date("2024-01-20 11:30:00");

// let dateString = date.toLocaleString("de-DE",){
//     year:"2-digit",
//     month: "long",
//     day: "2-digit",

//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",

//     }

//---Object

// let obj1 = {
//     names:{
//         name: "John",
//         last: "Alex",
//     }
// }

// let obj2 = JSON.parse(JSON.stringify(obj1));


// Посчитайте сумму всех значений сво-йсв
// let numbers = {
//     num1: 50,
//     num2: 150,
//     num3: 20,
//     num4: 45,
//     num5: 35,
// }

//  let result = Object.values(numbers);

// result = result.reduce((acc, elem) => acc + elem, 0)
// console.log(result);