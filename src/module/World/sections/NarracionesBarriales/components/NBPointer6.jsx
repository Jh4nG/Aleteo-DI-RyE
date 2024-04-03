import { ModalPointers } from "../../../../../components/ModalPointers"
import { DescripcionNBComponent } from "../../components/DescripcionNBComponent"

export const NBPointer6 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <DescripcionNBComponent 
                iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/JzDfobSpMKo?si=PONdGhrSxcRN63dp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
                description={<>
                                <p>Todo aquel que entre o salga de suba ha pasado por el Puente de la Virgen o el Puente del Barco, sin embargo, muy pocos conocen sobre las vidas y rostros que se han perdido en este lugar. Laura nos cuenta la historia de su mamá, María Victoria, quien hace un año decidió saltar al vacío. Con este relato divisamos la importancia de la preocupación por la salud mental en una sociedad que normaliza el no sentirse bien.</p>
                                <p>
                                    <strong>Director:</strong> Luisa Rodríguez
                                </p>
                            </>}
            />
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Uno con setenta y cuatro - Narrativas barriales (Suba)'}
                Content={Component}
                handleModalOpen={handleModalOpen}
                classContent={"PointerBg-NB"}
            />
        </>
    )
}