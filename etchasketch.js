const container = document.getElementById("grid");

for (let i = 0; i<1600; i++) {
    let div = document.createElement("div");
    div.classList.add('box');
    container.appendChild(div);
}

const boxes = document.querySelectorAll(".box");

function changeColor(){
    this.style.backgroundColor = 'black';
}

function draw() {
    boxes.forEach(box => {
        box.addEventListener('mouseover', changeColor);
    })
}

function shake() {
    boxes.forEach(box => box.style.backgroundColor = 'rgb(226, 218, 202)');
    console.log("test");
}

const button = document.getElementById("clear");
//console.log(button);

button.addEventListener("click", shake);

draw();

