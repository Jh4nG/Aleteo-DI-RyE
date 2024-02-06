import { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

export default function WorldComponent() {
    const gltf = useLoader(GLTFLoader, '/mundo/scene.gltf');
    const { scene, nodes } = gltf;
    let positionWorld = nodes.Nido.position;

    const init = () => {
        nodes.Nido1.visible = false;
        nodes.Nido2.visible = false;
        nodes.Nido3.visible = false;
        nodes.Nido4.visible = false;
    }

    const getInteraction = (e) => {
        if(nodes.Nido.position === positionWorld){
            switch(e.object.name){
                case 'Nido':
                    nodes.Nido1.visible = true;
                    nodes.Nido2.visible = true;
                    nodes.Nido3.visible = true;
                    nodes.Nido4.visible = true;
                    break;
                default:
                    break;
            }
        }else{
            positionWorld = nodes.Nido.position
        }        
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <Canvas camera={{ position: [15, 10, 20] }} shadows>
            <primitive
                object={scene}
                position={[0, -5, 0]}
                children-0-castShadow
                onChange={(e) =>( console.log(e))}
                onClick={(e) =>( e.stopPropagation(), getInteraction(e))}
            />
            <mesh 
                object={nodes.Nido.geometry}
            />
            <OrbitControls
                target={[0, 1, 0]}
            />
        </Canvas>
    )
}