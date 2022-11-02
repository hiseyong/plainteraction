export class Ball {
    constructor(canvasWidth, canvasHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * (canvasWidth - diameter));
        this.y = diameter + (Math.random() * (canvasHeight - diameter));
    }

    draw(ctx, canvasWidth, canvasHeight) {
        this.x += this.vx;
        this.y += this.vy;
        const Gap = 20;
        this.bounceWindow(canvasWidth, canvasHeight);

        var gra2 = ctx.createRadialGradient(this.x - Gap, this.y + Gap, this.radius - 20, this.x - Gap, this.y + Gap, this.radius + 15);
        gra2.addColorStop(0,'rgb(0, 61, 71)');
        gra2.addColorStop(1, "rgb(0, 217, 255)");
        ctx.fillStyle = gra2;
        ctx.arc(this.x - Gap, this.y + Gap,90,0, (Math.PI /180)*360,false);
        ctx.fill();

        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(canvasWidth, canvasHeight) {
        const minX = this.radius;
        const maxX = canvasWidth - this.radius;
        const minY = this.radius;
        const maxY = canvasHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }
}