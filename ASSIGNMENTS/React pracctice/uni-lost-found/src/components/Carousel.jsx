import React, { useState } from "react";

const Carousel = () => {
  const Carousel=["//lms.iqra.edu.pk/pluginfile.php/1/theme_academi/slide4image/1780556131/IULMS%20Portal%20banner%204.jpg","//lms.iqra.edu.pk/pluginfile.php/1/theme_academi/slide2image/1780556131/IULMS%20Portal%20Banner%202.jpeg","//lms.iqra.edu.pk/pluginfile.php/1/theme_academi/slide3image/1780556131/IULMS%20Portal%20banner%203.jpg"]

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full h-125 overflow-hidden">
      <div className="flex w-full h-full">
        <div className="min-w-full h-full bg-blue-500 flex items-center justify-center">
          <img src={Carousel[currentIndex]} alt="carousel" className="w-full h-full object-cover"
/>
        </div>
      </div>

      <button className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl"  onClick={() => {
  setCurrentIndex(
    (currentIndex - 1 + Carousel.length) % Carousel.length
  );
}}>
        ❮
      </button>

      <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl"  onClick={()=>{setCurrentIndex((currentIndex + 1) % Carousel.length)}}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;