import React from "react";

const experiences = [
  {
    title: "Your Neighborhood Mall for Everyday Conveniences",
    image: "MallImage.jpg",
    points: [
      "Supermarket & Fresh produce store",
      "Pharmacy, ATMs & convenience stores",
      "Restaurants & cafés",
      "Luxury brands & apparel stores",
      "Home décor, electronics & utility stores",
      "Entertainment center for families & kids",
    ],
  },
  {
    title: "An Arena for Champions",
    image: "SportsArena.jpg",
    points: [
      "Professional courts for tennis, badminton, pickleball, baseball & volleyball",
      "Indoor gaming includes table tennis, pool & board games",
      "World-class gym & wellness center for holistic fitness",
      "Outdoor fitness stations & obstacle course for strength & endurance",
      "Yoga lawn & meditation zone amidst serene greenery",
    ],
  },
  {
    title: "The Temple & Ghat – A Sacred Riverfront Experience",
    image: "TempleGhat.jpg",
    points: [
      "A grand temple space for prayer, meditation & inner peace",
      "A dedicated Ganga Aarti area to experience sacred traditions",
      "A serene riverfront promenade for tranquil walks & meditation",
      "A vibrant waterfront for festivals, celebrations & unique percussion park",
      "Dock & yacht parking for leisurely riverfront experiences",
    ],
  },
  {
    title: "A Culinary Retreat by the Water",
    image: "RiversideCafe.jpg",
    points: [
      "Glasshouse seating with uninterrupted river views for a serene morning breakfast",
      "Alfresco dining for a breezy, open-air experience",
      "Curated all-day menu featuring global and local flavors",
      "Private dining spaces for intimate gatherings",
      "Lounge terrace – perfect for celebrations, with breathtaking sunset & skyline views",
    ],
  },
];

const ExperienceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 -mt-20 pb-32 w-10/12 mx-auto h-full">
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-col md:flex-row p-4 items-start">
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full md:w-1/2 h-96  object-cover rounded-md mb-4 md:mb-0 md:mr-4"
          />
          <div className="md:w-full">
            <h2 className="text-xl font-bold mb-4">{exp.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="text-black text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceGrid;
