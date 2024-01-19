// методы массива
// простые методы-принимают значение или вообще не принимают аргументов,и мутируют основной массив
//.push()  -метод добавляет элемент в конец массива
//.pop()  -метод удаляет последний элемент массива
//.shift()   - удаляет первый элемент массива
//.unshift() -добавляет первый элемент в начало массива

// 2 группа методов-которые 


// numbers = [22, -10, -8, 7, 15, 101, 73, 55, 85, -100];
// 1. Дан массив с числами. Создать новый массив, в который войдут все числа из массива numbers деленные на 2
// 2. Решите задачу, используя forEach() и map()


//     let result = numbers.map(elem => elem / 2);
//--------------------------------------------------
// let result = [];
// let result2 = numbers.forEach(elem => result.push(elem / 2));

// 2. Создать новый массив, в котором все отрицательные числа будут заменены на 0
// => [22, 0, 0, 7, 15, 101, 73, 55, 85, 0]
// Решите задачу, используя forEach() и map()
// Выведите сформированные массивы в консоль
// let numbers = [1, 2, -3, 4, -5, 6, -7, 8, -9, 10];
// let newarray = numbers.map(elem => elem < 0 ? 0 : elem);
// console.log (newarray);

// let newarray2 = [];
// let newarray3 = numbers.forEach(elem => newarray2.push(elem < 0 ? 0 : elem));
// console.log (newarray2);
 
 

// 3. Создать новый массив, в котором все четные числа будут заменены на строку 'hello'
// => ['hello', 'hello', 'hello', 7, 15, 101, 73, 55, 85, 'hello']
// Решите задачу, используя forEach() и map()
// Выведите сформированные массивы в консоль
// let newarray = numbers.map(elem => elem % 2 === 0 ? 'hello' : elem);
// console.log(newarray);

// const array = ['hello', 1, 45, true, 10, 'hi', undefined];

// task // 4. Данн массив с разными типами данных. Создать новый массив, в котором все числа будут заменены на строку 'number'
// => ['hello', 'number', 'number', true, 'number', 'hi', undefined]
// Решите задачу, используя map() и оператор typeof
// Выведите сформированныq массив в консоль

// const newarray = array.map(elem => typeof elem === 'number' ? 'number' : elem);
// console.log(newarray);

// 5. Сформировать новый массив, в котором числа из массива numbers, оканчивающиеся на 5 будут заменены на строку 'ends on 5'
// => [22, -10, -8, 7, 'ends on 5', 101, 73, 'ends on 5', 'ends on 5', -100]
// Решите задачу, используя map() 
// Выведите сформированный массив в консоль

// const newarray = array.map(elem => typeof elem === 'number' && elem % 10 === 5 ? 'ends on 5' : elem);
// console.log(newarray);

//----metod Filter()---------------

// 6. Дан массив с числами. сформировать новый массив, в который попадут только отрицательные числа
// [22, -10, -8, 7, 15, 101, 73, 55, 85, -100] => [-10, -8, -100]
// Решите задачу, используя forEach() и filter() 
// Выведите сформированные массивы в консоль
let numbers = [22, -10, -8, 7, 15, 101, 73, 55, 85, -100];

// const result9 = [];
// numbers.forEach(el => el < 0 ? result9.push(el) : '');

// const result10 = numbers.filter(el => el < 0);

// console.log(result9);
// console.log(result10);
// 7. Дан массив с числами. сформировать новый массив, в который попадут только числа, оканчивающиеся на 5
// [22, -10, -8, 7, 15, 101, 73, 55, 85, -100] => [15, 55, 85]
// Решите задачу, используя forEach() и filter() 
// Выведите сформированные массивы в консоль

let newarray2 = [];
let newarray3 = numbers.forEach(elem => elem % 10 === 5 ? newarray2.push(elem) : '');
console.log(newarray2);

 let newarray = numbers.filter(elem => elem % 10 === 5);

 console.log(newarray);