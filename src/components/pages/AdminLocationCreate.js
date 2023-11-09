import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import { useToast } from "@chakra-ui/react";

const AdminCurrencyCreate = (props) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onCancel = () => {
    navigate("/admin/locations");
  };
  const postData = () => {
    if (country === "") {
      toast({
        title: "Error",
        description: "Country field is empty!!!",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    if (city === "") {
      toast({
        title: "Error",
        description: "City field is Empty!",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    const formData = {
      country: country,
      city: city,
    };
    setFlag(true);
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/admin/location/create`,
        formData
      )
      .then((res) => {
        setFlag(false);
        toast({
          title: "Success",
          description: "It has been saved successfully.",
          status: "success",
          duration: 2000,
          variant: "left-accent",
          position: "top-right",
          isClosable: true,
        });
        return true;
        // navigate("/admin/locations");
      })
      .catch((err) => {
        setFlag(false);
        setError(true);
        setErrorMsg(err.response.data.Msg);
      });
  };

  return (
    <div>
      <Helmet>
        <title>
          Acres - Real Estate React Template | Admin Location Create
        </title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Location Create</h2>
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
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="form-control form-control-light"
              placeholder="Enter a country name"
              name="country"
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control form-control-light"
              placeholder="Enter a city name"
              name="city"
            />
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

export default AdminCurrencyCreate;
