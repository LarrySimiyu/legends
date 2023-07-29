import { useState } from "react";
import ProgressButton from "../buttons/progressButton";
import FormHeader from "../containers/formHeader";

const StepTwo = ({
  handleNextStep,
  handlePreviousStep,
  firstName,
  setFirstName,
  age,
  setAge,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextStep();
  };
  const isDisabled = !firstName || age === 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-1/2 w-full mt-20 bg-[#201c1c] rounded-md p-8 shadow-lg shadow-red-300">
        <FormHeader
          header={"Who are you sigining up?"}
          subHeader={"How old are they?"}
        />
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col w-full">
          <label htmlFor="firstName" className="text-white font-bold mb-1">
            First Name
          </label>
          <div class="p-1 rounded-full w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <input
              type="text"
              id="firstName"
              value={firstName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border p-2 text-black w-full rounded-full focus:outline-none"
            />
          </div>
          <label htmlFor="age" className="text-white font-bold mb-1 mt-4">
            Age
          </label>
          <div className="p-1 rounded-full w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <input
              type="number"
              id="age"
              value={age}
              name="age"
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="border p-2 text-black w-full rounded-full focus:outline-none"
            />
          </div>
          <h1 className="text-2xl font-bold mt-8">
            {!firstName || age === 0
              ? "Child's Birthday "
              : firstName + " " + "is" + " " + age}
          </h1>
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
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
