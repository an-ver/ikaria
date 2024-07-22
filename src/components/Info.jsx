import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Info.css";
import { getQuery } from "./api.jsx";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import mapPin from "../assets/images/mapPin.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { parseEvents, mapEventsToCoordinates } from "./Utils";

library.add(faMapPin);

const customMarkerIcon = L.icon({
  iconUrl: mapPin,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Info() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getQuery();
        const item = result.find((item) => item.id === parseInt(id));
        setData(item);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  console.log("data", data);
  const coordinates = data?.attributes.coordinates || [];
  const description = data.attributes.Description;

  return (
    <div className="info-page">
      <div className="selected-item-details">
        <h1 className="item-name">{data?.attributes?.Name}</h1>
        <p className="item-description">{data?.attributes?.Description}</p>
        {data?.attributes?.picture && data.attributes.picture.length > 0 && (
          <div className="item-images-container">
            {data.attributes.picture.map((pic, index) => (
              <div key={index} className="item-image-container">
                <img
                  src={`http://192.168.1.173:1337${pic.image.data.attributes.url}`}
                  alt={pic.image.data.attributes.name}
                  className="item-image"
                />
                {pic.description.split("\n").map((line, index) => (
                  <p key={index} className="item-image-description">
                    {line || " "}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
        <div>
          <MapContainer
            className="mapContainer"
            center={
              coordinates.length > 0
                ? [coordinates[0].lat, coordinates[0].long]
                : [0, 0]
            }
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {coordinates.map((coord, index) => (
              <Marker
                key={index}
                position={[coord.lat, coord.long]}
                icon={customMarkerIcon}
              >
                <Popup>
                  <div style={{ fontWeight: "bold", textAlign: "center" }}>
                    {description[index] || data.attributes.Name}
                  </div>
                  {data.attributes.picture &&
                    data.attributes.picture.length > 0 && (
                      <img
                        src={`http://192.168.1.173:1337${data.attributes.picture[0].image.data.attributes.url}`}
                        alt={
                          data.attributes.picture[0].image.data.attributes.name
                        }
                        style={{
                          width: "100px",
                          height: "auto",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    )}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Info;
