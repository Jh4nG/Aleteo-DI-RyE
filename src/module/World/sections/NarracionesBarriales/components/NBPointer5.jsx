import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer5 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/j0UjfGU-7N4?si=hFWyB79KTdI4z8nV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                description={<>
                                <p>El corto documental El humedal de los buenos vecinos explora la interconexión entre el Humedal Córdoba (Suba- Bogotá) como ecosistema vital y la incansable lucha de los vecinos por su conservación. A través de imágenes cautivadoras y testimonios conmovedores, el documental busca crear conciencia sobre la necesidad urgente de conservar este ecosistema único y resaltar el poder de la comunidad en la protección de la naturaleza en entornos urbanos.</p>
                                <p>
                                    <strong>Director:</strong> Vanessa Sandoval
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'El Humedal De Los Buenos Vecinos - Narrativas barriales (Suba)'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}