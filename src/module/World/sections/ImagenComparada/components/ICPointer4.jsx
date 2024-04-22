import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionICComponent } from "../../components/DescripcionICComponent"
import ImgZonaPoa from './../../../../../assets/img/ImagenesComparada/4. Suba Centro - Plaza Fundancional 360.webp';
import ImgZonaPoaAntigua from './../../../../../assets/img/ImagenesComparada/4. Suba Centro - Plaza Fundacnional (Antigua).webp';

export const ICPointer4 = ( { 
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
                                        Carrera 91 # 145
                                    </>}
                    descriptionAntigua={<>
                                            Año: 1991 <br />
                                            Guillermo Mora <br />
                                            Carrera 91 # 145
                                        </>}
                />
            </>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Zona Suba Centro - Plaza Fundacional'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-IC"}
            />
        </>
    )
}