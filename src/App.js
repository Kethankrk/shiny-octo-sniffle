import Home from "./Pages/Home";
import AdminLogin from "./Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adminlogin" element={<AdminLogin />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
      {/* <Route /> */}
    </Routes>
  );
}

export default App;
