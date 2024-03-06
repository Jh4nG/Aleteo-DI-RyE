import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ViewImage360Component } from './ViewImage360';

export const ModalPrincipal = ({ modalIsOpen, handleModalOpen }) => {
    let subtitle;

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Modal 
                show={modalIsOpen} 
                onHide={handleModalOpen}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ViewImage360Component />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalOpen}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalOpen}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}