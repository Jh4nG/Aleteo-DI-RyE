import { useEffect, useState } from 'react';
import { CanvasComponents } from './components/CanvasComponent';
import { Cassete } from './components/Casette';
import { Cuadro } from './components/Cuadro';
import { MapaSilueta } from './components/MapaSilueta';
import { CameraComponent } from './components/Camera';
export const Header = ({
    setSection,
    titleNav
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
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('RostrosYEspacios', 'Rostros y espacios')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <MapaSilueta
                                            position={[2.1,1,1]}
                                            rotation={[1.5,-1.4,0]}
                                            scale={2.3}
                                        />
                                    }
                                    target={[2, 1, 1]}
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('ImagenComparada', 'Imagen comparada')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <CameraComponent
                                            scale={12}
                                            position={[0,-.5,0]}
                                        />
                                    }
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('SinforniaDeUnaLocalidad', 'Sinfonía de una localidad')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <Cassete scale={0.5} />
                                    }
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('NarracionesBarriales', 'Narraciones barriales')}}>
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
                            <span className="text">{titleNav}</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <div className={`indicator`}></div>
                </ul>
            </div>
        </>
    )
}