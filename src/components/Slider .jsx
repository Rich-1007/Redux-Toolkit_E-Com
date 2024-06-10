import React, { useEffect, useState } from "react";

import img1 from "/assets/Carousel-IMG/img-1.webp";
import img2 from "/assets/Carousel-IMG/img-2.webp";
import img3 from "/assets/Carousel-IMG/img-3.webp";
import img4 from "/assets/Carousel-IMG/img-4.webp";
import img5 from "/assets/Carousel-IMG/img-5.webp";
import img6 from "/assets/Carousel-IMG/img-6.webp";

const Slider = () => {
  const slides = [img1, img2, img3, img4, img5, img6];
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="sm:mx-4 flex overflow-hidden">
      <div
        style={{ transform: ` translate(-${curr * 100}%)` }}
        className="flex transition-all duration-1000"
      >
        {slides.map((i, index) => (
          <img key={index} className="object-contain w-full" src={i} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
