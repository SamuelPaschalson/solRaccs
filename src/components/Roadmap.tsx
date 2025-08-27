import React from 'react';

const Roadmap = () => {
  const stages = [
    {
      title: 'Foundation',
      items: [
        'Project conceptualization',
        'Team formation',
        'Smart contract development',
        'Community building',
      ],
    },
    {
      title: 'Launch',
      items: [
        'Token generation event',
        'DEX listing',
        'Marketing campaign',
        'Partnership announcements',
      ],
    },
    {
      title: 'Growth',
      items: [
        'CEX listings',
        'Platform expansion',
        'Ecosystem development',
        'Global adoption',
      ],
    },
  ];

  return (
    <section className="w-full py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Left-aligned text section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-sm md:text-base font-semibold text-gray-400 mb-2">
            Roadmap
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Strategic Plan for Success
          </h2>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-b from-[#fd6e6a] to-[#ffc600] rounded-lg bg-gray-800/30 backdrop-blur-sm"
              style={{
                // border: '2px solid',
                backgroundColor:
                  'linear-gradient(135deg, #FD6E6A 0%, #FFC600 100%) 1',
              }}
            >
              {/* Stage Title - Moved to top */}
              <h3 className="text-xl font-bold mb-6 text-center text-white">
                {stage.title}
              </h3>

              {/* Stage Items */}
              <ul className="space-y-4">
                {stage.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    {/* Check SVG */}
                    <svg
                      className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
