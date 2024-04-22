import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer8 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/WW4yjGlfNYE?si=1CR3h3dYermsd-CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={<>
                                <p>La cotidianidad de una persona con discapacidad visual que transita lugares sin inclusión y otros adaptados como los podo táctiles, medios de transporte. Buscando oportunidades y esperanza, superando barreras a través de iniciativas como el deporte desde la bicicleta tándem, a nivel recreativo. Buscando redes para incluir la bici tándem en otra iniciativa, el Diplomado Bici-ambiental, recibiendo el apoyo de la comunidad para el conductor guía, indispensable para el emprendimiento recreativo ambiental, desde el sentir y entender la discapacidad.</p>
                                <p>
                                    <strong>Director:</strong> Marthabella Pedraza
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Un día así'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}