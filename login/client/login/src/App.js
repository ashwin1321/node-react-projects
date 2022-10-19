import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import View from "./Components/View";
import Edit from "./Components/Edit";

function App() {
  return (
    // <Homepage />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/view/:id" element={<View />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
