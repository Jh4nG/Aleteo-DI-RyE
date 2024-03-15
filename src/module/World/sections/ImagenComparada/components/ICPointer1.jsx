import { ModalPointers } from "../../../../../components/ModalPointers"

export const ICPointer1 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <>Content Pointer 1</>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Pointer 1 IC'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}