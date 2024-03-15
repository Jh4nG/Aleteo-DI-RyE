import { ModalPointers } from "../../../../../components/ModalPointers"

export const SLPointer1 = ( { 
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
                title={'Pointer 1 SL'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}