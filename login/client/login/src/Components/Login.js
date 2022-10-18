import React from 'react'
import '../Styles/Login.css'

const login = () => {

    function loginn() {
        // const email = document.getElementById('email').value
        // const password = document.getElementById('password').value
        // const data = { email, password }
        // fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.message === 'success') {
        //             window.location.href = '/dashboard'
        //         }
        //     })\
        
    }
  return (
    <>
        <div className="main">

       
        <h1 className='title'>Login </h1>
        
        <form id='form' onSubmit={loginn}>
            <input type="text" placeholder="Username" className='username' /> <br />
            <input type="password" placeholder="Password" className='password' />   
            <br /> 
            <button type="submit">Login</button>
        </form>
        </div>
    </>

  )
}

export default login