import React, { useState, useRef, useEffect } from "react";
import "../styles/Villages.css";
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx';

function Villages() {

  const { data, isLoading } = FetchData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialCardsCount = 3;
  const scrollContainerRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = 'smooth';
      scrollContainerRef.current.scrollLeft = (currentIndex * scrollContainerRef.current.offsetWidth) / initialCardsCount;
    }
  }, [currentIndex, initialCardsCount]);
    if (isLoading) {
    return <div className="loader"></div>
  }

    const displayData = data && data.filter(item => item.id >= 16 && item.id <= 23);

  return (
        <div className='villages-container'>
          <button
            onClick={handlePrev}
            className="nav-button left"
            disabled={currentIndex === 0}
          >
            {"<"}
        </button>
          <div className="villages-cards" ref={scrollContainerRef}>
            {displayData.slice(currentIndex, currentIndex + initialCardsCount).map((item) => (
              <CreateMapCard key={item.id} data={item} />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="nav-button right"
            disabled={currentIndex + initialCardsCount >= displayData.length}
          >
            {">"}
        </button>
      </div>
  );
}

export default Villages;
