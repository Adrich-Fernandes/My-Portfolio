import { useState } from "react";

export default function GlassArctic() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactEmail = "adrichfernandes20@gmail.com";
  const accessKey = "f7974ff8-06d0-472a-9ab1-5e3158f00fee";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, ...formData }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const glassCard =
    "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(148,213,255,0.08)]";

  const glassCardHover =
    `${glassCard} hover:bg-white/10 hover:border-[#7dd3fc]/40 hover:shadow-[0_0_40px_rgba(125,211,252,0.2)] transition duration-500 hover:scale-105`;

  const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ];

  const tools = [
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  return (
    <div
      className="min-h-screen text-[#e0f2fe]"
      style={{
        background: "linear-gradient(135deg, #020c18 0%, #041526 40%, #062035 70%, #031020 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute rounded-full opacity-10 blur-3xl" style={{ width: 600, height: 600, background: "radial-gradient(circle, #38bdf8, transparent)", top: "-100px", left: "-100px" }} />
        <div className="absolute rounded-full opacity-10 blur-3xl" style={{ width: 500, height: 500, background: "radial-gradient(circle, #7dd3fc, transparent)", bottom: "10%", right: "-80px" }} />
        <div className="absolute rounded-full opacity-5 blur-3xl" style={{ width: 400, height: 400, background: "radial-gradient(circle, #bae6fd, transparent)", top: "50%", left: "40%" }} />
      </div>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 w-full z-50 border-b border-white/10"
        style={{ background: "rgba(2, 12, 24, 0.6)", backdropFilter: "blur(20px)", boxShadow: "0 4px 30px rgba(56, 189, 248, 0.08)" }}
      >
        <div className="w-full px-6 md:px-10 h-16 flex items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold cursor-pointer tracking-tight" style={{ color: "#7dd3fc", textShadow: "0 0 20px rgba(125,211,252,0.5)" }}>
              ❄ Portfolio
            </h1>
          </div>
          <div className="hidden md:flex gap-3">
            {["home", "about", "projects", "skills", "experience"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="px-4 py-2 rounded-lg text-[#bae6fd] capitalize transition duration-200"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(125,211,252,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                {item === "skills" ? "Skills & Tools" : item === "experience" ? "Experience" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => handleScroll("contact")}
              className="px-4 py-2 rounded-lg font-semibold text-[#0c1a2e] transition duration-200"
              style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", boxShadow: "0 0 20px rgba(56,189,248,0.4)" }}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="flex flex-col gap-1.5 p-2">
              <span className="block w-6 h-0.5 bg-[#7dd3fc]"></span>
              <span className="block w-6 h-0.5 bg-[#7dd3fc]"></span>
              <span className="block w-6 h-0.5 bg-[#7dd3fc]"></span>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />}

      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 border-l border-white/10 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ background: "rgba(4, 21, 38, 0.95)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-xl font-bold" style={{ color: "#7dd3fc" }}>Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-[#7dd3fc] text-xl">✕</button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          {["about", "projects", "skills", "experience", "contact"].map((item) => (
            <button key={item} onClick={() => handleScroll(item)} className="text-left text-lg text-[#bae6fd] capitalize hover:text-white transition">
              {item === "skills" ? "Skills & Tools" : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <div id="home" className="relative z-10 min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 pt-28 gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0c1a2e]" style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", boxShadow: "0 0 15px rgba(56,189,248,0.4)" }}>
            ❄ Welcome to my portfolio
          </span>
          <div className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#e0f2fe]">Hi, I'm </span>
            <span style={{ color: "#38bdf8", textShadow: "0 0 30px rgba(56,189,248,0.6)" }}>Adrich Fernandes</span>
          </div>
          <p className="text-lg text-[#93c5fd] max-w-xl mx-auto md:mx-0 leading-relaxed">
            A passionate Full Stack Developer creating beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {[
              "https://www.freeiconspng.com/uploads/github-icon-9.png",
              "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png",
              "https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-line-white-icon.png",
            ].map((src, i) => (
              <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:scale-110" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(125,211,252,0.3)", boxShadow: "0 0 10px rgba(56,189,248,0.1)" }}>
                <img src={src} alt="icon" className="w-5 h-5 object-contain" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button onClick={() => handleScroll("projects")} className="px-6 py-3 rounded-xl font-semibold transition duration-300" style={{ border: "1px solid rgba(56,189,248,0.5)", color: "#38bdf8", background: "rgba(56,189,248,0.05)" }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.15)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(56,189,248,0.3)"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(56,189,248,0.05)"; e.currentTarget.style.boxShadow = "none"; }}>
              View My Work
            </button>
            <button onClick={() => handleScroll("contact")} className="px-6 py-3 rounded-xl font-semibold transition duration-300" style={{ border: "1px solid rgba(56,189,248,0.5)", color: "#38bdf8", background: "rgba(56,189,248,0.05)" }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.15)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(56,189,248,0.3)"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(56,189,248,0.05)"; e.currentTarget.style.boxShadow = "none"; }}>
              Get In Touch
            </button>
            <a href="/GreenNest.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-semibold text-[#0c1a2e] transition duration-300 text-center" style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", boxShadow: "0 0 20px rgba(56,189,248,0.4)" }}>
              View My Resume
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div className="relative p-1 rounded-full" style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc, #bae6fd)", boxShadow: "0 0 60px rgba(56,189,248,0.4)" }}>
            <img
              src="https://w0.peakpx.com/wallpaper/631/529/HD-wallpaper-vagabond-art-manga-slam-dunk-takehiko-inoue-vagabond.jpg"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover transition duration-500 hover:scale-105"
              style={{ filter: "brightness(1.1) contrast(1.05) saturate(0.9) hue-rotate(10deg)" }}
            />
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "2px solid rgba(186,230,253,0.3)", boxShadow: "inset 0 0 30px rgba(56,189,248,0.1)" }} />
          </div>
        </div>
      </div>

      {/* ── ABOUT SECTION ── */}
      <div id="about" className="relative z-10 min-h-screen px-6 md:px-16 py-44">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#7dd3fc", textShadow: "0 0 20px rgba(125,211,252,0.4)" }}>About Me</h2>
          <p className="text-[#93c5fd] text-lg max-w-2xl mx-auto">I'm a developer who loves crafting digital experiences that make a difference</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { img: "https://cdn3d.iconscout.com/3d/premium/thumb/code-3d-icon-png-download-5285090.png", title: "Clean Code", desc: "Writing maintainable, scalable code that follows best practices and industry standards" },
            { img: "https://static.vecteezy.com/system/resources/thumbnails/069/414/172/small/3d-lightning-bolt-icon-for-power-and-energy-png.png", title: "Performance", desc: "Optimizing applications for speed, efficiency, and exceptional user experience" },
            { img: "https://cdn3d.iconscout.com/3d/premium/thumb/ui-design-3d-icon-png-download-5846532.png", title: "UI Design", desc: "Creating beautiful, intuitive interfaces that users love to interact with" },
          ].map((card, i) => (
            <div key={i} className={`${glassCardHover} p-8`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
                <img src={card.img} alt={card.title} className="w-10 h-10 object-contain" style={{ filter: "brightness(1.2) hue-rotate(180deg) saturate(0.6)" }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#7dd3fc" }}>{card.title}</h3>
              <p className="text-[#93c5fd] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS SECTION ── */}
      <div id="projects" className="relative z-10 min-h-screen px-6 md:px-16 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#7dd3fc", textShadow: "0 0 20px rgba(125,211,252,0.4)" }}>Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", title: "Project One", desc: "A full stack web application built with modern technologies focusing on performance and clean architecture." },
            { img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", title: "Project Two", desc: "A responsive UI application designed with user experience and accessibility in mind." },
            { img: "https://images.unsplash.com/photo-1518770660439-4636190af475", title: "Project Three", desc: "Backend-focused system with optimized APIs and scalable architecture." },
          ].map((project, i) => (
            <div key={i} className={`${glassCard} hover:bg-white/10 hover:border-[#7dd3fc]/40 hover:shadow-[0_0_40px_rgba(125,211,252,0.2)] transition duration-500 hover:scale-105 overflow-hidden flex flex-col`}>
              <div className="relative overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover transition duration-500 hover:scale-110" style={{ filter: "brightness(0.8) saturate(0.7) hue-rotate(190deg)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, rgba(2,12,24,0.6))" }} />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#7dd3fc" }}>{project.title}</h3>
                <p className="text-[#93c5fd] leading-relaxed mb-6 flex-grow">{project.desc}</p>
                <button className="w-fit px-5 py-2 rounded-xl text-sm font-semibold text-[#0c1a2e] transition duration-300" style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", boxShadow: "0 0 15px rgba(56,189,248,0.3)" }}>
                  GitHub ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SKILLS & TOOLS SECTION ── */}
      <div id="skills" className="relative z-10 w-full py-28 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#FFD700", textShadow: "0 0 20px rgba(255,215,0,0.4)" }}>
            Skills & Tools
          </h2>
          <p className="text-[#93c5fd] mt-3 text-sm max-w-xl mx-auto">
            Languages, frameworks, and tools I work with
          </p>

          {/* Toggle */}
          <div className="flex justify-center mt-8 mb-10">
            <div className="flex p-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(125,211,252,0.2)" }}>
              {["skills", "tools"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-10 py-2 rounded-full text-sm font-semibold capitalize transition duration-300"
                  style={
                    activeTab === tab
                      ? { background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", color: "#0c1a2e", boxShadow: "0 0 20px rgba(56,189,248,0.4)" }
                      : { background: "transparent", color: "#93c5fd" }
                  }
                >
                  {tab === "skills" ? "Skills" : "Tools"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        {activeTab === "skills" && (
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl transition duration-300"
                style={{ background: "rgba(10,30,60,0.8)", border: "1px solid rgba(125,211,252,0.15)", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.08)"; e.currentTarget.style.borderColor = "rgba(125,211,252,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(10,30,60,0.8)"; e.currentTarget.style.borderColor = "rgba(125,211,252,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  style={{
                    width: 48, height: 48, objectFit: "contain",
                    filter: skill.name === "Express" ? "invert(0.6)" : "none",
                  }}
                />
                <span style={{ color: "#93c5fd", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em", textAlign: "center" }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tools Grid */}
        {activeTab === "tools" && (
          <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl transition duration-300"
                style={{ background: "rgba(10,30,60,0.8)", border: "1px solid rgba(125,211,252,0.15)", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.08)"; e.currentTarget.style.borderColor = "rgba(125,211,252,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(10,30,60,0.8)"; e.currentTarget.style.borderColor = "rgba(125,211,252,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  style={{
                    width: 52, height: 52, objectFit: "contain",
                    filter: tool.invert ? "invert(0.6)" : "none",
                  }}
                />
                <span style={{ color: "#93c5fd", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em", textAlign: "center" }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── EXPERIENCE SECTION ── */}
      <div id="experience" className="relative z-10 w-full py-28 px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#7dd3fc", textShadow: "0 0 20px rgba(125,211,252,0.4)" }}>Experience</h2>
        </div>
        <div className="max-w-6xl mx-auto rounded-3xl p-10 transition duration-500 hover:shadow-[0_0_50px_rgba(125,211,252,0.15)]" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)", border: "1px solid rgba(125,211,252,0.15)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-28 h-28 rounded-full overflow-hidden" style={{ border: "2px solid rgba(56,189,248,0.5)", boxShadow: "0 0 20px rgba(56,189,248,0.3)" }}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD6+vrJycnS0tJhYWHAwMCEhIRxcXFqamqwsLDl5eX29vbc3Nzs7Ozf39+kpKSNjY1MTEycnJxRUVFZWVmKiooqKioUFBSUlJQNDQ19fX22trZcXFzExMQ1NTUbGxtCQkImJiY8PDx4eHgxMTEgICBsv2lhAAAK6klEQVR4nO2d61rjOAyG0zb0QJNAWwoUGKaFmbn/S9ykB5+dWLKUODz7/dndLEn9to4tS7KcTdh13C8Pjx+zvFxXxTTLsmlRrct89vF4WO6P/B+fcT78aXGfV1m7qvx+8cTZCC7C7Wa+7mDTOOebLVNLOAi3uxwAJ5XvOCjJCRczFN1NnwvqBpESvm7KKLyLys0rZaMICZ8p8K6Qz3TNoiK8i+uctmZ3RC2jIdwVxHyNih1J2wgIf88Z8C6afydAuKd7+1zKfw1MuIJM6zg9RL6QUYR3/HxnxqjfMYLwxNs/VZWnAQhfP3vja/T51jfhY698jR57JbzjmP+6VOCGHBQhtf0SqllPhO8D8TX60wchbu1HpZydcDUoX6MVL+HH0Hy15oyEL11upX5UvXARLodGE1ryEN4PzaXonoOwPys0RCU54dcQVkybitCXMZDwaWgghwI95WGE6YwxqsIMnCDCzdAsHm2oCHdDk3gV4o0LIExpljAVMGt0E6ZgqPn1EU+YNmAAYhdhyl30oq6O2kGY7iAj1THctBOmOk3oap80Wgn/DN32QLUuNdoIUzTV3Goz4FoIX4ZuN0BfKMLUVhNtKjCEaa0Hu+RfL3oJh5kIyxwbzvJOiz5C9Hopn6MdqsV5TDwirSjfgOohRI4y0/fz3Ysp5mbh7P3G/Y6eRb+HEOc2vI+5v1I+HhU4qGwMPyEq9+Dht3zAK/x2PbKE6apuI9xJiHHdT3WfAji+ODXagOmqToe/kxD+bGso+wt9gB1yQXTVUEL4YKh2UOS35IoNgruqKzLlIATb21OX00sbTovPzy4LyRn9BHfV9yBC4EM9c61KuAj44jzxXWhXDSEEhjAdHdQkvI6S7UsVbwQb1lXtx1iEdzBAr1dWEoqXo/W788foYSO7lc5gEYJWFIU/y0USilzR1h4nCa20EpCnwVplmISwecxclr3I1klCYTC2/hiS0E4rAVlI5hdkEL6BAE0j4lEZriMI6//Q86Bh/jAjh9oghKVy6an1qyKjIjQcaLCx4bON8AR6lHbv8WwnkBFqXRU4+p1aCIHreuXO6/tLR1hfEW85kFBf72uEv2BPkveKPDdKQjkIAwn1GUMjfAA+SdwoXl9SQrG5BEq49hFCHyTvFevJNAi1ZZRKCP0J0yVUf0SFEPoWJkyY7Z2E8GVhuoTKcCpb+Q1+TMKEmdyK4mhluBImlAmMmf3gcCVMqHDd/gUT7U2ZUBi2opWYSFPKhGKdmEU8JGlCYbrdWonaYJA04e2BmflYiJImFGSXfzzHPCNRwmeNEBfwTZuwVAkRoaJGaRNeHTaXViIzgxIn3CiEyKyExAlLhRD3hNQJM0m4iHlCwoQLQYj d8Jo64UwQIh+QPGF2I9zGPCBpwu2VEJ0mmzzh7kqITmJKnjC/EmLvT58wuxCiX8MREO7PhPhk7vQJN2dCfHmZ9AnnZ0L85t70CddnQvTtIyBs8GIy8kdA+FQTYs3ubBSEi5owIqF7BIT3NWFEnYsREOY1YUSdhBEQVjUh/u4xENZ8x5i7R0B4zPYRd4+BcJ/FbLUfA+EyO0TcPQbCQxZTlmwMhI9ZzF7tMRB+ZDGVycZAOMtiSneNgTDPYjZSjoGwzGIKdI6BcJ3FlO8aA2GVxexnHgNhkaG2e141BsIYvnEQxul/wouGJvz57+HPH0t//nz4822a4exS/f3gs0uHWlscmpYrrwjf2mKY9eGNZ21doV8fDrHGL8RRALIwAd8afwA/jbqPVexE4vPT9O5re9CqrIg7+XxtfftLjaoHYijn85f26/O2anGLv+LzeR8j7gYSLgvr1DE5kvPFLXqMPdlljpTJmC/21GP80JQWX2eMH/YXA9ZlVGZhjAH3F8fXZH6svFNcoorj95eLoWhlLbzlX4lLVLkY/eXTCL1ab4ZaYUNpXTzhUx85UVYBVcuMWmvHq4nLVDlRE/waOIzQqK2ztQZv/bBDaYwTEFa95CZmRxXAWsuYZo5cCpDlJnLnl2YPsvlWOazKLB+rbMEiy y/lzhGWV18sl8lhYkrpw2Q5wtx53o12p8nkyeqgM6vMlDaLkOV5c+fq+1RYh/4d9ZbQ5eoz77fwyD4pzmwH3X4L5j0zTpVW9ea95X2n2zPDvO/Joalt5zh8fnT7ntBn4WEJ7UqLzhkrmvBTEPLuPzRlV1q0zZyzCPcf8u4hdX2sJp9RRbiHlHcfsCb7WDh/B6LcB8y6l1tRZbmi2mqwUu7lZt2Pb36kqlYHA+V+fNaaCjcZ9QxrLdsnTcqaCqx1MS6qlPJbF311fa2kdTE4a5ucZR8G4wgJ5XOtZBxpbRPO+jTNZW0RfG60nSFx7sUvZKsnsz4NY40hR6102xUlX1OJTltjiLFOlH0KjDOid/ufMlJMWyeKsdaXWeX5yWmjySp54hJxrS++em2Gmeax0fjrtfVQc6+Rd1rqoeYeW91EZTF/8ttoPdRNRNg1YYSyhnhb3gctoXJIgkIIj3eHEd56TPvRAbSEipNLIYS798Wdwl5wz4frekJcWV1Et3pICRUftEYIPnxFrIXEZBrua2tG8xVX1pdaDFolBP+IN55360rX5HPjqawrFITqT6gTgr+ri0tJKUAsCX+1GEmy3vpvcY2ynrfmatYI4cNpdVi9q0a7etCLN59MdbW1ZH3J9TJdTXZoXf2Oh9uBmEa6q82b9aU6dAjr6qOrfgnpj3Oc2WHYcGKRoRPqDh1YZlrr2QhYh40XwLQFA7O+DIcOLF3ECGgZhPCztkyZCKq31/ZkOLO+LIcOqAEdZ5TEn1xZWTFBsRq0PRnKICUJra8BtCboPGeGYAfOs/nIy4q+/Gde195S/1lBsD7afVYQOkwjtbYCE6upfWzSX/2gAh+he73sVcB5TzH5NUIBR56bL7yHEDq4O3DsS6jjFQ1NnQf1SdmuNichONrgOGDLQRiTrSiVvzqefNWb401wEAI7aBZ8dh5JP81cmSRXOX8Z+7hbhPXhhHFdxJxh6ZAdaWrk82SEfA0dCj/DEnUKqEt2tND/aG2SgXdQ96d5CWNSo3UZmw/aLEzlxUWZx6CzZAlPHS+V/PV/rWNY8ff6Z8h4Lew8YPyZzraEodjpVv841X/1juw/wDOdSc/lLs5dFdvyQIHP5SY+W73ixUOdrR6/yuhT1ooiiPBr6GYD5BllOghjsvh7lhWhDCSkHFBZ5T3QtpMwIgW8T9lpOuGE+OTaHmU7RyCElNMik7pW212EZEY4l8wTe+GEiSN2AgYQJt1RAxxCAYQJDzcdg0wwYbKTRvs0ASHsCMEPJe8GYwRhkgZcm6kGJ5y8pLbSKKwtKZGExOvFaPnXg3jCpGaNgFkCQZjQUiNsjIETagm8A6pqWe9GEsbsGaZTt6EWQ0jl8I9QR1QrmpAoMoWWK7pETTiogfPe3TwCQopAOE7+WD81oWu3BL8KKwmBkZAg7wYse2c0L+HkLTpBDKTPlqA5E+FkcurPUi1P+GZGEE4mvx66G0egNe4FpCCshxx+xjV0iqclrH9HXgugtLLceiecTL75jNX5d/fH90BYa8cxPxYhnrRu0RDWLyS1nTOLGl4UURHWeqabPUorgxMvQsLJ5HVDAVlu0LO7S6SEjRZxts7MLioRKXLCWtsdbgbJd85EuEhxEDbabuYQp856vuGga8RFeNbT4j7v4qzy+0Wg9xonVsKLjvvl4fFjlpfrqmh2tE2Lal3ms4/Hw3Jv7dOn13+/W4jdFy2WPQAAAABJRU5ErkJggg=="
                  alt="Company"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(1.1) hue-rotate(180deg) saturate(0.5)" }}
                />
              </div>
              <span className="text-2xl font-bold text-[#e0f2fe]">Unified Mentor</span>
              <span className="text-[#93c5fd] text-sm">12/10/25 – 12/11/25</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#0c1a2e]" style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc)" }}>
                Internship
              </span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold" style={{ color: "#7dd3fc", textShadow: "0 0 20px rgba(125,211,252,0.5)" }}>MERN Stack</span>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-auto">
              {[
                { title: "Responsibilities", desc: "Built full-stack applications, implemented REST APIs, and worked with MongoDB." },
                { title: "Achievements", desc: "Improved application performance and deployed projects successfully." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl flex flex-col justify-between gap-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(125,211,252,0.1)" }}>
                  <div>
                    <p className="text-[#bae6fd] font-semibold mb-2">{item.title}</p>
                    <p className="text-[#93c5fd] text-sm">{item.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="px-4 py-2 text-sm font-semibold rounded-lg text-[#0c1a2e] transition duration-300" style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", boxShadow: "0 0 12px rgba(56,189,248,0.3)" }}>
                      View Project ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT SECTION ── */}
      <div id="contact" className="relative z-10 w-full py-28 px-6 md:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#7dd3fc", textShadow: "0 0 20px rgba(125,211,252,0.4)" }}>Get In Touch</h2>
          <p className="text-[#93c5fd] mt-4 text-lg">Have a project in mind or just want to chat? I'd love to hear from you</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-[#e0f2fe] mb-6">Let's Connect</h3>
            <p className="text-[#93c5fd] leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or contact details below.
            </p>
            {[
              { icon: "✉️", label: "Email", value: contactEmail },
              { icon: "📍", label: "Location", value: "Your City, Country" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 mb-8">
                <div className="p-4 rounded-xl text-xl" style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#bae6fd]">{item.label}</h4>
                  <p className="text-[#93c5fd]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-10 rounded-3xl transition duration-500 hover:shadow-[0_0_50px_rgba(125,211,252,0.15)]"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)", border: "1px solid rgba(125,211,252,0.15)" }}
          >
            <div className="space-y-6">
              {[
                { label: "Name", type: "text", name: "name", placeholder: "John Doe" },
                { label: "Email", type: "email", name: "email", placeholder: "john@example.com" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block mb-2 text-[#bae6fd] font-medium text-sm">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full rounded-xl px-4 py-3 text-[#e0f2fe] placeholder-[#4a7a9b] outline-none transition duration-300"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(125,211,252,0.15)" }}
                    onFocus={e => { e.target.style.border = "1px solid rgba(56,189,248,0.6)"; e.target.style.boxShadow = "0 0 15px rgba(56,189,248,0.2)"; }}
                    onBlur={e => { e.target.style.border = "1px solid rgba(125,211,252,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              ))}
              <div>
                <label className="block mb-2 text-[#bae6fd] font-medium text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl px-4 py-3 text-[#e0f2fe] placeholder-[#4a7a9b] outline-none transition duration-300 resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(125,211,252,0.15)" }}
                  onFocus={e => { e.target.style.border = "1px solid rgba(56,189,248,0.6)"; e.target.style.boxShadow = "0 0 15px rgba(56,189,248,0.2)"; }}
                  onBlur={e => { e.target.style.border = "1px solid rgba(125,211,252,0.15)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl font-semibold text-[#0c1a2e] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: status === "success" ? "linear-gradient(135deg, #22c55e, #4ade80)" : status === "error" ? "linear-gradient(135deg, #ef4444, #f87171)" : "linear-gradient(135deg, #38bdf8, #7dd3fc)",
                  boxShadow: status === "success" ? "0 0 25px rgba(34,197,94,0.4)" : status === "error" ? "0 0 25px rgba(239,68,68,0.4)" : "0 0 25px rgba(56,189,248,0.4)",
                }}
                onMouseEnter={e => { if (status === "idle") e.currentTarget.style.boxShadow = "0 0 40px rgba(56,189,248,0.6)"; }}
                onMouseLeave={e => { if (status === "idle") e.currentTarget.style.boxShadow = "0 0 25px rgba(56,189,248,0.4)"; }}
              >
                {status === "submitting" ? "Sending... ❄" : status === "success" ? "Message Sent! ✨" : status === "error" ? "Error Sending! ❌" : "Send Message ❄"}
              </button>
              {status === "success" && <p className="text-center text-[#4ade80] text-sm font-medium animate-pulse">Thank you! I'll get back to you soon.</p>}
              {status === "error" && <p className="text-center text-[#f87171] text-sm font-medium">Something went wrong. Please try again.</p>}
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-white/5">
        <p className="text-[#4a7a9b] text-sm">
          ❄ Crafted with ice & care by <span style={{ color: "#7dd3fc" }}>Adrich Fernandes</span>
        </p>
      </footer>
    </div>
  );
}