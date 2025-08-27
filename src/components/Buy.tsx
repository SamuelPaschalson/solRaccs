import React from 'react';
import { FaWallet, FaList, FaCheckCircle, FaGift } from 'react-icons/fa';

const Buy: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-4 uppercase tracking-wider">
            HOW TO BUY RACES
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Watch our trading guide for beginners
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
            praesent pellentesque maecenas at.
          </p>
        </div>
        <div className="flex flex-row justify-even">
          {/* Video Placeholder */}
          <div className="mt-16 rounded-xl p-8 border border-gray-700">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
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
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Step 1 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl mb-6">
                <FaWallet />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Connect wallet
              </h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-2xl mb-6">
                <FaList />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Select quantity
              </h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white text-2xl mb-6">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Confirm transaction
              </h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet potenti elit consectetur, sit amet
                potenti.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white text-2xl mb-6">
                <FaGift />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Receive SolRaces
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
