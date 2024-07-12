import React from "react";
import "../styles/Beaches.css";
import { ImageSlider } from "./ImageSlider";

//import images
import beach1 from "../assets/images/seuxelles-paralia.jpg";
import beach2 from "../assets/images/armenisths-paralia.jpg";
import beach3 from "../assets/images/iero-paralia.jpg";
import beach4 from "../assets/images/kampos-paralia.jpg";
import beach5 from "../assets/images/libadi-paralia.jpg";
import beach6 from "../assets/images/mesakth-paralia.jpg";
import beach7 from "../assets/images/therma-paralia.jpg";

const IMAGES = [beach1, beach2, beach3, beach4, beach5, beach6, beach7];
function Beach() {
  return (
    <>
      <div className="beaches-container">
        <div className="beaches-slider-container">
          <ImageSlider imageUrls={IMAGES} />
        </div>
        <div className="beaches-slider-container2">
          <ImageSlider imageUrls={IMAGES} />
        </div>
        <div>
          <p className="beaches-description">
          Απίστευτες παραλίες, με απέραντες αμμουδιές ή βότσαλα και με θερμές
          πηγές, ιδανικές για στιγμές απόλυτης χαλάρωσης.
        </p>
        </div>
      </div>
    </>
  );
}

export default Beach;
