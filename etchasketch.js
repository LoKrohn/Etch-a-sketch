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

draw();

/*function eraseAllColor() {
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
} */