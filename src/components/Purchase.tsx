import React from "react";
import { FaWallet, FaCoins, FaShoppingCart } from "react-icons/fa";

const Purchase = () => {
  return (
    <div className="bg-[#191501ff] min-h-20 py-6 px-4 sm:px-6 md:px-8 mx-2 sm:mx-4 md:mx-12 rounded-[1.5rem]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Step 1 */}
          <div className="p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 sm:mr-4 md:mr-5 flex-shrink-0">
              <FaWallet className="text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600]" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="font-bold mb-2 text-base sm:text-lg text-white">
                Set Up a Crypto Wallet
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                You'll need a cryptocurrency wallet to store and trade your
                Softfaces
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 sm:mr-4 md:mr-5 flex-shrink-0">
              <FaCoins className="text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600]" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-base sm:text-lg font-bold mb-2 text-white">
                Select Token and Amount
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Choose your desired token and enter the amount you wish to
                purchase.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 sm:mr-4 md:mr-5 flex-shrink-0">
              <FaShoppingCart className="text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600]" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-base sm:text-lg font-bold mb-2 text-white">
                Buy and Stake SolRaccs
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Click "Buy Now" and follow the on-screen instructions from your
                wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
