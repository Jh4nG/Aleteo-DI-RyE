import { useEffect, useRef, useState } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import imgPrueba from '../assets/img/360/BAJO.jpg';

export const ViewImage360Component = () => {

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
            <div class="container">
                <div id="comparison">
                    <figure>
                        <div id="handle" ref={handle} style={{ left : `${porcentajeDiv}%` }}></div>
                        <div id="divisor" ref={divisor} style={{ width : `${porcentajeDiv}%` }}>
                            <ReactPhotoSphereViewer src={imgPrueba} width="100%" height={'100%'}></ReactPhotoSphereViewer>
                        </div>
                    </figure>
                    <input type="range" min="0" max="100" value={porcentajeDiv} id="slider" ref={slider} onInput={(e)=>{moveDivisor(e)}} />
                </div>
            </div>
        </div>
    );
}