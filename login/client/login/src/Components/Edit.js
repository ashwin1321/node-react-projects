import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/edit.css';


const Edit = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { name, address, email, phone, age, remarks } = location.state;
    // console.log(location.state)
    const { id } = useParams();
    // console.log(id);

    const [user, setUser] = useState({ name: '', email: '', address: '', phone: '', age: '', remarks: '' });

    useEffect(() => {
        setUser({ name: name, email: email, address: address, phone: phone, age: age, remarks: remarks })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    function dataRecieved(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/crud`, { ...user, Id: id })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        navigate('/dashboard')
    }

    return (
        <div className='mainbody'>

            <h1>Update  data </h1>
            <div className="testbody">
                <h4>Please, Fill this form</h4>

                <br /><br />
                <form onSubmit={(e) => dataRecieved(e)}>
                    <label>
                        Name: &nbsp; &nbsp; &nbsp;  &nbsp;
                        <input type="text" name="name" id='name' onChange={handleChange} value={user.name} />
                    </label>
                    <br />
                    <label>
                        Email: &nbsp; &nbsp; &nbsp;
                        <input type="text" name="email" id='email' onChange={handleChange} value={user.email} />
                    </label>
                    <br />
                    <label>
                        Address:  &nbsp;
                        <input type="text" name="address" id='address' onChange={handleChange} value={user.address} />
                    </label>
                    <br />
                    <label>
                        Phone: &nbsp; &nbsp; &nbsp;
                        <input type="text" name="phone" id='phone' onChange={handleChange} value={user.phone} />
                    </label>
                    <br />
                    <label>
                        Age: &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="number" name="age" id='age' onChange={handleChange} value={user.age} />
                    </label>
                    <br />
                    <label>
                        Remarks: &nbsp;
                        <input type="textarea" name='remarks' id='remarks' onChange={handleChange} value={user.remarks} />
                    </label>

                    <button id="button">submit</button>
                </form>

            </div>

        </div>
    )
};

export default Edit;
