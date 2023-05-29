import React from 'react'
import loader from "./img/loader.gif";


function Loader() {
  return (
    // <div className='text-center align-center justify-content-center d-block '>
    <div >
      <img style={{height:100, width:150, margin:'auto'}} src={loader} alt="" />
      
    </div>
  )
}

export default Loader
