import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionSLComponent } from "../../components/DescripcionSLComponent"
import AudioMp3 from './../../../../../assets/img/SinforniaDeUnaLocalidad/1. Plaza de Lisboa.mp3';
import ImgAudio from './../../../../../assets/img/SinforniaDeUnaLocalidad/1. Plaza de Lisboa.png';

export const SLPointer1 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionSLComponent
                audio={AudioMp3}
                img={ImgAudio}
                description={"Este espacio de la localidad es uno de tantos que demuestra que los diversos negocios callejeros también hacen parte y son vitales en la economía de Suba."}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Plaza de Lisboa - Suba'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-SL"}
            />
        </>
    )
}