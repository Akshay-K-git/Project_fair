import React from 'react'
import { IoLogoXing } from "react-icons/io5";

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><IoLogoXing className='mb-2 fs-3' />Project Fair</a>

  </div>
</nav>
    </>
  )
}

export default Header