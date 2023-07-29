import { useState } from "react";
import ProgressButton from "../buttons/progressButton";
import FormHeader from "../containers/formHeader";

const StepThree = ({
  handleNextStep,
  handlePreviousStep,
  options,
  setOptions,
  selectedOptions,
  setSelectedOptions,
  showOtherInput,
  setShowOtherInput,
  otherInputValue,
  setOtherInputValue,
  firstName,
}) => {
  const handleOptionClick = (option) => {
    if (option === "Other") {
      setShowOtherInput((prev) => !prev);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.includes(option)
          ? prevOptions.filter((item) => item !== option)
          : [...prevOptions, option]
      );
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherInputValue(e.target.value);
  };

  const handleOtherInputSubmit = (e) => {
    e.preventDefault();
    if (otherInputValue.trim() !== "") {
      setOptions((prevOptions) => [
        ...prevOptions.slice(0, -1),
        otherInputValue.trim(),
        "Other",
      ]);

      setSelectedOptions((prevOptions) => [
        ...prevOptions,
        otherInputValue.trim(),
      ]);
      setOtherInputValue("");
      setShowOtherInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextStep();
  };

  const isDisabled = selectedOptions.length === 0;

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-3/4 w-full mt-20 bg-[#201c1c] rounded-md p-8 shadow-lg shadow-red-300">
        <FormHeader
          header={"Even Legends have opportunities to grow!"}
          subHeader={`What area(s) in ${
            firstName + "'s"
          } life could they use confidence?`}
        />

        <div className="flex flex-wrap justify-center">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`w-1/4 p-2 m-2 text-center cursor-pointer rounded-md text-[12px] md:text-[16px] ${
                selectedOptions.includes(option)
                  ? "bg-gradient-to-r from-red-500 to-purple-800"
                  : "text-gray"
              }`}
            >
              {option}
            </div>
          ))}
          <div className={`w-1/4 p-2 m-2 text-center cursor-pointer`}></div>
          <div className={`w-1/4 p-2 m-2 text-center cursor-pointer`}></div>
        </div>

        {showOtherInput && (
          <div className="w-full p-2">
            <form onSubmit={handleOtherInputSubmit}>
              <div className="p-1 rounded-full w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                <input
                  type="text"
                  value={otherInputValue}
                  onChange={handleOtherInputChange}
                  placeholder="Other option"
                  className="border p-2 text-black w-full rounded-full focus:outline-none"
                />
              </div>

              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  className="mt-4 text-white px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-purple-800"
                >
                  Add Option
                </button>
              </div>
            </form>
          </div>
        )}
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

export default StepThree;
