import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer7 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/yQRP4Z2RC4U?si=Gj82AQf-rVq9bKcm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                description={<>
                                <p>El señor José nos cuenta un poco acerca de su trabajo en la herrería familiar, desde cómo comenzó en esto hasta cómo se desarrolla al día de hoy. Acompañado de unas tomas de lo que es su trabajo y algunas de sus obras de arte (que son creaciones propias), explica como siendo un profesional en su trabajo, no cuenta con alguna acreditación profesional, lo que lo convierte en un profesional sin profesión.</p>
                                <p>
                                    <strong>Director:</strong> Juan David Jiménez - Geovanny Hernández
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Profesionales sin profesión'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}