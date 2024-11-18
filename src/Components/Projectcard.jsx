import React from 'react'
import { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  
  } from 'mdb-react-ui-kit';
  import { FaGithub, FaLink  } from "react-icons/fa";

function Projectcard() {
    const [centredModal, setCentredModal] = useState(false);

    const toggleOpen = () => setCentredModal(!centredModal);
  

  return (
    <>
     <MDBCard onClick={toggleOpen}>
      <MDBCardImage src='/homeimg.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
      </MDBCardBody>
   
      </MDBCard>
      <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project Title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <div className="row p-3">
                    <div className="col"><img src={"../project.jpg"} width={'350px'} height={'300px'} alt="" /></div>
                    <div className="col"style={{textAlign:'left'}}>
                        <h3 style={{textAlign:'left'}} >Descrption</h3>
                    <p style={{textAlign:'justify'}}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <h3 >Technologies</h3>
                <p>React,Node</p>
                    <button className='btn btn-info mx-2'><b className='fs-5'><FaGithub /></b></button> 
                    <button className='btn btn-info mx-2'><b className='fs-5'><FaLink /></b></button> 
                    </div>
                </div>
             
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default Projectcard