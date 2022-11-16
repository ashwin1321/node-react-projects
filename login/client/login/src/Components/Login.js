import React from 'react'
import '../Styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const login = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  async function loginn(e) {
    e.preventDefault();
    const username = document.getElementById('uname').value
    const password = document.getElementById('pass').value
    const genetatedOtp = Math.floor(1000 + Math.random() * 9000)
    const data = { username, password, genetatedOtp }

    axios.post('http://localhost:5000/login', data)
      .then(res => {
        // console.log(res.data);

        if (res.data.msg) {
          alert('please fill all the fields...')
        }

        if (res.data.userError) {
          alert("User not found")
        }
        else if (res.data.passwordError) {
          alert("Incorrect Password! Try again")
        }
        else {
          // alert("Login Successfull")
          // sessionStorage.setItem('token', res.data)
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
          <input type="password" placeholder="Password" className='password' id="pass" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>

  )
}



export default login