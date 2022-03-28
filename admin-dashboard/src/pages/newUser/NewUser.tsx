import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { addAccount } from "../../redux/apiCalls";
import "./newUser.css";

interface NewUserProps {
  // username: string | undefined;
}

const NewUser: React.FC<NewUserProps> = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<any>({isAdmin: "true"});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    
    await addAccount(inputs, dispatch);
  };
  console.log(inputs);

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Username</label>
              <input
                name="username"
                type="text"
                placeholder="username"
                onChange={handleChange}
              />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="email@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <div className="newUserItem">
              <label>Is admin</label>
              <select
                name="isAdmin"
                className="newUserSelect"
                onChange={handleChange}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <Link to="/users">
              <button className="newUserButton" onClick={handleClick}>
                Create
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
