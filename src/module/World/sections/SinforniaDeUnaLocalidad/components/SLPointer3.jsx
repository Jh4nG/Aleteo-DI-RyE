import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionSLComponent } from "../../components/DescripcionSLComponent"
import AudioMp3 from './../../../../../assets/img/SinforniaDeUnaLocalidad/3. Zona Guaymaral - Suba.mp3';
import ImgAudio from './../../../../../assets/img/SinforniaDeUnaLocalidad/3. Zona Guaymaral.webp';

export const SLPointer3 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionSLComponent
                audio={AudioMp3}
                img={ImgAudio}
                description={"Suba se caracteriza por tener un zona rural de grandes extensiones y que pocos conocen, aquí tomamos el sonido de este espacio que también hace parte de la localidad 11."}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Zona Guaymaral - Suba'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-SL"}
            />
        </>
    )
}