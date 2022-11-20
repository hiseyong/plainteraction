import { useCanvas } from "../../hooks/useCanvas";
import { MultipleWater } from "./MultipleWater";
export function WaterDrop(props) {
    const drop = new MultipleWater(props.canvasWidth, props.canvasHeight, 20);
    drop.init()
    const animate = (ctx) => {
        ctx.clearRect(0,0,props.canvasWidth,props.canvasHeight);
        drop.draw(ctx)
    }

    const canvasRef = useCanvas(props.canvasWidth, props.canvasHeight, animate);

    return(
        <div>
            <canvas ref={canvasRef} id='wavecanvas'/>
        </div>
    )
}