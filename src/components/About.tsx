import React from 'react';
import about from '@/assets/about.png';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image on the left */}
        <div className="w-full md:w-2/5">
          <div className="rounded-xl h-80 flex items-center justify-center">
            <img src={about} className="rounded-[16px]" alt="" />
          </div>
        </div>

        {/* Text content on the right */}
        <div className="w-full md:w-3/5">
          <div className="rounded-xl p-8 md:p-12">
            <h1 className="text-xs md:text-xl font-bold text-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-8 text-center md:text-left">
              ABOUT US
            </h1>
            <h2 className="text-3xl font-bold text-white mb-6">
              Welcome to Raccs
            </h2>

            <div className="space-y-4 text-white mb-8">
              <p>
                Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
                praesent
              </p>
              <p>
                pellentesque maccenas elementum at. Tempus elementum porttitor
              </p>
              <p>
                molestie id. Tristique potenti elit praesent pellentesque
                maccenas
              </p>
              <p>
                elementum at. Tempus elementum porttitor molestie id. Tristique
                potenti
              </p>
              <p>elit praesent pellentesque.</p>
            </div>

            {/* <button className="border-[rgba(253, 110, 106, 1)] hover:bg-[rgba(253, 110, 106, 1)] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Learn more
            </button> */}
            <div className="relative inline-block bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] p-0.5 rounded-[8px]">
              <button className="bg-[#000] text-white px-8 py-3 rounded-md transition-colors duration-300 hover:bg-transparent">
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
