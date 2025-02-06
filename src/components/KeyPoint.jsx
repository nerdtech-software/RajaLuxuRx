import carkey from "../assets/43f804b209a8bd2cf366afce91531736.jpg";
import { default as car1, default as car2, default as car3 } from "../assets/car1.jpg";

const KeyPoint = () => {
  const vehicles = [
    { type: "SUV", passengers: 6, img: car1 },
    { type: "Jeep", passengers: 6, img: car2 },
    { type: "SUV", passengers: 6, img: car3 },
    
  ];


  




  const points = [
    {
      title: "Late-Model Vehicles",
      description: "Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
    },
    {
      title: "Diverse Options",
      description: "Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
    },
    {
      title: "Luxury and Comfort",
      description: "Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
    },
    {
      title: "Party Atmosphere",
      description: "Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section 1: Vehicles */}
      <section className="py-12 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-500 uppercase">What We Do</h2>
          <h1 className="text-3xl font-bold ">A Ride For Every Occasion</h1>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md p-4 text-center"
            >
              <img
                src={vehicle.img}
                alt={vehicle.type}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold text-gray-800">{vehicle.type}</h3>
              <p className="text-gray-500">
                <span role="img" aria-label="passengers">
                  🐾
                </span>{" "}
                {vehicle.passengers} Passengers
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Key Points */}
      <section className="bg-[#3D1F1F]  text-white py-12">
        <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-center lg:gap-8">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Key Points About Raja Luxury Limousine</h2>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="text-yellow-500">●</span>
                  <div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6  hover:bg-yellow-600">
              Book Now
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <div className="relative">
              <img
                src={carkey}
                alt="Car"
                className=" shadow-lg "
              />
              <div className="absolute top-4 right-4 w-full h-full border-4 border-yellow-500  transform translate-x-2 translate-y-2"> </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyPoint;
