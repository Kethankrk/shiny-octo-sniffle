import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [LoginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()

  //   function onSubmit
  const AdminLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/admin-login",
        LoginDetails
      );
        if (res.data.status === "ok"){
          navigate('/admin')
        }
        else{
          alert(res.data.err)
        }
    } catch (error) {
      alert(error);
    }
  };

  //   function to track the form input
  const LoginState = (event) => {
    setLoginDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section className="flex w-full h-screen bg-slate-300 justify-center items-center">
      <form
        className="grid py-10 h-fit bg-slate-500 px-16 w-1/3 min-w-fit rounded-lg"
        onSubmit={AdminLogin}
      >
        <h1 className="text-3xl mb-14 mx-auto">Admin Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="mb-10 py-1 px-2 bg-transparent border-2 border-black outline-none rounded-md"
          name="username"
          value={LoginDetails.username}
          onChange={LoginState}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="mb-6 py-1 px-2 rounded-md border-black outline-none bg-transparent border-2"
          name="password"
          value={LoginDetails.password}
          onChange={LoginState}
          required
        />

        <button className="border-2 w-1/2 mx-auto rounded-md p-1 border-black">
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;
