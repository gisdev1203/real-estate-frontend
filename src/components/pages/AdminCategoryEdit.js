import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import convertToBase64 from "../../helper/convert";
import { useToast } from "@chakra-ui/react";

const AdminCategoryEdit = (props) => {
  const navigate = useNavigate();
  const toast = useToast();
  const params = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [icon, setIcon] = useState("");
  const [img, setImg] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/category/${params.id}`)
      .then((res) => {
        setName(res.data.result.name);
        setDescription(res.data.result.description);
        setIconUrl(res.data.result.icon);
        setImgUrl(res.data.result.img);
      });
  }, [params.id]);

  const onCancel = () => {
    navigate("/admin/categories");
  };
  const postData = () => {
    if (name === "") {
      return false;
    }
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("icon", icon);
    formData.append("img", img);

    setFlag(true);

    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/admin/category/${params.id}/update`,
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
        // navigate("/admin/categories");
      })
      .catch((err) => {
        setFlag(false);
        setError(true);
        setErrorMsg(err);
      });
  };

  const onUploadIcon = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setIconUrl(base64);
    setIcon(e.target.files[0]);
  };
  const onUploadImage = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setImgUrl(base64);
    setImg(e.target.files[0]);
  };

  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | Admin Category Edit</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Property Category Edit</h2>
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
            <label>Name</label>
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
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control form-control-light"
              placeholder="Description"
              name="description"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="icon" className="cursor-pointer">
              Select Icon
            </label>
            <input
              onChange={onUploadIcon}
              type="file"
              id="icon"
              name="icon"
              style={{ display: "none" }}
            />
            {iconUrl && iconUrl.slice(0, 7) === "uploads" ? (
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/${iconUrl}`}
                alt="NoIcon"
                style={{ width: "100px" }}
              />
            ) : (
              <img src={iconUrl} alt="NoIcon" style={{ width: "100px" }} />
            )}
          </div>
          <div className="form-group row">
            <label htmlFor="img" className="cursor-pointer">
              Select Image
            </label>
            <input
              onChange={onUploadImage}
              type="file"
              id="img"
              name="img"
              style={{ display: "none" }}
            />
            {imgUrl && imgUrl.slice(0, 7) === "uploads" ? (
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/${imgUrl}`}
                alt="NoImage"
                style={{ width: "200px" }}
              />
            ) : (
              <img src={imgUrl} alt="NoImage" style={{ width: "200px" }} />
            )}
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

export default AdminCategoryEdit;
