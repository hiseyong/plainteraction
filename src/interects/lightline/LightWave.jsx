import { useCanvas } from "../../hooks/useCanvas";
import { LightSource } from "./LightSource";
import { Point } from "./Point";

 export const LightWave = (props) => {
    const fillBackground = (ctx) => {
        ctx.fillStyle = 'rgb(31, 31, 36)';
        ctx.fillRect(0, 0, props.canvasWidth, props.canvasHeight);
    }

    const lightSource = new LightSource(props.canvasWidth, props.canvasHeight);

    let points = [];
  const initPoints = () => {
    const POINT_NUMBER = 72;
    const POINT_GAP = props.canvasWidth / POINT_NUMBER;

    for (let i = 0; i <= POINT_NUMBER; i++) {
      const point = new Point(POINT_GAP, i, props.canvasWidth, props.canvasHeight);
      points.push(point);
    }
  };
  if (props.canvasWidth !== 0 && props.canvasHeight !== 0) {
    initPoints();
  }


    const animate = (ctx) => {
        ctx.clearRect(0, 0, props.canvasWidth, props.canvasHeight);
        fillBackground(ctx);
        lightSource.drawRadialGradientBehindLightSource(ctx);
        lightSource.drawLightSource(ctx);
        for (let i = 0; i < points.length; i++) {
            lightSource.drawLightLines(
              ctx,
              points[i].pointCenterX,
              points[i].pointCenterY
            );
            points[i].animate(ctx);
          }
      };

    const canvasRef = useCanvas(props.canvasWidth, props.canvasHeight, animate);
    return(
        <canvas ref={canvasRef}/>
    );
}