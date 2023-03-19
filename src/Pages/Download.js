import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Download = () => {
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
    fetchFunction()
  }, []);

  return (
    <>
      <nav className="flex px-16 justify-between h-[70px] items-center bg-black text-white text-sm">
        <p className="">Logo here</p>
        <ul className="flex gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/download">Download</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
        </ul>
        <div className="h">
          <p className="h">Contact Me</p>
        </div>
      </nav>
      {/* background image  */}
      <div className="w-full h-[340px] absolute top-[70px] -z-50 bgImage"></div>
      <div className="w-full h-[340px] absolute top-[70px] -z-50 bgImageLinear"></div>
      {/* details */}
      <div className="w-full h-[340px] flex items-center px-24 text-white">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold text-blue">Download Driver</h1>
          <div className="flex mt-[8px]">
            <p className="text-sm">Last Updated</p>
            <p className="text-sm">: 20-03-2023</p>
          </div>
          <p className="mt-[21px] text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ab
            soluta quae sed, beatae culpa?
          </p>
        </div>
        <div className="w-1/2 grid">
          <p className="text-lg mx-auto font-bold">Search</p>
          <div className="rounded-lg mx-auto p-1 w-[280px]">
            <input
              type="text"
              className="w-full rounded-lg py-1 px-3 text-sm text-black"
              placeholder="Enter your product name"
            />
          </div>
        </div>
      </div>
      <div className="px-24 bg-black text-white py-14">
        <h1 className="text-3xl font-bold text-blue">Products</h1>
        <div className="w-full justify-evenly p-10 flex flex-wrap gap-10">
          {fetching ? (
            fetching.map((item) => {
              return (
                <ProductCard
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
      </div>
    </>
  );
};

export default Download;
