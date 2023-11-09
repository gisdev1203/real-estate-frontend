import React, { useState, Fragment } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Locationtab = ({ locationData }) => {
  const MyMarker = (props) => {
    const initMarker = (ref) => {
      if (ref) {
        // console.log(ref.leafletElement);
      }
    };

    return <Marker ref={initMarker} {...props} />;
  };

  const [lat, setLat] = useState("13.736717");
  const [long, setLong] = useState("100.523186");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [provice, setProvice] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");

  const position = [lat, long];

  const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 5],
  });

  ////////////    Sending Data to Parent Component

  return (
    <Fragment>
      <div className="form-group submit-listing-map">
        <MapContainer zoom={13} center={{ lat: lat, lng: long }}>
          <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          <MyMarker position={position} icon={customMarker} druggable={true}>
            {/* <Popup position={position}>
              Current location: <pre>{JSON.stringify(position, null, 2)}</pre>
            </Popup> */}
          </MyMarker>
        </MapContainer>
      </div>
      <div className="form-group">
        <span className="acr-form-notice">
          Drag and drop the marker to identify your <b>Latitude</b> and{" "}
          <b>Longitude</b>{" "}
        </span>
      </div>
      <div className="row">
        <div className="col-md-12 form-group">
          <label>Full Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              locationData({
                lat,
                long,
                address,
                city,
                provice,
                zipcode,
                country,
              });
            }}
            name="address"
            className="form-control"
            placeholder="Full Address"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              locationData({
                lat,
                long,
                address,
                city,
                provice,
                zipcode,
                country,
              });
            }}
            className="form-control"
            placeholder="Country"
          />
        </div>
        <div className="col-lg-3 col-md-3 form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              locationData({
                lat,
                long,
                address,
                city,
                provice,
                zipcode,
                country,
              });
            }}
            className="form-control"
            placeholder="City"
          />
        </div>
        <div className="col-lg-3 col-md-3 form-group">
          <label>Provice/State</label>
          <input
            type="text"
            name="provice"
            value={provice}
            onChange={(e) => {
              setProvice(e.target.value);
              locationData({
                lat,
                long,
                address,
                city,
                provice,
                zipcode,
                country,
              });
            }}
            className="form-control"
            placeholder="Provice/State"
          />
        </div>
        <div className="col-lg-3 col-md-3 form-group">
          <label>Zipcode</label>
          <input
            type="text"
            name="zipcode"
            value={zipcode}
            onChange={(e) => {
              setZipcode(e.target.value);
              locationData({
                lat,
                long,
                address,
                city,
                provice,
                zipcode,
                country,
              });
            }}
            className="form-control"
            placeholder="Zipcode"
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Longitude (Optional)</label>
          <input
            type="text"
            name="lng"
            value={long}
            onChange={(e) => {
              setLong(e.target.value);
              locationData({
                lat,
                long,
                address,
                city,
                provice,
                zipcode,
                country,
              });
            }}
            id="lngVal"
            className="form-control"
            placeholder="Longitude"
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Latitude (Optional)</label>
          <input
            type="text"
            name="lat"
            value={lat}
            onChange={(e) => {
              setLat(e.target.value);
              locationData({
                lat,
                long,
                address,
                city,
                provice,
                zipcode,
                country,
              });
            }}
            id="latVal"
            className="form-control"
            placeholder="Latitude"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Locationtab;
