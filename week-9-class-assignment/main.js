var x = document.getElementById("addText");
x.addEventListener("click", click);

function click() {
    document.getElementById("deep").innerHTML += "deep...<br>";
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bright")) {
        image.src = "dull.png";
    } else {
        image.src = "bright.png";
    }
}

var node = document.querySelector('div');
node.style.fontSize = '40px';
node.style.color = '#26004d';

var button = document.querySelectorAll('.button')[0];

function zoomIn() {
    var x = document.createElement("STYLE");
    var t = document.createTextNode("div {font: 60px helvetica;}");
    x.appendChild(t);
    document.head.appendChild(x);
}

function changeColor() {
    document.getElementById("purple").style.color = '#9933ff';
}

