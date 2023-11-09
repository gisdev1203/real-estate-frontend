import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Content = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const setUser = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.replace("/");
  };

  const postData = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        password: password,
        email: email,
        isAdmin: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.Msg === "login" ? setUser(data) : setError(true);
        setErrorMsg(data.Msg);
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
  return (
    <div className="acr-auth-container">
      <div className="acr-auth-content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postData();
          }}
        >
          <div className="auth-text">
            <h3>Log Into Acres</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="form-group">
            <label>Email or Mobile Number</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-light"
              placeholder="Email or Mobile Number"
              name="Email"
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
            <Link to="#" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="btn-custom secondary btn-block">
            Login
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
            Don't have an account? <Link to="/register">Create One</Link>{" "}
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

export default Content;
