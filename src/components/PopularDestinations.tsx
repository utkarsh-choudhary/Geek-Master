// src/components/PopularDestinationsHeader.tsx
import React from 'react';

const PopularDestinationsHeader: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2">
            <span className="relative inline-block">
              <span className="relative z-10">Popular Destinations</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600">
            Most popular destinations around the world, from historical places to natural wonders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationsHeader;
