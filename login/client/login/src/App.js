import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import View from "./Components/View";
import Edit from "./Components/Edit";
import Register from "./Components/Register";
import Otp from "./Components/Otp";
import OtpRegister from "./Components/OtpRegister";
import FormFill from "./Components/FormFill";
// import Test from "./Test";

function App() {
  return (
    <>
      {/* <Homepage /> */}
      {/* <Test /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/otp" element={<Otp />} />
          <Route exact path="/otpRegister" element={<OtpRegister />} />
          <Route exact path="/formfill" element={<FormFill />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
