import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";

const AdminPanel = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      navigate("/admin");
    };
  });

  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | A\dmin</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div style={{ display: "flex", justifyContent: "center", padding: "3%" }}>
        <h2>Welcome to Admin Page.</h2>
      </div>
    </div>
  );
};

export default AdminPanel;
