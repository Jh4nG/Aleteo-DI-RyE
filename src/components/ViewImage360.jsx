import { useEffect, useRef, useState } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

export const ViewImage360Component = ({
    img360,
    imgAntigua
}) => {

    const divisor = useRef(null);
    const handle = useRef(null);
    const slider = useRef(null);
    const [porcentajeDiv,  setProcentajeDiv] = useState(50);

    const moveDivisor = (e) => {
        if(e){
            setProcentajeDiv(e.target.value);
        }
    }

    useEffect(() => {
        moveDivisor();
    }, []);

    return (
        <div className="App">
            <div id="comparison">
                <figure style={{
                    backgroundImage : `url('${imgAntigua}')`
                }}>
                    <div id="handle" ref={handle} style={{ left : `${porcentajeDiv}%` }}></div>
                    <div id="divisor" ref={divisor} style={{ width : `${porcentajeDiv}%` }}>
                        <ReactPhotoSphereViewer 
                            src={img360} 
                            width="100%" 
                            height={'100%'}
                            startAutoRotate={true}
                        ></ReactPhotoSphereViewer>
                    </div>
                </figure>
                <input type="range" min="0" max="100" value={porcentajeDiv} id="slider" ref={slider} onInput={(e)=>{moveDivisor(e)}} />
            </div>
        </div>
    );
}