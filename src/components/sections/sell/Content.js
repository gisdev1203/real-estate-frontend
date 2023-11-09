import React from "react";

const Content = () => {
  return (
    <div className="my-16 mx-16 py-10 rounded-2xl text-center border">
      <div>
        <h3 className="mb-8 text-themeColor">How To Sell Property With Us</h3>
      </div>
      <div className="my-20 text-medium font-medium">
        <ul>
          <li>
            Fill out the listing form with details about your property,
            including information about the location, size, and features of the
            property.
          </li>
          <li>
            Upload photos of the property to provide potential buyers with a
            visual representation.
          </li>
          <li>Review and submit your listing.</li>
          <li>
            Our team will review your listing and will contact you if any
            additional information is needed.
          </li>
          <li>
            Once your listing is approved, it will be live on our website and
            visible to potential buyers.
          </li>
          <li>
            Interested buyers can contact you directly through the website to
            schedule a showing or to ask any questions they may have.
          </li>
          <li>
            Once you've found a buyer and the sale is complete, let us know and
            we will remove the listing from our website.
          </li>
        </ul>
      </div>
      <p className="my-8">
        <b>Note : </b>We will be available to assist you throughout the process,
        and can help with pricing, promotion and other aspect of the sale.
      </p>
    </div>
  );
};

export default Content;
