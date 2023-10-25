import React, { useState } from "react";
import "./App.css";
import Slider from "./Slider";
import ImageFilter from "./ImageFilter";

const tmpImg = {
  urlOriginal:
    "https://eventodev-cdn-c3dfhva7grfmffcx.z01.azurefd.net/images/originals/Large/6744012e-9a40-484b-9cec-6a13c5494ec8.webp",
  urlProcessed:
    "https://eventodev-cdn-c3dfhva7grfmffcx.z01.azurefd.net/images/edited/Large/6744012e-9a40-484b-9cec-6a13c5494ec8.webp",
};

function App() {
  const [intensity, setIntensity] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Snapify</h1>
      </header>
      <div className="slider-container">
        <Slider
          min={0}
          max={100}
          value={intensity}
          handleChange={(e) => setIntensity(e.target.value)}
        />
        <p className="slider-value">{intensity}%</p>
      </div>
      <ImageFilter
        intensity={intensity}
        imgOriginal={tmpImg.urlOriginal}
        imgProcessed={tmpImg.urlProcessed}
      />
    </div>
  );
}

export default App;
