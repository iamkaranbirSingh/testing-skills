import React, { useState } from "react";
import GiftImg from "./images/gift-2.png";
import ButtonIcon from "./images/buttonicon";
import { useNavigate } from "react-router-dom";

interface StepTwoProps {
  prevStep: () => void;
}

const StepFormTwo: React.FC<StepTwoProps> = ({ prevStep }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    occasion: "",
    maxType: "",
    maxNumber: "",
    gift: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    occasion: "",
    maxType: "",
    maxNumber: "",
    gift: "",
    country: "",
  });

  const validation = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!data.occasion) {
      newErrors.occasion = "Please enter an occasion.";
      isValid = false;
    } else {
      newErrors.occasion = "";
    }

    if (!data.maxType) {
      newErrors.maxType = "Please enter a willing value.";
      isValid = false;
    } else {
      newErrors.maxType = "";
    }

    if (!data.maxNumber) {
      newErrors.maxNumber = "Please enter a willing value.";
      isValid = false;
    } else {
      newErrors.maxNumber = "";
    }

    if (!data.gift || data.gift === "Choose a Gift") {
      newErrors.gift = "Please select a Gift.";
      isValid = false;
    } else {
      newErrors.gift = "";
    }

    if (!data.country || data.country === "Choose a country") {
      newErrors.country = "Please select a country.";
      isValid = false;
    } else {
      newErrors.country = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validation()) {
      navigate("/home");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSelectGiftChange = (e: React.FormEvent<HTMLInputElement>) => {
    setData({ ...data, gift: e.target.value });
    setErrors({ ...errors, gift: "" });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, country: e.target.value });
    setErrors({ ...errors, country: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={GiftImg} alt="gift-img" />
      <h1 className="text-4xl font-semibold leading-[54px] text-[#101A34] font-poppins my-6 lg:px-0 xl:px-0 px-8">
        Help us find the right gift!
      </h1>

      <div className="m:w-96 md:w-2/3 lg:w-1/2 xl:w-1/2 mb-16 px-8 lg:px-24 xl:px-24 mt-4">
        <form onSubmit={handleClick}>
          <div className="mb-5">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              What's the occasion?
            </label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              className="border border-gray-300 p-2 w-full focus:outline-none rounded-lg  text-[15px] text-[#202024] font-normal"
              onChange={handleChange}
            />
            {errors.occasion && (
              <p className="text-sm text-red-500 mt-2">{errors.occasion}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              What type of a gift would you like?
            </label>
            <select
              id="gifts"
              onChange={handleSelectGiftChange}
              value={data.gift}
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Choose a Gift</option>
              <option value="US">Thoughtful</option>
              <option value="CA">Practical</option>
              <option value="FR">Funny</option>
              <option value="DE">Romantic</option>
              <option value="FR">Sentimental</option>
              <option value="DE">Entertaining</option>
            </select>

            {errors.gift && (
              <p className="text-sm text-red-500 mt-2">{errors.gift}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              What’s the maximum you’re willing to spend?
            </label>
            <div className="flex items-center gap-x-2">
              <div className="w-24">
                <input
                  type="string"
                  id="number"
                  name="maxType"
                  className="border border-gray  p-2 w-full focus:outline-none rounded-lg  text-[15px] text-[#202024] font-normal"
                  onChange={handleChange}
                />
              </div>
              <div className="w-24">
                <input
                  type="string"
                  id="number"
                  name="maxNumber"
                  className="border border-gray  p-2 w-full focus:outline-none rounded-lg  text-[15px] text-[#202024] font-normal"
                  onChange={handleChange}
                />
              </div>
            </div>
            {(errors.maxType || errors.maxNumber) && (
              <p className="text-sm text-red-500 mt-2">
                Please add the maximum willing
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="block leading-[18px] font-semibold text-[#101A34] text-[15px] mb-2 font-poppins">
              What country should we return the results for?
            </label>
            <select
              id="countries"
              onChange={handleSelectChange}
              value={data.country}
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {errors.country && (
              <p className="text-sm text-red-500 mt-2">{errors.country}</p>
            )}
          </div>

          <div className="flex gap-x-2 mt-8">
            <button
              className="font-poppins bg-[#FAFBFD] text-[#0F7B9B] font-semibold py-2 px-4 border border-[#CAD3DD] rounded-lg w-1/2"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              className="w-1/2 gap-x-2 justify-center  bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] font-poppins rounded-lg text-white text-sm px-[12px] py-[4px] text-center inline-flex items-center text-[15px] font-semibold leading-[33px]"
              type="submit"
            >
              <ButtonIcon />
              Generate Gift Ideas
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepFormTwo;
