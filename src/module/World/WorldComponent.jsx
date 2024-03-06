import { Suspense, useEffect, useState } from 'react';
import { Environment, OrbitControls, useEnvironment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Chinche } from './components/Chinche';
import { Scene } from './components/Scene';
import { PointerChinche } from '../../resource/chinchePoints';

export default function WorldComponent( { section } ) {

    const envMap = useEnvironment({files : '/img/Background.hdr'});
    const [pointerActual, setPointerActual] = useState(PointerChinche['RostrosYEspacios']);
    const getInteraction = (e) => {
        console.log(e);
    }

    useEffect(()=>{
        setPointerActual(PointerChinche[section]);
    },[section])

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    {/* Luz ambiente */}
                    <ambientLight 
                        color={'white'}
                        intensity={1}
                    />
                    {/* Mapa */}
                    <Scene 
                        section={section}
                    /> 
                    {/* Punto de luz */}
                    <directionalLight color="white" position={[0, 0, 5]} />
                    {/* Control de Mapa */}
                    <OrbitControls
                        target={[0, 0, 0]}
                    />

                    <Environment map={envMap} background />

                    {pointerActual && 
                        pointerActual.map(({scale, position, rotation, action})=>{
                            return <Chinche 
                                scale={scale}
                                position={position}
                                rotation={rotation}
                                onClick={()=>{getInteraction(action)}}
                            />
                        })
                    }
                </Suspense>
            </Canvas>
        </>
    )
}