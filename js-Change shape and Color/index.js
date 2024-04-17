var color = [
    "red",
    "green",
    "cyan",
    "black",
    "violet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
];

var index = 0;
var isTriangle = false;

var cShape = document.getElementById("change-shape");
var cColor = document.getElementById("change-color");
var btn = document.getElementById("button");

cShape.addEventListener("click", changeShape);
cColor.addEventListener("click", changeColor);

function changeColor() {
    if (index === color.length) {
        index = 0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    cShape.style.backgroundColor = color[index];
    cColor.style.backgroundColor = color[index];
    index++;
}

function changeShape() {
    if (!isTriangle) {
        var i = document.getElementsByClassName("inner")[0];
        i.className = "triangle-bottom-left";
        isTriangle = true;
    } else {
        var i = document.getElementsByClassName("triangle-bottom-left")[0];
        i.className = "inner";
        isTriangle = false;
    }
}
