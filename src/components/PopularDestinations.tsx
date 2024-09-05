import React from 'react';

const PopularDestinationsHeader: React.FC = () => {
  return (
    <section className="py-8 bg-white flex justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <button className="text-2xl font-semibold mb-2 relative inline-block py-2 px-6 rounded-full bg-white border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors shadow-lg hover:shadow-xl">
            <span className="relative z-10">Popular Destinations</span>
          </button>
          <p className="text-gray-600">
            Most popular destinations around the world, from historical places to natural wonders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationsHeader;
