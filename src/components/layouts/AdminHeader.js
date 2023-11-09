import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  // const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.replace("/");
  };

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      window.location.replace("/");
    }
  });

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        padding: "10px 20px",
      }}
    >
      <div
        className="col-md-7 col-lg-7"
        style={{
          fontFamily: "Times New Roman",
          fontSize: "30px",
          marginLeft: "80px",
        }}
      >
        Admin Panel
      </div>
      <div
        className="col-md-3 col-lg-3"
        style={{
          fontSize: "30px",
          textAlign: "right",
          paddingRight: "15px",
          marginTop: "-5px",
          fontFamily: "Times New Roman",
        }}
      >
        {userInfo.name}
      </div>
      <div
        className="col-md-2 col-lg-2 text-center"
        style={{ marginRight: "50px" }}
      >
        <p
          onClick={() => logout()}
          style={{
            backgroundColor: "white",
            padding: "5px 10px",
            borderRadius: "20px",
            cursor: "pointer",
            width: "50%",
          }}
        >
          Log Out
        </p>
      </div>
    </div>
  );
};

export default AdminHeader;
