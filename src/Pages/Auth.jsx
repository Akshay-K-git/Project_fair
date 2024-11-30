import React, { useState } from 'react'
import { MDBInput} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { loginAPI, registerAPI } from '../../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {//register page(from app.jsx)
  const [userDetails,setuserDetails]=useState({
    username:"",
    email:"",
    password:""
  })

  const HandleRegister=async()=>{
    console.log(userDetails);
    const{username,email,password}=userDetails
    if(!username||!email||!password){
      toast.error("Please fill the form", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      //API fetching
      try {
        const response = await registerAPI(userDetails)
        console.log(response);
        if(response.status==200){
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        else{
          toast.error(response.response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }

      } catch (error) {
        alert("API error")
      }
    }
  }
  const HandleLogin=async()=>{
    console.log(userDetails);
    const{email,password}=userDetails
    if(!email||!password){
      toast.error("fill the form", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      try{
        const response = await loginAPI(userDetails)
        console.log(response);
        if(response.status==200){
          toast.success("Login succesfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
       
        else{
          toast.error(response.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        
      }
      catch(err){
        console.log(err);
        
      }
    }
  }
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
          <MDBInput className='my-3' onChange={e=>setuserDetails({...userDetails,username:e.target.value})} label="username" id="typeText" type="text" />
          </>
        }
        <MDBInput className='my-3' onChange={e=>setuserDetails({...userDetails,email:e.target.value})} label="Email" id="typeEmail" type="email" />

        <MDBInput className='my-3' onChange={e=>setuserDetails({...userDetails,password:e.target.value})} label="Password" id="typePassword" type="password" />
        </div>
        {
          register?
          <div className='text-center'>
             <button onClick={HandleRegister} type="button" class="btn btn-primary my-3 mx-2" >SignIn</button> <br />

       
      <b>Already registered ? <Link to={'/login'}>SignUp here!</Link></b>
          </div>
         
      
      :
      <div className='text-center'>
      <button type="button " class="btn btn-primary my-3 mx-2" onClick={HandleLogin}  >SignUp</button><br />
      <b>New to here <Link to={'/register'}>Signin here!</Link></b>
      </div>
       
          
        }

    </div>
   </div>
   <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
   </div>
   </>
  )
}

export default Auth