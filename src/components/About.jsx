import React from "react";
import '../styles/About.css';
import FetchData from './FetchData.jsx';

function About() {
  
  const { data, isLoading } = FetchData();

    if (isLoading) {
        return <div className="loader"></div>
    }
  return (
    <div className="about-header">
      <p>This is the about page.</p>
    </div>
  );
}
export default About;