import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionSLComponent } from "../../components/DescripcionSLComponent"
import AudioMp3 from './../../../../../assets/img/SinforniaDeUnaLocalidad/4. Plaza fundacional de Suba.mp3';
import ImgAudio from './../../../../../assets/img/SinforniaDeUnaLocalidad/4. Plaza Fundacional de Suba.webp';

export const SLPointer4 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionSLComponent
                audio={AudioMp3}
                img={ImgAudio}
                description={"Este es el espacio más significativo de la localidad, siendo aquel que todos conocen y que también tiene su propia sinfonía característica. "}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Plaza Fundacional - Suba Centro'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-SL"}
            />
        </>
    )
}