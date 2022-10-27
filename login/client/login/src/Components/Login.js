import React from 'react'
import '../Styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const login = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let navigate = useNavigate();

  function loginn(e) {
    e.preventDefault();
    const username = document.getElementById('uname').value
    const password = document.getElementById('pass').value
    const data = { username, password }

    axios.post('http://localhost:5000/login', data)
      .then(res => {
        // console.log(res)
        // redirect(Dashboard)
        navigate('/dashboard')
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <div className="main">


        <h1 className='title'>Login </h1>

        <form id='form' onSubmit={(e) => loginn(e)}>
          <input type="text" placeholder="Username" className='username' id="uname" /> <br />
          <input type="password" placeholder="Password" className='password' id="pass" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>

  )
}



export default login