import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./App.css";

const mapStyles = {
  height: "100%",
  width: "100%",
};

const defaultCenter = {
  lat: 14.7167, // Latitude de Dakar
  lng: -17.4677, // Longitude de Dakar
};

function App() {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div className="container">
      <header className="header">
        Google Maps: Un outil incroyable utilisé tous les jours !
      </header>
      <div className="map-container">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
      </div>
    </div>
  );
}

export default App;
