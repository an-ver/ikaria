import React, { useRef } from "react";
import "../styles/Beaches.css";
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx';

function Beaches() {
  const { data, isLoading } = FetchData();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <div className="loader"></div>
  }

  return (
    <div className="beaches-container">
      <p className="beaches-description">
        Απίστευτες παραλίες, με απέραντες αμμουδιές ή βότσαλα και με θερμές
        πηγές, ιδανικές για στιγμές απόλυτης χαλάρωσης.
      </p>
      <button className="arrow-btn left" onClick={() => scroll('left')}>←</button>
      <dl className="beaches-cards" ref={scrollContainerRef}>
        {data && data.filter(item => item.id >= 24 && item.id <= 30)
          .map(item => <CreateMapCard key={item.id} data={item} />)}
      </dl>
      <button className="arrow-btn right" onClick={() => scroll('right')}>→</button>
    </div>
  );
}

export default Beaches;