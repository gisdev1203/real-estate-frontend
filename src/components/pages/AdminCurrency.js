import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import { useToast } from "@chakra-ui/react";

const AdminCurrency = (props) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-currencies`)
      .then((res) => {
        setFlag(true);
        setData(res.data.result);
      });
  }, []);

  const editCurrency = (id) => {
    navigate(`/admin/currency/${id}`);
  };
  const deleteCurrency = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/admin/delete/currency/${id}`)
      .then((res) => {
        setData(res.data.result);
        toast({
          title: "Success",
          description: "Currency deleted successfully.",
          status: "success",
          duration: 2000,
          variant: "left-accent",
          position: "top-right",
          isClosable: true,
        });
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err);
      });
  };

  const addCurrency = () => {
    navigate("/admin/currency/create");
  };

  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | Admin Currency</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Currency Manage</h2>
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
          onClick={() => addCurrency()}
        >
          <span className="fa fa-plus"></span> Add Currency
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table-striped table-bordered text-center"
          style={{ width: "90%", margin: "1%" }}
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Code</th>
              <th>Symbol</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && flag ? (
              <tr className="text-center">
                <td colSpan="5">No Data</td>
              </tr>
            ) : data.length === 0 && flag === false ? (
              <tr className="text-center">
                <td colSpan="5">Loading ...</td>
              </tr>
            ) : (
              data.map((res, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{res.name}</td>
                    <td>{res.code}</td>
                    <td>{res.symbol}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => editCurrency(res._id)}
                        style={{ borderRadius: "5px" }}
                      >
                        <span className="fa fa-edit"></span>
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteCurrency(res._id)}
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

export default AdminCurrency;
