import { Link } from "react-router-dom";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car8.jpg";
const MakeUsBest = () => {
  return (
    <div > 
       <div
              className="relative bg-cover bg-center h-[300px] md:h-[500px]"
              style={{ backgroundImage: `url(${car1})` }}
            >
     <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
      <h1 className="text-2xl md:text-4xl font-bold">
      Elite O’Hare Limo Airport <br />Services
      </h1>
      <Link to="/booking"><button className="mt-6 bg-yellow-600 text-white py-2 px-6  hover:bg-yellow-700">
            Book Now
          </button></Link>
    </div>
    </div>
      <div className="text-center p-8 bg-gray-100">
    <h3 className="text-sm font-bold text-gray-500 mb-2 uppercase">
      Best Rental Car
    </h3>
    <h1 className="text-3xl font-bold mb-4">
      Why Choose Our Chicago Limo Rental And Car Services
    </h1>
    <p className="max-w-2xl mx-auto text-gray-700 mb-6">
      Experience Chicago in unparalleled style and comfort with H&B Limo, your
      premier destination for luxurious limousine services. Whether youre
      seeking a grand entrance for a special occasion or a stress-free ride to
      the airport.
    </p>
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">What Makes Us Best</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-96 flex justify-center items-center" style={{
      backgroundImage:
        `url(${car2})`,
    }}>
         
        </div>
        <ul className="space-y-4 text-left">
          {[
            {
              title: "Punctuality",
              description:
                "We understand the importance of time. Our experienced chauffeurs ensure you arrive promptly and safely, every time.",
            },
            {
              title: "Professionalism",
              description:
                "Expect courteous, knowledgeable drivers who navigate the city with ease.",
            },
            {
              title: "Unmatched Comfort",
              description:
                "Our meticulously maintained fleet guarantees a relaxing and enjoyable experience.",
            },
            {
              title: "Effortless Convenience",
              description:
                "From meet-and-greet services to curbside drop-off, we make your transportation a breeze.",
            },
          ].map((item, index) => (
            <li key={index}>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 text-center">
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-md font-semibold shadow hover:bg-yellow-600 transition">
          Book Now
        </button>
      </div>
    </div>
    </div>
    </div>

  )
}

export default MakeUsBest