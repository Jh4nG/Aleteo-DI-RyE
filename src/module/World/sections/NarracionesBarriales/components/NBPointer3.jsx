import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer3 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/YjtrXghGSb0?si=tJDPBSSSXhF1LA-Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={<>
                                <p>Casa rosada una tienda, galería, bar que sirve como plataforma para los artistas plásticos, músicos y literatos para que muestren el arte local de Suba. Un aporte de 45 años a la localidad.</p>
                                <p>
                                    <strong>Director:</strong> Óscar Cardozo
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Entre arte, polas y recuerdos - Narrativas Barriales (Suba)'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}