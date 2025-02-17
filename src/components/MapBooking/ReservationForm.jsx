import { useState } from "react";
import AutocompleteInput from "./AutocompleteInput";
import MapComponent from "./MapComponent";

const ReservationForm = () => {
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  console.log(dropoffLocation);

  return (
    <div className="flex space-x-6 p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        <h2 className="text-xl font-semibold mb-4">WHERE & WHEN</h2>

        <AutocompleteInput label="Pickup Location" setLocation={setPickupLocation} />
        <AutocompleteInput label="Dropoff Location" setLocation={setDropoffLocation} />

        <div className="mt-6 flex justify-between">
          <button className="border px-6 py-2 rounded-md">Cancel</button>
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Continue
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold bg-black text-white p-2 rounded-md">
          CREATE NEW RESERVATION (TRANSFER)
        </h2>
        <MapComponent location={pickupLocation} />
      </div>
    </div>
  );
};

export default ReservationForm;
