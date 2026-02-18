import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#1a1b26] text-[#c0caf5] min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 
  bg-[#1a1b26]/70 
  backdrop-blur-md 
  border-b border-[#6181ff]/30 
  shadow-[0_8px_30px_rgba(97,129,255,0.15)]">

        <div className="w-full px-6 md:px-10 h-16 flex items-center">

          {/* Logo */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#7aa2f7] cursor-pointer">
              Portfolio
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5">
            <button onClick={() => handleScroll("home")} className="px-5 py-2 rounded-lg bg-[#24283b] hover:bg-[#414868] transition">
              Home
            </button>
            <button onClick={() => handleScroll("about")} className="px-5 py-2 rounded-lg bg-[#24283b] hover:bg-[#414868] transition">
              About
            </button>
            <button onClick={() => handleScroll("projects")} className="px-5 py-2 rounded-lg bg-[#24283b] hover:bg-[#414868] transition">
              Projects
            </button>
            <button onClick={() => handleScroll("skills")} className="px-5 py-2 rounded-lg bg-[#24283b] hover:bg-[#414868] transition">
              Skills & Tools
            </button>
            <button onClick={() => handleScroll("experience")} className="px-5 py-2 rounded-lg bg-[#24283b] hover:bg-[#414868] transition">
              Experiences
            </button>
            <button onClick={() => handleScroll("contact")} className="px-5 py-2 rounded-lg bg-[#6181ff] hover:bg-[#4f6ee6] transition">
              Contact
            </button>

          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-[#c0caf5]"></span>
                <span className="block w-6 h-0.5 bg-[#c0caf5]"></span>
                <span className="block w-6 h-0.5 bg-[#c0caf5]"></span>
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#24283b] z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#414868]">
          <h2 className="text-xl font-bold text-[#7aa2f7]">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col p-6 gap-6">
          <button onClick={() => handleScroll("about")} className="text-left text-lg hover:text-[#6181ff] transition">
            About
          </button>
          <button onClick={() => handleScroll("projects")} className="text-left text-lg hover:text-[#6181ff] transition">
            Projects
          </button>
          <button onClick={() => handleScroll("skills")} className="text-left text-lg hover:text-[#6181ff] transition">
            Skills & Tools
          </button>
          <button onClick={() => handleScroll("experience")} className="text-left text-lg hover:text-[#6181ff] transition">
            Experiences
          </button>
          <button onClick={() => handleScroll("contact")} className="text-left text-lg hover:text-[#6181ff] transition">
            Contact
          </button>
        </div>
      </div>





      {/* HERO SECTION */}
      <div id="home" className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 pt-28">

        {/* TEXT SIDE */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
          <span className="inline-block px-4 py-1 rounded-full bg-[#6181ff] text-white text-sm font-medium">
            Welcome to my portfolio
          </span>

          <div className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span>Hi, I'm </span>
            <span className="text-[#6181ff]">Adrich Fernandes</span>
          </div>

          <p className="text-lg text-[#a9b1d6] max-w-xl mx-auto md:mx-0">
            A passionate Full Stack Developer creating beautiful and functional web experiences
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <img src="https://www.freeiconspng.com/uploads/github-icon-9.png" alt="icon1" className="w-10 h-10 rounded-full object-cover bg-[#24283b] hover:bg-[#414868] transition cursor-pointer" />
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" alt="icon2" className="w-10 h-10 rounded-full object-cover bg-[#24283b] hover:bg-[#414868] transition cursor-pointer" />
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-line-white-icon.png" alt="icon3" className="w-10 h-10 rounded-full object-cover bg-[#24283b] hover:bg-[#414868] transition cursor-pointer" />
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <button onClick={() => handleScroll("projects")} className="px-6 py-3 rounded-lg border border-[#6181ff] text-[#6181ff] font-semibold hover:bg-[#6181ff] hover:text-white transition">
              View My Work
            </button>
            <button onClick={() => handleScroll("contact")} className="px-6 py-3 rounded-lg border border-[#6181ff] text-[#6181ff] font-semibold hover:bg-[#6181ff] hover:text-white transition">
              Get In Touch
            </button>
            <button className="px-6 py-3 rounded-lg bg-[#6181ff] text-white font-semibold hover:bg-[#4f6ee6] transition">
              View My Resume
            </button>

          </div>
        </div>

        {/* IMAGE SIDE (UNCHANGED POSITION) */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 order-1 md:order-2">
          <img
            src="https://w0.peakpx.com/wallpaper/631/529/HD-wallpaper-vagabond-art-manga-slam-dunk-takehiko-inoue-vagabond.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#6181ff] transition duration-500 shadow-[0_0_25px_#6181ff] hover:shadow-[0_0_60px_#6181ff] hover:scale-105"
          />
        </div>

      </div>







      {/* ABOUT SECTION */}
      <div id="about" className="min-h-screen px-6 md:px-16 py-44">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7aa2f7]">
            About Me
          </h2>
          <span className="text-[#a9b1d6] text-lg block max-w-2xl mx-auto">
            I'm a developer who loves crafting digital experiences that make a difference
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-[#24283b] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_40px_#6181ff] transition duration-500 hover:scale-105">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/code-3d-icon-png-download-5285090.png"
              alt="Clean Code"
              className="w-16 h-16 rounded-xl mb-6"
            />
            <span className="block text-xl font-bold text-[#7aa2f7] mb-4">
              Clean Code
            </span>
            <span className="text-[#a9b1d6] leading-relaxed block">
              Writing maintainable, scalable code that follows best practices and industry standards
            </span>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#24283b] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_40px_#6181ff] transition duration-500 hover:scale-105">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/069/414/172/small/3d-lightning-bolt-icon-for-power-and-energy-png.png"
              alt="Performance"
              className="w-16 h-16 rounded-xl mb-6"
            />
            <span className="block text-xl font-bold text-[#7aa2f7] mb-4">
              Performance
            </span>
            <span className="text-[#a9b1d6] leading-relaxed block">
              Optimizing applications for speed, efficiency, and exceptional user experience
            </span>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#24283b] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_40px_#6181ff] transition duration-500 hover:scale-105">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/ui-design-3d-icon-png-download-5846532.png"
              alt="UI Design"
              className="w-16 h-16 rounded-xl mb-6"
            />
            <span className="block text-xl font-bold text-[#7aa2f7] mb-4">
              UI Design
            </span>
            <span className="text-[#a9b1d6] leading-relaxed block">
              Creating beautiful, intuitive interfaces that users love to interact with
            </span>
          </div>
        </div>
      </div>






      {/* PROJECTS SECTION */}
      <div id="projects" className="min-h-screen px-6 md:px-16 py-24">

        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-3xl md:text-4xl font-extrabold text-[#7aa2f7] block">
            Projects
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-[#24283b] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_#6181ff] transition duration-500 hover:scale-105 flex flex-col">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xl font-bold text-[#7aa2f7] mb-3">
                Project One
              </span>

              <span className="text-[#a9b1d6] leading-relaxed mb-6 flex-grow">
                A full stack web application built with modern technologies focusing on performance and clean architecture.
              </span>

              <button className="w-fit px-5 py-2 rounded-lg bg-[#6181ff] hover:bg-[#4f6ee6] transition font-semibold">
                GitHub
              </button>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#24283b] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_#6181ff] transition duration-500 hover:scale-105 flex flex-col">

            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xl font-bold text-[#7aa2f7] mb-3">
                Project Two
              </span>

              <span className="text-[#a9b1d6] leading-relaxed mb-6 flex-grow">
                A responsive UI application designed with user experience and accessibility in mind.
              </span>

              <button className="w-fit px-5 py-2 rounded-lg bg-[#6181ff] hover:bg-[#4f6ee6] transition font-semibold">
                GitHub
              </button>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-[#24283b] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_#6181ff] transition duration-500 hover:scale-105 flex flex-col">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xl font-bold text-[#7aa2f7] mb-3">
                Project Three
              </span>

              <span className="text-[#a9b1d6] leading-relaxed mb-6 flex-grow">
                Backend-focused system with optimized APIs and scalable architecture.
              </span>

              <button className="w-fit px-5 py-2 rounded-lg bg-[#6181ff] hover:bg-[#4f6ee6] transition font-semibold">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>







      {/* SKILLS PROGRESS SECTION */}
      <div id="skills" className="w-full py-28 px-6 md:px-16 bg-[#1a1b26]">

        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-4xl md:text-5xl font-extrabold text-[#7aa2f7]">
            Skills & Tools
          </span>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* FRONTEND CARD */}
          <div className="bg-[#24283b] p-10 rounded-3xl shadow-xl hover:shadow-[0_0_40px_#6181ff] transition duration-500">

            <h3 className="text-2xl font-bold text-[#c0caf5] mb-10">
              Frontend
            </h3>

            {[
              { name: "React", level: "90%" },
              { name: "TypeScript", level: "85%" },
              { name: "Tailwind CSS", level: "95%" },
              { name: "Vue.js", level: "75%" },
            ].map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2 text-[#a9b1d6]">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-[#414868] rounded-full">
                  <div
                    className="h-2 bg-[#6181ff] rounded-full"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}

          </div>

          {/* BACKEND CARD */}
          <div className="bg-[#24283b] p-10 rounded-3xl shadow-xl hover:shadow-[0_0_40px_#6181ff] transition duration-500">

            <h3 className="text-2xl font-bold text-[#c0caf5] mb-10">
              Backend
            </h3>

            {[
              { name: "Node.js", level: "85%" },
              { name: "Python", level: "80%" },
              { name: "PostgreSQL", level: "75%" },
              { name: "MongoDB", level: "85%" },
            ].map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2 text-[#a9b1d6]">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-[#414868] rounded-full">
                  <div
                    className="h-2 bg-[#6181ff] rounded-full"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}

          </div>

          {/* TOOLS CARD */}
          <div className="bg-[#24283b] p-10 rounded-3xl shadow-xl hover:shadow-[0_0_40px_#6181ff] transition duration-500">

            <h3 className="text-2xl font-bold text-[#c0caf5] mb-10">
              Tools & Others
            </h3>

            {[
              { name: "Git", level: "90%" },
              { name: "Docker", level: "70%" },
              { name: "AWS", level: "65%" },
              { name: "Figma", level: "80%" },
            ].map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2 text-[#a9b1d6]">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-[#414868] rounded-full">
                  <div
                    className="h-2 bg-[#6181ff] rounded-full"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>







{/* EXPERIENCE SECTION */}
<div id="experience" className="w-full py-28 px-6 md:px-16 bg-[#1a1b26]">

  {/* Title */}
  <div className="text-center mb-16">
    <span className="text-4xl md:text-5xl font-extrabold text-[#7aa2f7]">
      Experience
    </span>
  </div>

  {/* Main Experience Card */}
  <div className="max-w-6xl mx-auto bg-[#24283b] rounded-3xl p-10 shadow-xl hover:shadow-[0_0_40px_#6181ff] transition duration-500">

    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

      {/* LEFT SIDE */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">

        <img
          src="data:image/png;base64,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"
          alt="Company Logo"
          className="w-28 h-28 rounded-full object-cover border-4 border-[#6181ff]"
        />

        <span className="text-2xl font-bold text-[#c0caf5]">
          Unified Mentor
        </span>

        <span className="text-[#a9b1d6]">
          12/10/25 - 12/11/25
        </span>

        <span className="text-[#6181ff] font-medium">
          Internship
        </span>

      </div>

      {/* CENTER */}
      <div className="text-center">
        <span className="text-3xl font-bold text-[#7aa2f7]">
          MERN Stack
        </span>
      </div>

      {/* RIGHT SIDE */}
      {/* RIGHT SIDE */}
<div className="flex flex-col gap-6 w-full md:w-auto">

  {/* CARD 1 */}
  <div className="bg-[#1f2335] p-6 rounded-2xl flex flex-col justify-between">

    <div>
      <span className="text-[#c0caf5] font-semibold block mb-2">
        Responsibilities
      </span>

      <span className="text-[#a9b1d6] text-sm block mb-4">
        Built full-stack applications, implemented REST APIs, and worked with MongoDB.
      </span>
    </div>

    <div className="flex justify-end">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#6181ff] text-white hover:bg-[#4f6ee6] transition"
      >
        View Project
      </a>
    </div>

  </div>

  {/* CARD 2 */}
  <div className="bg-[#1f2335] p-6 rounded-2xl flex flex-col justify-between">

    <div>
      <span className="text-[#c0caf5] font-semibold block mb-2">
        Achievements
      </span>

      <span className="text-[#a9b1d6] text-sm block mb-4">
        Improved application performance and deployed projects successfully.
      </span>
    </div>

    <div className="flex justify-end">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#6181ff] text-white hover:bg-[#4f6ee6] transition"
      >
        View Project
      </a>
    </div>

  </div>

</div>


    </div>

  </div>

</div>



<div id="contact" className="w-full py-28 px-6 md:px-16 bg-[#1a1b26]">

  {/* Title */}
  <div className="text-center mb-20">
    <span className="text-4xl md:text-5xl font-extrabold text-[#7aa2f7]">
      Get In Touch
    </span>
    <p className="text-[#a9b1d6] mt-4 text-lg">
      Have a project in mind or just want to chat? I'd love to hear from you
    </p>
  </div>

  {/* Content */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-2xl font-semibold text-[#c0caf5] mb-6">
        Let's Connect
      </h2>

      <p className="text-[#a9b1d6] leading-relaxed mb-10">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out
        through the form or contact details below.
      </p>

      {/* Email */}
      <div className="flex items-start gap-4 mb-8">
        <div className="bg-[#24283b] text-[#6181ff] p-4 rounded-xl">
          ✉️
        </div>
        <div>
          <h4 className="font-semibold text-[#c0caf5]">Email</h4>
          <p className="text-[#a9b1d6]">your.email@example.com</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4">
        <div className="bg-[#24283b] text-[#6181ff] p-4 rounded-xl">
          📍
        </div>
        <div>
          <h4 className="font-semibold text-[#c0caf5]">Location</h4>
          <p className="text-[#a9b1d6]">Your City, Country</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="bg-[#24283b] p-10 rounded-3xl shadow-xl hover:shadow-[0_0_40px_#6181ff] transition duration-500">

      <form className="space-y-6">

        <div>
          <label className="block mb-2 text-[#c0caf5] font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-[#1f2335] border border-[#414868] 
                       rounded-xl px-4 py-3 text-[#c0caf5]
                       focus:outline-none focus:border-[#6181ff]
                       focus:ring-1 focus:ring-[#6181ff] transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-[#c0caf5] font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full bg-[#1f2335] border border-[#414868] 
                       rounded-xl px-4 py-3 text-[#c0caf5]
                       focus:outline-none focus:border-[#6181ff]
                       focus:ring-1 focus:ring-[#6181ff] transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-[#c0caf5] font-medium">
            Message
          </label>
          <textarea
            rows="6"
            placeholder="Tell me about your project..."
            className="w-full bg-[#1f2335] border border-[#414868] 
                       rounded-xl px-4 py-3 text-[#c0caf5]
                       focus:outline-none focus:border-[#6181ff]
                       focus:ring-1 focus:ring-[#6181ff] transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#6181ff] hover:bg-[#4f6ee6] 
                     py-4 rounded-xl font-semibold text-white
                     transition shadow-lg hover:shadow-[0_0_25px_#6181ff]"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>

</div>



    </div>
  );
}
