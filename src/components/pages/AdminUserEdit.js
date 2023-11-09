import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import { useToast } from "@chakra-ui/react";

const AdminUserEdit = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [state, setState] = useState([]);
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("Buyer");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/user/${params.id}`)
      .then((res) => {
        setState(res.data.result);
        setName(res.data.result.name);
        setEmail(res.data.result.email);
        setUser(res.data.result.user);
        setAdmin(res.data.result.isAdmin);
        setPassword("");
      });
  }, [params.id]);

  const onCancel = () => {
    navigate("/admin/users");
  };
  const postData = () => {
    const formData = {
      name: name,
      password: password,
      user: user,
      isAdmin: admin,
      email: email,
    };
    setFlag(true);
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/admin/user/${state._id}/update`,
        formData
      )
      .then((res) => {
        setFlag(false);
        toast({
          title: "Success",
          description: "It has been updated successfully.",
          status: "success",
          duration: 2000,
          variant: "left-accent",
          position: "top-right",
          isClosable: true,
        });
        return true;
        // navigate("/admin/users");
      })
      .catch((err) => {
        setFlag(false);
        setError(true);
        setErrorMsg(err);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | Admin User Edit</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>User Edit</h2>
      </div>
      <div
        className="acr-user-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{
            width: "70%",
            padding: "2%",
          }}
        >
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-light"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Email or Phone</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-light"
              placeholder="Email or Phone"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-light"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="user"
              className="form-control"
            >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
              <option value="Agent">Agent</option>
            </select>
          </div>
          <div className="form-group">
            <label>Admin</label>
            <select
              value={admin}
              onChange={(e) => setAdmin(e.target.value)}
              type="user"
              className="form-control"
            >
              <option value="false">User</option>
              <option value="true">Admin</option>
            </select>
          </div>
          <div className="form-group text-right">
            {flag ? (
              <button type="Submit" disabled className="btn btn-primary">
                <span className="fa fa-save"></span> Saving...
              </button>
            ) : (
              <button
                type="Submit"
                onClick={() => postData()}
                className="btn btn-primary"
              >
                <span className="fa fa-save"></span> Save
              </button>
            )}
            <button
              type="button"
              className="btn btn-default"
              onClick={() => onCancel()}
            >
              <span className="fa fa-reply"></span> Cancel
            </button>
          </div>
        </form>
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

export default AdminUserEdit;
