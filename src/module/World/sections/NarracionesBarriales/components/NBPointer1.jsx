import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer1 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/OGzMVUSx6VI?si=5a94ECVMKtlCFwAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                description={<>
                                <p>Los integrantes de las agrupaciones Nueva primavera, Gotas de esperanza y Folclor latino cuentan a través de sus vivencias cotidianas cómo los ha impactado la danza en la 3ra juventud.</p>
                                <p>
                                    <strong>Director:</strong> Yhon Durán
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'La danza en la 3ra juventud'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}