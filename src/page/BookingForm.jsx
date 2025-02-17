import { useState } from "react";
import { Link } from "react-router-dom";
import car1 from "../assets/car1.jpg"; // Ensure this path is correct

const BookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [kids, setKids] = useState(0);
  const [bags, setBags] = useState(0);
  const [activeTab, setActiveTab] = useState("Address");

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[300px] md:h-[500px]"
        style={{ backgroundImage: `url(${car1})` }}
      >
        <div className="relative flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-xl md:text-4xl font-bold">
            Elite O’Hare Limo Airport <br /> Booking
          </h1>
          <Link to="/booking">
            <button className="mt-6 bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 p-6 bg-gray-100 min-h-screen">
        {/* Left Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-2/3 w-full">
          <h2 className="text-xl font-semibold mb-4">WHERE & WHEN</h2>

          {/* Pickup Date & Time */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="border p-2 w-full md:w-1/2 rounded-md"
            />
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="border p-2 w-full md:w-1/2 rounded-md mt-2 md:mt-0"
            />
          </div>

          {/* Pickup & Dropoff Locations */}
          {["Pickup", "Dropoff"].map((type, index) => (
            <div key={index} className="mt-4 p-4 border rounded-lg bg-gray-100">
              <div className="flex items-center mb-2 space-x-2">
                <span className="font-semibold">Location Type:</span>
                {["Search All", "Address", "Airport", "Landmark"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-3 py-1 rounded-md ${
                      activeTab === tab ? "bg-black text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder={`Enter ${type.toLowerCase()} location`}
                className="border p-2 w-full rounded-md"
                value={type === "Pickup" ? pickupLocation : dropoffLocation}
                onChange={(e) =>
                  type === "Pickup"
                    ? setPickupLocation(e.target.value)
                    : setDropoffLocation(e.target.value)
                }
              />
            </div>
          ))}

          {/* Travellers, Kids, Bags */}
          <div className="mt-4 flex justify-between">
            {[["Travellers", travellers, setTravellers], ["Kids", kids, setKids], ["Bags", bags, setBags]].map(
              ([label, count, setCount]) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="font-semibold">{label}:</span>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => setCount(Math.max(0, count - 1))}
                      className="px-3 py-1 bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4">{count}</span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="px-3 py-1 bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Add Stop */}
          <div className="mt-4 text-right">
            <button className="text-black font-semibold underline">
              + ADD STOP
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button className="border px-6 py-2 rounded-md">Cancel</button>
            <button className="bg-black text-white px-6 py-2 rounded-md">
              Continue
            </button>
          </div>
        </div>

        {/* Right Panel (Map Placeholder) */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3 w-full mt-6 md:mt-0">
          <h2 className="text-xl font-semibold bg-black text-white p-2 rounded-md text-center">
            CREATE NEW RESERVATION (TRANSFER)
          </h2>
          <div className="mt-4 text-gray-600 text-center">
            Map will be loaded once you specify any location...
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
