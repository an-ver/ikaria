import React, { useState, useRef, useEffect } from "react";
import "../styles/Villages.css";
import CreateMapCard from "./CreateMapCard.jsx";
import FetchData from "./FetchData.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Villages() {
  const { data, isLoading } = FetchData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsCount, setCardsCount] = useState(4);
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
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 900) {
        setCardsCount(1);
      } else if (width <= 1200) {
        setCardsCount(2);
      } else if (width <= 1500) {
        setCardsCount(3);
      } else {
        setCardsCount(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
      scrollContainerRef.current.scrollLeft =
        (currentIndex * scrollContainerRef.current.offsetWidth) / cardsCount;
    }
  }, [currentIndex, cardsCount]);
  if (isLoading) {
    return <div className="loader"></div>;
  }

  const displayData =
    data && data.filter((item) => item.id >= 16 && item.id <= 23);

  return (
    <div className="villages-container">
      <button
        onClick={handlePrev}
        className="nav-button left"
        disabled={currentIndex === 0}
      >
        {<FaArrowLeft />}
      </button>
      <div className="villages-cards" ref={scrollContainerRef}>
        {displayData
          .slice(currentIndex, currentIndex + cardsCount)
          .map((item) => (
            <CreateMapCard key={item.id} data={item} />
          ))}
      </div>
      <button
        onClick={handleNext}
        className="nav-button right"
        disabled={currentIndex + cardsCount >= displayData.length}
      >
        {<FaArrowRight />}
      </button>
    </div>
  );
}

export default Villages;
