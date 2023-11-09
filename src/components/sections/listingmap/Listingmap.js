import React, { Component } from 'react';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import mapdata from '../../../data/mapdata.json';

const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 5],
});

class Listingmap extends Component {
    render() {
        return (
            <div className="listing-map">
                <MapContainer
                    className="markercluster-map map"
                    center={[38.907, -77.04]}
                    zoom={12}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {mapdata.map((item, i) => (
                        <Marker key={i} position={item.geometry.coordinates} icon={customMarker}>
                            <Popup>
                                <div className="mapboxgl-popup mapboxgl-popup-anchor-top">
                                    <div className="mapboxgl-popup-tip" />
                                    <img src={item.properties.thumbnail} alt={item.properties.title} />
                                    <div className="acr-listing-popup-body">
                                        <h5>
                                            <Link to="#" title={item.properties.title}>
                                                {item.properties.title}
                                            </Link>
                                        </h5>
                                        <span className="listing-price">{item.properties.price}</span>
                                        <p>
                                            <i className="fas fa-map-signs" />{item.properties.description}
                                        </p>
                                        <div className="location-popup-meta">
                                            <span><i className="fas fa-bed" />{item.properties.bed}</span>
                                            <span><i className="fas fa-bath" />{item.properties.bath}</span>
                                            <span><i className="fas fa-ruler-combined" />{item.properties.size}</span>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        );
    }
}

export default Listingmap; 