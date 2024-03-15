import { ModalPointers } from "../../../../../components/ModalPointers"

export const NBPointer5 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <>Content Pointer 5</>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Pointer 5 NB'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}