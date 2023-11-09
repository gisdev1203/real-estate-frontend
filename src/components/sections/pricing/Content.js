import React, { useEffect, useState } from "react";
import Faq from "./Faq";
import Pricebox from "./Pricebox";
import ListingFilter from "./ListingFilter";
import { Link, useNavigate } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import Gallery from "../services/Gallery";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

const Content = () => {
  const navigate = useNavigate();

  const acessChat = () => {};

  const [state, setState] = useState([]);
  const [filter, setFilter] = useState([]);
  const [screen2, setScreen2] = useState(null);

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

    setState(data.result);
  };
  useEffect(() => {
    getData();
  }, []);

  const filterData = (data) => {
    setScreen2(true);

    const price =
      data.price === 0 ? ["0", "900000000007676780"] : data.price.split(",");
    const status = data.status === undefined ? "" : data.status;
    const bed = data.bed === "Any amount" ? 0 : data.bed;
    const bathroom = data.bathroom === "Any amount" ? 0 : data.bathroom;

    //////   Filtering Data With Conditions

    if (status === "") {
      const abc = state.filter((item) => {
        return (
          parseInt(item.Details.beds) >= bed &&
          parseInt(item.Details.bathrooms) >= bathroom &&
          parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
          parseInt(item.BasicInformation.price) <= parseInt(price[1])
        );
      });
      setFilter(abc);
    } else {
      const abc = state.filter((item) => {
        return (
          parseInt(item.Details.beds) >= bed &&
          parseInt(item.Details.bathrooms) >= bathroom &&
          parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
          parseInt(item.BasicInformation.price) <= parseInt(price[1]) &&
          item.BasicInformation.type === status
        );
      });
      setFilter(abc);
    }
  };

  return (
    <div>
      <Pricebox />

      <ListingFilter getData={filterData} />
      <div className="flex justify-center">
        <div className="w-9/12 my-8">
          {screen2 ? (
            filter.length === 0 ? (
              <div className="flex justify-center">
                <div className="md:w-9/12 lg:w-4/6  border p-10 border-gray-500 rounded-lg flex justify-between items-center">
                  <div className="w-32 pr-12">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/exclaimationMark.png`}
                      alt="ExclaimationMark"
                      width={"20%"}
                    />
                  </div>
                  <div className="w-10/12">
                    <h2 className="mb-4 text-gray italic">{`Property Not Found `}</h2>
                    <p className="text-gray-200">
                      Sorry, the specific type of property you are searching for
                      is currently not available on our website. Please check
                      back later or contact us for further assistance
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="my-8 text-center text-2xl font-semibold">
                  Data After Filter
                </div>
                <div>
                  {filter.map((res) => {
                    const basicInformation = res.BasicInformation;
                    const deatils = res.Details;
                    const author = res.Author;
                    // console.log(author);
                    // console.log(gallery.picture);
                    return (
                      <div className="listing listing-list ">
                        <div
                          className="listing-thumbnail"
                          style={{ width: "60%" }}
                        >
                          <Link
                            onClick={() => {
                              navigate(`/listing-details-v1/${res._id}`);
                              window.location.reload(false);
                            }}
                          >
                            <img
                              src={Gallery.picture}
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

                            <span className="listing-badge pending">
                              {" "}
                              Pending
                            </span>

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
                        <div className="listing-body" style={{ width: "70%" }}>
                          <div className="listing-author">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/img/people/2.jpg`}
                              alt="author"
                            />
                            <div className="listing-author-body">
                              <p>
                                {" "}
                                <Link to="#">{author.authorname}</Link>{" "}
                              </p>
                              <span className="listing-date">
                                {"item.postdate"}
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
                                  <li
                                    onClick={() => acessChat(author.authorId)}
                                  >
                                    <Link to="/chat">
                                      <i className="fas fa-envelope" /> Send
                                      Message
                                    </Link>
                                  </li>
                                  <li>
                                    {" "}
                                    <Link to="/">
                                      {" "}
                                      <i className="fas fa-bookmark" /> Book
                                      Tour
                                    </Link>{" "}
                                  </li>
                                </ul>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <h5 className="listing-title">
                            {" "}
                            <Link
                              onClick={() => {
                                navigate(`/listing-details-v1/${res._id}`);
                              }}
                              className="btn-custom btn-sm secondary"
                            >
                              {basicInformation.name}
                            </Link>
                          </h5>
                          <span className="listing-price">
                            {basicInformation.price}
                            {/* {new Intl.NumberFormat().format(
                            item.monthlyprice.toFixed(2)
                          )} */}
                            $ <span>/{basicInformation.period}</span>{" "}
                          </span>
                          <p className="listing-text">
                            {basicInformation.description}
                          </p>
                          <div className="acr-listing-icons">
                            <OverlayTrigger overlay={bedstip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-bedroom" />
                                <span className="acr-listing-icon-value">
                                  {deatils.beds}
                                </span>
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={bathstip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-bathroom" />
                                <span className="acr-listing-icon-value">
                                  {deatils.bathrooms}
                                </span>
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={areatip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-ruler" />
                                <span className="acr-listing-icon-value">
                                  {basicInformation.space}
                                  {/* {new Intl.NumberFormat().format(item.area)} */}
                                </span>
                              </div>
                            </OverlayTrigger>
                          </div>
                          <div className="listing-gallery-wrapper">
                            <Link
                              onClick={() => {
                                navigate(`/listing-details-v1/${res._id}`);
                                window.location.reload(false);
                              }}
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
                    );
                  })}
                </div>
              </div>
            )
          ) : state.length === 0 ? (
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
                  <h2 className="mb-4 text-gray italic">{`Property Not Found `}</h2>
                  <p className="text-gray-200">
                    Sorry, the specific type of property you are searching for
                    is currently not available on our website. Please check back
                    later or contact us for further assistance
                  </p>
                </div>
              </div>
            </div>
          ) : (
            state.map((res) => {
              const basicInformation = res.BasicInformation;
              const Gallery = res.Gallery;
              const deatils = res.Details;
              const author = res.Author;
              return (
                <div className="listing listing-list ">
                  <div className="listing-thumbnail" style={{ width: "60%" }}>
                    <Link
                      onClick={() => {
                        navigate(`/listing-details-v1/${res._id}`);
                        window.location.reload(false);
                      }}
                    >
                      <img
                        src={`/${Gallery.file}`}
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
                  <div className="listing-body" style={{ width: "70%" }}>
                    <div className="listing-author">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/people/2.jpg`}
                        alt="author"
                      />
                      <div className="listing-author-body">
                        <p>
                          {" "}
                          <Link to="#">{author.authorname}</Link>{" "}
                        </p>
                        <span className="listing-date">{"item.postdate"}</span>
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
                              <Link to="/BookTour">
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
                        onClick={() => {
                          navigate(`/listing-details-v1/${res._id}`);
                          window.location.reload(false);
                        }}
                      >
                        {basicInformation.name}
                      </Link>{" "}
                    </h5>
                    <span className="listing-price">
                      {basicInformation.price}
                      {/* {new Intl.NumberFormat().format(
                          item.monthlyprice.toFixed(2)
                        )} */}
                      ${" "}
                      {basicInformation.period === "Monthly" ||
                      basicInformation.period === "Yearly" ? (
                        <span>/{basicInformation.period}</span>
                      ) : (
                        <></>
                      )}{" "}
                    </span>
                    <p className="listing-text">
                      {basicInformation.description}
                    </p>
                    <div className="acr-listing-icons">
                      <OverlayTrigger overlay={bedstip}>
                        <div className="acr-listing-icon">
                          <i className="flaticon-bedroom" />
                          <span className="acr-listing-icon-value">
                            {deatils.beds}
                          </span>
                        </div>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={bathstip}>
                        <div className="acr-listing-icon">
                          <i className="flaticon-bathroom" />
                          <span className="acr-listing-icon-value">
                            {deatils.bathrooms}
                          </span>
                        </div>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={areatip}>
                        <div className="acr-listing-icon">
                          <i className="flaticon-ruler" />
                          <span className="acr-listing-icon-value">
                            {basicInformation.space}
                            {/* {new Intl.NumberFormat().format(item.area)} */}
                          </span>
                        </div>
                      </OverlayTrigger>
                    </div>
                    <div className="listing-gallery-wrapper">
                      <Link
                        onClick={() => {
                          navigate(`/listing-details-v1/${res._id}`);
                          window.location.reload(false);
                        }}
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
              );
            })
          )}
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Content;
