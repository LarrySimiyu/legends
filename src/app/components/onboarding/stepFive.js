import { useState } from "react";
import ProgressButton from "../buttons/progressButton";
import FormHeader from "../containers/formHeader";
const StepFive = ({ handlePreviousStep, firstName, age, qualities }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-3/4 w-full mt-20 bg-[#201c1c] rounded-md p-8 shadow-lg shadow-red-300">
        <FormHeader header={`${firstName} is all set!`} />
        <div className="flex w-full sm:w-3/4 md:w-1/2 bg-gray-700 rounded-md   p-5 mt-6">
          <div className="w-full ">
            <h1 className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-800">
                Name{" "}
              </span>
              : {firstName}
            </h1>
            <p className="text-xl font-bold">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-800">
                Age
              </span>{" "}
              : {age}
            </p>
            <div className="flex justify-start mt-2">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-red-500 to-purple-800 text-[12px] rounded-xl p-1 flex justify-center  mr-2 px-2"
                >
                  <h2>{quality}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <ProgressButton
            text={"Back"}
            isDisabled={false}
            handleSubmit={handlePreviousStep}
          />
        </div>
      </div>
    </div>
  );
};

export default StepFive;
