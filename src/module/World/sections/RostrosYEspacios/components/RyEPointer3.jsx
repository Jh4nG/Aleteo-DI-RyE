import { ModalPointers } from "../../../../../components/ModalPointers"

export const RyEPointer3 = ( { 
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
                title={'Pointer 3 RyE'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}