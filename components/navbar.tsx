import { faBars, faClose, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, useState } from "react";

const Navbar: FunctionComponent = () => {
  const [mobileMenu, setMobileMenu] = useState<string>(
    "h-0 pointer-events-none"
  );
  const [icon, setIcon] = useState<any>(faBars)

  const active = () => {
    setMobileMenu("h-0 pointer-events-none"); setIcon(faBars)
  }
  const disabled = () => {
    setMobileMenu('h-40'); setIcon(faXmark)
}


  return (
    <nav className="h-fit w-11/12 md:w-8/12 lg:w-8/12 mx-auto flex flex-row justify-between py-7 relative">
      <a
        href="/"
        className="text-[#1D2023] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold"
      >
        Digital Initiative
      </a>
      <div className="w-fit h-full">
        <ul className="md:flex flex-row gap-6 items-center text-[#1D2023] hidden">
          <li>
            <a
              href="#"
              className="hover:text-white transition md:text-base lg:text-lg "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition md:text-base lg:text-lg "
            >
              Services
            </a>
          </li>
          <li>
            <button className="px-3 py-1 bg-[#1D2023] text-white rounded-md outline-none md:text-base lg:text-lg font-light hover:bg-white hover:text-[#1D2023] transition">
              Contact
            </button>
          </li>
        </ul>
        <div className="w-fit block md:hidden lg:hidden">
          <FontAwesomeIcon
            icon={icon}
            className="md:text-lg cursor-pointer transition-all text-black"
            onClick={() => 
              mobileMenu === "h-40"
                ? active()
                : disabled()
            }
          />
        </div>
        <div className={`${mobileMenu} transition-height duration-500 overflow-hidden absolute right-0 top-16 bg-white dark:bg-neutral-800 z-50 px-5 rounded-lg md:hidden lg:hidde`}>
          <ul className="flex flex-col gap-6 items-center text-[#1D2023] dark:text-white h-full justify-center">
            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition text-sm md:text-base lg:text-lg "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-red-500 transition text-sm md:text-base lg:text-lg "
              >
                Services
              </a>
            </li>
            <li>
              <button className="px-3 py-1 bg-[#1D2023] dark:bg-white text-white dark:text-[#1D2023] rounded-sm outline-none text-sm md:text-base lg:text-lg font-light hover:bg-orange-400  transition">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
