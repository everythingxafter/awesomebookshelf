import React from "react";
import { Modal } from "react-bootstrap";

const BookModal = (title, onClose, message, seen) => {
  if (seen) {
    return (
      <Modal show={seen} onHide={onClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    );
  }
};

export default BookModal;
