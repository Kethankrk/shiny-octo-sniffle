import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ components }) => {
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('token')
    if (!auth){
      navigate("/adminlogin")
    }
  })

  return <>{components}</>;
};

export default ProtectedRoutes;
