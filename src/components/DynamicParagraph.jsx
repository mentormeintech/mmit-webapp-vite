import React, { useState, useEffect } from "react";

const DynamicParagraph = () => {
  const paragraphs = [
    {
      heading: "Key Ingredients for Achieving Success",
      text: "Goal Setting and Action Planning: Set clear and achievable goals for yourself with the guidance of your mentor. Break down your goals into actionable steps and create a plan to accomplish them. Regularly review your progress, make adjustments as needed, and celebrate milestones along the way. Key Ingredients for Achieving Success",
    },
    {
      heading: "Heading 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepeiste ipsa incidunt eaque nesciunt unde dolor dignissimos doloresquidem laboriosam laborum ducimus repellat architecto modi aspernaturiure illo quos dfdignissimos doloresquidem laboriosam laborum ducimus repellat.",
    },
    {
      heading: "Heading 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepeiste ipsa incidunt eaque nesciunt unde dolor dignissimos doloresquidem laboriosam laborum ducimus repellat architecto modi aspernaturiure illo quos dfdignissimos doloresquidem laboriosam laborum ducimus repellat.",
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
    <div className="md:w-1/2 py-3">
      <div className="flex gap-x-10 my-1">
        <span>{sequence + 1} of 3</span>
        <span>{paragraphs[sequence].heading}</span>
        <span className="flex gap-x-6">
          <button
            onClick={() =>
              handleChangeSequence(
                sequence === 0 ? paragraphs.length - 1 : sequence - 1
              )
            }
          >
            {"<"}
          </button>
          <button
            onClick={() =>
              handleChangeSequence(
                sequence === paragraphs.length - 1 ? 0 : sequence + 1
              )
            }
          >
            {">"}
          </button>
        </span>
      </div>
      <p className="p-2 px-3 bg-[#F1F9FF]">{paragraphs[sequence].text}</p>
    </div>
  );
};

export default DynamicParagraph;
