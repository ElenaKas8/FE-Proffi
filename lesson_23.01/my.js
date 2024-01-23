//цикл по обьекту
// let obj = {
//     name: "Alice",
//     age: 25,
//     friends: [4, 5, 6, "Mike"],
//     address: {
//         city: "Berlin",
//         country: "USA"
//     }
// }   
// let key = Object.keys(obj);

// console.log(key);


// Object.assign()-метод,который обэединяет 2,и более объекта в один объект,если мы продублировали свойство,то обьект перезапишит и свойство и будет актуальным последнее свойство
//-метод возвращант ссылку на первый объект(в качестве аргумента) и его мутирует
// let obj1 = {
//     name:"Alex",
//     lastname:"William"
// }

// let obj2 = {
//     name:"John",
//     age:25
// }

// let obj3=(Object.assign(obj1,obj2));

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

//может также копировать объекты
//пример не глубокого копирования

// let obj4 = {
//     name:"Alex",
//   age:30
// }
// let copyObj = Object.assign({},obj4);
// console.log(obj === copyObj);


//-это старый метод.Теперь используется spred оператор

// let copyObj = {...obj4};


// Task 2

// Задан объект someObj с произвольными сво-ми. 
// Напишите функцию getKeys(obj), которая в качестве аргумента получает 
// объект и возвращает результат согласно примеру ниже:

// Примечание: Использовать класс Object (и методы) нельзя.

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }


// function getKeys(obj) {
//     let result =[];
//     for (let key in obj) {
//         result.push(key);
//     }
//     return result;
// }
// console.log(getKeys(someObj));
// Результат: ['key1','key2','key3','key4']


// Task 3
// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

// Пример: 
// let array = [1,true,'3','value1',9,'key'];
// let result = {};
// array.map((elem, index) => {
//     result[`key${index + 1}`] = elem
//     return result
// })
// console.log(result);

// Результат: 
// {
//     key1: 1,
//     key2: true,
//     key3: ‘3’,
//     key4: ‘value1’
//     key5: 9,
//     key6: ‘key’
// }


//Задачи по LocalStorage

//Сщздайте кнопку,которая будет переключать значение 

// let btn_init =document.querySelector(".btn_init");
// btn_init.oneclick =()=>{
//     if(localStorage.getItem("init"==="1")){
//     localStorage.setItem("init",0);
// }
// else {
//     localStorage.setItem("init",1)
// }
// }

//2 variant
// btn_init.oneclick 

//реализовать метод который позволяет вывести значение input в консоли

// let form_inp = document.querySelector('.form_inp');
// let submit_btn = document.querySelector('.submit_btn');

// submit_btn.onclick = ()=>{
//     console.log(form_inp.value);
// }
// form_input.value = "Hallo world"

// Task 2
// Реализовать кнопку, которая будет выводить в консоль значение input элемента
// При нажатии на кнопку значение поля ввода должно сохраняться в localStorage.

// let form_inp = document.querySelector('.form_inp');
// let submit_btn = document.querySelector('.submit_btn');

// submit_btn.onclick = ()=>{
//     localStorage.setItem("key",form_inp.value);
//     form_inp.value="";
// }

// 3) К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.

// let read =document.querySelector("read");
// let read_btn = document.querySelector("read_btn");

// read_btn.onclick=()=>{
//     form_inp.value = localStorage.getItem("ke")
// }

// Counter + - создать
// Task 3 (мини - дз)
// Повторить document
// Создать каунтер. 
// Страница с двумя кнопками “+” и “-” и при нажатии на какую-либо число должно 
// меняться в соответствующую сторону. Значение counter не должно слетать 
// при перезагрузке страницы.

let counter=0;
let plus =document.querySelector(".plus");
let minus =document.querySelector(".minus");
let counterDisplay = document.querySelector(".counter");


plus.onclick=()=>{
    counter++;
    updateCounterDisplay()
   
    }

minus.onclick=()=>{
    counter--;
    updateCounterDisplay()
}

function updateCounterDisplay() {
    
    counterDisplay.innerHTML=counter;
    if (counter<0) {
        counterDisplay.innerHTML=" ";
    }
}