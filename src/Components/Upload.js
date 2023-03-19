import { useState } from "react";

const Upload = ({ close }) => {
  const [uploadTextDetails, setUploadTextDetails] = useState({
    productName: "",
    productCategory: "",
    productDownloadLink: "",
  });
  const uploadSubmit = (event) => {
    event.preventDefault();
    console.log(uploadTextDetails);
  };
  const uploadTextState = (event) => {
    setUploadTextDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form className="grid w-[300px] text-white" onSubmit={uploadSubmit}>
      <h1 className="mx-auto text-2xl mb-14 font-bold">Upload Products</h1>
      <label htmlFor="" className="text-sm font-bold">
        Product Name
      </label>
      <input
        type="text"
        className="mb-10 rounded-md p-2 px-3  text-sm bg-lightblue"
        placeholder="product name here"
        name="productName"
        value={uploadTextDetails.productName}
        onChange={uploadTextState}
        required
      />
      <label htmlFor="" className="text-sm font-bold">
        Product Category
      </label>
      <select
        className=" text-sm p-2 rounded-md mb-10 bg-lightblue"
        name="productCategory"
        value={uploadTextDetails.productCategory}
        onChange={uploadTextState}
        required
      >
        <option>-- select one --</option>
        <option>Camera</option>
        <option>Printer</option>
        <option>Billing Machine</option>
        <option>Raspberry pi</option>
        <option>Arduino</option>
      </select>
      <label htmlFor="" className="text-sm font-bold">
        Product Donwoad Link
      </label>
      <input
        type="text"
        className="mb-10 rounded-md p-2 px-3  text-sm bg-lightblue"
        placeholder="donwload link of your product here"
        name="productDownloadLink"
        value={uploadTextDetails.productDownloadLink}
        onChange={uploadTextState}
        required
      />

      <label htmlFor="" className="text-sm font-bold">
        Product Image
      </label>
      <input type="file" className="mt-1 mb-10" />
      <div className="flex justify-between ">
        <button
          className="py-1 px-5 rounded-md bg-danger font-bold"
          type="button"
          onClick={close}
        >
          Cancel
        </button>
        <button
          className="py-1 px-5 rounded-md bg-warning font-bold"
          type="button"
          onClick={() =>
            setUploadTextDetails({
              productName: "",
              productCategory: "",
              productDownloadLink: "",
            })
          }
        >
          Reset
        </button>
        <button className="py-1 px-5 rounded-md bg-success font-bold" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Upload;
