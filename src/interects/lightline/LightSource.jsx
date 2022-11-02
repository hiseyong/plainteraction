export class LightSource {
  
    constructor(canvasWidth, canvasHeight) {
      this.centerX = canvasWidth / 2;
      this.centerY = canvasHeight / 1.4;
      this.radius =
        canvasWidth / 48 > 48
          ? 48
          : canvasWidth / 48 < 24
          ? 24
          : canvasWidth / 48;
    }
  
    drawRadialGradientBehindLightSource(ctx) {
      const gradientRadius = this.radius * 16;
      const gradient = ctx.createRadialGradient(
        this.centerX,
        this.centerY,
        0,
        this.centerX,
        this.centerY,
        gradientRadius
      );
      gradient.addColorStop(0, 'rgb(102, 103, 171, 0.2)');
      gradient.addColorStop(1, 'rgb(31, 31, 36, 0.1)');
      ctx.fillStyle = gradient;
      ctx.arc(this.centerX, this.centerY, gradientRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  
    drawLightSource(ctx) {
      ctx.beginPath();
      ctx.fillStyle = 'rgb(102, 103, 171)';
      ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  
    drawLightLines(
      ctx,
      pointCenterX,
      pointCenterY
    ) {
      ctx.strokeStyle = 'rgb(176, 176, 212, 0.24)';
      ctx.lineWidth = 1;
      ctx.moveTo(this.centerX, this.centerY - this.radius);
      ctx.lineTo(pointCenterX, pointCenterY);
      ctx.stroke();
    }
  }