import React from "react";
import Linear from "./images/linear";
import ProductCard from "./ProductCard";

const HomeHero = () => {
  return (
    <div className="mx-auto max-w-7xl  py-20 px-8">
      <h1 className="mb-4 text-3xl text-semibold font-poppins text-[#101A34] ">
        <span className="bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] font-semibold inline-block text-transparent bg-clip-text mr-2">
          Genie:
        </span>
        AI Gift Ideas
      </h1>

      <div className="flex my-5 border border-gray px-6 py-4 rounded-lg">
        <div>
          <h1 className="font-poppins font-normal text-2xl text-[#5E6577]">
            Recommend birthday gift ideas for my 55 year old mother. She likes
            pickleball.
          </h1>
        </div>
      </div>
      <div>
        <h1 className="font-poppins  text-sm text-[#5E6577]">
          Not liking these suggestion? Try again with more details or
          <span className="cursor-pointer text-[#50BCD9]">
            {" "}
            get help from Genie.
          </span>
        </h1>
      </div>
      <div className="my-16 mx-12">
        <div className="border-t-[1px] border-grey-300" />
      </div>

      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default HomeHero;
