import React, { useState, useRef, useEffect } from "react";
import "../styles/Restaurants.css";
import CreateRestaurantCard from "./CreateRestaurantCard";
import FetchData from "./FetchData.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Restaurants() {
  const { data, isLoading } = FetchData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialCardsCount = 5;
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

  if (isLoading) {
    return <div className="loader"></div>;
  }

  const displayData =
    data && data.filter((item) => item.id >= 45 && item.id <= 54);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="restaurant-container">
      <h1 className="title">Restaurants</h1>
      <button
        onClick={handlePrev}
        className="nav-button left "
        disabled={currentIndex === 0}
        style={{ left: 0 }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
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
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Restaurants;
