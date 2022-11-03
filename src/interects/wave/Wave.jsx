import { Point } from "./Point";
export class Wave {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.centerX = canvasWidth / 2;
        this.centerY = canvasHeight / 2;
    }

    init() {
        this.point = new Point(this.centerX, this.centerY);
    }

    draw(ctx) {
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        this.point.update();
        
        ctx.arc(this.point.x, this.point.y, 30, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgb(0, 150,150)';
        ctx.moveTo(0, this.centerY);
        ctx.lineTo(this.point.x - 30, this.point.y);
        ctx.stroke();

        ctx.strokeStyle = 'rgb(0, 150,150)';
        ctx.moveTo(this.canvasWidth, this.centerY);
        ctx.lineTo(this.point.x + 30, this.point.y);
        ctx.stroke();
    }
}