import React from 'react';

const Buy: React.FC = () => {
  return (
    <div className="min-h-screen py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section - Centered */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-2 uppercase tracking-wider">
            HOW TO BUY RACCS
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Watch our trading guide for beginners
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
            praesent pellentesque maecenas at.
          </p>
        </div>

        {/* Steps Grid - Full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="p-6 md:p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Connect wallet
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
              potenti.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 md:p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Select quantity
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
              potenti.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 md:p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Confirm transaction
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
              potenti.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 md:p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
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
  );
};

export default Buy;
