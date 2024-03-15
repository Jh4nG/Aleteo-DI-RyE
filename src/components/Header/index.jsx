import { FaHome, FaUser, FaRegEnvelope, FaPhotoVideo, FaWhmcs } from 'react-icons/fa'
import { Camara } from './components/Camara';
import { Chinche } from './components/Chinche';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
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
                                <FaHome />
                            </span>
                            <span className="text">Rostros y espacios </span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('NarracionesBarriales')}}>
                            <span className="icon">
                                <FaUser />
                            </span>
                            <span className="text">Narraciones barriales</span>
                            <span className="circle"></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('ImagenComparada')}}>
                            <span className="icon">
                            <Canvas>
                                <Suspense fallback={null}>
                                    <ambientLight 
                                        color={'white'}
                                        intensity={1}
                                    />
                                    <directionalLight color="white" position={[0, 0, 2]} />
                                    <Camara 
                                        scale={10}
                                    />
                                    <OrbitControls
                                        minDistance={3}
                                        maxDistance={7}
                                        target={[0, 0, 0]}
                                    />
                                </Suspense>
                            </Canvas>
                            </span>
                            <span className="text">Imagen comparada</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={(e)=>{activeLink(e); setSection('SinforniaDeUnaLocalidad')}}>
                            <span className="icon">
                                <FaPhotoVideo />
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