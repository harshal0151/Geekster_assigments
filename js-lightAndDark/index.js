// const on = document.querySelector("#onBtn");
// const output = document.querySelector("body");
// const text = document.querySelector("h1");


// on.addEventListener('click' , ChangeMode) ;

// function ChangeMode (){
//     if( output.style.backgroundColor === "white"  ){
//         output.style.backgroundColor = "black" ;
//         text.style.color = "white";
// }else{
//  output.style.backgroundColor = "white" ;
//  text.style.color = "black";     
// }
// }



var toggled = false; 

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle-container").onclick = function () {
        
    if(!toggled) {
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.classList.add("dark-mode")

        toggled = true;
    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode")

        toggled = false;
    }
    
}