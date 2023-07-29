import ProgressButton from "../buttons/progressButton";
import FormHeader from "../containers/formHeader";

const StepOne = ({ handleNextStep, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextStep();
  };

  const handleFormInput = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isDisabled = !formData.firstName || !formData.lastName;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-1/2 w-full mt-20 bg-[#201c1c] rounded-md p-8 shadow-lg shadow-red-300">
        <FormHeader
          header={" Welcome to Legends!"}
          subHeader={"Lets get to know each other."}
        />
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col w-full">
          <label htmlFor="firstName" className="text-white font-bold mb-1">
            First Name
          </label>
          <div className="p-1 rounded-full w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              name="firstName"
              onChange={handleFormInput}
              placeholder="First Name"
              className="border p-2 text-black w-full rounded-full focus:outline-none"
            />
          </div>

          <label htmlFor="lastName" className="text-white font-bold mt-2 mb-1">
            Last Name
          </label>
          <div className="p-1 rounded-full w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              name="lastName"
              onChange={handleFormInput}
              placeholder="Last Name"
              className="border rounded-full p-2 w-full text-black focus:outline-none"
            />
          </div>
          <div className="flex justify-end mt-5">
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

export default StepOne;
