// src/components/PopularDestinations.tsx
import React from 'react';

const PopularDestinations: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <div className="relative bg-white rounded-t-full py-2 px-8 shadow-md">
        {/* Section Header */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Popular Destinations
        </h2>
        {/* Yellow underline */}
        <div className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-yellow-500 rounded-b-full"></div>
      </div>
      {/* Section Description */}
      <p className="text-center text-gray-600 mt-4 px-4">
        Most popular destinations around the world, from historical places to natural wonders.
      </p>
    </div>
  );
};

export default PopularDestinations;
