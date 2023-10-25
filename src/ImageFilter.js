import React, { useRef, useEffect } from "react";
import "./ImageFilter.css";

const ImageFilter = ({ intensity,imgOriginal,imgProcessed }) => {
  const originalImage = new Image();
  const processedImage = new Image();

  originalImage.src = imgOriginal;
  processedImage.src = imgProcessed;

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    originalImage.onload = () => {
      canvas.width = originalImage.width;
      canvas.height = originalImage.height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(originalImage, 0, 0);
      context.globalAlpha = intensity / 100;
      context.drawImage(processedImage, 0, 0, canvas.width, canvas.height);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="filtered-image"
      alt="Filtered Image"
    />
  );
};

export default ImageFilter;
