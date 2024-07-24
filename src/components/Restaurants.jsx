import React, { useState, useRef, useEffect } from "react";
import "../styles/Restaurants.css";
import CreateRestaurantCard from "./CreateRestaurantCard";
import FetchData from "./FetchData.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Restaurants() {
  const { data, isLoading } = FetchData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialCardsCount = 4;
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
      scrollContainerRef.current.style.scrollBehavior = "smooth";
      scrollContainerRef.current.scrollLeft =
        (currentIndex * scrollContainerRef.current.offsetWidth) /
        initialCardsCount;
    }
  }, [currentIndex, initialCardsCount]);

  const displayData =
    data && data.filter((item) => item.id >= 45 && item.id <= 54);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="restaurant-container">
      <button
        onClick={handlePrev}
        className="nav-button left "
        disabled={currentIndex === 0}
      >
        {<FaArrowLeft />}
      </button>
      <dl className="restaurant-cards" ref={scrollContainerRef}>
        {displayData
          .slice(currentIndex, currentIndex + initialCardsCount)
          .map((item) => (
            <CreateRestaurantCard key={item.id} data={item} />
          ))}
      </dl>

      <button
        onClick={handleNext}
        className="nav-button right"
        disabled={currentIndex + initialCardsCount >= displayData.length}
        style={{ right: 0 }}
      >
        {<FaArrowRight />}
      </button>
    </div>
  );
}

export default Restaurants;
