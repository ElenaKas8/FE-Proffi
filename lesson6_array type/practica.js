//Task 
// Используя цикл, выведите каждый элемент массива, чей тип равен строковому

// let array = [1,'два', 4, true, 56, false, 'один', 'телевизор']

// // for (let i = 0; i < array.length; i++) {
// //     if (typeof array[i] === 'string') {
// //         console.log(array[i]);
// //     }
// // }

// //вариант 2
// for (let elem of array) if (typeof elem === 'string') 
// console.log(elem) //elem


// Task 2
// Задан массив, который хранит занчения разныü типов данных



//  Напишите программу, которая сформирует новый массив с элементами, с момента
//  нахождения первого булевого типа и далее до конца массива.

//  let array = [1,'string', true, 10, 'test', false]
// let result = []

// let foundBoolean = false;

// for (let i = 0; i < array.length; i++) {
//     if (foundBoolean) {
//         result.push(array[i]);
//     } else if (typeof array[i] === 'boolean') {
//         foundBoolean = true;
//         result.push(array[i]);
//     }
// }



// console.log(result);

//  [1,'string', true, 10, 'test', false] =>  [true, 10, 'test', false]
//  [1,3, true, 10, true, false] =>  [true, 10, true, false]

// 2 вариант

//Task3

// Task 3
// Создайте новый массив clear_phone, который будет содежрать все номера телефонов с небольшим условием:
// Каждый номер телефона должен быть приведен к международному формату

// [
//     '+790325435425',
//     '+753425435436',
//     '+723425435476',
//     '+796325435474',
//     '+792325435445',
//     '+793325435446',
// ]

// let phones = [
//     '890325435425',
//     '853425435436',
//     '823425435476',
//     '896325435474',
//     '892325435445',
//     '893325435446',
// ]

// let clear_phone = []
// for (let i = 0; i < phones.length; i++) {
//     clear_phone.push(`+7${phones[i].substring(1)}`)

// }
// console.log(clear_phone);


//Task 4 

// Сформируйте 2 новых массива phones, emails, которые должны содержать отдельно почту и номер телефона

let phones = []
let emails = []

let conatcs = [
    'test@gmail.com.net 853433456',
    'string@mail.ru 85342345',
    'someemail@mail.com 853469356',
    'tigran@yahoo.net 85342546736',
]

// [
//     'test@gmail.com.net',
//     'string@mail.ru',
//     'someemail@mail.com',
//     'tigran@yahoo.net',
// ]

// [
//     '853433456',
//     '85342345',
//     '853469356',
//     '85342546736',
// ]

for (let i = 0; i < conatcs.length; i++) {
    let [email, phone] = conatcs[i].split(' ');
    emails.push(email);
    phones.push(phone);

}
console.log(phones);
console.log(emails);
