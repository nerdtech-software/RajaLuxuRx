import { useState } from "react";
import { Link } from "react-router-dom";
import car1 from "../assets/car4.jpg";
import car2 from "../assets/car5.jpg";
import car3 from "../assets/car6.jpg";

const LimoServices = () => {
  const [activeTab, setActiveTab] = useState("Sedan");

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Top Section */}
      <div className="container mx-auto px-4 lg:flex lg:items-start lg:gap-12">
        {/* Image Collage */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img
           src={car1}
           
            alt="Car 1"
            className="rounded-lg object-cover w-72"
          />
          <img
          src={car3}
            className="rounded-lg object-cover"
          />
          <img
            
            src={car2}
            alt="Car 3"
            className="col-span-2 rounded-lg object-cover h-96"
          />
        </div>

        {/* Accordion Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">Choosing the Right Vehicle</h1>

          {/* Accordion Items */}
          <div className="space-y-4">
            {[
              { title: "Sedan", description: "Hi88Limo offers affordable van rentals in Chicago for various occasions, including passenger vans and minivans. Our Sprinter van rentals are a good option for both business and leisure trips." },
              { title: "SUV Limos", description: "Spacious and luxurious, perfect for group travel or corporate events." },
              { title: "Stretch Limo SUVs", description: "Ideal for weddings and large group events." },
              { title: "Stretch Limos", description: "Classic luxury for special occasions like proms and anniversaries." },
              { title: "Luxury Passenger Van", description: "Comfortable vans for long-distance travel." },
              { title: "How do I connect with other enthusiasts?", description: "Reach out to our community events or join our social media channels." },
            ].map((item, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 text-left"
                  onClick={() => toggleTab(item.title)}
                >
                  <span className="font-medium">{item.title}</span>
                  <span>{activeTab === item.title ? "-" : "+"}</span>
                </button>
                {activeTab === item.title && (
                  <div className="px-4 py-2 text-gray-600">{item.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-12 bg-white   py-8 flex flex-col lg:flex-row lg:items-center lg:justify-center">
        <div className="space-y-4 lg:w-3/4">
          <h2 className="text-2xl font-bold">Limo Services</h2>
          <p className="text-gray-600 ">
            Hi88Limo goes beyond ordinary car services, offering a variety of
            limousine options to elevate any event. <br /> Whether you require a
            professional presence for corporate events, a dignified ride for
            funerals, or a luxurious <br /> start or end to your journey, we’ll have
            the perfect limousine service for you.
          </p>
        </div>
        <button className="mt-6 lg:mt-0 bg-yellow-500 text-white font-bold py-3 px-6  hover:bg-yellow-600">
      <Link to="/booking"> Book Now</Link>   
        </button>
      </div>
      <div className="w-full p-8 space-y-16">
      {/* Top Section with Carousel */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Grand Entrances", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { title: "Luxury Locations", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { title: "Concerts", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { title: "Sporting Events", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <button className="p-2  rounded-full  hover:bg-gray-300">
            ←
          </button>
          <button className="p-2 rounded-full  hover:bg-gray-300">
            →
          </button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold">Why choose our limo services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Diverse Fleet", icon: "🚗", text: "Choose from a variety of limousines including classic stretch limos, executive sedans, spacious SUVs." },
            { title: "Professional Service", icon: "👨‍💼", text: "Choose from a variety of limousines including classic stretch limos, executive sedans, spacious SUVs." },
            { title: "Comfort & Convenience", icon: "🛋️", text: "Choose from a variety of limousines including classic stretch limos, executive sedans, spacious SUVs." },
            { title: "Seamless Experience", icon: "🔗", text: "Choose from a variety of limousines including classic stretch limos, executive sedans, spacious SUVs." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="font-semibold text-lg mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

    </div>
  );
};

export default LimoServices;