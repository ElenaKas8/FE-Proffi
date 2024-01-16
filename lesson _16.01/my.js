//методы массивов

// Метод Reduce()
//метод который позволяет рассчитывать аналитические задачи*среднее число,сумма значение,)
//метод возвращает итоговое значение аккумулятора
//  let array = [1,2,3,4,5]
//посчитать сумму значений в массиве
// поиск суммы без метода reduce
// let sum=0;//сохраняется промежуточное значение
// for  (let elem of array) {
//      sum += elem
  
// }
// console.log(sum)


// let array = [1,2,3,4,5]
// let sum = array.reduce((acc,elem) => acc + elem)
// console.log('sum',sum);
// //получить среднее значение масива

// console.log(sum/array.length);

// c методом reduce()
// let array = [1,2,3,4,5]
// let sum = array.reduce((accum, elem) => accum + elem / array.length, 0) 

// console.log(sum);

//Task
// Посчитайте в одной переменной произведеное, в другой сумму значений в массиве numbers

//  let numbers = [3,3,3,3,4]

//  let sum = numbers.reduce((accum, elem) => accum * elem, 1)
//  let sum2 = numbers.reduce((accum, elem) => accum + elem, 0)
//  console.log(sum,sum2);
 
//посчитать сумму всех возрастов массива


//  let users = [
//      {id: 4, age: 30, name: 'Alex'},
//         {id: 5, age: 20, name: 'Steven'},
//         {id: 2, age: 40, name: 'Neena'},
//         {id: 1, age: 50, name: 'John'},
//         {id: 3, age: 30, name: 'Grend'}
//     ]

// let sum = users.reduce((accum, elem) => accum + elem.age, 0)
// console.log(sum)

// // 2. Рассчитать средний возраст сотрудников
// let middleAge = users.reduce((accum, elem) => accum + elem.age, 0) / users.length
// console.log(middleAge);

// spread оператор - распаковка массива в указанном месте.
//  let array = [1,2,3,4,5]
// // console.log(...array)
// //---------------------------------Math.max
// console.log('max',Math.max(...array));

//rest operator - деструктуризация,когда обявляем переменные одной строчкой кода
//также занимается сборкой нового массива.Это способ обьявления одной строчкой кода


// let array = [10,20,30,40,]
// //или let [a,b,c,d] = [10,20,30,40]
// // let a array [1]10
// // let b array [2]20
// // let c array [3]30
// // let d array [4]40


// let [a,b,] = array
// console.log(a,b);

//Rest + деструктуризация--должен быть вконце, но мы можем использовать reverse()
// let array = [10,20,30,40,50,60,70]
// let [a,b, ...rest] = array.reverse()
// console.log(a,b,rest);


