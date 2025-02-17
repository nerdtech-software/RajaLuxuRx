import { DirectionsRenderer, GoogleMap, useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import { throttle } from "lodash";
import React, { useCallback, useState } from "react";

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your key
const POSITIONSTACK_API_KEY = "fd31b8c22cbdc6dd04dfc392e117afa7";
const libraries = ["places"];

const BookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [route, setRoute] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // Throttled Fetch Location Suggestions
  const fetchSuggestions = useCallback(
    throttle(async (query) => {
      if (!query) return setSuggestions([]);
      try {
        const response = await axios.get("https://api.positionstack.com/v1/forward", {
          params: { access_key: POSITIONSTACK_API_KEY, query },
        });
        setSuggestions(response.data.data);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
    }, 500),
    []
  );

  // Handle Selection
  const handleSelectLocation = (location, type) => {
    if (type === "pickup") setPickupLocation(location.label);
    else setDropoffLocation(location.label);
    setSuggestions([]);
  };

  // Get Directions
  const fetchRoute = async () => {
    if (!pickupLocation || !dropoffLocation) return;
    const directionsService = new google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: pickupLocation,
      destination: dropoffLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setRoute(result);
  };

  return (
    <div className="flex space-x-6 p-6 bg-gray-100 min-h-screen">
      {/* Left Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        <h2 className="text-xl font-semibold mb-4">WHERE & WHEN</h2>

        {/* Pickup Input */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Enter pickup location"
            className="border p-2 w-full rounded-md"
            value={pickupLocation}
            onChange={(e) => {
              setPickupLocation(e.target.value);
              fetchSuggestions(e.target.value);
            }}
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border w-full mt-1 max-h-40 overflow-y-auto">
              {suggestions.map((sug, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelectLocation(sug, "pickup")}
                >
                  {sug.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dropoff Input */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Enter dropoff location"
            className="border p-2 w-full rounded-md"
            value={dropoffLocation}
            onChange={(e) => {
              setDropoffLocation(e.target.value);
              fetchSuggestions(e.target.value);
            }}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="border px-6 py-2 rounded-md">Cancel</button>
          <button
            className="bg-black text-white px-6 py-2 rounded-md"
            onClick={fetchRoute}
          >
            Show Route
          </button>
        </div>
      </div>

      {/* Right Panel (Google Map) */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold bg-black text-white p-2 rounded-md">
          Route Preview
        </h2>
        {isLoaded && (
          <GoogleMap
            center={{ lat: 37.7749, lng: -122.4194 }}
            zoom={12}
            mapContainerStyle={{ width: "100%", height: "300px" }}
          >
            {route && <DirectionsRenderer directions={route} />}
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
