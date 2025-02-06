import car1 from "../assets/car2.jpg";

const LuxuryLimo = () => {
  return (
    <div className="bg-[#3D1F1F] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="lg:w-80 mt-8 lg:mt-0">
        <div className="relative">
          <img
            src={car1}
            className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 w-full h-full border-4 border-yellow-500 rounded-lg transform translate-x-2 translate-y-2"></div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Raja Luxury Limousine
          </h2>
          <ul className="space-y-4">
            {[
              {
                title: "Luxury experience",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
              {
                title: "Stress-free travel",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
              {
                title: "Technology",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
              {
                title: "Versatility",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mt-1 mr-2">●</span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-yellow-500 text-black px-6 py-3 mx-8  shadow-md hover:bg-yellow-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryLimo;
