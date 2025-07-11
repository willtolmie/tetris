import { Square } from './square.js';

export class Tetromino {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
        this.squares = [];
        this.createSquares();
    }

    createSquares() {
        for (let block of this.shape) {
            this.squares.push(new Square(block[0], block[1], this.color));
        }
    }

    move(dx, dy) {
        for (let square of this.squares) {
            square.x += dx;
            square.y += dy;
        }
    }

    draw(ctx) {
        for (let square of this.squares) {
            square.draw(ctx);
        }
    }
}
