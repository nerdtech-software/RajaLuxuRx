import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",location
};

const MapComponent = ({  }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location || { lat: 37.7749, lng: -122.4194 }} // Default to SF
      zoom={12}
    >
      {location && <Marker position={location} />}
    </GoogleMap>
  ) : (
    <p>Loading Map...</p>
  );
};

export default MapComponent;
