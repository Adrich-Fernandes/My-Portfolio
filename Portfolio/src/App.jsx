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
              Skills
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
            Skills
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
            <button className="px-6 py-3 rounded-lg border border-[#6181ff] text-[#6181ff] font-semibold hover:bg-[#6181ff] hover:text-white transition">
              View My Work
            </button>
            <button className="px-6 py-3 rounded-lg border border-[#6181ff] text-[#6181ff] font-semibold hover:bg-[#6181ff] hover:text-white transition">
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







{/* SKILLS SECTION */}
<div id="skills" className="min-h-screen px-6 md:px-16 py-24">

  {/* Title */}
  <div className="text-center mb-20">
    <span className="text-4xl md:text-5xl font-extrabold text-[#7aa2f7] block">
      Skills
    </span>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 place-items-center">

    {/* CARD 1 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        HTML
      </div>
    </div>

    {/* CARD 2 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        CSS
      </div>
    </div>

    {/* CARD 3 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        JavaScript
      </div>
    </div>

    {/* CARD 4 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        React
      </div>
    </div>

    {/* CARD 5 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="NodeJS"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        NodeJS
      </div>
    </div>

    {/* CARD 6 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="Express"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        Express
      </div>
    </div>

    {/* CARD 7 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        MongoDB
      </div>
    </div>

    {/* CARD 8 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        Git
      </div>
    </div>

    {/* CARD 9 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        GitHub
      </div>
    </div>

    {/* CARD 10 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        Tailwind
      </div>
    </div>

    {/* CARD 11 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        TypeScript
      </div>
    </div>

    {/* CARD 12 */}
    <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#24283b] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#6181ff] hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
          className="w-20 h-20 md:w-24 md:h-24 object-contain" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#6181ff] text-white text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100">
        Python
      </div>
    </div>

  </div>
</div>




    </div>
  );
}
