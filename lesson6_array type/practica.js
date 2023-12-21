//Task 
// Используя цикл, выведите каждый элемент массива, чей тип равен строковому

let array = [1,'два', 4, true, 56, false, 'один', 'телевизор']

// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string') {
//         console.log(array[i]);
//     }
// }

//вариант 2
for (let elem of array) if (typeof elem === 'string') 
console.log(elem) //elem


