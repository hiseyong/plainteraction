export class SingleWater {
    constructor(canvasWidth, canvasHeight, opacityGap, maxRadius, radiusGap) {
        this.maxRadius = maxRadius;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.opacityGap = opacityGap;
        this.radiusGap = radiusGap;
        this.radius = Math.floor(Math.random() * this.maxRadius) + 5;
        this.colorR = Math.floor(Math.random() * 200) + 50;
        this.colorG = Math.floor(Math.random() * 200) + 50;
        this.colorB = Math.floor(Math.random() * 200) + 50;
        this.opacity = 1;
        this.pointX = Math.floor(Math.random() * (this.canvasWidth - this.maxRadius)) + this.maxRadius;
        this.pointY = Math.floor(Math.random() * (this.canvasHeight - this.maxRadius)) + this.maxRadius;
    }

    init() {
        if(this.opacity <= 0) {
            this.pointX = Math.floor(Math.random() * (this.canvasWidth - this.maxRadius)) + this.maxRadius;
            this.pointY = Math.floor(Math.random() * (this.canvasHeight - this.maxRadius)) + this.maxRadius;
            this.radius = Math.floor(Math.random() * this.maxRadius) + 5;
            this.colorR = Math.floor(Math.random() * 200) + 50;
            this.colorG = Math.floor(Math.random() * 200) + 50;
            this.colorB = Math.floor(Math.random() * 200) + 50;
            this.opacity = 1;
        }
        this.opacity = this.opacity - this.opacityGap;
        this.radius = this.radius + this.radiusGap;
        this.color = `rgba(${this.colorR}, ${this.colorG}, ${this.colorB}, ${this.opacity})`;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pointX, this.pointY, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
}