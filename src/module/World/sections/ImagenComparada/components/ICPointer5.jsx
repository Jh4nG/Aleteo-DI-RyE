import { ModalPointers } from "../../../../../components/ModalPointers"

export const ICPointer5 = ( { 
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
                title={'Pointer 5 IC'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}