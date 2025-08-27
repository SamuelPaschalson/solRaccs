import React from 'react';
import Logo from '@/assets/logo.png';
import X from '@/assets/x.svg';
import Telegram from '@/assets/telegram.svg';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white py-8 px-4">
      <div className="container mx-auto">
        {/* Top Section: Logo, Navigation, Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-6 md:gap-0">
          <div className="flex justify-start">
            <img src={Logo} className="h-16 md:h-20" alt="SolRaccs Logo" />
          </div>

          {/* Navigation Links in the center */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              'Home',
              'About Us',
              'Features',
              'Tokenomics',
              'Roadmap',
              'FAQ',
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex justify-end gap-4 mt-4"></div>
        </div>

        {/* Copyright Text */}
        <div className="flex flex-row justify-between">
          <div className="text-center pt-6">
            <p className="text-gray-400 text-sm md:text-base">
              Copyright© 2025 SolRaccs. All rights reserved.
            </p>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            {/* <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <img
                src={Discord}
                className="h-6 w-6 md:h-8 md:w-8"
                alt="Discord"
              />
            </a> */}
            <a
              href="https://x.com/raccsonsol"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <img
                src={X}
                className="h-6 w-6 md:h-8 md:w-8"
                alt="X (Twitter)"
              />
            </a>
            <a
              href="https://t.me/+CXFyzu2DLl5mMTI0"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <img
                src={Telegram}
                className="h-6 w-6 md:h-8 md:w-8"
                alt="Telegram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
