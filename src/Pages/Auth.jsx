import React from 'react'
import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Auth({register}) {
  return (
   <>
   <div className='w-100 d-flex justify-content-center align-items-center'style={{height:'700px'}}>
   <div className='row w-50 shadow p-5'>
   <h3 className='fw-bold text-center'>Project Fair</h3>

    <div className="col-6 p-5 d-flex justify-content-center ">
      <img src="/login_bg.png" width={'300px'} height={'300px'} alt="" />
    </div>
    <div className="col-6 d-flex flex-column justify-content-center  ">
      <h4 className='fw-bold text-center d-flex '>Sign{ 
      register ?"Up":"In"
        }</h4>
        <div >
        {
          
          register && 
          <>
          <MDBInput className='my-3' label="username" id="typeText" type="text" />
          </>
        }
        <MDBInput className='my-3' label="Email" id="typeEmail" type="email" />

        <MDBInput className='my-3' label="Password" id="typePassword" type="password" />
        </div>
        {
          register?
          <div className='text-center'>
             <button type="button" class="btn btn-primary my-3 mx-2" >SignIn</button> <br />

       
      <b>Alreadt registered ? <Link to={'/login'}>SignUp here!</Link></b>
          </div>
         
      
      :
      <div className='text-center'>
      <button type="button " class="btn btn-primary my-3 mx-2" >SignUp</button><br />
      <b>New to here <Link to={'/register'}>Signin here!</Link></b>
      </div>
       
          
        }

    </div>
   </div>
   </div>
   </>
  )
}

export default Auth