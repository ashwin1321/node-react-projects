import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


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
        <div className='mainhead'>

            <navbar className='test'>
                <h1>Update the data </h1>
            </navbar>


            <div className="mainbody">
                <h4>Please, Fill this form</h4>

                <br /><br />
                <form onSubmit={(e) => dataRecieved(e)}>
                    <label>
                        Name: &nbsp;
                    </label>
                    <input type="text" name="name" id='name' onChange={handleChange} value={user.name} />
                    <br />
                    <label>
                        Email: &nbsp;
                    </label>
                    <input type="text" name="email" id='email' onChange={handleChange} value={user.email} />
                    <br />
                    <label>
                        Address: &nbsp;
                    </label>
                    <input type="text" name="address" id='address' onChange={handleChange} value={user.address} />
                    <br />
                    <label>
                        Phone: &nbsp;
                    </label>
                    <input type="text" name="phone" id='phone' onChange={handleChange} value={user.phone} />
                    <br />
                    <label>
                        Age: &nbsp;
                    </label>
                    <input type="number" name="age" id='age' onChange={handleChange} value={user.age} />
                    <br />
                    <label>
                        Remarks: &nbsp;
                    </label>
                    <input type="textarea" name='remarks' id='remarks' onChange={handleChange} value={user.remarks} />

                    <button id="button">submit</button>
                </form>

            </div>

        </div>
    )
};

export default Edit;
