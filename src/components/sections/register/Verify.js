import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useToast } from "@chakra-ui/react";
import convertToBase64 from "../../../helper/convert";
import axios from "axios";

const Verify = () => {
  const toast = useToast();

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("Buyer");
  const [file, setFile] = useState();
  const [url, setUrl] = useState();

  const registerUser = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.replace("/");
  };

  const postData = async () => {
    if (!name || name === undefined) {
      toast({
        title: "Error",
        description: "Enter your username.",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    if (!email || email === "") {
      toast({
        title: "Error",
        description: "Enter your Email address.",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    if (!password || password === "") {
      toast({
        title: "Error",
        description: "Enter the password.",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("user", user);
    formData.append("pic", file);

    await axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/register`,
        // method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   mode: "no-cors",
        // },
        formData
      )
      .then((res) => {
        res.data.Msg === "register" ? registerUser(res.data) : setError(true);
        setErrorMsg(res.data.Msg);
      });
  };

  const images = [
    {
      img: "assets/img/coming-soon/1.jpg",
      title: "Quote of the day",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: "assets/img/coming-soon/2.jpg",
      title: "Quote of the day",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: "assets/img/coming-soon/3.jpg",
      title: "Quote of the day",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    dotsClass: "d-flex slick-dots",
  };

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setUrl(base64);
    setFile(e.target.files[0]);
  };

  return (
    <div className="acr-auth-container">
      <div className="acr-auth-content">
        <form
          className="py-1"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          // enctype="multipart/form-data"
          // method="post"
        >
          <div className="auth-text">
            <h3>Create An Acres Account</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="profile flex justify-center py-4">
            <label htmlFor="profile">
              <img
                src={
                  url ||
                  `${process.env.REACT_APP_SERVER_URL}/uploads/profiles/profile.png`
                }
                className="border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer"
                alt="avatar"
              />
            </label>
            <input
              onChange={onUpload}
              type="file"
              id="profile"
              name="pic"
              style={{ display: "none" }}
            />
          </div>
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
            <label>Email Address or mobile number</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-light"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <button
            type="Submit"
            className="btn-custom secondary btn-block"
            onClick={() => postData()}
          >
            Verify
          </button>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {error ? (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
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

          <div className="auth-seperator">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button type="button" className="acr-social-login facebook">
              <i className="fab fa-facebook-f" /> Continue with Facebook{" "}
            </button>
            <button type="button" className="acr-social-login google">
              <i className="fab fa-google" /> Continue with Google
            </button>
          </div>
          <p className="text-center mb-0">
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
      <div className="acr-auth-bg">
        <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
          {images.map((item, i) => (
            <div key={i}>
              <div
                className="acr-cs-bg-item bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(" + process.env.PUBLIC_URL + "/" + item.img + ")",
                }}
              >
                <div className="acr-auth-quote">
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Verify;
