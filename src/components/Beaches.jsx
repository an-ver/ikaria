import React from "react";
import "../styles/Beaches.css";
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx'; 

function Beaches() {
    
    const { data, isLoading } = FetchData();
    if (isLoading) return <div>Loading...</div>;
  
    return (
      <div className="beaches-container">
        <p className="beaches-description">
          Απίστευτες παραλίες, με απέραντες αμμουδιές ή βότσαλα και με θερμές
          πηγές, ιδανικές για στιγμές απόλυτης χαλάρωσης.
        </p>
        <dl className='beaches-cards'>
            {data && data.filter(item => item.id >= 24 && item.id <= 30)
            .map(item => <CreateMapCard key={item.id} data={item}/>)}
        </dl>
      </div>
  );
}

export default Beaches;
