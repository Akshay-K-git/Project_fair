import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MDBFooter className='text-center text-white bg-primary' style={{ backgroundColor: '#0a4275' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
            <Link to={'/login'}>
            <MDBBtn type='button' outline color="light" rounded>
              Sign up!
            </MDBBtn>
            </Link>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer