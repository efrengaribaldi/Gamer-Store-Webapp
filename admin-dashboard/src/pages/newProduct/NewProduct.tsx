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
  const [inputs, setInputs] = useState<any>({type:"pc-parts", color: "rgb", inStock: true});
  // const [files, setFile] = useState<File>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
   
    await addProduct(inputs, dispatch);
  };

  console.log(inputs);

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
                type="text"
                placeholder="http://img-url.com"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="PC"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                name="price"
                type="number"
                placeholder="100"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Type</label>
              <select name="type" onChange={handleChange}>
                <option value="pc-parts">PC Parts</option>
                <option value="pc-cases">PC Cases</option>
                <option value="pc-add-ons">PC-Add-Ons</option>
              </select>
              
            </div>
           
            <div className="addProductItem">
              <label>Color</label>
              <select name="color" onChange={handleChange}>
                <option value="rgb">RGB</option>
                <option value="neutrals">Neutrals</option>
                <option value="pastel-colours">Pastel Colours</option>
              </select>
              
            </div>
            
            <div className="addProductItem">
              <label>Stock</label>
              <select name="inStock" onChange={handleChange}>
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
