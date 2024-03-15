import { ModalPointers } from "../../../../../components/ModalPointers"

export const SLPointer4 = ( { 
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
                title={'Pointer 4 SL'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}