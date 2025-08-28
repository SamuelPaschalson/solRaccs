import React from 'react';
import left1 from '@/assets/left_1.png';
import left2 from '@/assets/left_2.png';
import right1 from '@/assets/right_1.jpg';
import right2 from '@/assets/right_2.png';

interface FAQProps {
  id?: string; // optional (use string if always required)
}

const Hero: React.FC<FAQProps> = ({ id }) => {
  const formatText = (text: string) => {
    return text.split(/(\*[^*]+\*)/g).map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <span
            key={index}
            className="font-bold bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] bg-clip-text text-transparent"
          >
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };
  return (
    <section
      id={id}
      className="w-full flex items-center justify-center min-h-screen overflow-hidden px-4 py-8 sm:py-12"
    >
      <div className="container mx-auto text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-4">
          {/* Left Column - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:flex flex-col items-center lg:items-end space-y-6 lg:space-y-8 lg:w-1/5 rotate-[-35deg] lg:rotate-[-30deg] mt-[-5rem] ml-[-2rem] z-[20] relative left-[7rem] lg:right-16">
            <img
              src={left1}
              className="w-20 h-20 md:w-[80px] md:h-[80px] lg:w-[105px] lg:h-[105px] rounded-xl shadow-lg"
              alt=""
            />
            <img
              src={left2}
              className="w-20 h-20 md:w-[80px] md:h-[80px] lg:w-[105px] lg:h-[105px] rounded-xl shadow-lg mr-[10rem] md:mr-[8rem]"
              alt=""
            />
          </div>

          {/* Center Column - Main Content */}
          <div className="flex flex-col items-center text-center w-full lg:w-3/5 px-4 sm:px-0">
            {/* Main Heading */}
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Welcome to {formatText('*SolRaccs*')}
            </h1>

            {/* Description text */}
            <p className="mb-8 sm:mb-10 text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-base sm:text-[17px] md:text-[18px] leading-relaxed">
              The first hybrid meme project on Solana with{' '}
              {formatText('*3,333 unique raccoon NFTs*')} + the chaotic $RACC
              token
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 w-full max-w-xs sm:max-w-md">
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg">
                Get Started
              </button>
              <button
                onClick={() =>
                  window.open('https://solraccs.gitbook.io/solraccs/')
                }
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 text-white font-bold rounded-lg hover:bg-gray-800/30 transition-colors text-base sm:text-lg"
              >
                Documentation
              </button>
            </div>

            {/* Contract Address */}
            {/* <div className="mt-4 p-3 sm:p-4 rounded-lg backdrop-blur-sm bg-gray-800/40 sm:bg-transparent w-full max-w-md mx-auto">
              <p className="text-sm sm:text-md font-mono text-gray-300 break-all sm:break-normal">
                <span className="font-bold">CA:</span>{' '}
                0x00000000000000000000000000
              </p>
            </div> */}
          </div>

          {/* Right Column - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 lg:w-1/5 rotate-[35deg] lg:rotate-[30deg] mt-[-5rem] mr-[-2rem] z-[20] relative right-[-5rem] lg:right-24">
            <img
              src={right1}
              className="w-20 h-20 md:w-[80px] md:h-[80px] lg:w-[105px] lg:h-[105px] rounded-xl shadow-lg mb-[-.5rem]"
              alt=""
            />
            <img
              src={right2}
              className="w-20 h-20 md:w-[80px] md:h-[80px] lg:w-[105px] lg:h-[105px] rounded-xl shadow-lg ml-[10rem] md:ml-[8rem]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
