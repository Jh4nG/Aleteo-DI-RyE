import { ModalPointers } from "../../../../../components/ModalPointers"

export const NBPointer3 = ( { 
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
                title={'Pointer 3 NB'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}