// const button1 = document.querySelector(".button1");
// const button2 = document.querySelector(".button2");

// button1.addEventListener("click", () => console.log("button1"));
// button2.addEventListener("click", () => console.log("button2"));


//---------------------------------

//  const paragraph = document.querySelector(".paragraph");
// p.addEventListener("click",()=>{
//    if (p.style.color=="blue") paragraph.style.color ="black";
//    else paragraph.style.color ="blue"
// }
// );

//нажимаем на параграф получаем синий цвет,второй раз черный

//  paragraph.addEventListener("click", () => {
//     if (paragraph.style.color == "blue") paragraph.style.color = "red";
//     else paragraph.style.color = "blue";
//   });

//   //2 variant 
//   paragraph.addEventListener("click", (e) => {
//     if (e.target.style.color == "blue") e.target.style.color = "black";
//     else e.target.style.color = "blue";
//   });

//   //--ternarniy operator
//   paragraph.addEventListener("click", (e) => {
//     e.target.style.color = e.target.style.color=="blue"?"red":"blue";}
//   );

let colorBox=document.querySelector(".color-box");
let button1=document.querySelector(".red");
let button2=document.querySelector(".green");


let button3=document.querySelector(".blue");
let button4=document.querySelector(".black");
let button5=document.querySelector(".yellow");
button1.addEventListener("click",()=>{
    colorBox.style.backgroundColor ="red";
    
    })
    button2.addEventListener('click', ()=>{
        colorBox.style.backgroundColor="green";
    })
;

button3.addEventListener('click', ()=>{
    colorBox.style.backgroundColor="blue";
})

button4.addEventListener('click', ()=>{
    colorBox.style.backgroundColor="black";
})
button5.addEventListener('click', ()=>{
    colorBox.style.backgroundColor="yellow";
})