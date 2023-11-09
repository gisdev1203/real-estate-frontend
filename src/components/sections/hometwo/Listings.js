import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import Calculator from "../../layouts/Calculator";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import Gallery from "../services/Gallery";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

// var ListingData = {};

const Listings = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const { chats, setChats, setSelectedChat } = user ? ChatState() : "";

  const [state, setState] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [screen2, setScreen2] = useState(null);

  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [floors, setFloors] = useState("");

  /// Using Reducer For ListingFilter
  // const [listingState, ListingDispatch] = useReducer(
  //   ListingReducer,
  //   ListingData
  // );

  const SubmitlistingData = async () => {
    const resposne = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/submitlisting/submit`
    );
    const data = await resposne.json();
    setState(data.result);
  };

  useEffect(() => {
    SubmitlistingData();
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-locations`)
      .then((res) => {
        setLocationList(res.data.result);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-categories`)
      .then((res) => {
        setTypeList(res.data.result);
      });
  }, []);

  const filterData = () => {
    //   ListingData = {
    //     bed: listingState.bed === undefined ? 0 : listingState.bed,
    //     bathroom: listingState.bathroom === undefined ? 0 : listingState.bathroom,
    //     price: listingState.price === undefined ? "0" : listingState.price,
    //     status: listingState.status === "Any Status" ? "" : listingState.status,
    //     location: listingState.location,
    //     type: listingState.type,
    //   };
    setScreen2(true);
    //   const price =
    //     ListingData.price === 0
    //       ? ["0", "900000000007676780"]
    //       : ListingData.price.split(",");
    //   const status = ListingData.status === undefined ? "" : ListingData.status;
    //   const bed = ListingData.bed === "Any amount" ? 0 : ListingData.bed;
    //   const bathroom =
    //     ListingData.bathroom === "Any amount" ? 0 : ListingData.bathroom;
    //   //////   Filtering Data With Conditions
    //   if (status === "") {
    //     const abc = state.filter((item) => {
    //       return (
    //         parseInt(item.Details.beds) >= bed &&
    //         parseInt(item.Details.bathrooms) >= bathroom &&
    //         parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
    //         parseInt(item.BasicInformation.price) <= parseInt(price[1])
    //       );
    //     });
    setFilter("abc");
    //   } else {
    //     const abc = state.filter((item) => {
    //       return (
    //         parseInt(item.Details.beds) >= bed &&
    //         parseInt(item.Details.bathrooms) >= bathroom &&
    //         parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
    //         parseInt(item.BasicInformation.price) <= parseInt(price[1]) &&
    //         item.BasicInformation.type === status
    //       );
    //     });
    //     setFilter(abc);
    //   }
  };

  /////  Acessing Chat
  const acessChat = async (userId) => {
    if (!user) {
      alert("you need to login in first");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/chat`,
          { userId },
          config
        );
        if (!chats.find((c) => c.id === data.id)) setChats([data, ...chats]);
        setSelectedChat(data);
        navigate("/chat");
        window.location.reload(false);
      } catch (error) {}
    }
  };

  // const {
  //   locationlist,
  //   statuslist,
  //   pricerangelist,
  //   bedslist,
  //   bathroomslist,
  //   typelist,
  // } = Data;

  return (
    <div className="section pt-0">
      <div className="container">
        <div className="row">
          {/* Sidebar Start */}
          <div className="col-lg-4">
            <div className="sidebar sidebar-left">
              <div className="sidebar-widget">
                <h5>Filter Listings</h5>
                <div className="acr-filter-form">
                  {/* <form> */}
                  <div className="">
                    <select
                      className="form-control"
                      name="location"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        padding: "10px",
                      }}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="" hidden>
                        Location
                      </option>
                      <option value="any" className="form-control">
                        Any Location
                      </option>
                      {locationList.map((res, key) => {
                        return (
                          <option
                            className="form-control"
                            value={res.city}
                            key={key}
                          >
                            {`${res.city}, ${res.country}`}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <select
                      // defaultValue="Any Status"
                      className="form-control"
                      name="type"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="" hidden>
                        Property Type
                      </option>
                      <option value="any" className="form-control">
                        Any Type
                      </option>
                      {typeList.map((res, key) => {
                        return (
                          <option
                            className="form-control"
                            value={res.name}
                            key={key}
                          >
                            {res.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <select
                      className="form-control"
                      value={price}
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        padding: "10px",
                      }}
                      onChange={(e) => setPrice(e.target.value)}
                    >
                      <option value="" hidden>
                        Price Range
                      </option>
                      {/* {pricerangelist.map((res, key) => {
                        return (
                          <option
                            className="form-control"
                            value={res.value}
                            key={"price" + key}
                          >
                            {res.res}
                          </option>
                        );
                      })} */}
                    </select>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={beds}
                      className="form-control"
                      style={{ marginBottom: "15px" }}
                      placeholder="Beds"
                      onChange={(e) => setBeds(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={baths}
                      className="form-control"
                      style={{ marginBottom: "15px" }}
                      placeholder="Bathrooms"
                      onChange={(e) => setBaths(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={floors}
                      className="form-control"
                      style={{ marginBottom: "15px" }}
                      placeholder="Floors"
                      onChange={(e) => setFloors(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => filterData()}
                    className="btn-block btn-custom"
                  >
                    Apply filters
                  </button>
                  {/* </form> */}
                </div>
              </div>
              <div className="sidebar-widget">
                <h5>Recent Listing</h5>
                Listing Start
                {state.map((res, key) => {
                  const basicInformation = res.BasicInformation;
                  const Gallery = res.Gallery;
                  return (
                    <div className="listing listing-list " key={key}>
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
                      </div>
                      <div className="listing-body">
                        <h5 className="listing-title">
                          {" "}
                          <Link
                            to={`/listing-details-v1/${res._id}`}
                            // onClick={() => {
                            //   navigate(`/listing-details-v1/${res._id}`);
                            //   window.location.reload(false);
                            // }}
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
                          )}{" "}
                          <div style={{ display: "flex" }}>
                            {Gallery.picture.map((item, key) => {
                              return (
                                <img
                                  src={`${process.env.REACT_APP_SERVER_URL}/${item}`}
                                  alt="listing"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                  }}
                                  key={key}
                                />
                              );
                            })}
                          </div>
                        </span>
                      </div>
                    </div>
                  );
                })}
                Listing End
              </div>
              <div className="sidebar-widget">
                <h5>Mortgage Calculator</h5>
                <Calculator />
              </div>
            </div>
          </div>
          {/* Sidebar End */}
          {/* Posts Start */}
          <div className={`${!screen2 ? "col-lg-8 self-center" : "col-lg-8"}`}>
            {/* Listing Start */}
            {/* {listing.slice(0, 4).map((item, i) => ( */}
            {screen2 ? (
              filter.length === 0 ? (
                <div className="flex justify-center">
                  <div className="md:w-9/12 lg:w-4/6  border p-10 border-gray-500 rounded-lg flex justify-between items-center">
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
                        Sorry, the specific type of property you are searching
                        for is currently not available on our website. Please
                        check back later or contact us for further assistance
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    {filter.slice(0, 3).map((res, key) => {
                      const basicInformation = res.BasicInformation;
                      const details = res.Details;
                      const author = res.Author;
                      return (
                        <div className="listing listing-list " key={key}>
                          <div
                            className="listing-thumbnail"
                            style={{ width: "60%" }}
                          >
                            <Link
                              to={`/listing-details-v1/${res._id}`}
                              // onClick={() => {
                              //   navigate(`/listing-details-v1/${res._id}`);
                              //   window.location.reload(false);
                              // }}
                            >
                              <img
                                src={`${process.env.REACT_APP_SERVER_URL}/${Gallery.picture}`}
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

                              <span className="listing-badge sale">
                                On Sale
                              </span>

                              <span className="listing-badge pending">
                                {" "}
                                Pending
                              </span>

                              <span className="listing-badge rent">
                                {" "}
                                Rental
                              </span>
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
                          <div
                            className="listing-body"
                            style={{ width: "70%" }}
                          >
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
                                        <i className="fas fa-phone" /> Call
                                        Agent
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
                                      <Link to="/listing-details-v1">
                                        {" "}
                                        <i className="fas fa-bookmark" /> Book
                                        Tour
                                      </Link>{" "}
                                    </li>
                                  </ul>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            {basicInformation.status}
                            <h5 className="listing-title">
                              {" "}
                              <Link
                                to={`/listing-details-v1/${res._id}`}
                                // to="/listing-details-v1"
                                title={basicInformation.name}
                              >
                                {basicInformation.name}
                              </Link>{" "}
                            </h5>
                            <span className="listing-price">
                              {basicInformation.price}$
                              {/* {new Intl.NumberFormat().format(
                                  item.monthlyprice.toFixed(2)
                                )} */}
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
                      );
                    })}
                  </div>
                  {filter.length >= 4 ? (
                    <div
                      className="text-themeColor cursor-pointer text-center"
                      onClick={() => {
                        navigate("/view-all", { state: filter });
                      }}
                    >
                      View All
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )
            ) : !state ? (
              <div className="">
                <div className="flex justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Loading.gif`}
                    alt="Loading"
                  />
                </div>
                <p className="text-center my-4 text-xl font-medium ">
                  Loading .....
                </p>
              </div>
            ) : (
              <div>
                <div>
                  {state.slice(0, 3).map((res, key) => {
                    const basicInformation = res.BasicInformation;
                    const details = res.Details;
                    const author = res.Author;
                    const Gallery = res.Gallery;
                    return (
                      <div className="listing listing-list " key={key}>
                        <div
                          className="listing-thumbnail"
                          style={{ width: "60%" }}
                        >
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
                                    <Link to="/listing-details-v1">
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
                    );
                  })}
                </div>
                <div>
                  {state.length >= 4 ? (
                    <div
                      className="text-themeColor cursor-pointer text-center"
                      onClick={() => {
                        navigate("/view-all", { state: state });
                      }}
                    >
                      View All
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
            {/* Listing End */}
            {/* Promoitional Banner */}
            <div className="mt-72">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/PromotionalBanner.png`}
                alt="PromotionalBanner"
                className="h-96"
              />
            </div>
          </div>
          {/* Posts End */}
        </div>
      </div>
    </div>
  );
};

export default Listings;
