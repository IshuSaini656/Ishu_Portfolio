import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import handleResumeDownload from "@/utils/Resum_down";
import RippleButton from "./ui/ripple-button";
import { openWhatsApp } from "@/utils/social_expo";
import { openLinkedIn } from "@/utils/social_expo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#08111F]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-14 md:px-8 md:py-16">
        {/* Badge */}

        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
          Let's Connect
        </span>

        {/* Heading */}

        <h2 className="mt-5 max-w-3xl text-center text-2xl font-bold leading-tight text-white md:text-4xl">
          Let's Build <span className="text-cyan-400">Something Amazing</span>{" "}
          Together
        </h2>

        {/* Description */}

        <p className="mt-4 max-w-xl text-center text-sm leading-7 text-gray-400 md:text-base">
          Ready to turn your ideas into reality? Let's create modern, scalable
          and user-friendly web experiences together.
        </p>

        {/* Resume Button */}

        <RippleButton
          onClick={handleResumeDownload}
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-2.5
            rounded-xl
            border
            border-cyan-500/20
            bg-cyan-500
            px-6
            py-6
            text-sm
            font-semibold
            text-slate-900
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
          "
        >
          <IoDownloadOutline
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          Download Resume
        </RippleButton>

        {/* Divider */}

        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-cyan-500/15 to-transparent" />

        {/* Social Icons */}

        <div className="flex items-center justify-center gap-4">
          {" "}
          {/* GitHub */}
          <a
            href="https://github.com/IshuSaini656"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-500/20
              bg-[#0F172A]/70
              text-gray-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/30
              hover:text-white
              hover:shadow-[0_0_20px_rgba(255,255,255,0.10)]
            "
          >
            <FaGithub
              size={20}
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
          </a>
          {/* LinkedIn */}
          <a
            onClick={openLinkedIn}
            aria-label="LinkedIn"
            className="
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-500/20
              bg-[#0F172A]/70
              text-gray-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#0A66C2]/40
              hover:text-[#0A66C2]
              hover:shadow-[0_0_20px_rgba(10,102,194,0.20)]
            "
          >
            <FaLinkedinIn
              size={18}
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
          </a>
          {/* WhatsApp */}
          <a
            onClick={openWhatsApp}
            aria-label="WhatsApp"
            className="
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-500/20
              bg-[#0F172A]/70
              text-gray-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#25D366]/40
              hover:text-[#25D366]
              hover:shadow-[0_0_20px_rgba(37,211,102,0.20)]
            "
          >
            <FaWhatsapp
              size={20}
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
          </a>
        </div>

        {/* Bottom Divider */}

        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-cyan-500/15 to-transparent" />

        {/* Footer Bottom */}

        <div className="flex flex-col items-center gap-2 text-center">
          {" "}
          <p className="text-xs font-medium tracking-wide text-gray-600">
            Portfolio v1.0
          </p>
          <p className="text-center text-[11px] leading-6 text-gray-500">
            Built with{" "}
            <span className="font-medium text-cyan-300">
              React • Vite • Tailwind CSS • AI Tools
            </span>
          </p>
          <p className="mt-2 text-xs text-gray-400">
            © 2026 <span className="font-semibold text-white">ISHU SAINI</span>
          </p>
          <p className="text-xs text-gray-500">
            Designed &amp; Developed by{" "}
            <span className="font-medium text-cyan-300">ISHU SAINI</span>
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gray-600">
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}