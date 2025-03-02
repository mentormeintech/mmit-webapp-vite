import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const DynamicParagraph = () => {
  const paragraphs = [
    {
      heading: "Key Ingredients for Achieving Success",
      text: "Goal Setting and Action Planning: Set clear and achievable goals for yourself with the guidance of your mentor. Break down your goals into actionable steps and create a plan to accomplish them. Regularly review your progress, make adjustments as needed, and celebrate milestones along the way. Key Ingredients for Achieving Success",
    },
    {
      heading: "The Power of Mentorship",
      text: "Forge your own path with the guidance of your mentor. Don't be afraid to explore uncharted territories and pursue your passions with unwavering determination.  Your mentor is your trusted ally, providing support, encouragement, and a sounding board for your ideas.  Together, you can navigate challenges, celebrate victories, and unlock your full potential.",
    },
    {
      heading: "Cultivating a Growth Mindset ",
      text: "Cultivate a growth mindset, embracing challenges as opportunities for learning and development. View setbacks as temporary hurdles, not permanent roadblocks.  Seek out feedback and use it as fuel to propel you forward.  Remember, every experience, whether positive or negative, contributes to your growth and resilience.",
    },
  ];

  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence((prevSequence) => {
        if (prevSequence === paragraphs.length - 1) {
          return 0; // Reset sequence to 0 after reaching the last one
        } else {
          return prevSequence + 1; // Increment sequence
        }
      });
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);

  const handleChangeSequence = (newSequence) => {
    setSequence(newSequence);
  };

  return (
    <div className="w-full md:w-3/4 py-3 mb-[.5rem]"> {/* Adjusted width and centered */}
      <div className="flex flex-col md:flex-row items-center justify-between my-4">
        <div className="flex items-center gap-x-4">
          <span className="text-gray-500 text-sm">{sequence + 1} of {paragraphs.length}</span>
          {/* <span className="font-semibold text-xl">{paragraphs[sequence].heading}</span> */}
          <span className="font-bold text-xl text-gray-800 tracking-tight">{paragraphs[sequence].heading}</span>
        </div>
        <div className="flex gap-x-4 mt-2 md:mt-0"> {/* Added mt-2 for vertical spacing on small screens */}
          <button
            onClick={() =>
              handleChangeSequence(
                sequence === 0 ? paragraphs.length - 1 : sequence - 1
              )
            }
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
          <button
            onClick={() =>
              handleChangeSequence(
                sequence === paragraphs.length - 1 ? 0 : sequence + 1
              )
            }
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      </div>
      <p className="p-4 bg-[#F1F9FF] rounded-lg shadow-md mt-4 text-lg text-gray-800 leading-relaxed relative transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F29778] rounded-lg opacity-25 blur-lg"></span> {/* Added blur */}
      {paragraphs[sequence].text}
    </p>
    </div>
  );
};

export default DynamicParagraph;
