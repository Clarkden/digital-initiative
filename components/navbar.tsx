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
    <nav className="h-fit w-11/12 md:w-8/12 lg:w-8/12 mx-auto flex flex-row justify-between py-7 relative font-outfit">
      <a
        href="/"
        className="text-[#1D2023]"
      >
        <img src="./images/digital_initiative_logo_cropped.PNG" className="h-12 md:h-20"></img>
      </a>
      <div className="w-fit h-full">
        <ul className="md:flex flex-row gap-6 items-center text-white hidden">
          <li>
            <a
              href="#about"
              className="transition md:text-base lg:text-lg text-black hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className=" transition md:text-base lg:text-lg text-black hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="px-2 py-2 bg-white text-black hover:bg-[#4d22f4] hover:text-white rounded-md outline-none md:text-base lg:text-lg font-light transition">
              Contact
            </a>
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
        <div className={`${mobileMenu} transition-height duration-500 overflow-hidden absolute right-0 top-16 bg-white z-50 px-5 rounded-lg md:hidden lg:hidde`}>
          <ul className="flex flex-col gap-6 items-center text-[#1D2023] h-full justify-center">
            <li>
              <a
                href="#about"
                className="hover:text-pink-500 transition text-sm md:text-base lg:text-lg "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition text-sm md:text-base lg:text-lg "
              >
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="px-2 py-2 hover:bg-black hover:text-white bg-[#4d22f4] text-white rounded-md outline-none md:text-base lg:text-lg font-light transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
