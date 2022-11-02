import { Ball } from "./Ball";
import { useCanvas } from "../../hooks/useCanvas";

export function BounceBall(props) {
    const fillBackground = (ctx) => {
        ctx.fillStyle = 'rgb(0, 217, 255)';
        ctx.fillRect(0, 0, props.canvasWidth, props.canvasHeight);
    }

    const ball = new Ball(props.canvasWidth, props.canvasHeight, 60, 5);

    const animate = (ctx) => {
        ctx.clearRect(0,0,props.canvasWidth,props.canvasHeight);
        fillBackground(ctx);
        ball.draw(ctx, props.canvasWidth, props.canvasHeight);
    }

    const canvasRef = useCanvas(props.canvasWidth, props.canvasHeight, animate);
    return(
        <canvas ref={canvasRef}/>
    )
}