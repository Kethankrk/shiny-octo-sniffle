import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Components/Modal";

const Edit = () => {
  const [fetching, setFetching] = useState("");

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await axios.get("http://localhost:5000/download");
        setFetching(response.data);
      } catch (e) {
        alert(e);
      }
    };
    fetchFunction();
  }, []);

  return (
    <section className="min-h-screen bg-darkblue">
      <nav className="h-[70px] bg-black text-white flex items-center justify-between px-10">
        <p>logo here</p>
        <ul className="flex gap-10">
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </nav>
      <div className="w-11/12 mx-auto flex gap-14 flex-wrap p-16">
        {fetching ? (
          fetching.map((item) => {
            return (
              <EditCard
                key={item.productName}
                name={item.productName}
                link={item.productDownloadLink}
                category={item.productCategory}
              />
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
};

const EditCard = ({ name, category, link }) => {
  const productEditSubmit = async (e) => {
    e.preventDefault();
    setRecord((prev) => ({
      ...prev,
      newName: productNameRef.current.value,
      newCategory: productCategoryRef.current.value,
      newLink: productDownloadLinkRef.current.value,
    }));

    setConformBtn(true);
  };

  const conformFunction = async () => {
    try{
    const response = await axios.post("http://localhost:5000/edit", Record);
    
    if (response.data.status === "ok"){
      window.location.reload()
    }
    }
    catch(err){
      alert(err)
    }
  };

  const [Record, setRecord] = useState({
    oldName: "",
    newName: "",
    newCategory: "",
    newLink: "",
  });

  const [openEdit, setOpenEdit] = useState(false);

  const [conformBtn, setConformBtn] = useState(false);

  const productNameRef = useRef("");
  const productCategoryRef = useRef("");
  const productDownloadLinkRef = useRef("");

  return (
    <div className="p-6 bg-lightblue rounded-xl flex flex-col items-center">
      <p className="text-2xl font-bold text-white">Name</p>
      <p className="font-semibold">{name}</p>
      <p className="text-2xl font-bold text-white">Category</p>
      <p className="font-semibold">{category}</p>
      <button
        name={name}
        onClick={(e) => {
          setOpenEdit(true);
          setRecord((prev) => ({ ...prev, oldName: e.target.name }));
        }}
      >
        Edit
      </button>

      <Modal open={openEdit} close={() => setOpenEdit(false)}>
        <form className="grid text-white" onSubmit={productEditSubmit}>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="text-sm p-2 rounded-md mb-10 bg-lightblue"
            ref={productNameRef}
          />
          <label htmlFor="category">Product Category</label>
          <select
            name="category"
            defaultValue={category}
            className="text-sm p-2 rounded-md mb-10 bg-lightblue"
            ref={productCategoryRef}
          >
            <option>-- select one --</option>
            <option>Camera</option>
            <option>Printer</option>
            <option>Billing Machine</option>
            <option>Raspberry pi</option>
            <option>Arduino</option>
          </select>
          <label htmlFor="link">Product Download Link</label>
          <input
            type="text"
            name="link"
            defaultValue={link}
            className="text-sm p-2 rounded-md mb-10 bg-lightblue"
            ref={productDownloadLinkRef}
          />
          <div className="flex justify-between  w-full">
            <button
              className="py-1 px-5 rounded-md bg-danger font-bold w-[90px] h-[36px]"
              onClick={() => setOpenEdit(false)}
            >
              Cancel
            </button>
            {conformBtn ? (
              <button
                onClick={conformFunction}
                className="py-1 px-5 rounded-md bg-success font-bold w-[96px] h-[36px] text-center"
              >
                Conform
              </button>
            ) : (
              <button className="py-1 px-5 rounded-md bg-warning font-bold w-[90px] h-[36px]">
                Update
              </button>
            )}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Edit;

//   just use useRef
