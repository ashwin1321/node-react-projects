import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Dashboard.css";
// import { useNavigate } from "react-router-dom"; 
import { Link, useNavigate } from "react-router-dom";
import http from './Http';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(4);
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // get the search value from the input
    setSearch(document.getElementById("search").value);
    // setSearch(searchValue);
    // console.log(search);

  }
  useEffect(() => {

    // show default data if search is empty and 

    async function getUser() {
      console.log("thik xa");
      try {
        console.log("test thik xa");
        console.log(activePage);
        console.log(search);
        // const res = await http.get(`/crud?page=${activePage}&search=${search}`, {
        // send page number to server before fetching data


        const res = await http.get("http://localhost:5000/crud", {
          params: { page: activePage, limit: 5, search: search },

          headers: {
            accessToken: sessionStorage.getItem("token"),
          }
        });
        console.log(res.data);
        const data = await res.data;
        setUser(data);


        // const data = await res.data;
        // console.log(activePage);
        // setUser(data);
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


  }, [activePage, search]);               // backend ma aba page number send gareko xa

  // const navigate = useNavigate();
  function logout() {
    // delete the token from the session storage
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      <h1 id="hhead">Dashboard</h1>
      <div>
        <form id="navbar" onSubmit={(e) => handleSearch(e)}>
          <input type="text" placeholder="Search from name" id="search" />
          <button>search</button>
        </form>
        <button id="dash" onClick={logout}>logout</button>
      </div>

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


      <br /><br /><br />
      <div className="pagination">
        <button id="pagination" onClick={() => setActivePage(1)}>1</button>
        <button id="pagination" onClick={() => setActivePage(2)} >2</button>
        <button id="pagination" onClick={() => setActivePage(3)}>3</button>
        <button id="pagination" onClick={() => setActivePage(4)}>4</button>
        <button id="pagination" onClick={() => setActivePage(5)}>5</button>
        <button id="pagination" onClick={() => setActivePage(6)}>6</button>
        <button id="pagination" onClick={() => setActivePage(7)}>7</button>
        <button id="pagination" onClick={() => setActivePage(8)}>8</button>

      </div>
    </div>
  );
};

export default Dashboard;
