import React from 'react';
import MapCard from './MapCard';

const CreateMapCard = ({ data }) => {
  return (
    <MapCard
      key={data.id}
      name={data.attributes.Name}
      image={"http://192.168.1.173:1337" + data.attributes.picture[0].image.data.attributes.url}
    />
  );
};

export default CreateMapCard;