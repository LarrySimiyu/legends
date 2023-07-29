"use client";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import StepOne from "./components/onboarding/stepOne";
import StepTwo from "./components/onboarding/stepTwo";
import StepThree from "./components/onboarding/stepThree";
import StepFour from "./components/onboarding/stepFour";
import StepFive from "./components/onboarding/stepFive";

export default function Home() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(0);
  const [options, setOptions] = useState([
    "Self-talk",
    "Resilience",
    "Social anxiety",
    "Self-image",
    "Speaking up",
    "Perfectionism",
    "Trying new things",
    "Making friends",
    "Setting boundaries",
    "Other",
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState("");

  const [qualities, setQualities] = useState([
    "Adventurous",
    "Brave",
    "Caring",
    "Clever",
    "Creative",
    "Curious",
    "Determined",
    "Energetic",
    "Funny",
    "Helpful",
    "Honest",
    "Kind",
  ]);
  const [selectedQualities, setSelectedQualities] = useState([]);

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <ProgressBar step={step} />
      {step === 0 && (
        <StepOne
          handleNextStep={handleNextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 1 && (
        <StepTwo
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          firstName={firstName}
          setFirstName={setFirstName}
          age={age}
          setAge={setAge}
        />
      )}
      {step === 2 && (
        <StepThree
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          options={options}
          setOptions={setOptions}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          showOtherInput={showOtherInput}
          setShowOtherInput={setShowOtherInput}
          otherInputValue={otherInputValue}
          setOtherInputValue={setOtherInputValue}
          firstName={firstName}
        />
      )}
      {step === 3 && (
        <StepFour
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          qualities={qualities}
          selectedQualities={selectedQualities}
          setSelectedQualities={setSelectedQualities}
          firstName={firstName}
        />
      )}
      {step === 4 && (
        <StepFive
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          firstName={firstName}
          age={age}
          qualities={selectedQualities}
        />
      )}

      {/* {step < 4 && (
        <button
          onClick={handleNextStep}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      )} */}
    </div>
  );
}
