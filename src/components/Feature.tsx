import React from 'react';
import { FaChartLine, FaMoneyBillWave, FaPalette } from 'react-icons/fa';

const Feature: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-4 uppercase tracking-wider">
            OUR FEATURES
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Raccs?
          </h1>
          <div className="max-w-2xl mx-auto text-gray-300">
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
              praesent
            </p>
            <p>pellentesque maceenas elementum at.Tempus elementum porttitor</p>
          </div>
        </div>

        {/* Feature Grid with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Profitability */}
          <div className="bg-[#191501ff] p-8 rounded-xl shadow-lg border border-[#191501ff] flex flex-col items-center justify-center">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
              <FaChartLine className="text-white text-2xl rounded rounded-md" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Profitability
            </h2>
            <p className="text-gray-300 text-center">
              Lorem ipsum dolor sit amet potenti elit consectetur. Tristique
              potenti elit praesent pellentesque.
            </p>
          </div>

          {/* Feature 2: Zero Fees */}
          <div className="bg-[#191501ff] p-8 rounded-xl shadow-lg border border-[#191501ff] flex flex-col items-center justify-center">
            <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 mb-4">
              <FaMoneyBillWave className="text-white text-2xl rounded rounded-md" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Zero Fees</h2>
            <p className="text-gray-300 text-center">
              Lorem ipsum dolor sit amet potenti elit consectetur. Tristique
              potenti elit praesent pellentesque.
            </p>
          </div>

          {/* Feature 3: Premium Art */}
          <div className="bg-[#191501ff] p-8 rounded-xl shadow-lg border border-[#191501ff] flex flex-col items-center justify-center">
            <div className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 mb-4">
              <FaPalette className="text-white text-2xl rounded rounded-md" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Premium Art</h2>
            <p className="text-gray-300 text-center">
              Lorem ipsum dolor sit amet potenti elit consectetur. Tristique
              potenti elit praesent pellentesque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
