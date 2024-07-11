import React from "react";
import { useState, useEffect } from "react";
import { ArrowBigRight, ArrowBigLeft, Import } from "lucide-react";
import "../styles/ImageSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-slideshow-image";

type ImageSliderProps = {
  imageUrls: string[],
};
export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }
  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  }
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <a href="/list-of-beaches" target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrls[imageIndex]}
          className="img-slider-img"
          alt="slider"
        />
      </a>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
    </div>
  );
}
