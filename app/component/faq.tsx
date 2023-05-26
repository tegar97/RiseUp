import { useState } from "react";
import { useSpring, animated } from "react-spring";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    {
      question: "What is RiseUp?",
      answer:
        "RiseUp is a crowdfunding platform for UKMs. It allows UKMs to raise funds from the public to support their businesses.",
    },
    {
      question: "How does RiseUp work?",
      answer:
        "To use RiseUp, UKMs create a campaign page and set a fundraising goal. Once the campaign is live, people can donate money to the campaign. If the campaign reaches its fundraising goal, the UKM will receive the money. If the campaign does not reach its fundraising goal, the UKM will not receive any money.",
    },
    {
      question: "What are the benefits of using RiseUp?",
      answer:
        "There are many benefits to using RiseUp. First, it is a free platform to use. Second, it is easy to set up a campaign. Third, it has a large user base, so you can reach a lot of people with your campaign. Fourth, it is safe and secure, so you can be confident that your money is safe.",
    },
    {
      question: "How can I get started with RiseUp?",
      answer:
        "To get started with RiseUp, simply visit the website and create an account. Once you have created an account, you can create a campaign page and start raising funds.",
    },
  ];


  const handleQuestionClick = (index :any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Animasi untuk muncul atau menghilangkan dropdown
  const fadeInOutAnimation = useSpring({
    opacity: activeIndex !== null ? 1 : 0,
    height: activeIndex !== null ? "auto" : 0,
  });

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className={`cursor-pointer flex justify-between items-center bg-gray-100 p-4 rounded-md ${
              activeIndex === index ? "rounded-b-none  " : ""
            }`}
            onClick={() => handleQuestionClick(index)}
          >
            <h3 className="text-lg font-medium text-black">{faq.question}</h3>
            <svg
              className={`w-5 h-5 transition-transform ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {activeIndex === index && (
            <animated.div
              className="bg-white border-t-2 pl-4 py-4 border-gray-200"
              style={fadeInOutAnimation}
            >
              <span className="text-black">{faq.answer}</span>
            </animated.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
