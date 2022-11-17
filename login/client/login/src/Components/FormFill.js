import React, { useState } from 'react'
import '../Styles/Homepage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const FormFill = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        address: "",
        phone: "",
        age: "",
        remarks: ""
    };

    const [file, setFile] = useState();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fileName, setFileName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [address, setAddress] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [phone, setPhone] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [remarks, setRemarks] = useState("")
    const [formValues, setFormValues] = React.useState(initialValues);
    const [formErrors, setFormErrors] = React.useState({});

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
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
                if (res.data.msg) {
                    alert('Something went wrong')
                }
                else {
                    alert('Data Saved')
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }



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
                                onChange={(e) => {
                                    setName(e.target.value);
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
                                onChange={(e) => {
                                    setEmail(e.target.value)
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
                                onChange={(e) => {
                                    setAddress(e.target.value)
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
                                onChange={(e) => {
                                    setPhone(e.target.value)
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
                                onChange={(e) => {
                                    setAge(e.target.value);
                                    validateAge(e.target.value);
                                    setFormValues({ ...formValues, age: e.target.value });
                                }}
                            />
                            <p>{formErrors.age && formErrors.age}</p>
                        </label>
                    </div>

                    <label>
                        Remarks: &nbsp;
                        <input type="textarea" name='remarks' id='remarks' onChange={(e) => setRemarks(e.target.value)} />
                    </label>
                    {/* 
          <label>
            fileUpload:
            <input type="file" name="image" onChange={saveFile} />
          </label> */}

                    <button id="button">submit</button>



                </form>

            </div>

        </div>
    )
}


export default FormFill

