import { BrowserRouter , Routes, Route} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Homepage from './Components/Homepage';
import Login from './Components/Login';

function App() {
  return (
    // <Homepage />
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
