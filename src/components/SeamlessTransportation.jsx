import { useEffect, useState } from "react";
import car1 from "../assets/car1.jpg";
import car3 from "../assets/car10.jpg";
import car2 from "../assets/car8.jpg";
const SeamlessTransportation = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      image: car1,
     
    },
    {
      image: car2,
     
    },
    {
      image: car3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-[#2C0404] text-white p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Seamless Transportation</h2>
          <p className="mb-4">
            H&B Limo offers town car services in Chicago, IL, where transport
            gets an infusion of modern technology. <br /> From plasma TVs,
            tablet infotainment, and Bluetooth audio systems pumping your
            favorite tunes—travel in luxury and style.
          </p>
          <p className="mb-6">
            Why settle for ordinary services in Chicago when you can travel in
            luxury? Email for your sedan now!
          </p>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-md font-semibold shadow hover:bg-yellow-600 transition">
            Book Now
          </button>
        </div>
        <div className="relative">
          {/* Slideshow */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                slideIndex === index ? "block" : "hidden"
              } fade transition-opacity duration-500 px-24`}
            >
              <img
                src={slide.image}
               
                className="w-80 h-48 object-cover rounded-md "
              />
             
            </div>
          ))}

          {/* Dot Indicators */}
          <div className="flex justify-center mt-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full mx-1 cursor-pointer transition-all ${
                  slideIndex === index ? "bg-yellow-500" : "bg-gray-400"
                }`}
                onClick={() => setSlideIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeamlessTransportation;
