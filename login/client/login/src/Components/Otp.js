import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Styles/Otp.css"

const Otp = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");

    function otpCheck(e) {
        e.preventDefault();
        console.log(otp);
        const data = { otp }
        console.log(data);


        axios.post('http://localhost:5000/otp', data)
            .then(res => {
                if (res.data.otpError) {
                    // alert("Wrong OTP")
                    setOtpError('Wrong OTP! Try again')
                }
                else {
                    // alert("Login Successfull")
                    sessionStorage.setItem('token', res.data)
                    navigate('/dashboard')
                }

            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }

    return (
        <div className='main'>
            <h4>Insert your OTP</h4>
            <form id='form' onSubmit={(e) => otpCheck(e)}>
                <input type="text" name="otp" placeholder='insert your OTP here' onChange={(e) => {
                    setOtp(e.target.value)
                }} /> <br />
                <p style={{ color: 'red' }}>{otpError}</p>
                <button id='btn'>Submit</button>
            </form>


        </div>
    )
}

export default Otp
