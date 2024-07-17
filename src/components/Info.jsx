import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Info.css';
import { getQuery } from './api.jsx'; 

function Info() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getQuery();
        const item = result.find(item => item.id === parseInt(id));
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
    return <div className="loading">Loading...</div>;
  }

  return (
  <div className="info-page">
    <div className="selected-item-details">
      <h1 className="item-name">{data.attributes.Name}</h1>
      <p className="item-description">{data.attributes.Description}</p>
      {data.attributes.picture && data.attributes.picture.length > 0 && (
        <div className="item-images-container">
          {data.attributes.picture.map((pic, index) => (
            <div key={index} className="item-image-container">
              <img
                src={`http://192.168.1.173:1337${pic.image.data.attributes.url}`}
                alt={pic.image.data.attributes.name}
                className="item-image"
              />
              {/*
              <p className="item-image-description">{pic.image.data.attributes.description}</p>
              */}
              {pic.description.split('\n').map((line, index) => 
              <p className="item-image-description">{line || ' '}</p>)}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}

export default Info;
