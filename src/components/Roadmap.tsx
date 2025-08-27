import React, { useState, useEffect } from 'react';

const Roadmap: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const stages = [
    {
      stageNumber: 'STAGE: 1',
      title: 'The Beginning”',
      items: [
        { text: 'Website launch', completed: true },
        { text: 'Deploy *$RACCS* Token', completed: true },
        {
          text: 'Build core community (“trash mob”)',
          completed: true,
        },
        { text: 'NFT artwork + teasers', completed: true },
      ],
    },
    {
      stageNumber: 'STAGE: 2',
      title: 'Growth"',
      items: [
        { text: 'Mint of 3,333 SolRacc NFTs', completed: false },
        { text: 'Community airdrops & meme contests', completed: false },
        {
          text: 'CoinGecko + CMC listings',
          completed: false,
        },
        { text: 'Early NFT staking', completed: false },
      ],
    },
    {
      stageNumber: 'STAGE: 3',
      title: 'Expansion',
      items: [
        {
          text: 'Launch *RaccDAO*',
          completed: false,
        },
        {
          text: 'NFT + token staking platform',
          completed: false,
        },
        {
          text: 'Racc mini-game (play-to-earn)',
          completed: false,
        },
        {
          text: 'Strategic partnerships with Solana meme projects',
          completed: false,
        },
      ],
    },
    {
      stageNumber: 'STAGE: 4',
      title: 'Moon Mission',
      items: [
        {
          text: 'IRL raccoon-themed events 🦝🎉',
          completed: false,
        },
        {
          text: 'Merch store for holders',
          completed: false,
        },
        {
          text: 'Full community-driven ecosystem governance',
          completed: false,
        },
        {
          text: 'IRL (real-world) events & meetups for the Trash Mob',
          completed: false,
        },
      ],
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const formatText = (text: string) => {
    return text.split(/(\*[^*]+\*)/g).map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <span key={index} className="font-bold">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, stages.length - (isMobile ? 1 : 3))
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // For mobile, show only one stage at a time
  const visibleStages = isMobile
    ? stages.slice(currentSlide, currentSlide + 1)
    : stages.slice(currentSlide, currentSlide + 3);

  // Touch swipe handling for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Left swipe
      nextSlide();
    } else if (touchEnd - touchStart > 50) {
      // Right swipe
      prevSlide();
    }
  };

  return (
    <section className="w-full py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Left-aligned text section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-4 uppercase tracking-wider">
            Roadmap
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Strategic Plan for Success
          </h2>
        </div>

        {/* Roadmap Grid with arrows inside */}
        <div className="relative max-w-6xl mx-auto">
          <div
            className={`grid ${
              isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
            } gap-8 transition-all duration-500`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleStages.map((stage, index) => (
              <div
                key={currentSlide + index}
                className="transition-transform duration-500"
              >
                {/* Stage Number */}
                <div className="text-left mb-4">
                  <span className="text-[16px] font-semibold text-white">
                    {stage.stageNumber}
                  </span>
                </div>
                <div
                  className="bg-gradient-to-b from-[#fd6e6a] to-[#ffc600] p-6 md:p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm h-[90%]"
                  style={{
                    borderImage:
                      'linear-gradient(135deg, #FD6E6A 0%, #FFC600 100%) 1',
                  }}
                >
                  {/* Stage Title */}
                  <h3 className="text-xl font-bold mb-6 md:mb-8 text-center text-white uppercase">
                    {stage.title}
                  </h3>

                  {/* Stage Items with Checkboxes */}
                  <ul className="space-y-3 md:space-y-4">
                    {stage.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        {/* Checkbox SVG */}
                        {item.completed ? (
                          <svg
                            className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        <span
                          className={`text-sm md:text-base ${
                            item.completed ? 'text-white' : 'text-white'
                          }`}
                        >
                          {formatText(item.text)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows - positioned differently for mobile */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute ${
              isMobile
                ? 'left-2 top-1/2 -translate-y-1/2'
                : 'left-[-3rem] top-1/2 -translate-y-1/2'
            } p-3 rounded-full bg-gray-800/70 hover:bg-gray-700/70 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10`}
            aria-label="Previous stage"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide >= stages.length - (isMobile ? 1 : 3)}
            className={`absolute ${
              isMobile
                ? 'right-2 top-1/2 -translate-y-1/2'
                : 'right-[-3rem] top-1/2 -translate-y-1/2'
            } p-3 rounded-full bg-gray-800/70 hover:bg-gray-700/70 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10`}
            aria-label="Next stage"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Mobile indicators */}
          {isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
              {stages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to stage ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
