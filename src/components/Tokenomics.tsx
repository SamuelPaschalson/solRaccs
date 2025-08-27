import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <section className="w-full py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-xs text-center md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-4 uppercase tracking-wider">
          TOKENOMICS
        </h2>
        <h3 className="text-4xl md:text-5xl text-center font-semibold mb-6">
          Token Information
        </h3>

        {/* Token Details - Modified to match the image */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#191501] rounded-lg p-16 backdrop-blur-sm border border-[#191501] max-w-3xl w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
              {/* Ticker and Network in one line */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm">TICKER</p>
                  <p className="text-xl font-semibold">$RACCS</p>
                </div>

                <div className="hidden md:block text-gray-400">|</div>

                <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm">NETWORK</p>
                  <p className="text-xl font-semibold">SOLANA</p>
                </div>
              </div>

              {/* Total Supply */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">TOTAL SUPPLY</p>
                <p className="text-xl font-semibold">1,000,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
