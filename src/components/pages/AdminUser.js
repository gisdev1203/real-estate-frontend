import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";

const AdminUser = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-users`)
      .then((res) => {
        setFlag(true);
        setState(res.data);
      });
  }, []);

  const addUser = () => {
    navigate("/admin/user/create");
  };
  const editUser = (id) => {
    navigate(`/admin/user/${id}`);
  };
  const deleteUser = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/admin/delete/user/${id}`)
      .then((res) => {
        setState(res.data.result);
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | Admin User</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Users</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          width: "94%",
          margin: "1%",
        }}
      >
        <button
          type="button"
          className="btn btn-success"
          onClick={() => addUser()}
        >
          <span className="fa fa-plus"></span> Add User
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table-striped table-bordered text-center"
          style={{ width: "90%", margin: "1%" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email or Phone</th>
              <th>Role</th>
              <th>Admin</th>
              <th>OPT Code</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.length === 0 && flag ? (
              <tr className="text-center">
                <td colSpan="8">No Data</td>
              </tr>
            ) : state.length === 0 && flag === false ? (
              <tr className="text-center">
                <td colSpan="8">Loading ...</td>
              </tr>
            ) : (
              state.map((res, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.user}</td>
                    <td>{`${res.isAdmin}`}</td>
                    <td>{res.opt}</td>
                    <td>{`${res.verified}`}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => editUser(res._id)}
                        style={{ borderRadius: "5px" }}
                      >
                        <span className="fa fa-edit"></span>
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(res._id)}
                        style={{ borderRadius: "5px" }}
                      >
                        <span className="fa fa-trash"></span>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {error ? (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              backgroundColor: "#FF3131",
              color: "white",
              padding: "10px 20px 10px 20px",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <span>{error ? `${errorMsg}` : ""}</span>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                border: "white 2px solid",
                borderRadius: "30px",
                width: "40px",
                backgroundColor: "#FF3131",
                height: "40px",
              }}
              onClick={() => {
                setError(false);
              }}
            >
              <p
                style={{
                  color: "white",
                  alignItems: "center",
                  marginTop: "3px",
                }}
              >
                x
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AdminUser;
