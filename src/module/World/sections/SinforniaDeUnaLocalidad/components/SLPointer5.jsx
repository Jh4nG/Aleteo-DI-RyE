import { ModalPointers } from "../../../../../components/ModalPointers"

export const SLPointer5 = ( { 
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
                title={'Pointer 5 SL'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}