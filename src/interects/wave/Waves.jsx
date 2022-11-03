import { Wave } from "./Wave";
export class Waves {
    constructor(canvasWidth, canvasHeight, waveLayer) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.waveLayer = waveLayer;
        this.totalPoints = 6;
        this.colors = ['rgba(21, 0, 80, 0.4)','rgba(63, 0, 113, 0.4)','rgba(251, 37, 118, 0.4)','rgba(0, 171, 179, 0.4)',
        'rgba(154, 22, 99, 0.4)','rgba(179, 255, 174, 0.4)','rgba(0, 8, 193, 0.4)','rgba(142, 195, 10, 0.4)','rgba(249, 237, 105, 0.4)','rgba(204, 168, 233, 0.4)','rgba(226, 62, 87, 0.4)']
    }
    init() {
        this.waves = []
        for (let i = 0; i < this.waveLayer; i++) {
            const wave = new Wave(this.canvasWidth, this.canvasHeight, 6, this.colors[i], i);
            this.waves[i] = wave;
        }
        for (let i = 0; i < this.waveLayer; i++) {
            const wave = this.waves[i];
            this.waves[i].init();
        }
    }
    draw(ctx) {
        ctx.fillStyle='#ffffff';
        ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight);
        for (let i = 0; i < this.waveLayer; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}