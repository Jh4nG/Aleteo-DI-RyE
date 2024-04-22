import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer10 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/HyqPHNc1xi8?si=xXDJFIMzkyDC9FD_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                description={<>
                                <p>Diego es un tatuador de la localidad de Suba que cuenta cómo llegó a esta profesión y el día a día que tiene con su emprendimiento.</p>
                                <p>
                                    <strong>Director:</strong> Juan David Escobar
                                </p>
                            </>}
                addApoyo={<>
                            <br />
                            Tres Olas producciones
                          </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Sobre tinta'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}