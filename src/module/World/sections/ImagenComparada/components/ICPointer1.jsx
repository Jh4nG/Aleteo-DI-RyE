import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionICComponent } from "../../components/DescripcionICComponent"
import ImgZonaPoa from './../../../../../assets/img/ImagenesComparada/1. Zona Poa 360.png';
import ImgZonaPoaAntigua from './../../../../../assets/img/ImagenesComparada/1. Zona Poa (Antigua).jpg';

export const ICPointer1 = ( { 
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
                                        Calle 139 # 111A 
                                    </>}
                    descriptionAntigua={<>
                                            Año: 2009 <br />
                                            NN <br />
                                            Calle 139 # 111A
                                        </>}
                />
            </>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Zona El Poa'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-IC"}
            />
        </>
    )
}