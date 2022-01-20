const sketchboard = document.querySelector('.sketchboard');
const dimensions = document.querySelector('#measurements');
let div = document.createElement('div');
div.classList.add('square');
let count;
generate();

const canvasButton = document.querySelector('#canvasButton');
canvasButton.addEventListener('click', () => {
  generate();
});

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
                square.style.background = 'black';
            }); 
        });
    } else {
        squares.forEach((square) => {
            square.addEventListener('click', ()=> {
                square.style.background = 'black';
            }); 
        });
    }
}
