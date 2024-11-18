import React from 'react'
import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Auth({register}) {
  return (
   <>
   <div className='row'>
    <div className="col-6 text-center p-5">
      <img src="/login_bg.png" width={'400px'} height={'400px'} alt="" />
    </div>
    <div className="col-6">
      <h3 className='fw-bold my-3'>Project Fair</h3>
      <h4>Sign{ 
      register ?"up":"in"
        }</h4>
        {
          
          register && 
          <>
          <Form.Label className='mt-3'>Username</Form.Label>
          <MDBInput className='' label="username" id="typeText" type="text" />
          </>
        }
        <Form.Label className='mt-3'>E-mail</Form.Label>
        <MDBInput className='' label="Email" id="typeEmail" type="email" />

        <Form.Label className='mt-3'>Password</Form.Label>
        <MDBInput className='' label="Password" id="typePassword" type="password" />

        {
          register?
          <div>
             <button type="button" class="btn btn-primary my-3 mx-2" fdprocessedid="midd2e">SignIn</button>

       
      <b>Alreadt registered ? <Link to={'/login'}>SignUp here!</Link></b>
          </div>
         
      
      :
      <div>
      <button type="button" class="btn btn-primary my-3 mx-2" fdprocessedid="midd2e">SignUp</button>
      <b>New to here <Link to={'/register'}>Signin here!</Link></b>
      </div>
       
          
        }

    </div>
   </div>
   </>
  )
}

export default Auth