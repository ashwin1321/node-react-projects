import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Dashboard.css";
// import { useNavigate } from "react-router-dom"; 
import { Link, useNavigate } from "react-router-dom";
import http from './Http';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  // fetch data only once from server using useEffect hook
  // useEffect(() => {

  // const abortController = new AbortController();
  // const signal = abortController.signal;

  //     const getUser = async () => {
  //       try{
  //         const res = await fetch('http://localhost:5000/crud', {signal: signal});
  //         const data = await res.json();
  //         setUser(data);
  //         console.log(data);
  //       }
  //       catch(error){
  //         if(error.name === 'AbortError'){
  //           console.log('Request canceled', error.message);
  //         }
  //         else{
  //           console.log('Something went wrong', error.message);
  //         }
  //       }
  //     }

  //     getUser()

  //   return () => {
  //     console.log('cleanup');
  //     abortController.abort()
  //   }

  // }, [])

  const navigate = useNavigate();
  useEffect(() => {

    async function getUser() {
      console.log("thik xa");
      try {
        console.log("test thik xa");

        const res = await http.get("http://localhost:5000/crud", {
          headers: {
            accessToken: sessionStorage.getItem("token"),
            // console.log("thik xa")
          }
        });
        const data = await res.data;
        setUser(data);
      }
      catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("Something went wrong", error.message);
        }
      }
    }
    getUser();


  }, []);

  // const navigate = useNavigate();
  function logout() {
    // delete the token from the session storage
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      <h1 id="hhead">Dashboard</h1>
      <div className="mainn">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index}>
                <td>{item.Id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/view/${item.Id}`} state={{
                    name: item.name,
                    email: item.email,
                    address: item.address,
                    phone: item.phone,
                    age: item.age,
                    remarks: item.remarks,
                    img: item.img
                  }} id="btn">
                    View
                  </Link>
                </td>
                <td>
                  <Link to={`/edit/${item.Id}`} state={{
                    name: item.name,
                    email: item.email,
                    address: item.address,
                    phone: item.phone,
                    age: item.age,
                    remarks: item.remarks
                  }}
                    id="btn">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button id="dash" onClick={logout}>logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
