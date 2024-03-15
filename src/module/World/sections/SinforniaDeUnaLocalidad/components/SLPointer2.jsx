import { ModalPointers } from "../../../../../components/ModalPointers"

export const SLPointer2 = ( { 
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
                title={'Pointer 2 SL'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}