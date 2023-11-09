import React, { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

const Content = () => {
  const [state, setState] = useState([]);

  const { type } = useParams();
  // const navigate = useNavigate();

  const getData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/submitlisting/submit`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      }
    );
    const data = await response.json();
    const newArray = data.result.filter(function (item) {
      return item.category === type;
    });
    setState(newArray);
  };
  useEffect(() => {
    getData();
  });

  const acessChat = () => {
    return;
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12 my-8">
        {state.length === 0 ? (
          <div className="flex justify-center">
            <div className="md:w-9/12 lg:w-4/6 my-4  border p-10 border-gray-500 rounded-lg flex justify-between items-center">
              <div className="w-32 pr-12">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/exclaimationMark.png`}
                  alt="ExclaimationMark"
                  width={"100%"}
                />
              </div>
              <div className="w-10/12">
                <h2 className="mb-4 text-gray italic">{`${type} Property Not Found `}</h2>
                <p className="text-gray-200">
                  Sorry, the specific type of property you are searching for is
                  currently not available on our website. Please check back
                  later or contact us for further assistance
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {state.map((res, key) => {
              const basicInformation = res.BasicInformation;
              const details = res.Details;
              const author = res.Author;
              const Gallery = res.Gallery;
              return (
                <div key={key} className="col-lg-4 col-md-6">
                  <div className="listing">
                    <div className="listing-thumbnail">
                      <Link
                        to={`/listing-details-v1/${res._id}`}
                        // onClick={() => {
                        //   navigate(`/listing-details-v1/${res._id}`);
                        //   window.location.reload(false);
                        // }}
                      >
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/${Gallery.file}`}
                          alt="listing"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Link>
                      <div className="listing-badges">
                        <span className="listing-badge featured">
                          {" "}
                          <i className="fas fa-star" />{" "}
                        </span>

                        <span className="listing-badge sale">On Sale</span>

                        <span className="listing-badge pending"> Pending</span>

                        <span className="listing-badge rent"> Rental</span>
                      </div>
                      <div className="listing-controls">
                        <Link to="#" className="favorite">
                          <i className="far fa-heart" />
                        </Link>
                        <Link to="#" className="compare">
                          <i className="fas fa-sync-alt" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-body">
                      <div className="listing-author">
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/${author.pic}`}
                          alt="author"
                        />
                        <div className="listing-author-body">
                          <p>
                            {" "}
                            <Link to="#">{author.name}</Link>{" "}
                          </p>
                          <span className="listing-date">
                            {res.createdAt.split("T")[0]}
                          </span>
                        </div>
                        <Dropdown className="options-dropdown">
                          <Dropdown.Toggle as={NavLink}>
                            <i className="fas fa-ellipsis-v" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu-right">
                            <ul>
                              <li>
                                {" "}
                                <Link to="tel:+123456789">
                                  {" "}
                                  <i className="fas fa-phone" /> Call Agent
                                </Link>{" "}
                              </li>
                              <li onClick={() => acessChat(author.authorId)}>
                                <Link to="/chat">
                                  <i className="fas fa-envelope" /> Send Message
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to={`/listing-details-v1/${res._id}`}>
                                  {" "}
                                  <i className="fas fa-bookmark" /> Book Tour
                                </Link>{" "}
                              </li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <h5 className="listing-title">
                        {" "}
                        <Link
                          to={`/listing-details-v1/${res._id}`}
                          title={basicInformation.name}
                        >
                          {basicInformation.name}
                        </Link>{" "}
                      </h5>
                      <span className="listing-price">
                        {basicInformation.currency}
                        {basicInformation.price}
                        {basicInformation.status === "Rental" ? (
                          <span>/{basicInformation.period}</span>
                        ) : (
                          <></>
                        )}
                      </span>
                      <p className="listing-text">
                        {basicInformation.description}
                      </p>
                      <div className="acr-listing-icons">
                        <OverlayTrigger overlay={bedstip}>
                          <div className="acr-listing-icon">
                            <i className="flaticon-bedroom" />
                            <span className="acr-listing-icon-value">
                              {details.beds}
                            </span>
                          </div>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={bathstip}>
                          <div className="acr-listing-icon">
                            <i className="flaticon-bathroom" />
                            <span className="acr-listing-icon-value">
                              {details.bathrooms}
                            </span>
                          </div>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={areatip}>
                          <div className="acr-listing-icon">
                            <i className="flaticon-ruler" />
                            <span className="acr-listing-icon-value">
                              {basicInformation.space} SQM
                              {/* {new Intl.NumberFormat().format(item.area)} */}
                            </span>
                          </div>
                        </OverlayTrigger>
                      </div>
                      <div className="listing-gallery-wrapper">
                        <Link
                          to={`/listing-details-v1/${res._id}`}
                          // onClick={() => {
                          //   navigate(`/listing-details-v1/${res._id}`);
                          //   window.location.reload(false);
                          // }}
                          className="btn-custom btn-sm secondary"
                        >
                          View Details
                        </Link>
                        <OverlayTrigger overlay={gallerytip}>
                          <Link to="#" className="listing-gallery">
                            {" "}
                            <i className="fas fa-camera" />{" "}
                          </Link>
                        </OverlayTrigger>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
