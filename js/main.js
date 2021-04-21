'use strict'

const HEIGHT = 10;
const WIDTH = 10;
const Letters = [ '', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '' ]

const Pieces = [ '', 'R', 'K', 'B', 'Q', 'K', 'B', 'K', 'R', '' ]
function drawLetter(w, container) {
    const html = `<div class="white_cell"> ${Letters[w]} </div>`;
    container.insertAdjacentHTML('beforeend', html);

}
function drawNumber(h, container) {
    const html = `<div class="white_cell"> ${h} </div>`;
    container.insertAdjacentHTML('beforeend', html);

}
function drawCell(w, h, container) {
    let cell
    if ((w + h) % 2)
	cell = 'white_cell ';
    else
	cell = 'black_cell ';

    let style = ''
    if ((w == 1) && (h != 0) && (h != HEIGHT - 1))
	style = 'border-left: 2px solid black; ';
    if ((w == WIDTH - 2) && (h != 0) && (h != HEIGHT - 1))
	style += 'border-right: 2px solid black; ';
    if ((h == 1) && (w != 0) && (w != WIDTH - 1))
	style += 'border-bottom: 2px solid black; ';
    if ((h == HEIGHT - 2) && (w != 0) && (w != WIDTH - 1))
	style += 'border-top: 2px solid black; ';
    let text = ''
    if ((h == 2) || (h == 7)) {
	text = 'P';
    }
    if ((h == 1) || (h == 8)) {
	text = Pieces[w];
    }
    if ((h == 1) || (h == 2)) {
	cell += 'white_pieces';
    }
    if ((h == 8) || (h == 7)) {
	cell += 'black_pieces';
    }
    const html = `<div class="${cell}" style="${style}">${text}</div>`;
    container.insertAdjacentHTML('beforeend', html);

}

function drawBoard() {
    const container = document.querySelector('#container');
    console.log(container)
    for (let h = HEIGHT - 1; h >= 0; h--) {
	for (let w = 0; w < WIDTH; w++) {
	    if ((h == 0) || (h == HEIGHT - 1))
		drawLetter(w, container);
	    else if ((w == 0) || (w == WIDTH - 1))
		drawNumber(h, container);
	    else
		drawCell(w, h, container);
	}
    }

}

drawBoard();