import React from 'react';
import about from '@/assets/about.png';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Image on the left - full width on mobile, 40% on desktop */}
        <div className="w-full md:w-2/5">
          <div className="rounded-xl h-64 sm:h-72 md:h-80 flex items-center justify-center">
            <img
              src={about}
              className="rounded-[16px] w-full h-full object-cover"
              alt="About Raccs"
            />
          </div>
        </div>

        {/* Text content on the right - full width on mobile, 60% on desktop */}
        <div className="w-full md:w-3/5">
          <div className="rounded-xl p-6 sm:p-8 md:p-12">
            <h1 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-3 md:mb-4 uppercase tracking-wider">
              ABOUT US
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 md:mb-6">
              Welcome to Raccs
            </h2>

            {/* Improved text layout for mobile */}
            <div className="space-y-3 md:space-y-4 text-white mb-6 md:mb-8">
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
                praesent pellentesque maccenas elementum at. Tempus elementum
                porttitor molestie id.
              </p>
              <p className="text-sm sm:text-base">
                Tristique potenti elit praesent pellentesque maccenas elementum
                at. Tempus elementum porttitor molestie id. Tristique potenti
                elit praesent pellentesque.
              </p>
            </div>

            {/* Responsive button */}
            <div className="relative inline-block bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] p-0.5 rounded-[8px]">
              <button className="bg-[#000] text-white text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-md transition-colors duration-300 hover:bg-transparent w-full sm:w-auto">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
