import React from 'react'
import { Link } from 'react-router-dom'
import Projectcard from '../Components/Projectcard'

function Home() {
  return (
    <>
      <div className="row p-5">
        <div className="col-6">
          <h1 className='mb-3'>Project Fair</h1>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eligendi hic quibusdam natus et consequuntur est, perferendis, eos atque unde cumque nulla obcaecati tempore voluptates dolore. Minima quia amet perferendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta illo nostrum, facilis amet repellat quo nihil quia quaerat tempora laudantium eaque excepturi reiciendis soluta voluptatem dolorem animi expedita quis.
          </p>
          <Link to={'/dashboard'}>
          <button className='btn btn-primary mt-4'>Get Started</button>
          </Link>

        </div>
        <div className="col-6 text-center">
{/* <video autoPlay loop muted width={'400px'} height={'300px'} style={{ objectFit: 'contain' }}>
  <source src='/Untitled video - Made with Clipchamp.mp4' type='video/mp4' />
  </video>           */}
          <img src={"../project_illus.jpg"} width={'400px'} height={'300px'} alt="" />
        </div>
      </div>
<div className="row text-center">
  <h2>Explore Our Projects</h2>
  <div className="col-4 p-5">
<Projectcard/>
  </div>
  <div className="col-4 p-5">
  <Projectcard/>

  </div>
  <div className="col-4 p-5">
  <Projectcard/>

  </div>
  <div className="row p-4">
    <Link to={'/projects'}>
    <button className='btn btn-outline-primary'>View Project</button></Link>
  </div>
</div>

    </>
  )
}

export default Home