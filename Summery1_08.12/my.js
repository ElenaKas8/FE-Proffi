// let a = ["1", 2, false, 0, "hello"];
//
// a[0] = "hello";
//
// console.log(a);

//------------

// let userData = {
//   name: "Alice",
//   age: 54,
// };
//
// let userData2 = userData;
//
// let userData3 = userData2;
//
// userData.age = 25;
//
// console.log(userData);
// console.log(userData2);
// console.log(userData3);

// number
// string
// boolean
// null
// undefined
// object

// let num = 165;

// let str = "hello JS";

// let isAdmin = true;

// let name = null;

// let lastName = undefined;

// let userData = {
//   name: "Alice",
//   age: 5454,
//   friends: [4, 5, 6, "Mike"],
//   address: {
//       city: "Berlin",
//       country: "USA"
//   }
// }

// console.log(userData.address.country);

// let name = "Alice"
// let age = 65;
// let isAdmin = true;

// let data = {
//    name: "Alice",
//    age: 65,
//    isAdmin: true
// }

// let userData = {
//   name: "Alice",
//   age: 54,
// }
//
// let userData2 = userData;
//
// let userData3 = userData2;
//
// userData.age = 25;
//
//
// console.log(userData);
// console.log(userData2);
// console.log(userData3);
//

// console.log(userData["name of user"]);
// console.log(userData.age);

// let arr = [78, 56, 99, 12, 44, 54];
//
// // for (let i = 0; i < arr.length; i++) {
//   let digit = arr[i];
//   console.log(digit);
// }

// вывести только положительные значения
// let arr = [78, -56, 99, -12, 44, -54];
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
// console.log(arr[i]);
//   }
// }

//
// реализовать таблицу умножения

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }

  console.log("===============================");
}
//----------------------------------
let str = "hello";
str[0] = "A";
console.log(str);

let arr = [1, 2, 3];
arr[1] = 999;
console.log(arr);
