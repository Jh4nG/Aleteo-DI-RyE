import { ModalPointers } from "../../../../../components/ModalPointers"

export const NBPointer4 = ( { 
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
                title={'Pointer 4 NB'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}