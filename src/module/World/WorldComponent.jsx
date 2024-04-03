import { Suspense, useEffect, useState } from 'react';
import { Environment, OrbitControls, useEnvironment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Chinche } from './components/Chinche';
import { Scene } from './components/Scene';
import { PointerChinche } from '../../resource/chinchePoints';
import { ImagenComparadaComponent } from './sections/ImagenComparada';
import { NarracionesBarrialesComponent } from './sections/NarracionesBarriales';
import { RostrosYEspaciosComponent } from './sections/RostrosYEspacios';
import { SinforniaDeUnaLocalidadComponent } from './sections/SinforniaDeUnaLocalidad';
import { Mapa3D } from './components/Mapa3D';
import { ChincheRojo } from './components/ChincheRojo';
import { ChincheAzul } from './components/ChincheAzul';
import { ChincheVerde } from './components/ChincheVerde';

export default function WorldComponent( { section } ) {

    const envMap = useEnvironment({files : '/img/Background.hdr'});
    const [rotateWorld, setRotateWorld] = useState(false);
    const [pointerActual, setPointerActual] = useState(PointerChinche['RostrosYEspacios']);
    const [modalOpenRyE, setModalOpenRyE] = useState(false);
    const [statusRyE, setStatusRyEModal] = useState({ // RostrosYEspacios
        Pointer1 : false,
        Pointer2 : false,
        Pointer3 : false,
        Pointer4 : false,
        Pointer5 : false,
    });
    const [modalOpenIC, setModalOpenIC] = useState(false);
    const [statusIC, setStatusICModal] = useState({ // ImagenComparada
        Pointer1 : false,
        Pointer2 : false,
        Pointer3 : false,
        Pointer4 : false,
        Pointer5 : false,
    });
    const [modalOpenSL, setModalOpenSL] = useState(false);
    const [statusSL, setStatusSLModal] = useState({ // SinforniaDeUnaLocalidad
        Pointer1 : false,
        Pointer2 : false,
        Pointer3 : false,
        Pointer4 : false,
        Pointer5 : false,
    });
    const [modalOpenNB, setModalOpenNB] = useState(false);
    const [statusNB, setStatusNBModal] = useState({ // SinforniaDeUnaLocalidad
        Pointer1 : false,
        Pointer2 : false,
        Pointer3 : false,
        Pointer4 : false,
        Pointer5 : false,
        Pointer6 : false,
        Pointer7 : false,
        Pointer8 : false,
        Pointer9 : false,
        Pointer10 : false
    });
    
    const getInteraction = (action) => {
        let tmp = null;
        switch(section){
            case 'RostrosYEspacios':
                    tmp = statusRyE;
                    tmp[action] = true;
                    setStatusRyEModal(tmp);
                    setModalOpenRyE(true);
                break;
            case 'ImagenComparada':
                    tmp = statusIC;
                    tmp[action] = true;
                    setStatusICModal(tmp);
                    setModalOpenIC(true);
                break;
            case 'SinforniaDeUnaLocalidad':
                    tmp = statusSL;
                    tmp[action] = true;
                    setStatusSLModal(tmp);
                    setModalOpenSL(true);
                break;
            case 'NarracionesBarriales':
                    tmp = statusNB;
                    tmp[action] = true;
                    setStatusNBModal(tmp);
                    setModalOpenNB(true);
                break;
        }
    }

    const animationRotate = () => {
        setRotateWorld(true);
        setPointerActual(null);
        setTimeout(()=>{
            setTimeout(()=>{
                setPointerActual(PointerChinche[section]);
            },500);
            setRotateWorld(false);
        },800);
    }

    useEffect(()=>{
        animationRotate()
        setPointerActual(PointerChinche[section]);
    },[section])

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    {/* Luz ambiente */}
                    <ambientLight 
                        color={'white'}
                        intensity={.5}
                    />
                    {/* Mapa */}
                    {section == 'NarracionesBarriales' ? (
                        <Mapa3D 
                            scale={8}
                            rotation={[1.6,-1.43,0]}
                            position={[-.2,0,0]}
                        />
                    ) : 
                        <Scene 
                            section={section}
                        /> 
                    }
                    {/* Punto de luz */}
                    <directionalLight color="white" position={[0, 0, 2]} />
                    {/* Control de Mapa */}
                    <OrbitControls
                        // autoRotate={rotateWorld}
                        autoRotateSpeed={100}
                        minDistance={(section == 'NarracionesBarriales') ? 1 : 3}
                        maxDistance={7}
                        target={[0, 0, 0]}
                    />
                    {/* Fondo del mapa */}
                    <Environment map={envMap} background />

                    {/* Chinches */}
                    {pointerActual &&
                        pointerActual.map(({scale, position, rotation, action}, i)=>{
                            switch(section){
                                case 'RostrosYEspacios':
                                    return <Chinche
                                                key={i}
                                                intensity={.5}
                                                scale={scale}
                                                position={position}
                                                rotation={rotation}
                                                onClick={()=>{getInteraction(action)}}
                                            />
                                case 'ImagenComparada':
                                    return <ChincheRojo 
                                                key={i}
                                                color={"black"}
                                                scale={scale}
                                                position={position}
                                                rotation={rotation}
                                                onClick={()=>{getInteraction(action)}}
                                            />
                                case 'SinforniaDeUnaLocalidad':
                                    return <ChincheAzul 
                                                key={i}
                                                color={"black"}
                                                scale={scale}
                                                position={position}
                                                rotation={rotation}
                                                onClick={()=>{getInteraction(action)}}
                                            />
                                case 'NarracionesBarriales':
                                    return <ChincheVerde 
                                                key={i}
                                                color={"black"}
                                                scale={scale}
                                                position={position}
                                                rotation={rotation}
                                                onClick={()=>{getInteraction(action)}}
                                            />
                            }
                        })
                    }
                </Suspense>
            </Canvas>

            {/** Sección de los componentes con modales */}
            {section == 'RostrosYEspacios' && (
                <RostrosYEspaciosComponent 
                    statusRyE={statusRyE}
                    setModalOpenRyE={setModalOpenRyE}
                    setStatusRyEModal={setStatusRyEModal}
                />
            )}
            {section == 'ImagenComparada' && (
                <ImagenComparadaComponent 
                    statusIC={statusIC}
                    setModalOpenIC={setModalOpenIC}
                    setStatusICModal={setStatusICModal}
                />
            )}
            {section == 'SinforniaDeUnaLocalidad' && (
                <SinforniaDeUnaLocalidadComponent 
                    statusSL={statusSL}
                    setModalOpenSL={setModalOpenSL}
                    setStatusSLModal={setStatusSLModal}
                />
            )}
            {section == 'NarracionesBarriales' && (
                <NarracionesBarrialesComponent 
                    statusNB={statusNB}
                    setModalOpenNB={setModalOpenNB}
                    setStatusNBModal={setStatusNBModal}
                />
            )}
        </>
    )
}