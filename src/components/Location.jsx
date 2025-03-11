import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, DivIcon } from "leaflet";
import axios from "axios";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Location = () => {
  const centerPosition = [22.589922, 88.34282]; // Main location coordinates
  const [selectedCategory, setSelectedCategory] = useState("commute");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Default blue marker for amenities
  const defaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Custom red marker for the main location - bigger
  const redIcon = new Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: iconShadow,
    iconSize: [35, 56], // Bigger marker
    iconAnchor: [17, 56],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconRetinaUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  });

  // Custom label for the main location - bigger and bolder
  const labelIcon = new DivIcon({
    html: `<div style="background-color: transparent; border-radius: 4px; font-weight: 900; font-size: ${
      windowWidth < 640 ? "13px" : "15px"
    }; white-space: nowrap; color: #000;">Sansara</div>`,
    className: "custom-label",
    iconSize: [120, 30],
    iconAnchor: [-15, 15],
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

  // Determine modal sizes based on screen size
  const getModalClassNames = () => {
    const baseClasses = "bg-white opacity-95 rounded-lg shadow-lg p-4 z-10";

    if (windowWidth < 640) {
      // Mobile
      return `${baseClasses} max-w-xs`;
    } else if (windowWidth < 1024) {
      // Tablet
      return `${baseClasses} max-w-sm`;
    } else {
      // Desktop
      return `${baseClasses} max-w-md`;
    }
  };

  // Calculate positioning classes for UI elements based on screen size
  const getHeaderPosition = () => {
    return windowWidth < 640
      ? "top-2 right-2 p-2 text-sm"
      : windowWidth < 1024
      ? "top-4 right-4 p-3"
      : "top-8 right-4 p-4";
  };

  const getAmenitiesPosition = () => {
    return windowWidth < 640
      ? "top-16 left-2 right-2"
      : windowWidth < 1024
      ? "top-20 right-4 left-4"
      : "top-24 right-16 left-auto";
  };

  const getListPosition = () => {
    return windowWidth < 640
      ? "bottom-2 left-2 right-2"
      : windowWidth < 1024
      ? "bottom-4 left-4 right-auto"
      : "bottom-4 left-4 right-auto";
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <MapContainer
        center={centerPosition}
        zoom={windowWidth < 640 ? 13.5 : 14.5}
        className="w-full h-full z-0"
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={windowWidth > 1024}
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

        {/* Label for main location */}
        <Marker position={centerPosition} icon={labelIcon}></Marker>

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

      {/* SANSARA Header - Positioned responsively */}
      <div
        className={`absolute ${getHeaderPosition()} bg-blue-900 text-white shadow-lg z-40`}
      >
        <h1
          className={`font-bold ${
            windowWidth < 640 ? "text-lg" : "text-xl md:text-2xl"
          }`}
        >
          SANSARA
        </h1>
        <h2
          className={`${
            windowWidth < 640 ? "text-sm" : "text-base md:text-lg"
          }`}
        >
          Howrah
        </h2>
      </div>

      {/* Amenities Selection Panel - Positioned responsively */}
      <div
        className={`absolute ${getAmenitiesPosition()} ${getModalClassNames()}`}
      >
        <h3
          className={`font-semibold mb-2 ${
            windowWidth < 640 ? "text-sm" : "text-base md:text-lg mt-2"
          }`}
        >
          Nearby Amenities
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {["healthcare", "education", "commute", "dining"].map((category) => (
            <div
              key={category}
              className={`p-2 rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center ${
                selectedCategory === category
                  ? "bg-blue-100 border-2 border-blue-500 shadow-md"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span
                className={`mb-1 ${
                  windowWidth < 640 ? "text-lg" : "text-xl md:text-2xl"
                }`}
              >
                {category === "healthcare"
                  ? "🏥"
                  : category === "education"
                  ? "🎓"
                  : category === "commute"
                  ? "🚌"
                  : "🍽️"}
              </span>
              <span
                className={`font-medium text-center ${
                  windowWidth < 640 ? "text-xs" : "text-sm md:text-base"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white text-lg font-bold">Loading...</div>
        </div>
      )}

      {/* Results List - Positioned responsively */}
      {places.length > 0 && !loading && (
        <div
          className={`absolute ${getListPosition()} ${getModalClassNames()}`}
        >
          <h3
            className={`font-semibold mb-2 ${
              windowWidth < 640 ? "text-sm" : "text-base md:text-lg"
            }`}
          >
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
          <div
            className={`overflow-y-auto ${
              windowWidth < 640 ? "max-h-36" : "max-h-48"
            }`}
          >
            {places.map((location) => (
              <div
                key={location.id}
                className="mb-2 p-2 bg-gray-50 rounded border border-gray-200"
              >
                <p
                  className={`font-medium ${
                    windowWidth < 640 ? "text-sm" : ""
                  }`}
                >
                  {location.name}
                </p>
                <p
                  className={`text-gray-600 ${
                    windowWidth < 640 ? "text-xs" : "text-sm"
                  }`}
                >
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
