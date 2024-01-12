//forEach() - для перебора массива
//принимает callback функцию в качестве аргумента и возвращает undefined


// let array = [11,22,13,4,5,66,7,8,9]
// array.forEach(elem => console.log(elem))
const numbers=[5,2,1,9,-6]
//вывести в консоль только положительные числа
numbers.forEach((elem)=>elem>0?console.log(elem):null)


