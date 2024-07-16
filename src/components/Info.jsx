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
        {data.attributes.picture && data.attributes.picture.length > 1 && (
          <div className="item-image-container">
            <img
              src={"http://192.168.1.173:1337" + data.attributes.picture[0].image.data.attributes.url}
              alt={data.attributes.picture[0].image.data.attributes.description}
              className="item-image"
            />
            <p className="item-image-description">{data.attributes.picture[0].image.data.attributes.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;
