//*Lesson closures-замыкание

// function handle(h) {
//     let a = 2;
//     let b = 10;
//     return function (m) {
//         console.log(a,m);
//     };
// }
// let b = handle(5);
// let c = handle(10);

// b(1);   
// b(4);

//-----------------------------------------

// function generateUrl(zone){
//     return function(domen){
//         console.log(`${domen}.${zone}`);

//     }
// }
// let comUrl = generateUrl("com");
// let netUrl = generateUrl("net");
// comUrl("google");
// comUrl("amazon");

// netUrl("test");
// netUrl("ebay");


// Напиши функцию pow(n), которая в качестве аргумента будет принимать значение степени. 
// Функция должна вернуть другую функцию, которая в качестве аргумента будет принимать число num и выводить в коноль 
// результат вычисления степени (num ** 2)
function pow(n) {
    return  (num) => console.log(num ** n);
    
}
let square = pow(2);
square(3);
square(4);
square(5);
