import React from 'react'
import '../Styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    function loginn(e) {
        e.preventDefault();
        const username = document.getElementById('uname').value
        const password = document.getElementById('pass').value
        const data = { username, password }

        if (username === '' || password === '') {
            alert('Please fill all the fields')
        } else {
            axios.post('http://localhost:5000/register', data)
                .then(res => {
                    console.log("success");
                })
                .catch(err => {
                    console.log(err)
                })
            navigate('/login')
        }
    }
    return (
        <>
            <div className="main">


                <h1 className='title'>Register </h1>
                <h4>Please Register</h4>

                <form id='form' onSubmit={(e) => loginn(e)}>
                    <input type="text" placeholder="enter your username" className='username' id="uname" /> <br />
                    <input type="password" placeholder="enter your password" className='password' id="pass" />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        </>

    )
}


export default Register