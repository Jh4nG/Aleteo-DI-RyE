import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TextureLoader } from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';

export function Scene( {section} ) {

    const RostrosYEspacios = useLoader(TextureLoader, '/img/RostrosYEspacios.png');
    const ImagenComparada = useLoader(TextureLoader, '/img/ImagenComparada.png');
    const SinforniaDeUnaLocalidad = useLoader(TextureLoader, '/img/SinfoniaDeUnaLocalidad.png');
    const NarracionesBarriales = useLoader(TextureLoader, '/img/NarracionesBarriales.png');
    const [mapTexture, setMapTexture] = useState(RostrosYEspacios);
    useEffect(()=>{
        let imgTmp = null;
        switch(section){
            case 'RostrosYEspacios':
                imgTmp = RostrosYEspacios;
                break;
            case 'ImagenComparada':
                imgTmp = ImagenComparada;
                break;
            case 'SinforniaDeUnaLocalidad':
                imgTmp = SinforniaDeUnaLocalidad;
                break;
            case 'NarracionesBarriales':
                imgTmp = NarracionesBarriales;
                break;
            default:
                imgTmp = RostrosYEspacios;
                break;
        }
        setMapTexture(imgTmp);
    },[section])

    return (
      <>
        <ambientLight intensity={1} />
        <directionalLight />
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]} />
            {/* <sphereGeometry args={[2.5, 32, 3]} /> */}
            {/* <sphereGeometry args={[2.5, 5, 3]} /> */}
            <meshStandardMaterial map={mapTexture}/>
        </mesh>
      </>
    )
}