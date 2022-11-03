import { useCanvas } from "../../hooks/useCanvas";
import { Waves } from "./Waves";
import { useState } from "react";
import '../../css/Wave.css';
export function WaterWave(props) {
    const [waveLayer, setWaveLayer] = useState(3);
    const onChange = (e) => {
        setWaveLayer(e.target.value);
    }
    const wave = new Waves(props.canvasWidth, props.canvasHeight, waveLayer);
    wave.init();
    const animate = (ctx) => {
        ctx.clearRect(0,0,props.canvasWidth,props.canvasHeight);
        wave.draw(ctx);
    }
    const canvasRef = useCanvas(props.canvasWidth, props.canvasHeight, animate);
    return(
        <div>
            <input type="range" min="1" max="11" id='waverange' onChange={onChange}/>
            <canvas ref={canvasRef} id='wavecanvas'/>
        </div>
    )
}