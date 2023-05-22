"use client";   
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index : any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "Pertanyaan 1",
      answer: "Jawaban 1",
    },
    {
      question: "Pertanyaan 2",
      answer: "Jawaban 2",
    },
    {
      question: "Pertanyaan 3",
      answer: "Jawaban 3",
    },
  ];

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
            <div className="bg-white  border-t-2 pl-4 py-4  border-gray-200">
              <span className="text-black">{faq.answer}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
