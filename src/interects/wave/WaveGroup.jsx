import { Wave } from "./Wave";

export class WaveGroup {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)'];

        this.waves = [];
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave();
            wave.draw(this.canvasWidth, this.canvasHeight)
        }
    }

}