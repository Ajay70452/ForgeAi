import React from 'react';

// --- Placeholder Data ---
// Replace this with your actual project data
const portfolioItems = [
    {
        id: 1,
        title: "Voltage Coffee Equipments",
        imageUrl: "./images/portfolio/voltage.png", // Replace with your actual image URL
        liveUrl: "https://www.voltagerestaurantsupply.com/", // Replace with your actual live site URL
      },
  {
    id: 2,
    title: "Temple Bliss",
    imageUrl: "./images/portfolio/temple.png", // Replace with your actual image URL
    liveUrl: "https://www.templebliss.co/", // Replace with your actual live site URL
  },
  {
    id: 3,
    title: "Room Reveal",
    imageUrl: "./images/portfolio/room.png", // Replace with your actual image URL
    liveUrl: "https://www.roomreveal.in/", // Replace with your actual live site URL
  },
 
  {
    id: 4,
    title: "Rapid Rim",
    imageUrl: "./images/portfolio/rim.png", // Replace with your actual image URL
    liveUrl: "https://rapidrimrepair.com/", // Replace with your actual live site URL
  },
 
  // Add more projects as needed
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-24 bg-gray-100 dark:bg-gray-900"> {/* Optional section background */}
      <div className="container mx-auto px-4">
        {/* Optional Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Our Recent Work
          </h2>
          <p className="text-lg text-body-color dark:text-body-color-dark mt-2">
            Take a look at some of the projects we're proud of.
          </p>
        </div>

        {/* --- Portfolio Grid --- */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              {/* Link wraps the image and overlay */}
              <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${item.title}`}>
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={`Screenshot of ${item.title}`}
                  className="block h-full w-full object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105" // aspect-video keeps ratio consistent
                />

                {/* Overlay: Initially hidden, appears on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-all duration-500 ease-in-out group-hover:bg-opacity-70 group-hover:opacity-100"
                >
                  {/* Title inside the overlay */}
                  <h3 className="p-4 text-center text-lg font-semibold text-white opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 sm:text-xl">
                    {item.title}
                  </h3>
                   {/* Optional: Add a "Visit Site" text/icon if needed, though the whole card is linked */}
                   {/* <span className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        Visit Site →
                   </span> */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;