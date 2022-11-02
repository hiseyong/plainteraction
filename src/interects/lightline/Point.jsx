export class Point {
    pointCenterX;
    pointCenterY;
  
    constructor(
      POINT_GAP,
      i,
      canvasWidth,
      canvasHeight
    ) {
      this.pointCenterX = POINT_GAP * i;
      this.radian = i * 0.38;
      this.CENTER_LINE = canvasHeight / 3;
      this.VELOCITY = 0.007;
      this.AMPLITUDE = canvasHeight / 14;
      this.POINT_RADIUS =
        canvasWidth / 370 > 5.8
          ? 5.8
          : canvasWidth / 370 < 2.5
          ? 2.5
          : canvasWidth / 370;
      this.pointCenterY =
        this.AMPLITUDE * Math.sin(this.radian) + this.CENTER_LINE;
    }
  
    animate(ctx) {
        this.radian += this.VELOCITY;
    this.pointCenterY =
      this.AMPLITUDE * Math.sin(this.radian) + this.CENTER_LINE;
      ctx.beginPath();
      ctx.fillStyle = 'rgb(102, 103, 171)';
      ctx.arc(this.pointCenterX, this.pointCenterY, this.POINT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
}