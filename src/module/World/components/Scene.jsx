import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TextureLoader } from 'three';

export function Scene( {section} ) {

    const RostrosYEspacios = useLoader(TextureLoader, '/img/RostrosYEspacios.png');
    const ImagenComparada = useLoader(TextureLoader, '/img/ImagenComparadaSenal.png');
    const SinforniaDeUnaLocalidad = useLoader(TextureLoader, '/img/SinfoniaDeUnaLocalidadSenal.png');
    const NarracionesBarriales = useLoader(TextureLoader, '/img/RostrosYEspacios.png');
    const [mapTexture, setMapTexture] = useState(RostrosYEspacios);

    const getPosition = (e)=> {
        console.log(e.point);
    }

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
        <mesh
            // onClick={getPosition}
            >
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial 
                map={mapTexture}
            />
        </mesh>
      </>
    )
}