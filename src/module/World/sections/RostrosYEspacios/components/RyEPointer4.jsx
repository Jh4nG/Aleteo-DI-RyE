import { ModalPointers } from "../../../../../components/ModalPointers"

export const RyEPointer4 = ( { 
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
                title={'Pointer 4 RyE'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}