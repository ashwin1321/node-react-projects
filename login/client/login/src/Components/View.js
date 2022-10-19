import React from "react";
import { useNavigate, useLocation, useParams, } from "react-router-dom";
import '../Styles/View.css'
const View = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { name, address, email, phone, age, remarks } = location.state;
  console.log(location.state)

  function goto() {
    navigate('/dashboard')
  }

  return (
    <div>
      <div className="mybody">
        <h4>Showing data for user: {name} </h4>
        <pre>
          Id: {id} <br />
          Name: {name} <br />
          Address: {address} <br />
          Email: {email} <br />
          Phone: {phone} <br />
          Age: {age} <br />
          Remarks: {remarks}
        </pre>
        <br />
        <button onClick={goto}>Dashboard</button>
      </div>
    </div>
  )
}

export default View
