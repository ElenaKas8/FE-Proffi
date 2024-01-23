//localStorage
// механизмы работы с localStorage
//localStorage.setItem("key", "Hallo Welt");-метод позволяющий сохранять данные в 
//localStorage по указанному ключу key и значению "Hallo Welt"

// 2 метод позволяющий ПОЛУЧИТЬ значение из LS

// let result = localStorage.getItem("key");
// методы позволяющие удалить одну запись или все записи с хранилища

// let result = localStorage.removeItem("key");

// Task 2
// Реализовать кнопку, которая будет выводить в консоль значение input элемента
// При нажатии на кнопку значение поля ввода должно сохраняться в localStorage.

let form_inp = document.querySelector('.form_inp');
let submit_btn = document.querySelector('.submit_btn');

submit_btn.onclick = ()=>{
    submit_btn.value = localStorage.setItem("key",form_inp.value);
}