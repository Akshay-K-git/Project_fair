import React from 'react'
import { MDBInputGroup, MDBIcon } from 'mdb-react-ui-kit';

function Projects() {
  return (
    <>
    <div className='p-5'>
    <h2 className='text-center'>ALL PROJECTS</h2>
    <MDBInputGroup className='mb-3 mt-4 shadow w-75 mx-auto rounded' noBorder textBefore={<MDBIcon fas icon='search' />}>
        <input className='form-control' type='text' placeholder='Search' />
      </MDBInputGroup>
    </div>
    </>
  )
}

export default Projects