import { ModalPointers } from "../../../../../components/ModalPointers"

export const RyEPointer2 = ( { 
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
                title={'Pointer 2 RyE'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}