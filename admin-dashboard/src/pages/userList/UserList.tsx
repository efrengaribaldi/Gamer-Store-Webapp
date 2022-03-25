import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ReactChild, ReactFragment, ReactPortal, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts, deleteAccount } from "../../redux/apiCalls";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state: any) => state.account.accounts);
  useEffect(() => {
    getAccounts(dispatch);
  }, [dispatch]);

  const handleDelete = (id: string | number) => {
    deleteAccount(id, dispatch);
  };

  const columns: any = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params: {
        row: {
          // avatar: string | undefined;
          username:
            | boolean
            | ReactChild
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        };
      }) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: { row: { _id: string | number } }) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="userList">
          {/*boton aqui*/}
          <Link to="/newUser">
            <button style={{ margin: "10px" }} className="userAddButton">
              Create
            </button>
          </Link>
          <DataGrid
            rows={accounts}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default UserList;
