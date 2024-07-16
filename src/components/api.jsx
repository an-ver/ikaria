// src/api.js
import axios from 'axios';

const PORT = 1337;
const url = `http://192.168.1.173:${PORT}`;
const GET_DATA = 'places';

export async function getQuery() {
  const query = `http://192.168.1.173:1337/api/places?/publicationState=preview&populate[1]=Description,Name,description&populate[2]=picture.image,name,description`;
  const response = await axios.get(query);
  console.log('Fetched data: ', response.data.data);
  return response.data.data;
}

