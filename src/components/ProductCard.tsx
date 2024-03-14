import React from "react";
import EarBuds from "./images/earbuds.png";
import FlowerImg from "./images/flower.png";
import Ticket from "./images/Ticket.png";
import Guttar from "./images/guttar.png";
import Shoee from "./images/shoee.png";

interface IProps {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  Img: string;
  descripition: string;
}

interface DataProps {
  id: string;
  title: string;
}

const ProductDetails: IProps[] = [
  {
    id: "1",
    title: "1000 and 1 flowers",
    subtitle: "Beautiful bouquet",
    price: "530",
    Img: EarBuds,
    descripition: "$100-$600",
  },
  {
    id: "2",
    title: "1000 and 1 flowers",
    subtitle: "Beautiful bouquet",
    price: "530",
    Img: FlowerImg,
    descripition: "$100-$600",
  },
  {
    id: "3",
    title: "1000 and 1 flowers",
    subtitle: "Beautiful bouquet",
    price: "530",
    Img: Ticket,
    descripition: "$100-$600",
  },
  {
    id: "4",
    title: "1000 and 1 flowers",
    subtitle: "Beautiful bouquet",
    price: "530",
    Img: Guttar,
    descripition: "$100-$600",
  },
  {
    id: "5",
    title: "1000 and 1 flowers",
    subtitle: "Beautiful bouquet",
    price: "530",
    Img: Shoee,
    descripition: "$100-$600",
  },
];

const DataItems: DataProps[] = [
  {
    id: "1",
    title: "1.Beauty gift basket",
  },
  {
    id: "2",
    title: "2.Title here",
  },
  {
    id: "3",
    title: "3.Title here",
  },
  {
    id: "4",
    title: "4.Title here",
  },
];

const ProductCard = () => {
  return (
    <>
      {DataItems.map((item: DataProps) => {
        return (
          <>
            <div className="flex justify-between mt-12 items-center mb-8 ">
              <h1 className="text-3xl font-semibold font-poppins ">
                {item.title}
              </h1>
              <h1 className="text-[#50BCD9] text-sm font-poppins cursor-pointer">
                See More
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
              {ProductDetails.map((item: IProps) => {
                return (
                  <div
                    className="border border-gray-200 rounded-lg"
                    key={item.id}
                  >
                    <a href="#">
                      <img
                        className="rounded-t-lg mx-auto mt-2"
                        src={item.Img}
                        alt=""
                      />
                    </a>
                    <div className="bg-[#FAFBFD] border border-solid border-gray-300">
                      <div className="py-5 px-4">
                        <a href="#">
                          <h5 className="mb-2 text-[11px] font-semibold text-[#0F7B9B] font-poppins">
                            {item.title}
                          </h5>
                        </a>
                        <p className="mb-8 text-[16px] text-[#101A34] font-semibold font-poppins ">
                          {item.subtitle}
                        </p>

                        <>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 text-yellow-300 ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300 ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300 ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300 ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>

                          <div className="my-2 w-12 text-center bg-[#F5F7FA] font-semibold text-[#101A34] border border-grey-300  rounded-md">
                            ${item.price}
                          </div>

                          <p className="mb-3 text-[12px] text-[#101A34] font-normal font-poppins mt-4">
                            Typical range: {item.descripition}
                          </p>
                        </>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProductCard;
