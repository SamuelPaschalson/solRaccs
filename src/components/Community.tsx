import React from 'react';
import community from '@/assets/community.png';

const Community = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b from-[#191501] to-[#191501] rounded-md px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Join Our Community For
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600]">
              More Updates and News
            </h3>

            {/* Join Now Button */}
            <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-base md:text-lg">
              Join Now
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={community}
              alt="Community illustration"
              className="max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-80 mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
