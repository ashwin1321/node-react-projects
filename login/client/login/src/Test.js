import React, { useState } from 'react'
import axios from "axios";

const test = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
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


    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };



    const uploadFile = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", file);
        formData.append("fileName", fileName);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("age", age);
        formData.append("remarks", remarks);

        // console.log(formData.get("email"))
        // const data = { name, email, address, phone, age, remarks, file }

        try {
            const res = await axios.post(
                "http://localhost:3000/upload",

                formData
            );
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <div className="mainbody">
            <form action="">
                <label>
                    Name: &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="name" id='name' onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email: &nbsp;&nbsp;&nbsp;
                    <input type="text" name="email" id='email' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Address: &nbsp;
                    <input type="text" name="address" id='address' onChange={(e) => setAddress(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone: &nbsp;&nbsp;&nbsp;
                    <input type="text" name="phone" id='phone' onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <label>
                    Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="number" name="age" id='age' onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />
                <label>
                    Remarks: &nbsp;
                    <input type="textarea" name='remarks' id='remarks' onChange={(e) => setRemarks(e.target.value)} />
                </label>
                <label>
                    fileUpload:
                    <input type="file" name="image" onChange={saveFile} />
                </label>
                <button onClick={uploadFile}>Submit</button>
            </form>
        </div>
    )
}

export default test
