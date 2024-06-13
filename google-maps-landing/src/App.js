import React from "react"; // Importation du module React depuis la bibliothèque 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api"; // Importation des composants GoogleMap et LoadScript depuis '@react-google-maps/api'
import "./App.css"; // Importation du fichier de style CSS './App.css'

// Définition du style de la carte Google Maps
const mapStyles = {
  height: "100%", // Hauteur de la carte à 100% de son conteneur
  width: "100%", // Largeur de la carte à 100% de son conteneur
};

// Définition du centre par défaut de la carte (San Francisco, par exemple)
const defaultCenter = {
  lat: 37.7749, // Latitude
  lng: -122.4194, // Longitude
};

// Définition du composant principal de l'application React
function App() {
  return (
    <div className="container">
      {" "}
      {/* Conteneur principal avec la classe CSS 'container' */}
      <header className="header">
        Google Maps: Un outil incroyable utilisé tous les jours !
      </header>{" "}
      {/* En-tête de l'application avec la classe CSS 'header' */}
      <div className="map-container">
        {" "}
        {/* Conteneur de la carte avec la classe CSS 'map-container' */}
        <LoadScript googleMapsApiKey="AIzaSyDisPvQeSyRdIlNiExe7aRx8utztqtOPew">
          {" "}
          {/* Composant LoadScript pour charger l'API Google Maps avec votre clé API */}
          <GoogleMap // Composant GoogleMap
            mapContainerStyle={mapStyles} // Propriété pour définir le style de la carte
            zoom={13} // Niveau de zoom initial de la carte
            center={defaultCenter} // Centre de la carte initial
          />
        </LoadScript>
      </div>
    </div>
  );
}

export default App; // Exportation du composant App comme composant par défaut de ce fichier
