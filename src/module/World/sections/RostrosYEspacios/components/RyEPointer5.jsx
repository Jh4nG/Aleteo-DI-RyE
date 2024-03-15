import { ModalPointers } from "../../../../../components/ModalPointers"

export const RyEPointer5 = ( { 
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
                title={'Pointer 5 RyE'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}