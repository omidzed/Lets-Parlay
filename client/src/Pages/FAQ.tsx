import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: 'What is a Moneyline Bet?',
      answer:
        'A: Moneyline bets in MMA are bets placed on who you believe will win the fight, regardless of method of victory. Each fighter is given odds, which indicate the likelihood of them winning the match. Betting on the favorite will yield less return on investment, while betting on the underdog can result in a higher payout if they win.',
    },
    {
      question: 'How do Parlay Bets work?',
      answer:
        'A: Parlay bets involve combining two or more picks into a single bet. All selections within the parlay must win for the bet to be successful. Parlays offer higher payouts than betting on single matches due to the increased difficulty of predicting multiple outcomes correctly. (This feature will be made available in the near future!)',
    },
    {
      question: 'What are Total Rounds Bets?',
      answer:
        'A: Total Rounds bets are wagers on how long the fight will last.The bookmaker sets a "total" for the number of rounds a fight is expected to go, and you can bet on whether the actual number of rounds will be over or under that total.',
    },
    {
      question: 'Are the funds in this App real?',
      answer:
        'A: No, the funds used in our app are purely virtual and have no real-world value. Our platform is designed for recreational and educational purposes, allowing users to practice and learn about MMA betting without financial risk.',
    },
    {
      question: 'What is the purpose of the App?',
      answer: `A: The primary purpose of our app is to provide a fun, risk-free environment for MMA fans to engage with the sport in a new way. It's an excellent way for beginners to get acquainted with betting concepts and for experienced bettors to test strategies.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionStyle =
    'text-smallest font-extralight mb-2 md:text-2xl  md:leading-relaxed semi-bold cursor-pointer mt-4 px-4';
  const answerStyle =
    'text-answer font-thin md:tracking-wide font-medium md:tracking-wide px-4 md:text-thead font-thin text-justify overflow-hidden transition-all ease-in-out duration-1000 border border-b-1 border-t-0 border-r-0 border-l-0';

  return (
    <div className="px-12 pt-4 md:p-8">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="flex justify-center tracking-wider text-xl md:text-4xl mt-2 mb-10 md:mt-6 md:mb-16">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-1">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3
                id="question"
                className={`${questionStyle} flex justify-between items-center`}
                onClick={() => toggleFAQ(index)}>
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp size={20} className="transition-transform" />
                ) : (
                  <FaChevronDown size={20} className="transition-transform" />
                )}
              </h3>
              <div id="answer"
                className={`${answerStyle} ${
                  activeIndex === index ? 'h-auto' : 'h-0'
                }`}>
                <p className="mt-6 mb-10">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
