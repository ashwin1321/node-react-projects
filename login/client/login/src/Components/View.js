import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { name, address, email, phone, age, remarks } = location.state;
  console.log(location.state)

  return (
    <div>

    </div>
  )
}

export default View
