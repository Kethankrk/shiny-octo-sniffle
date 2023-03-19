import { Link, useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
const AdminDashboard = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('token')
    navigate("/adminlogin")
  }
  return (
    <div className="h-screen">
      {/* headbar  */}
      <div className="h-[30px] w-full flex items-center bg-darkblue text-white z-10">
        <div className="flex w-[350px] justify-evenly text-white text-sm">
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Bookmarks</p>
          <p>Go</p>
          <p>Tools</p>
          <p>Help</p>
        </div>
        <p className="absolute right-6 cursor-pointer" onClick={logout}>Logout</p>
      </div>
      {/* subheadbar  */}
      <div className="flex h-[40px] z-10">
        <div className="w-2/12 bg-mildblue"></div>
        <div className="w-10/12 bg-mildblue px-2">
          <div className="h-[25px] bg-lightblue mt-[8px] px-2 flex items-center">
            <p className="text-white text-sm">/home/admin/dashboard</p>
          </div>
        </div>
      </div>
      {/* sidebar and fiespace  */}
      <div className="flex mainspace">
        {/* sidebar  */}
        <div className="top-0 w-2/12 bg-mildblue sidebar">
          <div className="h-[35px] w-full flex justify-start items-center pl-4">
            <p className="text-white">Places</p>
          </div>
          <div className="bg-lightblue w-[95%] mx-auto sidebarfiles">
            <Link to="/admin">
              <div className="h-[35px] w-ful flex justify-start px-3 items-center gap-2 text-white font-semibold text-sm">
                <img
                  src="/Images/file.png"
                  alt="file image"
                  className="w-[20px]"
                />
                <p>Upload / Edit</p>
              </div>
            </Link>
            <Link to="/admin/dashboard">
              <div className="h-[35px] w-full bg-green flex justify-start px-3 items-center gap-2 text-white font-semibold text-sm">
                <img
                  src="/Images/file.png"
                  alt="file image"
                  className="w-[20px]"
                />
                <p>Dashboard</p>
              </div>
            </Link>
          </div>
        </div>
        {/* filespace  */}
        <div className="filespace w-10/12 bg-lightblue h-20 absolute right-0 p-20 flex gap-16">
          type here
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
