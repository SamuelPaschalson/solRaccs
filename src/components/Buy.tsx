import React from 'react';
import { FaWallet, FaList, FaCheckCircle, FaGift } from 'react-icons/fa';

const Buy: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Centered */}
        <div className="items-center mb-4 flex flex-row">
          <div>
            <h2 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-4 uppercase tracking-wider">
              HOW TO BUY RACCS
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Watch our trading guide for beginners
            </h1>
          </div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
            praesent pellentesque maecenas at.
          </p>
        </div>

        {/* Main Content - Video on left, steps on right */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Video Placeholder - Left Side */}
          <div className="lg:w-1/2 rounded-xl p-8 border border-gray-700">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg flex items-center justify-center h-full">
              <div className="h-full items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
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
                <p className="text-gray-300">
                  Trading guide video will appear here
                </p>
              </div>
            </div>
          </div>

          {/* Steps Grid - Right Side */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-left">
              <h3 className="text-xl font-bold text-white mb-4 text-left">
                Connect wallet
              </h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-left">
              <h3 className="text-xl font-bold text-white mb-4 text-left">
                Select quantity
              </h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-left">
              <h3 className="text-xl font-bold text-white mb-4 text-left">
                Confirm transaction
              </h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-left">
              <h3 className="text-xl font-bold text-white mb-4 text-left">
                Receive SolRaccs
              </h3>
              <p className="text-gray-300">
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
