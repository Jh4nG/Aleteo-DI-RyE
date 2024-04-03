import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer2 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/MUJlyUISrq0?si=bqDCg4LdyPPY3WYH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                description={<>
                                <p>Un ciclista viaja a la Huerta Guerreras y Guerreros Unidos en Acción. La fundadora junto con sus integrantes le cuentan los orígenes, transformaciones, desafíos y logros que han tenido a lo largo de 2 décadas de fundada la huerta. Aquí se muestra la importancia de la agricultura urbana y la soberanía alimentaria.</p>
                                <p>
                                    <strong>Director:</strong> Daniel Ortega
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Tierra de guerreras'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}