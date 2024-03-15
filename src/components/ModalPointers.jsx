import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalPointers = ({ 
        modalIsOpen, 
        title,
        Content,
        buttons,
        handleModalOpen
     }) => {
    return (
        <>

            <Modal 
                show={modalIsOpen} 
                onHide={handleModalOpen}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Content />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalOpen}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}