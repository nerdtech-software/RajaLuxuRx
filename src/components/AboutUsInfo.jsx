import { Link } from "react-router-dom";
import car1 from "../assets/car1.jpg";
import car3 from "../assets/car10.jpg";
import car2 from "../assets/car8.jpg";
const AboutUsInfo = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[300px] md:h-[500px]"
        style={{ backgroundImage: `url(${car1})` }}
      >
        <div className="relative flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-xl md:text-4xl font-bold">
            Elite O’Hare Limo Airport <br /> Services
          </h1>
          <Link to="/booking">
            <button className="mt-6 bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700">
              Book Now
            </button>
          </Link>
        </div>
        <p className="text-center text-gray-700 text-sm md:text-lg bg-gray-200 py-4 px-4 md:px-10">
          We have got you covered! With our luxurious O’Hare Limo Airport
          Services, bid farewell to stressful commutes and costly parking costs.
          Let us handle the driving while you unwind and sit back, knowing that
          your trip to and from the O’Hare airport will go without a hitch.
        </p>
      </div>

      {/* Content Section */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-10">
        <div className="max-w-6xl w-full px-4 space-y-16">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <img
              src={car2}
              alt="Luxury Car"
              className="max-w-full md:max-w-[400px] rounded-lg shadow-lg"
            />
            {/* Text Content */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Hi88Limo – The Premier Limousine And Car Service In Chicago
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Experience luxury and convenience with Hi88Limo, the leading car
                and limo service in Chicago. Renowned for exceptional
                transportation services, you can enjoy being chauffeured in
                state-of-the-art premium cars.
              </p>
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700">
                Book Now
              </button>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Customized Limo Service To Suit Every Need
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From airport commutes to special occasions, our reliable services
                extend throughout the tri-state area, offering luxury and comfort
                for in-state travel. Whether you are celebrating a milestone or
                need a limo for business, we ensure the best experience in the
                Tri-State area!
              </p>
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700">
                Book Now
              </button>
            </div>
            {/* Image */}
            <img
              src={car3}
              alt="Limo Service"
              className="max-w-full md:max-w-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
