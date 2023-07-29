import { useState } from "react";
import ProgressButton from "../buttons/progressButton";
import FormHeader from "../containers/formHeader";

const StepFour = ({
  handleNextStep,
  handlePreviousStep,
  qualities,
  selectedQualities,
  setSelectedQualities,
  firstName,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextStep();
  };

  const handleOptionClick = (option) => {
    if (selectedQualities.length >= 3 && !selectedQualities.includes(option)) {
      return;
    }

    setSelectedQualities((prevQualities) =>
      prevQualities.includes(option)
        ? prevQualities.filter((item) => item !== option)
        : [...prevQualities, option]
    );
  };

  const canSelect = selectedQualities.length < 3;
  const isDisabled = selectedQualities.length !== 3;

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-3/4 w-full mt-20 bg-[#201c1c] rounded-md p-8 shadow-lg shadow-red-300">
        <FormHeader
          header={`Now let's hear about ${
            firstName + "'s"
          }  legendary qualities`}
          subHeader="Choose 3 words to describe your Legend."
        />

        <div className="flex flex-wrap justify-center">
          {qualities.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`w-1/4 p-2 m-2 text-center cursor-pointer rounded-md text-[12px] md:text-[16px] ${
                selectedQualities.includes(option)
                  ? "bg-gradient-to-r from-red-500 to-purple-800"
                  : canSelect
                  ? "text-gray"
                  : "text-gray bg-gray-700"
              }`}
            >
              {option}
            </div>
          ))}
          <div className={`w-1/4 p-2 m-2 text-center cursor-pointer`}></div>
          <div className={`w-1/4 p-2 m-2 text-center cursor-pointer`}></div>
        </div>
        <div className="flex justify-between mt-5">
          <ProgressButton
            text={"Back"}
            isDisabled={false}
            handleSubmit={handlePreviousStep}
          />
          <ProgressButton
            text={"Next"}
            isDisabled={isDisabled}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
