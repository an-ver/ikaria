import React from "react";
import '../styles/About.css';
import FetchData from './FetchData.jsx';
import CreateAboutCard from "./CreateAboutCard.jsx";

function About() {
  
  const { data, isLoading } = FetchData();

    if (isLoading) {
        return <div className="loader"></div>
    }
  return (
    <div className="cards-container"> 
      {/* <dl>
        {data && data.filter(item => item.id >= 55 && item.id <= 56)
          .map(item => <CreateAboutCard key={item.id} data={item}/>)}
      </dl> */}
      <dl>
        {data && data
          .filter(item => item.category === 'about-card')
          .map(item => <CreateAboutCard key={item.id} data={item} />)}
      </dl>
    </div>
  );
}
export default About;