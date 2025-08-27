import React from 'react';

const Buy: React.FC = () => {
  return (
    <div className="min-h-screen py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Stacked on mobile, side-by-side on larger screens */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="lg:flex-1">
            <h2 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-2 uppercase tracking-wider">
              HOW TO BUY RACCS
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Watch our trading guide for beginners
            </h1>
          </div>
          <p className="text-gray-300 text-sm sm:text-base lg:flex-1 lg:max-w-md lg:text-right">
            Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
            praesent pellentesque maecenas at.
          </p>
        </div>

        {/* Main Content - Video on top on mobile, side-by-side on larger screens */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Video Placeholder - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg flex items-center justify-center h-full min-h-[250px] sm:min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Trading guide video will appear here
                </p>
              </div>
            </div>
          </div>

          {/* Steps Grid - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Step 1 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-700 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] flex items-center justify-center text-white text-lg mb-4">
                <FaWallet />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Connect wallet
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-700 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] flex items-center justify-center text-white text-lg mb-4">
                <FaList />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Select quantity
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-700 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] flex items-center justify-center text-white text-lg mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Confirm transaction
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-700 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] flex items-center justify-center text-white text-lg mb-4">
                <FaGift />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Receive SolRaccs
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
