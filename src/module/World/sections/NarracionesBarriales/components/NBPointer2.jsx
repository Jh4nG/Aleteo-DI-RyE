import { ModalPointers } from "../../../../../components/ModalPointers"

export const NBPointer2 = ( { 
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
                title={'Pointer 2 NB'}
                Content={Component}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}