import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  questions: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {questions.map((item, index) => (
        <div 
          key={index} 
          className="mb-4 bg-white rounded-lg shadow-sm border border-gray-100"
        >
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span className="text-lg font-medium text-foundationblackblack-13">{item.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-foundationredred-13 transition-transform duration-200 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`} 
            />
          </button>
          <div 
            id={`faq-content-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4 text-foundation-blackblack-10">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 