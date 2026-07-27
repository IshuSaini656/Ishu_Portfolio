import certificateImg from "../assets/certificates/full_stack.jpg";

const certificates = [
  {
    id: 1,
    title: "MERN Full Stack Training Program",

    description:
      "Successfully completed a comprehensive 6-month MERN Full Stack Web Development Training Program from Brillica Services, Dehradun, gaining practical experience in building modern, responsive, and full-stack web applications.",

    image: certificateImg,
  },

  // Future Certificates
  // {
  //   id: 2,
  //   title: "Next.js Development",
  //   description: "...",
  //   image: nextCertificate,
  // },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden px-5 py-5">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative md:mx-16 max-w-screen">
        {/* Section Heading */}

        <div className="mb-14 text-center">

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            My <span className="text-cyan-400">Certificates</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Professional certifications that reflect my learning journey,
            technical knowledge, and continuous growth in full stack web
            development.
          </p>
        </div>

        {/* Certificate Cards */}

        <div className="space-y-10">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
function CertificateCard({ certificate }) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]
    "
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-transparent to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col lg:flex-row items-center gap-8 p-5 lg:p-8">
        {/* Left */}

        <div className="flex-1">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Course Completion
          </span>

          <h3 className="mt-5 text-3xl font-bold text-white leading-tight">
            {certificate.title}
          </h3>

          <p className="mt-5 leading-8 text-gray-400">
            {certificate.description}
          </p>
        </div>

        {/* Right */}

        <div className="w-full lg:w-[45%]">
          <div
            className="
            overflow-hidden
            rounded-2xl
            border
            border-cyan-500/20
            bg-[#0B1220]
            p-2
            transition-all
            duration-500
            group-hover:border-cyan-400/50
            group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
          "
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="
              w-full
              rounded-xl
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
}