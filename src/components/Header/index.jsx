import { FaHome, FaUser, FaRegEnvelope, FaPhotoVideo, FaWhmcs } from 'react-icons/fa'
import { Camara } from './components/Camara';
import { Chinche } from './components/Chinche';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { CanvasComponents } from './components/CanvasComponent';
import { Cassete } from './components/Casette';
import { Cuadro } from './components/Cuadro';
import { SiluetaMapa } from './components/SiluetaMapa';
export const Header = ({
    setSection
}) => {

    const activeLink = (e) => {
        const list = document.querySelectorAll('.list');
        list.forEach((item, e) => {
            item.classList.remove('active');
        });
        e.target.closest('li').classList.add('active');
    }
    
    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('RostrosYEspacios')}}>
                            <span className="icon">
                                <CanvasComponents 
                                    Content={
                                        <SiluetaMapa 
                                            position={[1,2,0]}
                                            scale={.15}
                                        />
                                    }
                                    target={[2, 1, 1]}
                                />
                            </span>
                            <span className="text">Rostros y espacios </span>
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
                                />
                            </span>
                            <span className="text">Narraciones barriales</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('ImagenComparada')}}>
                            <span className="icon">
                                <CanvasComponents 
                                    Content={
                                        <Camara scale={10} />
                                    }
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
                                />
                            </span>
                            <span className="text">Sinfonía de una localidad</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <div className={`indicator`}></div>
                </ul>
            </div>
        </>
    )
}