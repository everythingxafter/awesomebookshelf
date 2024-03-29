import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyAlert = (title, onClose, message, seen, button, to, getDataBook) => {
  const navigate = useNavigate();

  if (seen) {
    return (
      <Modal show={seen} onHide={onClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        {button ? (
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                to ? navigate(to) : getDataBook();
                onClose();
              }}
            >
              Ok
            </Button>
          </Modal.Footer>
        ) : null}
      </Modal>
    );
  }
};

export default MyAlert;
