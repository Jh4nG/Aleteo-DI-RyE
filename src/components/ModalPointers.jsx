import Modal from 'react-bootstrap/Modal';

export const ModalPointers = ({ 
        modalIsOpen, 
        title,
        Content,
        handleModalOpen,
        classContent
     }) => {
    return (
        <>

            <Modal 
                show={modalIsOpen} 
                onHide={handleModalOpen}
                size="xl"
                className={`PointerBg ${classContent}`}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Content />
                </Modal.Body>
            </Modal>
        </>
    )
}