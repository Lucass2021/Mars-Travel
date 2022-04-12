import React from "react";
import "../../App.css";
import Slider from "./Slider";
import { SliderImages } from "./SliderImages";

function GallerySection() {
  return (
    <div className="gallery-mars">
      <h2>Gallery of Marsian Life</h2>
      <Slider slides={SliderImages} />
    </div>
  );
}

export default GallerySection;
