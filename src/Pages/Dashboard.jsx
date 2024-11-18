import React from 'react'
import './Dashboard.css'
import Addproject from '../Components/Addproject'
import Viewproject from '../Components/Viewproject'
import Userprofile from '../Components/Userprofile'

function Dashboard() {
  return (
    <>
    <div class="grid-container">
  <div class="item1"><h3>Welcome User</h3></div>
  <div class="item2"><h3>My projects</h3></div>
  <div class="item3"><Addproject/></div>  
  <div class="item4"><Viewproject/></div>
  <div class="item5"><Userprofile/></div>
</div>
    </>
  )
}

export default Dashboard