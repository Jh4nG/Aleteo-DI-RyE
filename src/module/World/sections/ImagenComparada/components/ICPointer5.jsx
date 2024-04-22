import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionICComponent } from "../../components/DescripcionICComponent"
import ImgZonaPoa from './../../../../../assets/img/ImagenesComparada/5. Zona Suba Centro - Puente del barco 360.webp';
import ImgZonaPoaAntigua from './../../../../../assets/img/ImagenesComparada/5. Zona Suba Centro - Puente del barco (antigua).webp';

export const ICPointer5 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <>
                <DescripcionICComponent 
                    img360={ImgZonaPoa}
                    imgAntigua={ImgZonaPoaAntigua}
                    descriptionNew={<>
                                        Año: 2024 <br />
                                        Laura Mora <br />
                                        AV Calle 145
                                    </>}
                    descriptionAntigua={<>
                                            Año: 1969 <br />
                                            Aporte Daniel Roldán <br />
                                            Colaboración de Gloria Botero <br />
                                            AV Calle 145
                                        </>}
                />
            </>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Zona Suba Centro - Puente del barco'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-IC"}
            />
        </>
    )
}