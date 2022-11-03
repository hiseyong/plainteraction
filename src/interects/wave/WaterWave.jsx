import { useCanvas } from "../../hooks/useCanvas";
import { Wave } from "./Wave";
export function WaterWave(props) {
    const wave = new Wave(props.canvasWidth, props.canvasHeight);
    wave.init();
    const animate = (ctx) => {
        ctx.clearRect(0,0,props.canvasWidth,props.canvasHeight);
        wave.draw(ctx);
    }
    const canvasRef = useCanvas(props.canvasWidth, props.canvasHeight, animate);
    return(
        <canvas ref={canvasRef}/>
    )
}