import React from "react";
import { Helmet } from "react-helmet";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import Edit from "../sections/submit-listing/Edit";

const AdminPropertyEdit = (props) => {
  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | Admin Property Edit</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Property Edit</h2>
      </div>
      <Edit />
    </div>
  );
};

export default AdminPropertyEdit;
