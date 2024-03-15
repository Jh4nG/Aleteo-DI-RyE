import { ModalPointers } from "../../../../../components/ModalPointers"

export const ICPointer3 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <>Content Pointer 3</>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Pointer 3 IC'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}