import { useEffect, useState } from 'react';
import { CanvasComponents } from './components/CanvasComponent';
import { Cuadro } from './components/Cuadro';
import { MapaSilueta } from './components/MapaSilueta';
import { CassettePlayer } from './components/CassettePlayer';
import { Camera01 } from './components/Camera01';
export const Header = ({
    section,
    titleNav,
    setSection,
    startMoveIcons
}) => {

    const [rotateLateralidad, setRotateLateralidad] = useState(0);

    const activeLink = (e) => {
        const list = document.querySelectorAll('.list');
        list.forEach((item, e) => {
            item.classList.remove('active');
        });
        e.target.closest('li').classList.add('active');
    }

    useEffect(()=>{
        if(!startMoveIcons){
            setTimeout(()=>{
                setRotateLateralidad(rotateLateralidad == 1 || rotateLateralidad == 0 ? -1 : 1)
            },10000)
        }
    },[startMoveIcons,rotateLateralidad]);

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
                                            position={[2,1,1]}
                                            rotation={[1.7,-1.35,0]}
                                            scale={2.3}
                                        />
                                    }
                                    target={[2, 1, 1]}
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('ImagenComparada', 'Imagen comparada')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <Camera01 
                                            scale={12}
                                            position={[0,-.5,0]}
                                            rotation={[0,0.5,0]}
                                        />
                                    }
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('SinforniaDeUnaLocalidad', 'Sinfonía de una localidad')}}>
                            <span className="icon">
                                <CanvasComponents
                                    Content={
                                        <CassettePlayer 
                                            scale={8} 
                                            rotation={[0,0.5,0]}
                                        />
                                        // <Cassete 
                                        //     scale={0.5} 
                                        //     rotation={[0,0.2,0]}
                                        // />
                                    }
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
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
                                            rotation={[0,0.5,0]}
                                        />
                                    }
                                    target={[.7, 0, 0]}
                                    rotateLateralidad={rotateLateralidad}
                                />
                            </span>
                            <span className="text">{titleNav}</span>
                            <span className={`circle circle__${section}`}></span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}