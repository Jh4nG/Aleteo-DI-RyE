import { ModalPointers } from "../../../../../components/ModalPointers"

export const ICPointer2 = ( { 
        modalIsOpen,
        handleModalOpen
     } )=> {

    const Component = ()=> {
        return (
            <>Content Pointer 2</>
        )
    }
    return (
        <>
            <ModalPointers 
                modalIsOpen={modalIsOpen}
                title={'Pointer 2 IC'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}