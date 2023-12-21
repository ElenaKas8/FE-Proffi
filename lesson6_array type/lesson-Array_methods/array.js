//Методы массива 

// .pop()  -метод удаляет последний элемент массива

// .push()  -метод добавляет элемент в конец массива
// .shift()   - удаляет первый элемент массива
// .unshift() -добавляет первый элемент в начало массива

//pop ,shift возвращают удаляемый элемент
// push,unshift возвращают новую длину массива

// Эти методы позволяют изменять (изменяет)массив.

// let array = [1,2,3,4,5]
// array.pop()
// let b =array.pop()
// console.log(array);
// console.log(b);


// let array = [1,2,3,4,5]
// array.push(10)
// let b =array.push(10)
// console.log(array);
// console.log(b);


// Заданы два массива

// let numbers = [10,7,8,5,34,22,65,11,101]
// let evenNubmers = []

// // Поместите в пустой массив evenNumbers только четные элемента массива. 
// // В решение необхоидмо использовать цикл
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         evenNubmers.push(numbers[i])
//     }
// }
// console.log(evenNubmers);

// // 2 вариант
// for (let elem of numbers) {
//     if (elem % 2 == 0) {
//         evenNubmers.push(elem)
//     }
// }
// console.log(evenNubmers);


//----------------------------
// includes-проверяет,существует ли єлемент в массиве или нетвозвращает булевое значение

// let array = [1,2,3,4,5,6,7]
// console.log(array.includes(10));



//------slice(n,m) -срез массива-djpdhfoftn zjdsq vfccbd gj erfpfzzsv bzltrcfv

// let array =[1,2,3,4,5,6,7];
// console.log(array.slice(2,5));
// console.log(array.slice(0,5));
// console.log(array.slice(-2));

//----
//   indexOf-поиск индекса элемента
// let array = [10,20,30,40,50];
// console.log(array.indexOf(30));
// console.log(array.indexOf(50));
// console.log(array.indexOf(100));

