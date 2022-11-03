import { Point } from "./Point";
export class Wave {
    constructor(canvasWidth, canvasHeight, totalPoints, color, index) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.centerX = canvasWidth / 2;
        this.centerY = canvasHeight / 2;
        this.totalPoints = totalPoints;
        this.pointGap = this.canvasWidth / (this.totalPoints - 1);
        this.color = color;
        this.index = index;
    }

    init() {
        const totalPoints = this.totalPoints;
        this.points = [];
        for (let i = 0; i < totalPoints; i++) {
            const point = new Point(this.pointGap * i, this.centerY, i + this.index);
            this.points[i] = point;
        }
    }
    

    draw(ctx) {
        const totalPoints = this.totalPoints;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, this.centerY);
        let prevX = 0;
        let prevY = this.centerY;
        for (let i = 1; i < totalPoints; i++) {
            if(i < totalPoints - 1) {
                this.points[i].update();
            }
                const middleX = (this.points[i].x + prevX) / 2;
                const middleY = (this.points[i].y + prevY) / 2;
                ctx.quadraticCurveTo(prevX, prevY, middleX, middleY);
                prevX = this.points[i].x;
                prevY = this.points[i].y;
        }
            ctx.lineTo(prevX,prevY);
            ctx.lineTo(this.canvasWidth,this.canvasHeight);
            ctx.lineTo(this.points[0].x,this.canvasHeight);
            ctx.fill();
            ctx.closePath();
        
    }
}