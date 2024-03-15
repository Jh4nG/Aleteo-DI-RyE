import { ModalPointers } from "../../../../../components/ModalPointers"

export const RyEPointer1 = ( { 
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
                title={'Pointer 1 RyE'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}