import React, { useState } from 'react';

interface FAQProps {
  id?: any;
}

const FAQ: React.FC<FAQProps> = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const formatText = (text: string) => {
    return text.split(/(\*[^*]+\*)/g).map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <span
            key={index}
            className="font-bold bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] bg-clip-text text-transparent"
          >
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };
  const faqItems = [
    {
      question: 'What is SolRaccs?',
      answer:
        'A hybrid meme project on Solana combining a *3,333 raccoon NFT collection* and a community-driven token, $RACC.',
    },
    {
      question: 'How do I get SolRaccs?',
      answer: 'Buy on Solana DEXes (Raydium, Orca, etc.) after launch.',
    },
    {
      question: 'What can I do with SolRaccs NFT?',
      answer:
        'Stake, vote in the DAO, earn $RACC rewards, access exclusive giveaways & future games.',
    },
    {
      question: 'Is this a financial advice?',
      answer: 'Nope. It’s raccoon advice — much more valuable. 😉',
    },
  ];

  return (
    <section className="w-full py-16 text-white" id={id}>
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fd6e6a] to-[#ffc600] mb-4 uppercase tracking-wider">
          FAQ
        </h3>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Still have questions?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
          SolRaccs is powered by the {formatText('*trash mob*')} — a community
          of raccoon raiders, meme makers, and degens.
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
                <p className="text-gray-300 ml-8">{formatText(item.answer)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
