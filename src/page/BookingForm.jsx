import { useState } from "react";

const BookingForm = () => {
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 1 ? value - 1 : 1);

  return (
    <div>
      

      <div
    className="relative bg-cover bg-center h-[400px] md:h-[500px]"
    style={{
      backgroundImage:
        "url('https://s3-alpha-sig.figma.com/img/8ee7/6cee/f0e1aa0669c8bbe1fbad49c398671baa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bn0Gv6KEBFlcmuyGZeX8t7DryCR-Y6Vf6RunxQOWnVQwckxyYe3usvO~aa-bp~IG-zQu-VF25s4l-RMaCRueRijIGxp3CgCU~3EmqXfrgU6GF-yOr9Dxmrac-xCkB7lhuAC5QLMjn6kTGPw8NNya~j4Bnrye45TdoHo92mTmg30EfNEYp1YcfbBjjeuwS8~cZ8h1xeuwZsQlYZadx8CDbEhblJ39~BTT62dfbsPic6QOZZ4MaFNHtfQdyX1pvdZIKU28iUyX5PEOnX4uit~kt~3ELNJl7HA2T03GKxlS2QSUB9i2hoM6B~YdDbXm6h5PUNvAm6CU4NTiUx~nGV~Z6w__')", // Replace with your car image URL
    }}
  >
    {/* Overlay for Darkening Background */}
  

    {/* Centered Content */}
    <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
      <h1 className="text-2xl md:text-4xl font-bold">
      Elite O’Hare Limo Airport <br />Services
      </h1>
      <button className="mt-6 bg-yellow-600 text-white py-2 px-6  hover:bg-yellow-700">
        Book Now
      </button>
    </div>
    </div>




     
    <section className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Book Now</h2>

        
        <form className="space-y-6">
          {/* Name and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="012 345 789"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Pickup Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Pickup Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Pickup Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Pickup and Drop Off Locations */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button
              type="button"
              className="mt-2 text-blue-500 hover:underline text-sm"
            >
              + Add Stop
            </button>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Drop off Location
            </label>
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Passengers and Luggage Count */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <label className="block text-gray-700 font-semibold mr-4">
                Number of Passengers
              </label>
              <button
                type="button"
                onClick={() => decrement(setPassengers, passengers)}
                className="px-3  border border-gray-300 rounded-l focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                value={passengers}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => increment(setPassengers, passengers)}
                className="px-3  border border-gray-300 rounded-r focus:outline-none"
              >
                +
              </button>
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 font-semibold mr-4">
                Luggage Count
              </label>
              <button
                type="button"
                onClick={() => decrement(setLuggage, luggage)}
                className="px-3 border border-gray-300 rounded-l focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                value={luggage}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => increment(setLuggage, luggage)}
                className="px-3  border border-gray-300 rounded-r focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gold-700"
            >
              Select Vehicle
            </button>
          </div>
        </form>
      </div>
    </section>
    </div>
    
  );
};

export default BookingForm;
