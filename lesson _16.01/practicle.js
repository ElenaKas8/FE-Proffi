//Работа с датой 
// let date = new Date();инициализация даты
// let date = new Date();

// let date1 = new Date("2020-01-01 11:30:00");//по гринвичу + GMT
// let date = new Date (2024,0,20,9,30);//по гринвичу
// console.log(date);

//---получить текущую дату
// let date = new Date(1000*60*60*24*365*30)+(1000*60*60*24*7);


//текущая дата 
// let date = new Date();//возвращает текущее время

//в мелисекундах
// let num = Date.now() //мелисекунды с 1970 года

// //-----методы которые позволяют получить любой елемент даты
// //возвращают числовое значение
// let date = new Date("2020-01-01 11:30:00");
// console.log(get.getFullYear());
// console.log(get.getMonth());
// console.log(get.getDate());
// console.log(get.getHours());
// console.log(get.getMinutes());
// console.log(get.getSeconds());
// console.log(get.getMilliseconds()-1000);


// console.log('date.getDate()', date.getDate());-возвращает день недели

// Задача 1. 
// Напишите функцию getWeekDay(), которая в зависимости от даты 
// (текущего момента времени) в консоль выводит день недели согласно результату

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'
function getWeekDay() {
    const currentDate = new Date()
    
    const dayOfWeek = currentDate.getDay();

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    console.log(`Сегодня ${daysOfWeek[dayOfWeek]}`);
}
getWeekDay();


