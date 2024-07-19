const CreateInfo = ({ data }) => {
  return {
    key: data.id,
    name: data.attributes.picture[1].image.data.attributes.name,
    image:
      "http://192.168.1.173:1337" +
      data.attributes.picture[1].image.data.attributes.url,
    description: data.attributes.picture[1].image.data.attributes.description,
  };
};

export default CreateInfo;
