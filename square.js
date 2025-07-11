import { BLOCK_SIZE } from './constants.js';

export class Square {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * BLOCK_SIZE, this.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(this.x * BLOCK_SIZE, this.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
}
