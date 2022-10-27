import React from 'react'
import '../Styles/Homepage.css'
import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // let navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
    age: "",
    remarks: ""
  };

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

  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});

  // from validation for the code below
  const validateName = (name) => {
    if (name.length > 3) {
      setFormErrors((prev) => ({
        ...prev,
        name: false,
      }));
      return true;
    }
    setFormErrors((prev) => ({
      ...prev,
      name: "Name must be at least 3 characters long.",
    }));
    return false;
  };

  const validateEmail = (email) => {
    if (email.includes("@")) {
      setFormErrors((prev) => ({
        ...prev,
        email: false,
      }));
      return true;
    }
    setFormErrors((prev) => ({
      ...prev,
      email: "Email must contain an @ symbol.",
    }));
    return false;
  };

  const validateAddress = (address) => {
    if (address.length < 1) {
      setFormErrors((prev) => ({
        ...prev,
        adress: false,
      }));
      return true;
    }
    setFormErrors((prev) => ({
      ...prev,
      password: "address cannot be empty",
    }));
    return false;
  };

  const validateAge = (age) => {
    if (age > 18) {
      setFormErrors((prev) => ({
        ...prev,
        age: false,
      }));

      return true;
    }
    setFormErrors((prev) => ({
      ...prev,
      age: "Age must be greater than 18",
    }));
    return false;
  };

  const validatePhone = (phone) => {
    if (phone.length === 10 && !isNaN(phone)) {
      setFormErrors((prev) => ({
        ...prev,
        phone: false,
      }));
      return true;
    }
    setFormErrors((prev) => ({
      ...prev,
      phone: "Phone number must be  10 characters long.",
    }));
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

          <div className="formdiv">
            <label htmlFor='name'>
              Name: &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text"
                name="name"
                id='name'
                value={formValues.name}
                onChange={(e) => {
                  validateName(e.target.value);
                  setFormValues({ ...formValues, name: e.target.value });
                }} />
              {formErrors.name && <p>{formErrors.name}</p>}
            </label>
          </div>

          <div className="formdiv">
            <label>
              Email: &nbsp;&nbsp;&nbsp;
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={(e) => {
                  validateEmail(e.target.value);
                  setFormValues({ ...formValues, email: e.target.value });
                }}
              />
              <p>{formErrors.email && formErrors.email}</p>
            </label>
          </div>

          <div className="formdiv">
            <label>
              Address: &nbsp;
              <input
                type="text"
                name="address"
                id="address"
                value={formValues.address}
                onChange={(e) => {
                  validateAddress(e.target.value);
                  setFormValues({ ...formValues, address: e.target.value });
                }}
              />
              <p>{formErrors.address && formErrors.address}</p>
            </label>
          </div>

          <div className="formdiv">
            <label>
              Phone: &nbsp;&nbsp;&nbsp;
              <input
                type="phone"
                name="phone"
                id="phone"
                value={formValues.phone}
                onChange={(e) => {
                  validatePhone(e.target.value);
                  setFormValues({ ...formValues, phone: e.target.value });
                }}
              />
              <p>{formErrors.phone && formErrors.phone}</p>
            </label>
          </div>

          <div className="formdiv">
            <label>
              Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="age"
                name="age"
                id="age"
                value={formValues.age}
                onChange={(e) => {
                  validateAge(e.target.value);
                  setFormValues({ ...formValues, age: e.target.value });
                }}
              />
              <p>{formErrors.age && formErrors.age}</p>
            </label>
          </div>

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
