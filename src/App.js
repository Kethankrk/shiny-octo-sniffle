import Home from "./Pages/Home";
import AdminLogin from "./Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import AdminDashboard from "./Pages/AdminDashboard";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Download from "./Pages/Download";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adminlogin" element={<AdminLogin />} />
      <Route
        exact
        path="/admin"
        element={<ProtectedRoutes components={<Admin />} />}
      />
      <Route
        exact
        path="/admin/dashboard"
        element={<ProtectedRoutes components={<AdminDashboard />} />}
      />
      <Route exact path="/download" element={<Download />} />
    </Routes>
  );
}

export default App;
