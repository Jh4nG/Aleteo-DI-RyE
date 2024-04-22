import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionICComponent } from "../../components/DescripcionICComponent"
import ImgZonaPoa from './../../../../../assets/img/ImagenesComparada/2. Zona Tibabuyes 360.webp';
import ImgZonaPoaAntigua from './../../../../../assets/img/ImagenesComparada/2. Zona Tibabuyes (Antigua).webp';

export const ICPointer2 = ( { 
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
                                        Calle 143 # 127C
                                    </>}
                    descriptionAntigua={<>
                                            Año: 1996 <br />
                                            Bernardo Mora <br />
                                            Calle 143 # 127C
                                        </>}
                />
            </>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Zona Tibabuyes'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-IC"}
            />
        </>
    )
}