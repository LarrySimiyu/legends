import React from "react";

const ProgressButton = ({ isDisabled, text, handleSubmit }) => {
  return (
    <button
      type="submit"
      className={`mt-4 text-white px-4 py-2 rounded-md ${
        isDisabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-gradient-to-r from-red-500 to-purple-800"
      }`}
      disabled={isDisabled}
      onClick={handleSubmit}
    >
      {text}
    </button>
  );
};

export default ProgressButton;
