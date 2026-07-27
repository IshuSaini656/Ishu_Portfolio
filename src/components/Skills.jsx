import reactIcon from "../assets/skills_Icon/react-icon.svg"
import HtmlIcon from "../assets/skills_Icon/Html-icon.svg"
import CssIcon from "../assets/skills_Icon/css-icon.svg"
import JsIcon from "../assets/skills_Icon/javascript-icon.svg"
import TsICon from "../assets/skills_Icon/typescript-icon.svg"
import TalwindIcon from "../assets/skills_Icon/tailwindcss-icon.svg"
import BootstrapIcon from "../assets/skills_Icon/bootstrap-icon.svg"
import ReduxIcon from "../assets/skills_Icon/redux-icon.svg"
import NodeIcon from "../assets/skills_Icon/nodejs-icon.svg"
import ExpressIcon from "../assets/skills_Icon/express-icon.svg"
import MongodbIcon from "../assets/skills_Icon/mongodb-icon.svg"
import MongooseIcon from "../assets/skills_Icon/mongoose-icon.svg"
import CloudinaryIcon from "../assets/skills_Icon/cloudinary-icon.svg"
import C_Icon from "../assets/skills_Icon/c-icon.svg"
import CPlusPlusIcon from "../assets/skills_Icon/cplusplus-icon.svg";
import GitIcon from "../assets/skills_Icon/git-icon.svg"
import GithubIcon from "../assets/skills_Icon/github-icon.svg"
import PostmanIcon from "../assets/skills_Icon/postman-icon.svg"
import VercelIcon from "../assets/skills_Icon/vercel-icon.svg"
import RenderIcon from "../assets/skills_Icon/render-icon.svg"
import FigmaIcon from "../assets/skills_Icon/figma-icon.svg"

const skills = [
  { name: "React", logo: reactIcon },
  { name: "Node.js", logo: NodeIcon },
  { name: "Express.js", logo: ExpressIcon },
  { name: "MongoDB", logo: MongodbIcon },

  { name: "JavaScript", logo: JsIcon },
  { name: "TypeScript", logo: TsICon },
  { name: "HTML", logo: HtmlIcon },
  { name: "CSS", logo: CssIcon },

  { name: "Tailwind CSS", logo: TalwindIcon },
  { name: "Mongoose", logo: MongooseIcon },
  { name: "Bootstrap", logo: BootstrapIcon },
  { name: "Redux Toolkit", logo: ReduxIcon },

  { name: "Git", logo: GitIcon },
  { name: "GitHub", logo: GithubIcon },
  { name: "Postman", logo: PostmanIcon },

  { name: "Vercel", logo: VercelIcon },
  { name: "Cloudinary", logo: CloudinaryIcon },
  { name: "Render", logo: RenderIcon },

  { name: "Figma", logo: FigmaIcon },

  { name: "C Language", logo: C_Icon },
  { name: "C++", logo: CPlusPlusIcon },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-5 px-5">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-162.5 h-162.5 rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none" />

      <div className="relative max-w-screen md:mx-14">
        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Technologies I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
              group
              relative
              overflow-hidden
              h-28
              rounded-2xl
              border
              border-cyan-500/20
              bg-white/5
              backdrop-blur-xl
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              transition-all
              duration-300
              ease-out
              hover:-translate-y-2
              hover:border-cyan-400
              hover:bg-white/10
              hover:shadow-[0_0_35px_rgba(34,211,238,0.28)]
              "
            >
              {/* Shine Effect */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-linear-to-br
                from-cyan-400/10
                via-transparent
                to-cyan-300/5
                "
              />

              {/* Animated Top Border */}

              <div
                className="
                absolute
                top-0
                left-0
                h-0.5
                w-0
                bg-cyan-400
                transition-all
                duration-500
                group-hover:w-full
                "
              />

              {/* Logo */}
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="
                  relative
                  z-10
                  w-11
                  h-11
                  object-contain
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-3
                  "
                />
              ) : (
                <div
                  className="
                  relative
                  z-10
                  w-11
                  h-11
                  rounded-xl
                  border-2
                  border-dashed
                  border-cyan-500/40
                  bg-cyan-500/5
                  transition-all
                  duration-300
                  group-hover:border-cyan-400
                  "
                />
              )}

              {/* Skill Name */}

              <h3
                className="
                relative
                z-10
                mt-3
                text-sm
                font-medium
                text-gray-300
                transition-all
                duration-300
                group-hover:text-cyan-300
                "
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}