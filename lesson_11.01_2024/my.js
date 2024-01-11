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

//  find()-метод позволяет найти элемент массива по условию

//метод возвращает найденный элемент массива
//если метод не найдет по условию элемент ,он вернет undefined
//ищет слева направо и возвращает первое правильное значение
let array = [11,22,13,4,5,66,7,8,9]
let result = array.find(elem => elem > 15)
console.log(result);
