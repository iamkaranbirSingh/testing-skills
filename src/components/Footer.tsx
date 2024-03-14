import React from "react";
import Logo from "./images/logo";
import FooterLogo from "./images/footerlogo";

const Footer = () => {
  return (
    <footer className="bg-[#22222A]">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <FooterLogo />
            </a>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white font-poppins">
              About GiftList
            </h2>
            <ul className="text-white font-normal">
              <li className="mb-4 ">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  How it works{" "}
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  About Us
                </a>
              </li>
              <li className="mb-4 ">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  Browser Extensions
                </a>
              </li>
              <li className="mb-4 ">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white font-poppins">
              Help
            </h2>
            <ul className="text-white font-normal">
              <li className="mb-4 ">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  Disclaimer
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  Privacy policy
                </a>
              </li>
              <li className="mb-4 ">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  Terms of Use
                </a>
              </li>
              <li className="mb-4 ">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-white font-poppins font-normal"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col">
              <button className="font-poppins bg-[#FAFBFD] text-[#21201F] font-semibold py-2 px-4 border border-[#CAD3DD] rounded-lg w-1/2 mb-4">
                Login
              </button>
              <button className="font-poppins bg-[#50BCD9] text-white font-semibold py-2 px-4  rounded-lg w-1/2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
