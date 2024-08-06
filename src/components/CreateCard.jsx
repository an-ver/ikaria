import React from 'react';
import CardList from './CardList';

const CreateCard = ({ data }) => {
  return (
    <CardList
      key={data.id}
      name={data.attributes.Name}
      image={"http://192.168.1.173:1337" + data.attributes.picture[0].image.data.attributes.url}
      description={data.attributes.Description}
      category={data.attributes.category}
    />
  );
};

export default CreateCard;
