import React, { useState } from "react";

const AdminLogin = () => {
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const setUser = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.replace("/");
  };

  const postData = async () => {
    setFlag(true);
    await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        password: password,
        email: email,
        isAdmin: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFlag(false);
        data.Msg === "login" ? setUser(data) : setError(true);
        setErrorMsg(data.Msg);
      });
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
        <h2 className="text-center mb-4 text-primary">Login Form</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email or Phone
            </label>
            <input
              type="email"
              className="form-control bg-info bg-opacity-10 border border-primary"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-info bg-opacity-10 border border-primary"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="small">
            <a className="text-primary" href="forget-password.html">
              Forgot password?
            </a>
          </p>
          <div className="d-grid">
            {flag ? (
              <button className="btn btn-primary" disabled type="submit">
                Please wait
              </button>
            ) : (
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => postData()}
              >
                Login
              </button>
            )}
          </div>
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
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
