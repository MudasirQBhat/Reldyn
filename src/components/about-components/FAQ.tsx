import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqData from "../../utils/data";

interface FaqItemProps {
  serial: string;
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ serial, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-sm shadow-color-gray-blue mb-4 px-6 lg:px-20 ">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAnswer}
      >
        <div className="text-1xl lg:text-3xl text-color-gray-blue font-roboto w-60 md:w-full">
          {`${serial}`}
          <span className="text-color-white font-bold text-1xl lg:text-3xl">
            {" "}
            {`${question}`}
          </span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-primary-color border-2 border-primary-color">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-color-white text-color-white">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="p-4 lg:p-8">
      {faqData.map((faq: FaqItemProps, index: number) => (
        <FaqItem
          key={index}
          serial={faq.serial}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQ;
