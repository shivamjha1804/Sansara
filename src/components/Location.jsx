import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import axios from "axios";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Location = () => {
  const centerPosition = [22.589922, 88.34282]; // Main location coordinates
  const [selectedCategory, setSelectedCategory] = useState("commute");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  // Default blue marker for amenities
  const defaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Custom red marker for the main location
  const redIcon = new Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconRetinaUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  });

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Earth radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2) + " km";
  };

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      const categoryMapping = {
        healthcare: "hospital",
        education: "school|college",
        commute: "bus_station|train_station",
        dining: "restaurant|cafe",
      };

      const amenityQuery = categoryMapping[selectedCategory] || "hospital";
      const overpassQuery = `
        [out:json];
        (
          node["amenity"~"${amenityQuery}"](around:5000, ${centerPosition[0]}, ${centerPosition[1]});
        );
        out;
      `;

      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
        overpassQuery
      )}`;

      try {
        const response = await axios.get(url);
        const data = response.data.elements.map((place) => ({
          id: place.id,
          name: place.tags.name || "Unknown Place",
          coordinates: [place.lat, place.lon],
          distance: calculateDistance(
            centerPosition[0],
            centerPosition[1],
            place.lat,
            place.lon
          ),
        }));
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching places:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <MapContainer
        center={centerPosition}
        zoom={14.5}
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

        {/* Main location with red marker */}
        <Marker position={centerPosition} icon={redIcon}>
          <Popup>
            <div>
              <h3 className="font-bold">SANSARA Howrah</h3>
              <p>Main Location</p>
            </div>
          </Popup>
        </Marker>

        {/* Amenity markers (blue) */}
        {!loading &&
          places.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={defaultIcon}
            >
              <Popup>
                <div>
                  <h3 className="font-bold">{location.name}</h3>
                  <p>Distance: {location.distance}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      <div className="absolute top-8 right-2 z-40 bg-blue-900 text-white p-4 shadow-lg z-10">
        <h1 className="text-2xl font-bold">SANSARA</h1>
        <h2 className="text-lg">Howrah</h2>
      </div>

      <div className="absolute top-4 right-16 bg-white bg-opacity-50 rounded-lg shadow-lg p-4 z-10 max-w-md">
        <h3 className="text-lg font-semibold mb-3 mr-44 mt-24">
          Nearby Amenities
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {["healthcare", "education", "commute", "dining"].map((category) => (
            <div
              key={category}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center ${
                selectedCategory === category
                  ? "bg-blue-100 border-2 border-blue-500 shadow-md"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="text-2xl mb-1">
                {category === "healthcare"
                  ? "🏥"
                  : category === "education"
                  ? "🎓"
                  : category === "commute"
                  ? "🚌"
                  : "🍽️"}
              </span>
              <span className="font-medium text-center">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white text-lg font-bold">Loading...</div>
        </div>
      )}

      {places.length > 0 && !loading && (
        <div className="absolute bottom-4 left-4 bg-white opacity-95 rounded-lg shadow-lg p-4 z-10 max-w-sm">
          <h3 className="text-lg font-semibold mb-2">
            {selectedCategory === "healthcare"
              ? "🏥"
              : selectedCategory === "education"
              ? "🎓"
              : selectedCategory === "commute"
              ? "🚌"
              : "🍽️"}{" "}
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
            Locations
          </h3>
          <div className="max-h-48 overflow-y-auto">
            {places.map((location) => (
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
