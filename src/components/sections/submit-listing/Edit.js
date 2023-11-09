import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Locationtab from "./Locationtab";
import { statusList } from "../../../data/common";
import convertToBase64 from "../../../helper/convert";

import { Container, useToast } from "@chakra-ui/react";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Content() {
  const toast = useToast();
  const params = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [typeList, setTypeList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [featureList, setFeatureList] = useState([]);
  const [nearTypeList, setNearTypeList] = useState([]);
  const [tabKey, setTabKey] = useState("tab1");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-categories`)
      .then((res) => {
        setTypeList(res.data.result);
      });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-currencies`)
      .then((res) => {
        setCurrencyList(res.data.result);
      });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-features`)
      .then((res) => {
        setFeatureList(res.data.result);
      });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/get-nearbytypes`)
      .then((res) => {
        setNearTypeList(res.data.result);
      });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/admin/property/${params.id}`)
      .then((res) => {
        let data = res.data.result;
        setDescription(data.BasicInformation.description);
        setName(data.BasicInformation.name);
        setStatus(data.BasicInformation.status);
        setType(data.BasicInformation.type);
        setCurrency(data.BasicInformation.currency);
        setPrice(data.BasicInformation.price);
        setPeriod(data.BasicInformation.period);
        setSpace(data.BasicInformation.space);
        setVideo(data.BasicInformation.video);
        setThumbnailUrl(data.Gallery.file);
        setFiles(data.Gallery.picture);
        setLocation({
          lat: data.Location.latitude,
          long: data.Location.longitude,
          country: data.Location.country,
          address: data.Location.address,
          city: data.Location.city,
          provice: data.Location.provice,
          zipcode: data.Location.zipcode,
        });
        let features = [];
        data.Features.map((item) => {
          return features.push(item._id);
        });
        setFeatures(features);
        setId(data.Details.id);
        setBeds(data.Details.beds);
        setBaths(data.Details.bathrooms);
        setCondition(data.Details.condition);
        setBuilt(data.Details.built);
        setNeighbor(data.Details.neighbor);
        setLiving(data.Details.living);
        setDining(data.Details.dining);
        setStory(data.Details.story);
        setParking(data.Details.parking);
        setLotsize(data.Details.lotsize);
        setView(data.Details.view);
        let nearIds = [];
        let nears = [];
        data.Details.near.map((item) => {
          nearIds.push(item._id);
          return nears.push({
            key: item._id,
            neartype: item.neartype,
            name: item.name,
            distance: item.distance,
            isEdit: item.isEdit,
          });
        });
        setNearId(nearIds);
        setNears({ rows: nears });
      });
  }, [params.id]);

  // Error
  const [error, setError] = useState(undefined);
  const [fieldError, setFieldError] = useState(undefined);
  const [minFileError, setMinFileError] = useState(undefined);
  const [maxFileError, setMaxFileError] = useState(undefined);

  //  Basic Information
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statusList[0]);
  const [type, setType] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState("");
  const [space, setSpace] = useState("");
  const [land, setLand] = useState("");
  const [video, setVideo] = useState("");

  //  Gallery
  const [thumbnail, setThumbnail] = useState();
  const [thumbnailUrl, setThumbnailUrl] = useState();

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file, key) =>
    file.name ? (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            alt="ThumbImage"
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
    ) : (
      <div style={thumb} key={key}>
        <div style={thumbInner}>
          <img
            src={`${process.env.REACT_APP_SERVER_URL}/${file}`}
            style={img}
            alt="ThumbImage"
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
    )
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });

  //  Location
  const [location, setLocation] = useState({
    address: "",
    country: "",
    city: "",
    provice: "",
    zipcode: "",
    lat: "13.736717",
    long: "100.523186",
  });
  const locationData = (data) => {
    setLocation(data);
  };

  //  Feature
  const [features, setFeatures] = useState([]);
  const featuresData = (id) => {
    if (features.indexOf(id) !== -1) {
      features.splice(features.indexOf(id), 1);
      document.getElementsByName(`feature${id}`).checked = false;
    } else {
      setFeatures([...features, id]);
      document.getElementsByName(`feature${id}`).checked = true;
    }
  };

  // const feature = featureList.map((res, key) => (
  //   <div key={key} className="col-lg-4 col-md-6 col-sm-6">
  //     <label className="acr-listing-feature">
  //       <input
  //         type="checkbox"
  //         name={"feature" + res._id + ""}
  //         checked={features.indexOf(res._id) !== -1 ? true : false}
  //         onClick={() => featuresData(res._id)}
  //       />
  //       <i className="acr-feature-check fas fa-check" />
  //       <i style={{ textAlign: "-webkit-center" }}>
  //         <img
  //           className="acr-listing-feature-icon"
  //           src={`${process.env.REACT_APP_SERVER_URL}/${res.icon}`}
  //           style={{ marginBottom: "20px" }}
  //         />
  //       </i>
  //       {res.name}
  //     </label>
  //   </div>
  // ));
  //  Details
  const [id, setId] = useState("");
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [condition, setCondition] = useState("");
  const [built, setBuilt] = useState("");
  const [neighbor, setNeighbor] = useState("");
  const [living, setLiving] = useState(true);
  const [dining, setDining] = useState(true);
  const [story, setStory] = useState(0);
  const [parking, setParking] = useState("");
  const [lotsize, setLotsize] = useState("");
  const [view, setView] = useState("");
  const [nears, setNears] = useState({ rows: [] });
  const [nearId, setNearId] = useState([]);

  const addRow = () => {
    const newRow = {
      neartype: nearTypeList[0]._id,
      name: "",
      distance: "",
      isEdit: false,
      key: "",
    };

    const selectRow = [...nears.rows];

    setNears({
      rows: [...selectRow, newRow],
    });
  };

  const enableEdit = (e, idx) => {
    e.preventDefault();
    const multy = [...nears.rows];
    if (e.target.innerHTML === "Edit") {
      e.target.innerHTML = "Save";
      multy[idx].isEdit = false;
    } else {
      e.target.innerHTML = "Edit";
      multy[idx].isEdit = true;
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/admin/near/create`,
          multy[idx]
        )
        .then((res) => {
          multy[idx].key = res.data.result._id;
          setNearId([...nearId, res.data.result._id]);
        })
        .catch((err) => console.log(err));
    }

    setNears({
      rows: [...multy],
    });
  };

  const removeRow = (e, idx) => {
    e.preventDefault();
    const selectRow = [...nears.rows];

    if (selectRow[idx].isEdit) {
      axios
        .delete(
          `${process.env.REACT_APP_SERVER_URL}/admin/delete/near/${selectRow[idx].key}`
        )
        .then((res) => {
          nearId.splice(nearId.indexOf(res.data.result), 1);
        })
        .catch((err) => console.log(err));
    }
    selectRow.splice(idx, 1);
    setNears({
      rows: [...selectRow],
    });
  };

  //  Validation
  const validate = () => {
    if (!description) {
      toast({
        title: "Error",
        description: "Insert Property Description",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!name) {
      toast({
        title: "Error",
        description: "Insert Property Name",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!price) {
      toast({
        title: "Error",
        description: "Insert Property Price",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!space) {
      toast({
        title: "Error",
        description: "Insert Property Space",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }
    if (!id) {
      toast({
        title: "Error",
        description: "Insert Property ID",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!beds) {
      toast({
        title: "Error",
        description: "Insert Property Beds",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!baths) {
      toast({
        title: "Error",
        description: "Insert Property Bathrooms",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    // if (!thumbnail) {
    //   toast({
    //     title: "Error",
    //     description: "Insert Property Thumbnail",
    //     status: "error",
    //     duration: 2000,
    //     variant: "left-accent",
    //     position: "top-right",
    //     isClosable: true,
    //   });
    //   setTabKey("tab2");
    //   return false;
    // }

    // if (files.length === 0) {
    //   toast({
    //     title: "Error",
    //     description: "Insert Property Gallery",
    //     status: "error",
    //     duration: 2000,
    //     variant: "left-accent",
    //     position: "top-right",
    //     isClosable: true,
    //   });
    //   setTabKey("tab2");
    //   return false;
    // }

    if (files.length > 5) {
      toast({
        title: "Error",
        description: "You can upload only 5 pictures",
        status: "warning",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab2");
      return false;
    }

    return true;
  };

  //  Submit
  const submitData = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    console.log(thumbnail);
    console.log(thumbnailUrl);

    if (user === null) {
      alert("You need to login first");
    } else {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("status", status);
      formData.append("type", type ? type : typeList[0]?.name);
      formData.append("currency", currency ? currency : currencyList[0]?.symbol);
      formData.append("price", price);
      formData.append("period", period ? period : "Monthly");
      formData.append("space", space);
      formData.append("land", land);
      formData.append("video", video);

      formData.append("thumbnail", thumbnail);
      files.map((file, inx) => formData.append("picture", file));

      formData.append("lat", location.lat);
      formData.append("long", location.long);
      formData.append("address", location.address);
      formData.append("country", location.country);
      formData.append("city", location.city);
      formData.append("provice", location.provice);
      formData.append("zipcode", location.zipcode);

      formData.append("features", features);

      formData.append("id", id);
      formData.append("beds", beds);
      formData.append("bathrooms", baths);
      formData.append("condition", condition);
      formData.append("built", built);
      formData.append("neighbor", neighbor);
      formData.append("living", living);
      formData.append("dining", dining);
      formData.append("story", story);
      formData.append("parking", parking);
      formData.append("lotsize", lotsize);
      formData.append("view", view);
      formData.append("near", nearId);

      formData.append("category", type ? type : typeList[0].name);
      // formData.append("buy");

      formData.append("authorId", user._id);

      axios
        .put(
          `${process.env.REACT_APP_SERVER_URL}/admin/property/${params.id}/update`,
          formData
          // {
          //   headers: { "Content-Type": "multipart/form-data" },
          // }
        )
        .then((res) => {
          // const Msg = res.data.Msg;
          navigate("/admin/properties");
        })
        .catch((err) => {
          // const Msg = err.response.data.Msg;
          // if (Msg === "Please Fill Out All Feilds") {
          //   setError(true);
          //   setFieldError(true);
          //   setMinFileError(false);
          // } else if (Msg === "Please Fill Thumbnail Picture") {
          //   setError(true);
          //   setFieldError(false);
          //   setMinFileError(true);
          // } else if (Msg === "You can upload only 5 pictures") {
          //   setError(true);
          //   setFieldError(false);
          //   setMinFileError(false);
          //   setMaxFileError(true);
          // } else {
          console.log(err.response);
          // }
        });
    }
  };

  return (
    <div className="section">
      <Container maxW="80%">
        <div className="row">
          <Tab.Container defaultActiveKey={tabKey} activeKey={tabKey}>
            {/* Tabs Start */}
            <div className="col-md-4">
              <Nav variant="tabs" className="nav nav-tabs tab-cards">
                <Nav.Item>
                  <Nav.Link eventKey="tab1" onClick={() => setTabKey("tab1")}>
                    <span>01</span> Basic Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2" onClick={() => setTabKey("tab2")}>
                    <span>02</span> Gallery
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3" onClick={() => setTabKey("tab3")}>
                    <span>03</span> Location
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab4" onClick={() => setTabKey("tab4")}>
                    <span>04</span> Features
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab5" onClick={() => setTabKey("tab5")}>
                    <span>05</span> Details
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {/* Tabs End */}
            {/* Tab Content Start */}
            <div className="col-md-8">
              <form onSubmit={(e) => e.preventDefault()}>
                <Tab.Content className="m-0">
                  <Tab.Pane eventKey="tab1">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <label>Property Description</label>
                        <textarea
                          name="content"
                          rows={4}
                          className="form-control"
                          placeholder="Property Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Name"
                          required
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Status</label>
                        <select
                          className="form-control"
                          name="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          {statusList.map((res, key) => (
                            <option key={key} value={res}>
                              {res}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label>Property Type</label>
                        <select
                          className="form-control"
                          name="type"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          {typeList.map((res, key) => (
                            <option key={key} value={res.name}>
                              {res.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Price</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <select
                              className="form-control"
                              name="type"
                              value={currency}
                              onChange={(e) => setCurrency(e.target.value)}
                            >
                              {currencyList.map((res, key) => (
                                <option key={key} value={res.symbol}>
                                  {res.symbol}
                                </option>
                              ))}
                            </select>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name="price"
                            placeholder="Property Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      {status === "Rental" ? (
                        <div className="col-md-6">
                          <label>Rental Period</label>
                          <select
                            className="form-control"
                            name="period"
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                          >
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </select>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="col-md-6 form-group">
                        <label>Property Space (SQM)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Space (Sqm)"
                          name="space"
                          value={space}
                          onChange={(e) => setSpace(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Land (SQM)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Land (Sqm)"
                          name="space"
                          value={land}
                          onChange={(e) => setLand(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <label>Property Video</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Video URL"
                          name="video"
                          value={video}
                          onChange={(e) => setVideo(e.target.value)}
                        />
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="form-group row">
                      <label>Property Thumbnail</label>
                      <div className="custom-file col-md-4 col-lg-3">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="propertyThumbnail"
                          onChange={async (e) => {
                            const base64 = await convertToBase64(
                              e.target.files[0]
                            );
                            setThumbnailUrl(base64);
                            setThumbnail(e.target.files[0]);
                          }}
                          style={{ display: "none" }}
                        />
                        <label
                          className="custom-file-label cursor-pointer"
                          htmlFor="propertyThumbnail"
                        >
                          Choose File
                        </label>
                      </div>

                      {thumbnailUrl &&
                      thumbnailUrl.slice(0, 7) === "uploads" ? (
                        <img
                          className="col-lg-3 col-md-3"
                          src={`${process.env.REACT_APP_SERVER_URL}/${thumbnailUrl}`}
                          alt="ThumbImage"
                          style={{ width: "100px" }}
                        />
                      ) : thumbnailUrl ? (
                        <img
                          className="col-lg-3 col-md-3"
                          src={thumbnailUrl}
                          alt="ThumbImage"
                          style={{ width: "100px" }}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Property Gallery</label>
                      <div
                        {...getRootProps({
                          className: "dropzone cursor-pointer",
                        })}
                      >
                        <input {...getInputProps(-5)} multiple />
                        <div className="dropzone-msg dz-message needsclick">
                          <i className="fas fa-cloud-upload-alt" />
                          <h5 className="dropzone-msg-title">
                            Drop files here or click to upload.
                          </h5>
                          <span className="dropzone-msg-desc">
                            This is just a demo dropzone. Selected files are{" "}
                            <strong>not</strong> actually uploaded.
                          </span>
                        </div>
                      </div>
                      <aside className={thumbsContainer}>{thumbs}</aside>
                      <span className="acr-form-notice">
                        *You can upload up to 5 images for your listing
                      </span>
                      <span className="acr-form-notice">
                        *Listing images should be atleast 620x480 in dimensions
                      </span>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <Locationtab locationData={locationData} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab4">
                    <div className="row">
                      {featureList.map((res, key) => (
                        <div key={key} className="col-lg-4 col-md-6 col-sm-6">
                          <label className="acr-listing-feature">
                            <input
                              type="checkbox"
                              name={"feature" + res._id + ""}
                              checked={
                                features.indexOf(res._id) !== -1 ? true : false
                              }
                              onChange={() => featuresData(res._id)}
                            />
                            <i className="acr-feature-check fas fa-check" />
                            <i style={{ textAlign: "-webkit-center" }}>
                              <img
                                className="acr-listing-feature-icon"
                                src={`${process.env.REACT_APP_SERVER_URL}/${res.icon}`}
                                alt="Icon"
                                style={{ marginBottom: "20px", height: "30px" }}
                              />
                            </i>
                            {res.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab5">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label>Property ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property ID"
                          name="id"
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Beds</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of Beds"
                          name="beds"
                          value={beds}
                          onChange={(e) => setBeds(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Bathrooms</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of Bathrooms"
                          name="baths"
                          value={baths}
                          onChange={(e) => setBaths(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Condition</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Condition"
                          name="condition"
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Year Built</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Year Built"
                          name="built"
                          value={built}
                          onChange={(e) => setBuilt(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Neighborhood</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Neighborhood"
                          name="neighborhood"
                          value={neighbor}
                          onChange={(e) => setNeighbor(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Living Room</label>
                        <select
                          className="form-control"
                          name="livingRoom"
                          value={living}
                          onChange={(e) => setLiving(e.target.value)}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Dining Room</label>
                        <select
                          className="form-control"
                          name="diningRoom"
                          value={dining}
                          onChange={(e) => setDining(e.target.value)}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Building Floor</label>
                        <input
                          type="number"
                          className="form-control"
                          name="buildstory"
                          value={story}
                          onChange={(e) => setStory(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Parking</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Parking"
                          name="Parking"
                          value={parking}
                          onChange={(e) => setParking(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Lot Size</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lot Size"
                          name="lotsize"
                          value={lotsize}
                          onChange={(e) => setLotsize(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>View</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="View"
                          name="view"
                          value={view}
                          onChange={(e) => setView(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label>Enter the Nearby </label>
                      <table
                        className="table table-bordered text-center"
                        style={{ margin: "0px 20px" }}
                      >
                        <thead>
                          <tr className="roof">
                            <th className="col-3"> Select Type </th>
                            <th className="col-4"> Name</th>
                            <th className="col-2"> Distance (km)</th>
                            <th className="col-3">
                              <button
                                className="btn btn-success"
                                onClick={() => addRow()}
                              >
                                + Add Row
                              </button>{" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {nears.rows.map((item, idx) => (
                            <tr key={idx}>
                              <td>
                                <select
                                  className="form-control"
                                  value={item.type}
                                  name="type"
                                  disabled={nears.rows[idx].isEdit}
                                  onChange={(e) => {
                                    const multy = [...nears.rows];
                                    multy[idx].neartype = e.target.value;
                                    setNears({
                                      rows: [...multy],
                                    });
                                  }}
                                >
                                  {nearTypeList.map((res, key) => (
                                    <option key={key} value={res._id}>
                                      {res.name}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="name"
                                  value={item.name}
                                  disabled={nears.rows[idx].isEdit}
                                  onChange={(e) => {
                                    const multy = [...nears.rows];
                                    multy[idx].name = e.target.value;
                                    setNears((state) => {
                                      return {
                                        ...state,
                                        rows: multy,
                                      };
                                    });
                                  }}
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="distance"
                                  value={item.distance}
                                  disabled={nears.rows[idx].isEdit}
                                  onChange={(e) => {
                                    const multy = [...nears.rows];
                                    multy[idx].distance = e.target.value;
                                    setNears({
                                      rows: [...multy],
                                    });
                                  }}
                                />
                              </td>
                              <td
                                className="td-valid"
                                style={{ textAlign: "center" }}
                              >
                                <button
                                  className="btn btn-primary"
                                  onClick={(e) => {
                                    enableEdit(e, idx);
                                  }}
                                  style={{ borderRadius: "5px" }}
                                >
                                  Save
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={(e) => removeRow(e, idx)}
                                  style={{ borderRadius: "5px" }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="form-group" style={{ marginTop: "30px" }}>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="termsAndConditions"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="termsAndConditions"
                        >
                          I Agree to the terms &amp; Conditions of Property
                          Submission
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn-custom"
                      name="submit"
                      onClick={(e) => {
                        submitData(e);
                      }}
                    >
                      Submit Listing
                    </button>
                    {user && user.isAdmin ? (
                      <button
                        type="button"
                        className="btn btn-default"
                        onClick={() => navigate("/admin/properties")}
                      >
                        <span className="fa fa-reply"></span> Cancel
                      </button>
                    ) : (
                      <></>
                    )}
                    <div>
                      {error === undefined || false ? (
                        ""
                      ) : (
                        <div
                          style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
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
                            <span>
                              {fieldError ? " Please Fill Out All Fields" : ""}
                            </span>
                            <span>
                              {minFileError
                                ? " Please Select Images for Thumbnail or Gallery"
                                : ""}
                            </span>
                            <span>
                              {maxFileError
                                ? "You can select only 5 pictures"
                                : ""}
                            </span>
                            <button
                              style={{
                                border: "white 2px solid",
                                borderRadius: "25px",
                                width: "35px",
                                backgroundColor: "#FF3131",
                                color: "white",
                                fontSize: "15px",
                                alignItems: "center",
                              }}
                              onClick={() => {
                                setError(undefined);
                                setFieldError(undefined);
                                setMinFileError(undefined);
                                setMaxFileError(undefined);
                              }}
                            >
                              x
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </form>
            </div>
          </Tab.Container>
          {/* Tab Content End */}
        </div>
      </Container>
    </div>
  );
}

export default Content;
