import React, { useState } from "react";
import ISHU from "../assets/images/ishu1.jpg";
import { RiMenu3Line } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import MagneticButton from "./ui/magnetic-button";
import RippleButton from "./ui/ripple-button";

import { handleHireMe } from "@/utils/social_expo";

import { Link } from "react-scroll";

import { openLinkedIn, openWhatsApp, openEmail } from "@/utils/social_expo";


function Navbar() {
  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
  ];
  const [isShow, setIsShow] = useState(false);
  const [activeState, setActiveState] = useState("Home");

  return (
    <nav
      className="
    fixed z-50 top-1 left-1/2 -translate-x-1/2
    h-16 w-[95%]
    flex items-center justify-between px-6
    md:px-4 lg-px-10 

    bg-[#111418]/70
    backdrop-blur-xl
     border-cyan-400/20

    shadow-[0_8px_32px_rgba(0,0,0,0.35)]
    supports-backdrop-filter:bg-[#111418]/55

    border
    transition-all duration-300
    rounded-4xl 
  "
    >
      {/* logo  */}
      <span className="flex gap-2 pt-1">
        ISHU{" "}
        <p className="font-bold bg-linear-to-r from-[#19b2f9] via-[#3ce0fd] to-[#22D3EE] bg-clip-text text-transparent  drop-shadow-[0_0_12px_rgba(79,209,232,0.6)]">
          SAINI
        </p>
      </span>
      {/* Dekstop Menu */}
      <ul className="hidden md:flex items-center md:gap-2 lg:gap-[3vw]">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`transition-all duration-300 ${
              activeState === item
                ? "text-[#27D3F2] font-medium drop-shadow-[0_0_10px_rgba(39,211,242,0.9)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Link
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => setActiveState(item)}
              className="cursor-pointer transition-all duration-300 hover:text-white hover:scale-110"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      {/* Right side */}
      <div className="hidden md:flex gap-4 ">
        {/* Resume Button */}
        <MagneticButton
          onClick={() => window.open("../../public/ishu_resume.pdf", "_blank")}
          className="px-6 py-2.5 rounded-xl bg-[#131825]  text-white font-medium

    border border-purple-500/30

    shadow-[0_6px_20px_rgba(168,85,247,0.18)]

    transition-all
    duration-200

    hover:bg-[#1E293B]
    hover:border-purple-400
    hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]
    hover:-translate-y-0.5

    active:translate-y-0.75
    active:scale-[0.90]
    active:bg-[#0A0F1C]
    active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.7),0_0_8px_rgba(168,85,247,0.2)]
  "
        >
          Resume
        </MagneticButton>
        <RippleButton
          onClick={handleHireMe}
          className="
    relative
    overflow-hidden

    py-2.5

    rounded-xl

    bg-white/80
    backdrop-blur-2xl

    border
    border-white

    text-slate-900
    font-semibold

    shadow-[0_8px_30px_rgba(255,255,255,.15),0_4px_12px_rgba(0,0,0,.12)]

    transition-all
    duration-300

    hover:bg-white
    hover:shadow-[0_12px_40px_rgba(255,255,255,.25),0_8px_20px_rgba(0,0,0,.15)]

    active:translate-y-0.5
  "
        >
          Hire Me
        </RippleButton>
      </div>
      {/* Mobile Menu */}
      <button className="md:hidden " onClick={() => setIsShow(true)}>
        {!isShow && <RiMenu3Line size={28} />}
      </button>
      {
        <div
          className={`md:hidden absolute -left-4 -top-2 bg-[#0b121b] w-screen h-[101vh] transition-transform duration-500 ease-in-out
          ${isShow ? "translate-x-0" : "translate-x-[110%] "}
          `}
        >
          <div className="flex justify-end items-center pr-8 h-17">
            <button
              onClick={() => setIsShow(false)}
              className="
                  h-8 w-8 rounded-2xl bg-linear-to-br from-[#1B2433] to-[#0D1117] border border-[#2E3440]
                  transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,.25)]"
            >
              <RxCross2 size={20} className="mx-auto text-gray-300" />
            </button>
          </div>
          <div>
            <div className="flex items-center justify-between px-10 h-[15vh]">
              <span className="flex gap-2 w-[50%]">
                <span className="bg-linear-to-l from-violet-600 to-gray-700 h-0.5 w-[20%] mt-4 "></span>
                <div className="flex flex-col ">
                  <span className=" text-2xl font-bold tracking-widest flex gap-2">
                    ISHU{" "}
                    <p className="font-bold bg-linear-to-r from-[#19b2f9] via-[#3ce0fd] to-[#22D3EE] bg-clip-text text-transparent  drop-shadow-[0_0_12px_rgba(79,209,232,0.6)]">
                      SAINI
                    </p>
                  </span>
                  <span className="text-slate-300 text-nowrap font-light text-sm  ">
                    AI Full Stack Developer
                  </span>
                </div>
              </span>
              <span className="w-[17vw] h-[17vw] max-w-20 max-h-20 border-3 border-[#27D3F2] shadow-[0_0_10px_rgba(39,211,242,0.80),0_0_70px_rgba(39,211,242,0.70)] rounded-full  overflow-hidden">
                <img src={ISHU} alt="profileImg" />
              </span>
            </div>
            <div className="border-y border-gray-700 overflow-hidden py-3">
              <div className="marquee whitespace-nowrap text-gray-500 tracking-wider [word-spacing:15px]">
                <span>
                  REACT • TYPESCRIPT • AI • NODE • EXPRESS • JAVA • HTML • CSS •
                  NEXT.JS • C • DSA • JAVASCRIPT • MONGOOSE • FIGMA •
                </span>

                <span aria-hidden="true">
                  REACT • TYPESCRIPT • AI • NODE • EXPRESS • JAVA • HTML • CSS •
                  NEXT.JS • C • DSA • JAVASCRIPT • MONGOOSE • FIGMA •
                </span>
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-5 text-gray-400 items-center pt-10 pb-8 
          text-2xl h-[50vh]">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`transition-all duration-300 ${
                  activeState === item
                    ? "text-[#27D3F2] font-medium drop-shadow-[0_0_10px_rgba(39,211,242,0.9)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-90}
                  onSetActive={() => setActiveState(item)}
                  onClick={() => setIsShow(false)}
                  className="
          relative cursor-pointer
          transition-all duration-300
          hover:scale-110
          active:scale-90
          hover:text-white
        "
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex  pt-12 gap-6 text-gray-300 items-center justify-center">
            <li className="bg-linear-to-l from-pink-500 to-gray-900 h-0.5 w-[32vw]"></li>
            <li>
              <FaLinkedinIn
                onClick={openLinkedIn}
                size={26}
                className="cursor-pointer transition-all duration-300 hover:text-blue-700 active:text-blue-700 hover:scale-120 active:scale-80"
              />
            </li>
            <li>
              <FaWhatsapp
                onClick={openWhatsApp}
                size={26}
                className="cursor-pointer transition-all duration-300  hover:text-green-600 active:text-green-600 hover:scale-120 active:scale-80"
              />
            </li>
            <li>
              <BiLogoGmail
                onClick={openEmail}
                size={26}
                className="cursor-pointer text-white hover:text-red-600 transition-all duration-300 active:text-red-600 hover:scale-120 active:scale-80"
              />
            </li>
            <li className="bg-linear-to-r from-pink-700 to-gray-900 h-0.5 w-[32vw] "></li>
          </ul>
        </div>
      }
    </nav>
  );
}

export default Navbar;
