import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import { Textarea, useToast } from "@chakra-ui/react";

const AdminFaqCreate = (props) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onCancel = () => {
    navigate("/admin/faqs");
  };
  const postData = async () => {
    if (title === "") {
      toast({
        title: "Error",
        description: "Name field is empty!!!",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    if (content === "") {
      toast({
        title: "Error",
        description: "Code field is Empty!",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    const formData = {
      title: title,
      content: content,
    };
    setFlag(true);
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/admin/faq/create`, formData)
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
        // navigate("/admin/currencies");
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
        <title>Acres - Real Estate React Template | Admin FAQ Create</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>FAQ Create</h2>
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
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control form-control-light"
              placeholder="Enter a FAQ Title"
              name="title"
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <Textarea
              style={{ height: "auto" }}
              rows="10"
              type="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control form-control-light"
              placeholder="Enter the FAQ Content"
              name="content"
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

export default AdminFaqCreate;
