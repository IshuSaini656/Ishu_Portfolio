import { useState ,useRef , useEffect} from "react";
import { Mail, MessageCircle, Send, ArrowUpRight } from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

import { openLinkedIn , openWhatsApp } from "@/utils/social_expo";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import {toast} from "sonner"

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const captchaRef = useRef(null);

  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  setLoading(true)
   e.preventDefault();

   if (!captchaToken) {
     toast.error("Please verify the CAPTCHA.");
     return;
   }

   try {
     await emailjs.send(
       import.meta.env.VITE_EMAIL_SERVICE_ID,
       import.meta.env.VITE_EMAIL_TEMPLATE_ID,
       formData,
       import.meta.env.VITE_EMAIL_PUBLIC_KEY,
     );

     toast.success("Message sent successfully");
     
     setFormData({
       name: "",
       email: "",
       subject: "",
       message: "",
      });
      setCooldown(60);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
      captchaRef.current.reset();
      setCaptchaToken(null);
   }
 };
 useEffect(() => {
   if (cooldown <= 0) return;

   const timer = setInterval(() => {
     setCooldown((prev) => prev - 1);
   }, 1000);

   return () => clearInterval(timer);
 }, [cooldown]);

  return (
    <section
      id="contact"
      className="relative flex min-h-[90vh] items-center overflow-hidden px-5 py-14"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-130 w-130 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}

        <div className="mb-10 text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-1.5
              text-sm
              font-medium
              text-cyan-300
            "
          >
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Have a project in mind or want to discuss an opportunity? Feel free
            to send me a message or connect through WhatsApp and LinkedIn.
          </p>
        </div>

        {/* Layout */}

        <div className="grid items-stretch min-w-0 gap-6 lg:grid-cols-[1.7fr_1fr]">
          {/* ================= FORM ================= */}

          <div
            className="
            min-w-0
              rounded-3xl
              border
              border-cyan-500/20
              bg-[#0F172A]/70
              p-6
              `
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(34,211,238,0.05)]
            "
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Mail className="text-cyan-400" size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Email Me</h3>

                <p className="text-sm text-gray-400">
                  Fill out the form below.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-[#0B1220]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  "
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-[#0B1220]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  "
                  required
                />
              </div>{" "}
              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-[#0B1220]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  "
                  required
                />
              </div>
              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-[#0B1220]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-500
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  "
                  required
                />
              </div>
              {/* captcha */}
              <div className="flex justify-center md:justify-start overflow-hidden">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                  className="scale-[0.75] origin-center sm:scale-100"
                />
              </div>
              {/* Button */}
              <button
                type="submit"
                disabled={loading || cooldown > 0}
                className={`
    group flex h-14 w-full items-center justify-center gap-2 rounded-xl
    font-semibold transition-all duration-300
    ${
      loading
        ? "cursor-not-allowed bg-cyan-300 text-slate-700 opacity-70"
        : "bg-cyan-500 text-slate-900 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.30)]"
    }
  `}
              >
                {loading
                  ? "Sending..."
                  : cooldown > 0
                    ? `Send Again (${cooldown}s)`
                    : "Send Message"}

                <Send
                  size={18}
                  className={`transition-transform duration-300 ${
                    loading ? "animate-pulse" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            </form>
          </div>

          {/* ================= CONTACT CARDS ================= */}

          <div className="flex h-full flex-col gap-6">
            {" "}
            {/* ================= WHATSAPP ================= */}
            <a
              onClick={openWhatsApp}
              className="
                group
                flex
                flex-1
                flex-col
                justify-between
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#0F172A]/70
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <MessageCircle
                    size={30}
                    className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="mt-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                  Usually replies within a few hours
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  WhatsApp
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Quick replies for project discussions, freelance work and
                  collaborations.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="font-medium text-cyan-300">Chat Now</span>

                <ArrowUpRight
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </a>
            {/* ================= LINKEDIN ================= */}
            <a
              onClick={openLinkedIn}
              className="
                group
                flex
                flex-1
                flex-col
                justify-between
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#0F172A]/70
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <FaLinkedinIn
                    size={28}
                    className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="mt-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                  Open to Internship & Freelance
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  LinkedIn
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Let's connect professionally and explore career opportunities
                  together.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="font-medium text-cyan-300">View Profile</span>

                <ArrowUpRight
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
