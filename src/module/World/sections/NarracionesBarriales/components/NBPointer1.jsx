import { ModalPointers } from "../../../../../components/ModalPointers"

export const NBPointer1 = ( { 
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
                title={'Pointer 1 NB'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}