import { SingleWater } from "./SingleWater";

export class MultipleWater {
    constructor(canvasWidth, canvasHeight, count) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.count = count;
    }

    init() {
        this.drops = [];
        for (let i = 0; i < this.count - 1; i++) {
            const single = new SingleWater(this.canvasWidth, this.canvasHeight, Math.floor(Math.random() * 10 + 1) / 1000, Math.floor(Math.random() * 50 + 15), Math.floor(Math.random() * 8 + 2) / 10)
            //const single = new SingleWater(this.canvasWidth, this.canvasHeight, 0.005, 20, 0.3)
            this.drops[i] = single;
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.count - 1; i++) {
            const single = this.drops[i];
            single.init();
            single.draw(ctx);
        }
    }
}