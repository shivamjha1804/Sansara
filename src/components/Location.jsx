import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Fix for default marker icons in React Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Location = () => {
  const centerPosition = [26.8467, 80.9462]; // Lucknow coordinates
  const [selectedCategory, setSelectedCategory] = useState("healthcare");

  // Properly set up the default icon for markers
  const defaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Categories of amenities with their locations
  const categories = {
    healthcare: {
      title: "Healthcare",
      icon: "🏥",
      locations: [
        {
          id: 1,
          name: "St. Mary Hospital, Vibhuti Khand",
          distance: "2.1km",
          coordinates: [26.8567, 80.9562],
        },
        {
          id: 2,
          name: "The Strongline Clinic",
          distance: "2.1km",
          coordinates: [26.8487, 80.9662],
        },
        {
          id: 3,
          name: "Clinicare Hospital",
          distance: "2.1km",
          coordinates: [26.8367, 80.9362],
        },
      ],
    },
    education: {
      title: "Education",
      icon: "🎓",
      locations: [
        {
          id: 1,
          name: "City Montessori School",
          distance: "1.8km",
          coordinates: [26.8597, 80.9392],
        },
        {
          id: 2,
          name: "Lucknow University",
          distance: "3.5km",
          coordinates: [26.8697, 80.9292],
        },
      ],
    },
    shopping: {
      title: "Shopping",
      icon: "🛒",
      locations: [
        {
          id: 1,
          name: "Phoenix Palassio Mall",
          distance: "3.2km",
          coordinates: [26.8397, 80.9492],
        },
        {
          id: 2,
          name: "Hazratganj Market",
          distance: "4.1km",
          coordinates: [26.8497, 80.9192],
        },
      ],
    },
    dining: {
      title: "Dining",
      icon: "🍽️",
      locations: [
        {
          id: 1,
          name: "Royal Café",
          distance: "2.5km",
          coordinates: [26.8517, 80.9612],
        },
        {
          id: 2,
          name: "Tunday Kababi",
          distance: "3.7km",
          coordinates: [26.8617, 80.9312],
        },
      ],
    },
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Map Container */}
      <MapContainer
        center={centerPosition}
        zoom={13}
        className="w-full h-full z-0"
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Display markers for the selected category */}
        {selectedCategory &&
          categories[selectedCategory].locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={defaultIcon}
            >
              <Popup>
                <div>
                  <h3 className="font-bold">{location.name}</h3>
                  <p>Distance from Sansara: {location.distance}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Branding Overlay */}
      <div className="absolute top-8 right-2 z-40 bg-blue-900 text-white p-4  shadow-lg z-10">
        <h1 className="text-2xl font-bold">SANSARA</h1>
        <h2 className="text-lg">Howrah</h2>
      </div>

      {/* Category Selection Panel */}
      <div className="absolute top-4 right-16 bg-white bg-opacity-50  rounded-lg shadow-lg p-4 z-10 max-w-md">
        <h3 className="text-lg font-semibold mb-3 mr-44 mt-24">Nearby Amenities</h3>
        <div className="grid grid-cols-2 gap-3">
          {Object.keys(categories).map((category) => (
            <div
              key={category}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center ${
                selectedCategory === category
                  ? "bg-blue-100 border-2 border-blue-500 shadow-md"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="text-2xl mb-1">{categories[category].icon}</span>
              <span className="font-medium text-center">
                {categories[category].title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Location List for Selected Category */}
      {selectedCategory && (
        <div className="absolute bottom-4 left-4 bg-white opacity-95 rounded-lg shadow-lg p-4 z-10 max-w-sm">
          <h3 className="text-lg font-semibold mb-2">
            {categories[selectedCategory].icon}{" "}
            {categories[selectedCategory].title} Locations
          </h3>
          <div className="max-h-48 overflow-y-auto">
            {categories[selectedCategory].locations.map((location) => (
              <div
                key={location.id}
                className="mb-2 p-2 bg-gray-50 rounded border border-gray-200"
              >
                <p className="font-medium">{location.name}</p>
                <p className="text-sm text-gray-600">
                  Distance: {location.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
