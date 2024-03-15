import { ModalPointers } from "../../../../../components/ModalPointers"

export const SLPointer3 = ( { 
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
                title={'Pointer 3 SL'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}