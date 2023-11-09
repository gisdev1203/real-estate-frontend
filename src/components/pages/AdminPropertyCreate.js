import React from "react";
import { Helmet } from "react-helmet";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import Content from "../sections/submit-listing/Content";

const AdminPropertyCreate = (props) => {
  return (
    <div>
      <Helmet>
        <title>
          Acres - Real Estate React Template | Admin Property Create
        </title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Property Create</h2>
      </div>
      <Content />
    </div>
  );
};

export default AdminPropertyCreate;
