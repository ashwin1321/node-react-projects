import React from 'react'
import '../Styles/Homepage.css'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // let navigate = useNavigate();

  function dataRecieved(e) {
    e.preventDefault();
    const name = document.getElementById('name').value
    const address = document.getElementById('address').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const age = document.getElementById('age').value
    const remarks = document.getElementById('remarks').value
    const data = { name, address, email, phone, age, remarks }

    axios.post('http://localhost:5000/crud', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }
  return (
    <div className='mainhead'>

      <navbar className='test'>


        <ul>
          {/* <h1>Welcome to the Homepage </h1> */}
          <li id='abc'>Welcome to Homepage</li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="/login">Login</a>
          </li>

          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </navbar>
      <br /><br /> <br />

      <div className="changes">
        <h4>Please, Fill this form</h4>

        <br /><br />
        <form onSubmit={(e) => dataRecieved(e)}>
          <label>
            Name: &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="name" id='name' />
          </label>
          <br />
          <label>
            Email: &nbsp;&nbsp;&nbsp;
            <input type="text" name="email" id='email' />
          </label>
          <br />
          <label>
            Address: &nbsp;
            <input type="text" name="address" id='address' />
          </label>
          <br />
          <label>
            Phone: &nbsp;&nbsp;&nbsp;
            <input type="text" name="phone" id='phone' />
          </label>
          <br />
          <label>
            Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" name="age" id='age' />
          </label>
          <br />
          <label>
            Remarks: &nbsp;
            <input type="textarea" name='remarks' id='remarks' />
          </label>

          <button id="button">submit</button>



        </form>

      </div>

    </div>
  )
}

export default Homepage
