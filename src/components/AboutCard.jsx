import React from "react";
import '../styles/AboutCards.css';
import purpleBack from '../assets/images/purple-back.jpg'; 

function AboutCard(props) {

  const handleGitHubClick = () => {
  if (props.description && props.description.startsWith('http')) {
    window.location.href = props.description;
  } else {
    console.error('Invalid or undefined URL');
  }
};
  return (
   <div className="card">
    <img src={purpleBack} alt="purple-back" className="card__img" />
    <div className="card__avatar"> <img src={props.image} alt={props.name} className="card__img" /></div>
    <div className="card__title">{props.name}</div>
    <div className="card__subtitle">Web Developer</div>
    <div className="card__wrapper">
        <button className="card__btn card__btn-solid"onClick={handleGitHubClick}>GitHub Profile</button>
    </div>
  </div>
  );
    
}
export default AboutCard;