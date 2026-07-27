import { useState, useEffect } from "react";

import sams1 from "../assets/Projects/Samsung/sams1.png";
import sams2 from "../assets/Projects/Samsung/sams2.png";
import sams3 from "../assets/Projects/Samsung/sams3.png";
import sams4 from "../assets/Projects/Samsung/sams4.png";
import sams5 from "../assets/Projects/Samsung/sams5.png";
import crm1 from "../assets/Projects/CRM/crm1.png";
import crm2 from "../assets/Projects/CRM/crm2.png";
import crm3 from "../assets/Projects/CRM/crm3.png";
import crm4 from "../assets/Projects/CRM/crm4.png";
import crm5 from "../assets/Projects/CRM/crm5.png";
import crm6 from "../assets/Projects/CRM/crm6.png";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Star,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {toast} from "sonner"

const projects = [
  {
    featured: true,

    title: "Customer Relationship Management (CRM)",

    description:
      "Engineered a scalable MERN-based CRM platform with secure JWT authentication, role-based authorization, customer and lead management, dashboard analytics, RESTful APIs, Cloudinary-powered file uploads, and a responsive UI focused on performance and user experience.",

    images: [crm1, crm2, crm3, crm4, crm5, crm6],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
    ],

    features: [
      "JWT Authentication",
      "Role-Based Authorization",
      "Customer & Lead Management",
      "Dashboard Analytics",
      "File Upload (Cloudinary)",
      "RESTful API Integration",
      "Responsive UI",
      "Secure Backend",
      "OTP verification",
    ],

    github: "https://github.com/IshuSaini656/CRM-Project",

    live: "https://crm-project-sigma-smoky.vercel.app/",

    demo: {
      email: "demo@crm.com",
      password: "Demo@123",
    },
  },

  {
    featured: false,

    title: "Samsung Clone",
    description:
      "A responsive Samsung website clone built with React, Vanilla CSS, and JavaScript. The project focuses on pixel-perfect UI, reusable components, smooth interactions, and a clean user experience across different screen sizes.",

    images: [
      sams1,
      sams4,
      sams2,
      sams3,
      sams5
    ],

    tech: ["HTML", "Vanilla CSS", "JavaScript"],

    features: [
      "Pixel-Perfect UI",
      "Fully Responsive Design",
      "Reusable Components",
      "Modern Layout",
      "Smooth Navigation",
      "Optimized Performance",
    ],

    github: "https://github.com/IshuSaini656/samsungclone",

    live: "https://samsungcloneone.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 px-5">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-175 h-175 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-screen md:mx-16">
        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in building scalable,
            responsive and user-friendly web applications.
          </p>
        </div>

        {/* Project Cards */}

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [copied, setCopied] = useState("");

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard  = async (text) => {
    try {
      // Modern clipboard API
      await navigator.clipboard.writeText(text);
      toast.success("Copied successfully");
    } catch (error) {
      try {
        // Fallback method
        const textarea = document.createElement("textarea");
        textarea.value = text;

        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.top = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(textarea);

        toast.success("Copied successfully");
      } catch (err) {
        toast.error("Copy failed");
      }
    }
  };

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
      "
    >
      {/* Featured Badge */}

      {project.featured && (
        <div
          className="
          absolute
          right-5
          top-5
          z-20
          flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          text-cyan-300
          backdrop-blur-md
        "
        >
          <Star size={15} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Main Layout */}

      <div className="flex flex-col xl:flex-row">
        {/* ================= IMAGE ================= */}

        <div className="relative xl:w-[48%] h-68 sm:h-full md:h-112 my-auto overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
            }}
          >
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                alt={`${project.title} Screenshot ${index + 1}`}
                className="w-full h-full shrink-0 object-fit xl:object-contain"
              />
            ))}
          </div>

          {/* Previous */}

          <button
            onClick={prevSlide}
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-black/40
            p-2
            backdrop-blur-md
            transition
            hover:bg-cyan-500
          "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next */}

          <button
            onClick={nextSlide}
            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-black/40
            p-2
            backdrop-blur-md
            transition
            hover:bg-cyan-500
          "
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentImage === index ? "w-6 bg-cyan-400" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>

          <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

          {/* Tech Stack */}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-3
                py-1
                text-sm
                text-cyan-300
              "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-gray-300"
              >
                <Check size={16} className="text-cyan-400" />

                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {/* Live Demo */}

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-6
              py-3.5
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              "
            >
              Live Demo
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* GitHub */}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-cyan-500/20
              bg-white/5
              backdrop-blur-xl
              px-6
              py-3.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400
              hover:bg-cyan-500/10
              hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            >
              GitHub
              <FaGithub
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            </a>
          </div>
          {project.demo && (
            <div className="mt-4 rounded-xl border border-cyan-500/30 bg-slate-900/60 p-4">
              <h4 className="mb-3 font-semibold text-cyan-400">
                🔐 HR Demo Credentials
              </h4>

              <div className=" text-sm flex xl:gap-6 md:gap-4 lg:gap-0 flex-col md:flex-row  xl:flex-row">
                <div className="flex items-center gap-2">
                  <span className="min-w-19 md:min-w-14 text-gray-400">
                    Email:
                  </span>
                  <span className="font-mono text-white break-all">
                    {project.demo.email}
                  </span>
                  <button
                    onClick={() => copyToClipboard(project.demo.email)}
                    className=" p-2 transition hover:scale-110"
                  >
                    {copied === "Email" ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-cyan-400" />
                    )}
                  </button>
                </div>{" "}
                <div className="flex items-center gap-3">
                  <span className="min-w-20 text-gray-400">Password:</span>
                  <span className="font-mono text-white">
                    {project.demo.password}
                  </span>

                  <button
                    onClick={() => copyToClipboard(project.demo.password)}
                    className="p-2 transition hover:scale-110"
                  >
                    {copied === "Password" ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-cyan-400" />
                    )}
                  </button>
                </div>{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
