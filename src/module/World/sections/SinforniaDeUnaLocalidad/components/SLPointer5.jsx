import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionSLComponent } from "../../components/DescripcionSLComponent"
import AudioMp3 from './../../../../../assets/img/SinforniaDeUnaLocalidad/5. Humedal Córdoba - Niza.mp3';
import ImgAudio from './../../../../../assets/img/SinforniaDeUnaLocalidad/5. Humedal Córdoba - Niza.webp';

export const SLPointer5 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionSLComponent
                audio={AudioMp3}
                img={ImgAudio}
                description={"El Humedal Córdoba tiene una riqueza tan grande como los demás humedales que tiene la localidad de Suba. Al igual que los demás espacios como este, logra un sonido característico por su fauna."}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Humedal Córdoba - Suba Niza'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-SL"}
            />
        </>
    )
}