import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { addProduct } from "../../redux/apiCalls";
import "./newProduct.css";

const NewProduct: React.FC = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<any>({});
  // const [files, setFile] = useState<File>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addProduct(inputs, dispatch);
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
              <label>Categories</label>
              <select name="categories" onChange={handleChange}>
                <option value="pc-parts">PC Parts</option>
                <option value="pc-cases">PC Cases</option>
                <option value="pc-add-ons">PC-Add-Ons</option>
              </select>
              {/* <input
                type="text"
                placeholder="pc-parts,pc-adds-on"
                onChange={handleCategories}
              /> */}
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
