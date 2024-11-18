import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Userprofile() {
  const [open, setOpen] = useState(false);

  return (
    <>
     <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text text-center">
          <img src="./userimg.png" width={'150px'} height={'150px'} alt="" />
          <FloatingLabel  controlId="floatingInput"label="Username"className="mb-3 w-50 m-auto">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel  controlId="floatingInput"label="Github"className="mb-3 w-50 m-auto">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel  controlId="floatingInput"label="Linkdin"className="mb-3 w-50 m-auto">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
        </div>
      </Collapse>
    </>
  )
}

export default Userprofile