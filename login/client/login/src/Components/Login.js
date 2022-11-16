import React, { useState } from 'react'
import '../Styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const login = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formErrorUname, setFormErrorUname] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formErrorPass, setFormErrorPass] = useState("");

  async function loginn(e) {
    e.preventDefault();
    const username = document.getElementById('uname').value
    const password = document.getElementById('pass').value
    const genetatedOtp = Math.floor(1000 + Math.random() * 9000)
    const data = { username, password, genetatedOtp }

    axios.post('http://localhost:5000/login', data)
      .then(res => {
        if (res.data.userError) {
          // alert("User not found")
          setFormErrorUname('User not found! please register')
        }
        else if (res.data.passwordError) {
          setFormErrorPass('Incorrect Password! Try again')
        }
        else {
          navigate('/otp')
        }

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
          <p style={{ color: 'red' }}>{formErrorUname}</p>
          <input type="password" placeholder="Password" className='password' id="pass" />
          <p style={{ color: 'red' }}>{formErrorPass}</p>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>

  )
}



export default login