const sketchboard = document.querySelector('.sketchboard');
let div = document.createElement('div');
div.classList.add('square');
let count = 16;

for ( let i=0; i< 16; i++) {
    for(let j=0; j< 16; j++) {
        let div = document.createElement('div');
        div.classList.add('square');
        sketchboard.appendChild(div);
    }
}