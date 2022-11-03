import { LightWave } from "./interects/lightline/LightWave";
import { useClientWidthHeight } from "./hooks/useClientWidthHeight";
import { useState,useEffect } from "react";
import { BounceBall } from "./interects/bounceball/BounceBall";
import { WaterWave } from "./interects/wave/WaterWave";
import './css/pageButton.css';
import './css/componentCover.css'
import './css/app.css'

function App() {
    const maxPage = 2;
    const [presentPage, setPresentPage] = useState(Math.floor(Math.random() * maxPage));
    const [component, setComponent] = useState();
    const clientRect = useClientWidthHeight();
    const canvasWidth = clientRect.innerWidth;
    const canvasHeight = clientRect.innerHeight;
    const componentList = [
        <LightWave canvasWidth={canvasWidth} canvasHeight={canvasHeight - 4}/>,
        <BounceBall canvasWidth={canvasWidth} canvasHeight={canvasHeight - 4}/>,
        <WaterWave canvasWidth={canvasWidth} canvasHeight={canvasHeight - 4}/>
    ]


    useEffect(() => {
        setComponent(componentList[presentPage]);
    },[presentPage,canvasHeight, canvasWidth]);


    const onClickPreviousButton = () => {
        if(presentPage == 0) {
            setPresentPage(maxPage);
        } else {
            setPresentPage(presentPage - 1)
        }
    };


    const onClickNextButton = () => {
        if(presentPage == maxPage) {
            setPresentPage(0);
        } else {
            setPresentPage(presentPage + 1)
        }
    };


    return(
        <div>
            <button onClick={onClickPreviousButton} className='pagebutton' id="previous">＜</button>
            <button onClick={onClickNextButton} className='pagebutton' id="next">＞</button>
            <div className="componentcover">
                {component}
            </div>
        </div>
    )
}

export default App;