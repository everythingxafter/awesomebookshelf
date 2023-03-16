import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalLogout({ show, onHide }) {

    const handleLogoutClick = () => {
        localStorage.clear();
        onHide();
        setTimeout(() => {
            window.location.href = '/logout';
        }, 1000);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleLogoutClick}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};