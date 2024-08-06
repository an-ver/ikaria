import React from "react";
import '../styles/About.css';
import FetchData from './FetchData.jsx';
import CreateAboutCard from "./CreateAboutCard.jsx";

function About() {
  
  const { data, isLoading } = FetchData();

    if (isLoading) {
        return <div className="loader"></div>
    }
  const displayData = data && data.filter(item => item.attributes.category === 'about-card');
  return (
    <div className="cards-container"> 
      <div>
        {displayData.map(item => <CreateAboutCard key={item.id} data={item} />)}
      </div>
    </div>
  );
}
export default About;