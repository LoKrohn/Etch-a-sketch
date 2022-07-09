//create boxes for drawing field 
const container = document.getElementById("grid");

for (let i = 0; i<1600; i++) {
    let div = document.createElement("div");
    div.classList.add('box');
    container.appendChild(div);
}

// change box color on mouseover 
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

// clear drawing field and shakte etchasketch on "shake" button click

function shake() {
    boxes.forEach(box => box.style.backgroundColor = 'rgb(226, 218, 202)');
    container.classList.add("shake");
    container.addEventListener('animationend', function(){
        container.classList.remove("shake");
    }, {once:true});
    }


const button = document.getElementById("clear");

button.addEventListener("click", shake);




