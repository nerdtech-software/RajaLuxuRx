const Registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 relative ">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Text */}
          <div className="lg:w-1/2 p-8 bg-gray-50 ">
            <h1 className="text-2xl font-bold mb-4">Best Rental Car</h1>
            <h2 className="text-4xl font-bold mb-6">Book Your Ride</h2>
            <p className="text-gray-600 mb-6">
              Experience Chicago in unparalleled style and comfort with Limousine,
              your premier destination for luxurious limousine services. Whether
              you’re seeking a grand entrance for a special occasion, or a
              stress-free ride to the airport.
            </p>
            <div>
              <p className="flex items-center text-gray-700 mb-2">
                <span className="material-icons text-xl mr-2">call</span> Phone:
                0123 458 789
              </p>
              <p className="flex items-center text-gray-700">
                <span className="material-icons text-xl mr-2">email</span> Email:
                rj@gmail.com
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2 p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Service Type
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300">
                  <option value="">Select</option>
                  <option value="luxury">SUV</option>
                  <option value="economy">Sedan</option>
                  <option value="economy">Sprinter</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  placeholder="Enter Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  defaultValue="012 345 789"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pickup Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Pickup Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  placeholder="Enter Location"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Drop Off Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  placeholder="Enter Location"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Passenger Count
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                    defaultValue="1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Luggage Count
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                    defaultValue="1"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600"
              >
                Select Vehicle
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
