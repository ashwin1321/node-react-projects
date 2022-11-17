import React, { useState } from 'react'
import '../Styles/Homepage.css'
import axios from 'axios';


const Homepage = () => {


  return (




    // <div className="changes">

    <div className='homepage'>
      <ul>
        {/* <h1>Welcome to the Homepage </h1> */}
        <li id='abc'>Welcome to Homepage</li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <li><a href="/formfill">Fill this form</a></li>
        <li>
          <a href="/login">Login</a>
        </li>

        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
      <br /><br /> <br />
      {/* </div> */}
    </div>

  )
}


export default Homepage


// const base64String = btoa(String.fromCharCode(...new Uint8Array(img)));
  // console.log(base64String);