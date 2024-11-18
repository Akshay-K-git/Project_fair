import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FaFileUpload } from "react-icons/fa";
function Addproject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" class="btn btn-primary btn-lg" onClick={handleShow}>
        Add project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col"></div>
          <div className="col">
          <FloatingLabel controlId="floatingInput"label="Title"className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"label="Language"className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"label="Github"className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"label="Website"className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Overview">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>


          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary"><FaFileUpload className='mb-2 me-1' />Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproject