 //-----Array---

//   let a =[1,2,3,4,5,6,7];

//  let array = new Array(1,2,3,4,5,6,7);
//  console.log(array);

//  array[0] = 10;
//  console.log(array[0]);

//  // Циклы 
  let array = [10,20,30,40,50];
// // Цикл-вариант 1
//  for(let i = 0; i < array.length; i++){
//      console.log(array[i]);
//  }
 
 //Вариант 2
let newArray = [];
 for (let elem of array.reverse()){

    elem = elem * 2;
    newArray.push(elem);
     console.log(elem);
 }
