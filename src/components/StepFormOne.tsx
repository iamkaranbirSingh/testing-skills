import React, { useState } from "react";
import GiftImg from "./images/gift-2.png";

interface StepOneProps {
  nextStep: () => void;
}

const StepFormOne: React.FC<StepOneProps> = ({ nextStep }) => {
  const [data, setData] = useState({
    username: "",
    old: "",
    messages: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    old: "",
    gender: "",
    messages: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, gender: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!data.username) {
      newErrors.username = "Please enter a username.";
      isValid = false;
    } else {
      newErrors.username = "";
    }

    if (!data.old) {
      newErrors.old = "Please enter an age.";
      isValid = false;
    } else {
      newErrors.old = "";
    }

    if (!data.gender) {
      newErrors.gender = "Please select a gender.";
      isValid = false;
    } else {
      newErrors.gender = "";
    }

    if (!data.messages) {
      newErrors.messages = "Please enter a message.";
      isValid = false;
    } else {
      newErrors.messages = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(data, "data");
      nextStep();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={GiftImg} alt="gift-img" />
      <h1 className="text-4xl font-semibold leading-[54px] text-[#101A34] font-poppins my-6 px-8">
        Tell us about your gift recipient
      </h1>

      <div className="m:w-96 md:w-2/3 lg:w-1/2 xl:w-1/2 mb-16 lg:px-24 mt-4">
        <form onSubmit={handleClick}>
          <div className="mb-5">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              Who are you buying for?
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 p-2 w-full focus:outline-none rounded-lg  text-[15px] text-[#202024] font-normal"
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-sm text-red-500 mt-2">{errors.username}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              How old are they?
            </label>
            <div className="flex items-center">
              <div className="w-24">
                <input
                  type="number"
                  id="old"
                  name="old"
                  className="border border-gray  p-2 w-full focus:outline-none rounded-lg  text-[15px] text-[#202024]font-norma"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm  ml-2 font-poppins">
                  years old
                </label>
              </div>
            </div>
            {errors.old && (
              <p className="text-sm text-red-500 mt-2">{errors.old}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              They indentify as :
            </label>
            <div className="flex items-center">
              <div className="group w-2/3 ">
                <button
                  type="button"
                  className="w-full flex items-center justify-center  focus:outline-none border border-gray px-4 py-2 rounded-lg	"
                >
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="form-radio "
                    onChange={handleRadioChange}
                  />
                  <label
                    for="female"
                    className="form-radio-label ml-2 font-poppins text-[15px]"
                  >
                    Female
                  </label>
                </button>
              </div>

              <div className="group w-2/3 mx-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-center focus:outline-none border border-gray px-4 py-2 rounded-lg	"
                >
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="form-radio"
                    onChange={handleRadioChange}
                  />
                  <label
                    for="male"
                    className="form-radio-label ml-2 font-poppins text-[15px]"
                  >
                    Male
                  </label>
                </button>
              </div>

              <div className="group w-2/3 ">
                <button
                  type="button"
                  className="w-full flex items-center justify-center focus:outline-none border border-gray px-4 py-2 rounded-lg	"
                >
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    className="form-radio"
                    onChange={handleRadioChange}
                  />
                  <label
                    for="other"
                    className="form-radio-label ml-2 font-poppins text-[15px]"
                  >
                    other
                  </label>
                </button>
              </div>
            </div>
            {errors.gender && (
              <p className="text-sm text-red-500 mt-2">{errors.gender}</p>
            )}
          </div>

          <div className="mb-6 mt-6">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              What do they like to do? Be specific!
            </label>
            <textarea
              id="message"
              name="messages"
              rows="3"
              className="border border-gray-300 p-2 w-full focus:outline-none rounded-lg  text-[15px] text-[#202024]font-normal	 "
              placeholder="Enter interests and hobbies"
              onChange={handleChange}
            ></textarea>
            {errors.messages && (
              <p className="text-sm text-red-500 mt-1">{errors.messages}</p>
            )}
          </div>

          <div className="flex gap-x-2">
            <button className="font-poppins bg-[#FAFBFD] text-[#0F7B9B] font-semibold py-2 px-4 border border-[#CAD3DD] rounded-lg w-1/2">
              Back
            </button>
            <button
              className="font-poppins bg-[#50BCD9] text-white font-semibold py-2 px-4 border rounded-lg w-1/2"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepFormOne;
