//Filter
//Task
// let users = [
//     {id: 1, age: 30, name: 'Alex'},
//     {id: 2, age: 20, name: 'Steven'},
//     {id: 3, age: 40, name: 'Neena'},
//     {id: 4, age: 50, name: 'John'},
//     {id: 5, age: 30, name: 'Grend'}
// ]

// Сформируйте новый массив, который будет хранить пользователей с возрастом от 30 до 40 лет включительно

// let result = users.filter(user => user.age >= 30 && user.age <= 40)
// console.log(result)
//----------------------------------------------
//  find()-метод позволяет найти элемент массива по условию

//метод возвращает найденный элемент массива 
//если метод не найдет по условию элемент ,он вернет undefined
//ищет слева направо и возвращает первое правильное значение
// let array = [11,22,13,4,5,66,7,8,9]
// let result = array.find(elem => elem >15)
// console.log(result);
//---------------------------------

//findIndex()-метод позволяет найти индекс элемента массива по условию
//если не найден возвращает -1*как indexOf
// let array = [11,22,13,4,5,66,7,8,9]
// let result = array.findIndex((elem )=> elem >15)
// console.log(result);
//-----------------------------------

// some() && every()
// some()-проверяет наличие ХОТЯ БЫ ОДНОГО ЭЛЕМЕНТЫ по условию и возвращает булевое значение, если находит элемента в массиве
// every -проверяет все ли элементы в массиве удовлетворяют условию и возвращает булевое значение
// возвращают boolean
// let array = [11,22,13,4,5,66,7,8,9]
// let someResult = array.some(elem => elem >15)
//-----------------------------
// let everyResult = array.every(elem => elem >15)
// console.log(someResult)
// console.log(everyResult)


//-------------------
// map()-метод перезаписывает значение элементов масива

//метод возвращает новый массив
//не найденнный возвращает Boolean

// let array = [11,22,13,4,5,66,7,8,9]
//   let result = array.map(elem => elem ** 2)
//   let result = array.map(elem => elem * 2)

//  console.log(result)
//  let array = ["Alex", "Steven", "Neena", "John", "Grend"]
//  let result = array.map( elem => elem[0])
//  console.log(result)

// Task 

// let prices = [100,450,600,200,1000,4000]

// В магизине объявлена распродажа. Стоимость всех продуктов теперь указано с 15% скидкой
// Сформируйте новый массив, который будет хранить новую стоимость с учетом указанной скидки

//  let result = prices.map(elem => elem * 0.85)
// console.log(result);

// Task 6
//  let fruits = ["яблоко", "вишня", "арбуз", "мандарин", "тыква"]

// Выведите булевые типы которые ответят на вопросы: 
// 1) Есть ли в массиве хотябы 1 элемент, который начинается на 'в'
// 2) Все ли элементы массива содержат букву 'а'?


// console.log(fruits.some(elem => elem.startsWith('в')));
// console.log(fruits.every(elem => elem.includes('а')));


//Task

// let names = [
//     {first_name: 'Steven', last_name: 'King'},
//     {first_name: 'Alex', last_name: 'Willyam'},
//     {first_name: 'John', last_name: 'Grec'},
//     {first_name: 'Neena', last_name: 'Palman'},
// ]

// Сформируйте новый массив, который будет хранить строкове значение по указанному формату:
// ['S.K', 'A.W', 'J.G', 'N.P']

//  let result = names.map(elem => elem.first_name[0] + ',' + elem.last_name[0])
//  console.log(result);

//METOD ---ForEach()-метод перебирает элементы массива и НИЧЕГО! не возвращает
//является альтернативой обычному циклу for (для массива и для объектов)
// let array = [11,22,13,4,5,66,7,8,9]
// array.forEach(elem => console.log(elem))

//--sort метод -сортирует массив по указанному условию 
//--метод мутирует массив

//* */ -сортировка строкового типа
// let fruits = ["яблоко", "вишня", "арбуз", "мандарин", "тыква"]

// fruits.sort()
//fruits.sort().reverse()-по убыванию

//если не указано условие, то по умолчанию сортирует по алфавиту 
// console.log(fruits);

//----сортировка числовых значений
// let array = [11,22,13,4,5,66,7,8,9]

// array.sort()
// console.log(array);
//----устанавливаем правила сортировки-------------------------
// let array = [11,22,13,4,5,66,7,8,9]
// array.sort((nxElem,crElem) => {
//     if (nxElem > crElem) {
//         return 1
//     } else if (nxElem < crElem) {
//         return -1
//     } else {
//         return 0
//     }
// })
// console.log(array);

//УПРОЩАЕМ ЭТОТ КОД  
// array.sort ((nxElem,crElem) => nxElem - crElem)-по возрастанию

// array.sort ((crElem,nxElem) => crElem- nxElem ) -по убыванию

//--Task sort


//  let users = [
//     {id: 4, age: 30, name: 'Alex'},
//     {id: 5, age: 20, name: 'Steven'},
//     {id: 2, age: 40, name: 'Neena'},
//     {id: 1, age: 50, name: 'John'},
//     {id: 3, age: 30, name: 'Grend'}
// ]

// // Задача: отсортировать массив по id
// users.sort((a, b) => a.id - b.id);
// console.log(users);

//Task
let fruits = ["Яблоко", "Вишня", "Арбуз", "Мандарин", "Тыква"]
// Найдите индекс элемента массива, длина которого будет равна 6
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i].length === 6) {
//         console.log(` ${i}`);
//         break; 
//     }
// }
console.log(fruits.findIndex(Elements => Elements.length === 6));


