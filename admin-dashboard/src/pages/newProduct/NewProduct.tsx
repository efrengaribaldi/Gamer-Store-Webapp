import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { addProduct } from "../../redux/apiCalls";
import "./newProduct.css";

interface NewProductProps {
  // username: string | undefined;
}

const NewProduct: React.FC<NewProductProps> = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<any>({
    type: "pc-parts",
    color: "rgb",
    inStock: true,
  });

  const handleChange = (name: string, value: string) => {
    setInputs((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<any>) => {
    const file = e.target.files[0];
    const base64 = (await convertToBase64(file)) as string;
    handleChange(e.target.name, base64);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await addProduct(inputs, dispatch);
  };

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            {/* <div className="addProductItem">
              <label>Image</label>
              <input type="file" id="file" onChange={handleImgFile} />
            </div> */}
            <div className="addProductItem">
              <label>Image</label>
              <input
                name="img"
                type="file"
                accept=".jpeg, .png, .jpg"
                onChange={handleFileUpload}
              />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="PC"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                name="price"
                type="number"
                placeholder="100"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Type</label>
              <select
                name="type"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option value="pc-parts">PC Parts</option>
                <option value="pc-cases">PC Cases</option>
                <option value="pc-add-ons">PC-Add-Ons</option>
              </select>
            </div>

            <div className="addProductItem">
              <label>Color</label>
              <select
                name="color"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option value="rgb">RGB</option>
                <option value="neutrals">Neutrals</option>
                <option value="pastel-colours">Pastel Colours</option>
              </select>
            </div>

            <div className="addProductItem">
              <label>Stock</label>
              <select
                name="inStock"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <Link to="/products">
              <button onClick={handleClick} className="addProductButton">
                Create
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
