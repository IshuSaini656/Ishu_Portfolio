import RippleButton from "./ui/ripple-button";
import heroBg from "../assets/images/heroImg.png";

import { BriefcaseBusiness, Download } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import handleResumeDownload from "@/utils/Resum_down";

import {
  openLinkedIn,
  openWhatsApp,
  openEmail,
  handleHireMe,
} from "@/utils/social_expo";

function Home() {
  return (
    <section
      id="home"
      className="relative pt-21 md:pt-36 grid md:grid-cols-2 items-center overflow-hidden md:mx-4"
    >
      {/* background */}
      <div
        className="md:order-2 mx-2 relative  md:absolute
    md:right-0
    md:top-22

    md:w-[58%]
    md:h-[calc(100%-5.5rem)]"
      >
        <img
          src={heroBg}
          alt=""
          className="
    w-full
    h-full

    object-cover
    object-center
  "
        />
        <div
          className="
    absolute
    left-0
    top-0

    w-28
    h-full

    bg-linear-to-r
    from-[#020617]
    via-[#020617]/70
    to-transparent
  "
        />
        <div
          className="
    absolute
    bottom-0

    w-full
    h-28

    bg-linear-to-t
    from-[#020617]
    to-transparent
  "
        />

        <div className=" absolute right-2 top-4 sm:right-3 sm:top-6 md:right-4 md:top-8 lg:right-6 lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-center ">
          <span className=" text-[10px] tracking-[5px] font-semibold uppercase bg-linear-to-b from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent [writing-mode:vertical-rl] rotate-180 ">
            {" "}
            CONNECT{" "}
          </span>
          <div className="w-px h-10 bg-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,.8)] my-3"></div>
          <div className="flex flex-col gap-3">
            {/* Linkedin */}
            <a
              onClick={openLinkedIn}
              className=" group w-9 h-9 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md flex items-center justify-center text-blue-400 transition-all duration-300 hover:scale-110 hover:translate-x-1 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-[0_0_18px_rgba(59,130,246,.8)] "
            >
              <FaLinkedinIn
                size={15}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            </a>
            {/* WhatsApp */}
            <a
              onClick={openWhatsApp}
              className=" group w-9 h-9 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md flex items-center justify-center text-green-400 transition-all duration-300 hover:scale-110 hover:translate-x-1 hover:border-green-400 hover:bg-green-500/20 hover:text-green-300 hover:shadow-[0_0_18px_rgba(34,197,94,.8)] "
            >
              <FaWhatsapp
                size={15}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            </a>
            {/* Gmail */}
            <a
              onClick={openEmail}
              className=" group w-9 h-9 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:translate-x-1 hover:bg-red-500/20 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,.8)] "
            >
              <BiLogoGmail
                size={18}
                className=" text-red-400 transition-all duration-300 group-hover:text-red-300 group-hover:rotate-12 group-hover:scale-110 "
              />
            </a>
          </div>
        </div>
      </div>

      {/* text */}
      <div className="px-4 md:pl-8 py-8 md:order-1">
        <h3 className=" text-cyan-400 text-4xl font-bold md:text-5xl">
          Hello.
        </h3>
        <div className=" flex items-center lg:justify-start gap-3 mt-2">
          {" "}
          <div className="w-20 h-px rounded-full bg-linear-to-r from-transparent to-cyan-400 " />
          <p className="text-zinc-300 text-[15px] md:text-[20px]">
            {" "}
            I'm <span className="text-white font-medium">Ishu Saini</span>
          </p>
        </div>
        {/* Heading */}{" "}
        <h1 className=" mt-6 text-white font-extrabold leading-tight text-4xl  lg:text-5xl ">
          {" "}
          MERN Full Stack <br /> Developer{" "}
        </h1>
        {/* Description */}{" "}
        <p className=" mt-3 max-w-xl text-zinc-400 leading-8 text-base sm:text-lg md:relative md:z-10">
          {" "}
          I build fast, scalable and modern web applications using the MERN
          Stack, TypeScript and Next.js.{" "}
        </p>
        {/* Buttons */}
        <div className=" mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
          {/* Hire Me */}
          <RippleButton
            onClick={handleHireMe}
            className="
                group
                relative

                w-full
                sm:w-[49%]

                h-14
                rounded-xl

                bg-linear-to-r
                from-cyan-400
                via-cyan-500
                to-blue-600

                text-[#05080D]
                font-semibold
                text-lg
                md:text-sm
                lg:text-lg

                shadow-[0_0_20px_rgba(34,211,238,0.45)]
                hover:shadow-[0_0_40px_rgba(34,211,238,0.75)]

                hover:scale-[1.03]

                transition-all
                duration-300

                overflow-hidden
              "
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full skew-x-12 transition-transform duration-700"></span>

            <span className="relative flex items-center justify-center gap-2">
              <BriefcaseBusiness size={20} />
              Hire Me
            </span>
          </RippleButton>

          {/* Resume */}
          <RippleButton
            onClick={handleResumeDownload}
            className="
                group

                w-full
                sm:w-[49%]

                h-14
                rounded-xl

                bg-white/5
                backdrop-blur-md

                border
                border-cyan-400/40

                text-cyan-300
                font-semibold
                text-lg
                md:text-sm
                lg:text-lg


                shadow-[0_0_12px_rgba(34,211,238,0.18)]

                hover:bg-cyan-400/10
                hover:border-cyan-300
                hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]

                hover:scale-[1.02]

                transition-all
                duration-300
              "
          >
            <span className="flex items-center justify-center gap-2">
              <Download
                size={20}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
              Download Resume
            </span>
          </RippleButton>
        </div>
      </div>
    </section>
  );
}

export default Home;

 

