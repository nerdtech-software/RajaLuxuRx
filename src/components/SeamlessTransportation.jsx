import { useEffect, useState } from "react";

const SeamlessTransportation = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      image: "https://s3-alpha-sig.figma.com/img/200a/d010/bc3649d12168874deedca8afff3cdfd0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R~myJSBuvB3FGSpDdnWrVqZvd6ChUpdlXB0glwrULLEl2K~Av0f3H2G1quZ7IijQ6kCtqIyX-~F5QJvbFk1nfesCMiueLS8AWaEZVYAHA0dYEIYLpmZK~TKNSbGJcH5zuO7TBSaa~qRC~Wa3RtniC8qij05r2bqyGfqIyVbw0TSGohC4nWYKbwxCMoWn~qLpoGDFL5sdXOjYdwI8BE5dT6g7lUzuc03TOzqfkrBZ3PMkN7PXtIXtQ0eq0aZePOa9JF2gJgoCEes2bDI5RhiRjJvbe0Fdhy9G2BnHpkMYypnBL5lnV8aVwR2wA-scTe2lJFI8iVq4~hBqGPa0hKPM2Q__",
     
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/ca63/2536/d11fc883acd39728bcf784de59d4fbb6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9rR5G2nXU47eW21ABI1Edkj9JnclV3hunNaf30tVQ-YJNiLpD9ju9Rj-ePmoiWSji6qrXRBW2yPsPGWZXtzGHMWwoez0Fcm4CtQeICpPp08EmhTjjuRbc4V4GpS76luz5uhqzXj9jMjcHzHTs~cVOpnTOd9Sykjp57iKy8DFvmNxbflhYnrBh-8gCuAHAfKzWNq1v7EGDwQEkK1hqbhCJpAUwUJbO5SB1I-P9AG94K9ZHF4mDR66x4kn28XtZNc0QCE~8EjFsTAwrSbGKa5tMHDdby3FETaWJXUWBDLrNGKKnle7Qs-IjCCFJjJbtG4CfN7w646rzLSWOnNkwVJPQ__",
     
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/c91f/2222/183b3faafd5f0cabc2c9165c8a5a99eb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdCxivbHgkKPoBTUKL6lX7uHt5pMqK0UDnkMMfzLv-yADGG1-AypuMiPqtWz8aJKoqpClYU672o8TvW6GgUWMhi7gVLqDBsc6X1rrTVA8yy~TBLuSBOAwFa0fmK-Zb8m4czaka-Jv3FOEfhRStRoQTwu8ZdDja9VNYVz9E0VPKY1aVg4aQENy5p0n7Nstb4KaPn955f7VtWFNcgP-2u1FpiXUngYUQQTwa6L6rD7f7FDaoGWfNBHH2tQMljK7E20xoVhJOf9cuPvgrPaBeUcEr~fAqofbasyjFLCGliw-6IfogYX47rXbO5RD8EJtTYtS-LIBwmoyXecJYaMWXFy7g__",
      
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
