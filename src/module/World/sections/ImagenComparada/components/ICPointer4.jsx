import { ModalPointers } from "../../../../../components/ModalPointers"

export const ICPointer4 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <>Content Pointer 4</>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Pointer 4 IC'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}