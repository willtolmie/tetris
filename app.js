import { Board } from './board.js';
import { Tetromino } from './tetromino.js';
import { BLOCK_SIZE, COLS, ROWS } from './constants.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = COLS * BLOCK_SIZE;
canvas.height = ROWS * BLOCK_SIZE;

const board = new Board();
let current = new Tetromino([[4, 0], [5, 0], [4, 1], [5, 1]], 'red'); // O piece

function update() {
    current.move(0, 1);
    if (!board.isValidPosition(current)) {
        current.move(0, -1);
        board.addTetromino(current);
        current = new Tetromino([[4, 0], [5, 0], [4, 1], [5, 1]], 'red');
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw(ctx);
    current.draw(ctx);
}

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 500);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') current.move(-1, 0);
    if (e.key === 'ArrowRight') current.move(1, 0);
    if (e.key === 'ArrowDown') current.move(0, 1);
});

gameLoop();
