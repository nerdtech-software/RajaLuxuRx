const Video = () => {
    return (
      <div className="relative w-full h-screen flex flex-col">
        {/* Video Background */}
        <div className="flex-grow">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://www.restonlimo.com/wp-content/uploads/2024/04/restonlimo-hero.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.restonlimo.com/wp-content/uploads/2024/04/restonlimo_hero_video_main.mp4"
              type="video/mp4"
            />
          </video>
        </div>
  
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <div className="text-center px-4 sm:px-8 max-w-3xl">
            <h1 className="text-white text-3xl sm:text-5xl font-bold mb-6 leading-snug">
              Top Rated Limousine Service in <br />Chauffeur, Washington DC
            </h1>
            <button className="bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium  text-sm px-10 py-3">
              <a href="tel:+1800229933">Book Now</a>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Video;
 