import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <section className="w-full py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          TOKENOMICS
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Column - Illustration/Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  className="w-32 h-32 md:w-40 md:h-40 text-purple-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-3/5">
            {/* Subheading */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Token Information
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-10 max-w-xl text-lg">
              Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
              praesent
            </p>

            {/* Token Details */}
            <div className="space-y-6">
              {/* Ticker */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-purple-700 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">TICKER</p>
                  <p className="text-xl font-semibold">SRACCS</p>
                </div>
              </div>

              {/* Network */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">NETWORK</p>
                  <p className="text-xl font-semibold">SOLANA</p>
                </div>
              </div>

              {/* Total Supply */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">TOTAL SUPPLY</p>
                  <p className="text-xl font-semibold">1,000,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
