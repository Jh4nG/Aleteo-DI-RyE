import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionICComponent } from "../../components/DescripcionICComponent"
import ImgZonaPoa from './../../../../../assets/img/ImagenesComparada/3. Zona Suba Turingia 360.webp';
import ImgZonaPoaAntigua from './../../../../../assets/img/ImagenesComparada/3. Zona Suba Tiringia (Aintigua).webp';

export const ICPointer3 = ( { 
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
                                        AV Suba - Calle 145 
                                    </>}
                    descriptionAntigua={<>
                                            Año: 1950 <br />
                                            NN <br />
                                            Publicación-Colaboración: Gloria Botero <br />
                                            Vía Cota - Suba
                                        </>}
                />
            </>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Zona Suba Turingia '}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-IC"}
            />
        </>
    )
}