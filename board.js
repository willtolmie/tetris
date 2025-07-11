import { ROWS, COLS } from './constants.js';

export class Board {
    constructor() {
        this.grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    }

    isValidPosition(tetromino) {
        for (let square of tetromino.squares) {
            if (
                square.x < 0 || square.x >= COLS ||
                square.y >= ROWS ||
                (square.y >= 0 && this.grid[square.y][square.x])
            ) {
                return false;
            }
        }
        return true;
    }

    addTetromino(tetromino) {
        for (let square of tetromino.squares) {
            if (square.y >= 0) {
                this.grid[square.y][square.x] = square.color;
            }
        }
    }

    draw(ctx) {
        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                if (this.grid[y][x]) {
                    ctx.fillStyle = this.grid[y][x];
                    ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
                    ctx.strokeStyle = "#000";
                    ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
                }
            }
        }
    }
}
