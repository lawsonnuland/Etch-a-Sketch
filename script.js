const sketchboard = document.querySelector('.sketchboard');
const dimensions = document.querySelector('#measurements');
let div = document.createElement('div');
div.classList.add('square');
let count;
let red = 0;
let green = 0;
let blue = 0;
generate();

const canvasButton = document.querySelector('#canvasButton');
canvasButton.addEventListener('click', () => {
  generate();
});

const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', () => {
    red = document.querySelector('#red').value;
    green = document.querySelector('#green').value;
    blue = document.querySelector('#blue').value;
    checkFillColor();
});

function checkFillColor() {
    if (red > 255 || red < 0 || green > 255 || green < 0 || blue > 255 || blue < 0) {
        alert("Color values must be between 0 and 255!");
        return;
    }
}

function generate() {
    count = document.querySelector('#dimensions').value;
    if (count > 100 || count < 1) {
        alert("Dimensions must be larger than 0, and less than 101!");
        return;
    }
    dimensions.textContent = `${count} x ${count}`;
    sketchboard.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
    sketchboard.style.gridTemplateRows = `repeat(${count}, 1fr)`;
    while (sketchboard.firstChild) {
        sketchboard.removeChild(sketchboard.firstChild);
    }
    for ( let i=0; i< count; i++) {
        for(let j=0; j< count; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            sketchboard.appendChild(div);
        }
    }
    let squares= document.querySelectorAll('.square');
    if (document.querySelector('input[name=inputType]:checked').value == 0) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', ()=> {
                square.style.background = `rgb(${red}, ${green}, ${blue})`;
            }); 
        });
    } else {
        squares.forEach((square) => {
            square.addEventListener('click', ()=> {
                square.style.background = `rgb(${red}, ${green}, ${blue})`;
            }); 
        });
    }
}
