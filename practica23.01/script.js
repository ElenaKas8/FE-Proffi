// const button1 = document.querySelector(".button1");
// const button2 = document.querySelector(".button2");

// button1.addEventListener("click", () => console.log("button1"));
// button2.addEventListener("click", () => console.log("button2"));


//---------------------------------

 const paragraph = document.querySelector(".paragraph");
// p.addEventListener("click",()=>{
//    if (p.style.color=="blue") paragraph.style.color ="black";
//    else paragraph.style.color ="blue"
// }
// );

//нажимаем на параграф получаем синий цвет,второй раз черный

 paragraph.addEventListener("click", () => {
    if (paragraph.style.color == "blue") paragraph.style.color = "red";
    else paragraph.style.color = "blue";
  });