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
let array = [11,22,13,4,5,66,7,8,9]
let someResult = array.some(elem => elem >15)
let everyResult = array.every(elem => elem >15)
console.log(someResult)
console.log(everyResult)

