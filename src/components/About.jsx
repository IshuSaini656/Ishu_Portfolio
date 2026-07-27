import {
  Code2,
  Database,
  Server,
  Rocket,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Layers3,
} from "lucide-react";

const timeline = [
  {
    title: "Frontend Development",
    icon: Code2,
  },
  {
    title: "Backend Development",
    icon: Server,
  },
  {
    title: "Database",
    icon: Database,
  },
  {
    title: "Deployment",
    icon: Rocket,
  },
];

const stats = [
  {
    icon: FolderGit2,
    value: "4+",
    label: "Projects",
  },
  {
    icon: Briefcase,
    value: "Fresher",
    label: "",
  },
  {
    icon: GraduationCap,
    value: "MCA",
    label: "Student",
  },
  {
    icon: Layers3,
    value: "MERN",
    label: "Stack",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 mx-4 md:mx-12 md:py-16 max-w-screen">
      <div>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm">Get to know me better</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-14">
          {/* Timeline */}
          <div className="order-2 md:order-1 md:w-1/3 flex justify-center items-center md:border-r md:border-cyan-500/10 ">
            <div className="relative pl-8 w-fit">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400 via-cyan-500 to-transparent" />

              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="relative mb-12 group">
                    <div className="absolute -left-6 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-[#08131f] shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
                      <Icon size={18} className="text-cyan-400" />
                    </div>

                    <div className="pl-10 py-2 transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 md:w-2/3 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white mb-5">
                AI Full Stack Developer
              </h3>

              <p className="text-gray-300 leading-8 text-[15px] max-w-3xl">
                I'm an MCA student specializing in Full Stack Web Development.
                With a strong foundation in the
                <span className="text-cyan-400 font-medium"> MERN Stack</span>,
                I build modern, responsive, and scalable web applications while
                focusing on clean architecture, performance, and user
                experience.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all">
                      <Icon size={18} className="text-cyan-400" />
                    </div>

                    <h4 className="text-white text-xl font-bold mt-3">
                      {item.value}
                    </h4>

                    <p className="text-gray-400 text-xs mt-1">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}