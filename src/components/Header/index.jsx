import { useEffect, useState } from 'react';
import { CanvasComponents } from './components/CanvasComponent';
import { Cassete } from './components/Casette';
import { Cuadro } from './components/Cuadro';
import { MapaSilueta } from './components/MapaSilueta';
import { CameraComponent } from './components/Camera';
export const Header = ({
    setSection
}) => {

    const [rotateLateralidad, setRotateLateralidad] = useState(1);

    const activeLink = (e) => {
        const list = document.querySelectorAll('.list');
        list.forEach((item, e) => {
            item.classList.remove('active');
        });
        e.target.closest('li').classList.add('active');
    }

    useEffect(()=>{
        setTimeout(()=>{
            setRotateLateralidad(rotateLateralidad == 1 ? -1 : 1)
        },10000)
    },[rotateLateralidad]);

    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('RostrosYEspacios')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <MapaSilueta
                                            position={[2.5,1,0]}
                                            rotation={[1.5,-1.4,0]}
                                            scale={3}
                                        />
                                    }
                                    target={[2, 1, 1]}
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">Rostros y espacios </span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('ImagenComparada')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <CameraComponent
                                            scale={10}
                                        />
                                    }
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">Imagen comparada</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('SinforniaDeUnaLocalidad')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <Cassete scale={0.5} />
                                    }
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">Sinfonía de una localidad</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('NarracionesBarriales')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <Cuadro
                                            position={[0,0,0]}
                                            scale={3}
                                        />
                                    }
                                    target={[.7, 0, 0]}
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">Narraciones barriales</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <div className={`indicator`}></div>
                </ul>
            </div>
        </>
    )
}