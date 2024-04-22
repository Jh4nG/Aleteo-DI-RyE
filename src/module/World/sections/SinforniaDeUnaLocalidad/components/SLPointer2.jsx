import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionSLComponent } from "../../components/DescripcionSLComponent"
import AudioMp3 from './../../../../../assets/img/SinforniaDeUnaLocalidad/2. Parque Fontanar de río.mp3';
import ImgAudio from './../../../../../assets/img/SinforniaDeUnaLocalidad/2. Parque Fontanar del Río.webp';

export const SLPointer2 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionSLComponent
                audio={AudioMp3}
                img={ImgAudio}
                description={"Es uno de los parques más importantes de la localidad, siendo de los más visitados por la comunidad en general, pero sobre todo por deportistas que entran y se divierten en un espacio que es de libre acceso."}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Parque Fontanar del río - Suba'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-SL"}
            />
        </>
    )
}