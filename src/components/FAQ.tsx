import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What is SolRaccs?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Tristique potenti elit praesent pellentesque meecenas elementum at.',
    },
    {
      question: 'How does SolRaccs work?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Tristique potenti elit praesent pellentesque meecenas elementum at.',
    },
    {
      question: 'What makes SolRaccs unique?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Tristique potenti elit praesent pellentesque meecenas elementum at.',
    },
    {
      question: 'How to get started with SolRaccs?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Tristique potenti elit praesent pellentesque meecenas elementum at.',
    },
    {
      question: 'What blockchain does SolRaccs use?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Tristique potenti elit praesent pellentesque meecenas elementum at.',
    },
    {
      question: 'Is SolRaccs secure?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Tristique potenti elit praesent pellentesque meecenas elementum at.',
    },
  ];

  return (
    <section className="w-full py-16 text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-green-400 mr-3 text-center mb-2">FAQ</h3>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Still have questions?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur. Tristique potenti elit
          <br />
          praesent pellentesque meecenas elementum at.
        </p>

        {/* FAQ Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-gray-800/50"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold flex items-center">
                  {item.question}
                </h3>
                {/* Dropdown Icon */}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Answer (Dropdown) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 ml-8">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
