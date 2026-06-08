import React, { useEffect, memo, useMemo } from "react";
import {
  FileText,
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Briefcase,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import profil from "../assets/profil-ecamp.png";
import { dummyProjects } from "../components/Project";

// Header
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

// Profile Image (statis)
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative" data-aos="fade-up" data-aos-duration="1000">
      <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg">
        <img
          src="/profil-ecamp.png" // langsung dari JSX, statis
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
));

// StatCard
const StatCard = memo(
  ({ icon: Icon, color, value, label, description, animation }) => (
    <div
      data-aos={animation}
      data-aos-duration={1300}
      className="relative group"
    >
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
        <div
          className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
        ></div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="text-4xl font-bold text-white">{value}</span>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">{description}</p>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
  ),
);

// AboutPage
const AboutPage = () => {
  const statsData = [
    {
      icon: Code,
      color: "from-[#10B981] to-[#06B6D4]",
      value: dummyProjects.length,
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#06B6D4] to-[#10B981]",
      value: 0, // <- langsung angka statis
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#10B981] to-[#06B6D4]",
      value: 1,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ];

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
            >
              <span className="text-transparent mt-10 bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200">Gilar Sumilar</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0">
              My name is Gilar Sumilar, a 2021 graduate of SMK Mitra Industri
              MM2100 majoring in Industrial Electronics. I have one year of work
              experience in production at PT Nippon Indosari Corpindo and an
              internship as a technician at PT Kyokuni. I am currently studying
              Informatics Engineering at Pelita Bangsa University.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a
                href="https://drive.google.com/file/d/1rC7B8zQvbv5qocGljyFEgf1gbq6CSlfG/view?usp=drive_link"
                className="w-full lg:w-auto"
              >
                <button className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto mb-20">
                <button className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#06B6D4]/50 text-[#06B6D4] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#06B6D4]/10">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))} // Hilangkan map, langsung statis
          </div>
        </a> */}

        {/* Experience Section */}
        <div className="mt-20">
          <h3
            className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3"
            data-aos="fade-right"
          >
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#06B6D4]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
              Work Experience
            </span>
          </h3>

          {/* Work Experience Cards */}
          <div className=" mb-10 space-y-6">
            {[
              {
                role: "Barista",
                company: "PT. Mega Pangan Abadi (The British Donuts)",
                period: "1 Juni 2025 – 30 Juni 2025",
                description:
                  "Melayani pelanggan serta bertanggung jawab dalam pengelolaan, pencatatan, dan analisis stok barang (stock opname).",
                highlights: [
                  "Data Management",
                  "Microsoft Excel",
                  "Data Analysis",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative p-6 sm:p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-[#06B6D4] font-medium text-sm sm:text-base">
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-10 space-y-6">
            {[
              {
                role: "Full-Stack Web Developer & Data Analyst",
                company:
                  "Universitas Pelita Bangsa (Academic & Portfolio Projects)",
                period: "-",
                description:
                  "Mengembangkan berbagai aplikasi web dan melakukan analisis data/data mining untuk keperluan proyek akademik dan sertifikasi kompetensi.",
                highlights: ["Python", "JavaScript", "Laravel", "PHP"],
              },
            ].map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative p-6 sm:p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-[#06B6D4] font-medium text-sm sm:text-base">
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-10 space-y-6">
            {[
              {
                role: "Technical Assistant (Internship)",
                company: "PT. kYOKUNI MANUFACTURING INDONESIA",
                period: "20 Desember 2019 – 20 Maret 2020",
                description:
                  "Bertindak sebagai asisten teknis yang membantu pemeliharaan, perbaikan, dan memastikan kelancaran operasional perangkat atau sistem elektronika di lingkungan industri.",
                highlights: [
                  "Technical Assistance",
                  "Industrial Electronics",
                  "Troubleshooting",
                  "Maintenance",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative p-6 sm:p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-[#06B6D4] font-medium text-sm sm:text-base">
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
