import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FaFileUpload } from "react-icons/fa";
import { addProjectAPI } from '../../services/allAPI';
function Addproject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[priview,setpreview]=useState("")

  const[projectDetails,setprojectDetails]=useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectimg:""
  })
  const handleAddproject=async()=>{
console.log(projectDetails);
const{title,language,github,website,overview,projectimg}=projectDetails
if(!title||!language||!github||!website||!overview||!projectimg){
  alert("Please fill the form")
}
else{
  const reqBody = new FormData()
  reqBody.append("title",title)
  reqBody.append("language",language)
  reqBody.append("github",github)
  reqBody.append("website",website)
  reqBody.append("overview",overview)
  reqBody.append("projectimg",projectimg)

  try {
   
const response = await addProjectAPI(reqBody)
    
  } catch (error) {
    console.log(error);
    
  }
}

  }
  useEffect(()=>{
    if(projectDetails.projectimg){
    setpreview(URL.createObjectURL(projectDetails.projectimg))
    }
  },[projectDetails.projectimg])


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
          <Modal.Title>ADD PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <label>
              <input type="file"onChange={e=>setprojectDetails({...projectDetails,projectimg:e.target.files[0]})} style={{display:'none'}}/>
              <img src={priview?priview:"./addproject.png"} width={'380px'} height={'270px'} alt="" />
            </label>
          </div>
          <div className="col-6">
          <FloatingLabel controlId="floatingInput"label="Title"className="mb-3">
        <Form.Control onChange={e=>setprojectDetails({...projectDetails,title:e.target.value})} type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"label="Language"className="mb-3">
        <Form.Control onChange={e=>setprojectDetails({...projectDetails,language:e.target.value})} type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"label="Github"className="mb-3">
        <Form.Control onChange={e=>setprojectDetails({...projectDetails,github:e.target.value})} type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"label="Website"className="mb-3">
        <Form.Control onChange={e=>setprojectDetails({...projectDetails,website:e.target.value})} type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Overview">
        <Form.Control
        onChange={e=>setprojectDetails({...projectDetails,overview:e.target.value})}
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
          <Button variant="primary" onClick={handleAddproject}><FaFileUpload className='mb-2 me-1' />Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproject