import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  // fetch data only once from server using useEffect hook
  // useEffect(() => {

  //     const abortController = new AbortController();
  //     const signal = abortController.signal;

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

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/crud", {
          cancelToken: source.token,
        });
        const data = await res.data;
        setUser(data);
        console.log(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("Something went wrong", error.message);
        }
      }
    };
    getUser();

    return () => {
      console.log("cleanup");
      source.cancel();
    };
  }, []);

  return (
    <div>
      <h1 id="head">Dashboard</h1>
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
                  <button id="btn">View</button>
                </td>
                <td>
                  <button id="btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
