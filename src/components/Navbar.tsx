import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./images/logo";
import Avtar from "./images/avtar.png";
import ButtonIcon from "./images/buttonicon";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#F9F9F9] border border-solid border-gray-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <button
            type="button"
            className=" gap-x-2 bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] font-poppins rounded-lg text-white text-sm px-[12px] py-[4px] text-center inline-flex items-center text-[15px] font-semibold leading-[33px]"
          >
            <ButtonIcon />
            AI Gift Ideas
          </button>

          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins"
          >
            List
          </a>
          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins"
          >
            Gift Exchange
          </a>
          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins"
          >
            Occasions
          </a>
          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins"
          >
            Ecards
          </a>
          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins"
          >
            FAQ
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center	">
          <a
            href="#"
            className="text-[15px] font-semibold leading-[20px] text-[#101A34] font-poppins mr-2"
          >
            Jane Smith
          </a>
          <img src={Avtar} className="" alt="" />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Lists
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Gift Exchange
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Occasions
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Ecards
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
