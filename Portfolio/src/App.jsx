import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, Moon, Menu, X, ExternalLink, Mail, MapPin, 
  Github, Linkedin, Loader2, CheckCircle2, AlertCircle, 
  Download, Code2, Zap, Layout, MessageSquare, Send,
  ChevronRight
} from "lucide-react";
import unifiedMentorLogo from "./assets/unifiedmentor.png";


export default function GlassArctic() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactEmail = "adrichancyfernandes@gmail.com";
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

  const glassCard = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(148,213,255,0.08)]"
    : "bg-black/5 backdrop-blur-md border border-black/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]";

  const glassCardHover =
    `${glassCard} transition duration-500 hover:scale-105 ${
      darkMode 
        ? "hover:bg-white/10 hover:border-[#7dd3fc]/40 hover:shadow-[0_0_40px_rgba(125,211,252,0.2)]" 
        : "hover:bg-black/10 hover:border-[#0284c7]/40 hover:shadow-[0_0_40px_rgba(2,132,199,0.1)]"
    }`;

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const frontendSkills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ];

  const backendSkills = [
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ];

  const tools = [
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  const themeColors = {
    bg: darkMode ? "linear-gradient(135deg, #020c18 0%, #041526 40%, #062035 70%, #031020 100%)" : "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    textPrimary: darkMode ? "#e0f2fe" : "#0c4a6e",
    textSecondary: darkMode ? "#93c5fd" : "#0369a1",
    accent: darkMode ? "#7dd3fc" : "#0284c7",
    accentHover: darkMode ? "#38bdf8" : "#0ea5e9",
    navBg: darkMode ? "rgba(2, 12, 24, 0.6)" : "rgba(255, 255, 255, 0.6)",
    cardBg: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
    border: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        background: themeColors.bg,
        color: themeColors.textPrimary,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full opacity-10 blur-3xl" 
          style={{ width: 600, height: 600, background: `radial-gradient(circle, ${themeColors.accent}, transparent)`, top: "-100px", left: "-100px" }} 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute rounded-full opacity-10 blur-3xl" 
          style={{ width: 500, height: 500, background: `radial-gradient(circle, ${themeColors.accentHover}, transparent)`, bottom: "10%", right: "-80px" }} 
        />
        <div className="absolute rounded-full opacity-5 blur-3xl transition-all duration-1000" style={{ width: 400, height: 400, background: `radial-gradient(circle, ${themeColors.accent}, transparent)`, top: "50%", left: "40%" }} />
      </div>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full z-50 border-b transition-all duration-300"
        style={{ 
          background: themeColors.navBg, 
          backdropFilter: "blur(20px)", 
          boxShadow: darkMode ? "0 4px 30px rgba(56, 189, 248, 0.08)" : "0 4px 30px rgba(0, 0, 0, 0.05)",
          borderColor: themeColors.border
        }}
      >
        <div className="w-full px-6 md:px-10 h-16 flex items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold cursor-pointer tracking-tight" style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 20px ${themeColors.accent}80` : "none" }}>Portfolio
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {["home", "about", "projects", "skills", "experience"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="px-4 py-2 rounded-lg capitalize transition duration-200"
                style={{ 
                  color: themeColors.textSecondary,
                  background: themeColors.cardBg, 
                  border: `1px solid ${themeColors.border}` 
                }}
                onMouseEnter={e => e.currentTarget.style.background = darkMode ? "rgba(125,211,252,0.1)" : "rgba(2, 132, 199, 0.05)"}
                onMouseLeave={e => e.currentTarget.style.background = themeColors.cardBg}
              >
                {item === "skills" ? "Skills & Tools" : item === "experience" ? "Experience" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            
            <button
              onClick={() => handleScroll("contact")}
              className="px-4 py-2 rounded-lg font-semibold transition duration-200"
              style={{ 
                color: darkMode ? "#0c1a2e" : "#ffffff",
                background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`, 
                boxShadow: darkMode ? "0 0 20px rgba(56,189,248,0.4)" : "0 4px 12px rgba(2, 132, 199, 0.2)" 
              }}
            >
              Contact
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="ml-4 p-2.5 rounded-xl transition-all duration-300 hover:rotate-12"
              style={{ 
                background: themeColors.cardBg, 
                border: `1px solid ${themeColors.border}`,
                color: themeColors.accent
              }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg"
              style={{ color: themeColors.accent }}
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={() => setMenuOpen(true)} className="flex flex-col gap-1.5 p-2 group">
              <span className="block w-6 h-0.5 transition-all group-hover:w-4" style={{ background: themeColors.accent }}></span>
              <span className="block w-6 h-0.5" style={{ background: themeColors.accent }}></span>
              <span className="block w-6 h-0.5 transition-all group-hover:w-4" style={{ background: themeColors.accent }}></span>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />}

      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 border-l transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ 
          background: darkMode ? "rgba(4, 21, 38, 0.95)" : "rgba(240, 249, 255, 0.95)", 
          backdropFilter: "blur(20px)",
          borderColor: themeColors.border
        }}
      >
        <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: themeColors.border }}>
          <h2 className="text-xl font-bold" style={{ color: themeColors.accent }}>Menu</h2>
          <button onClick={() => setMenuOpen(false)} style={{ color: themeColors.accent }} className="p-2 transition-rotate hover:rotate-90">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          {["about", "projects", "skills", "experience", "contact"].map((item) => (
            <button 
              key={item} 
              onClick={() => handleScroll(item)} 
              className="text-left text-lg capitalize transition"
              style={{ color: themeColors.textSecondary }}
            >
              {item === "skills" ? "Skills & Tools" : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <motion.div 
        id="home" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10 min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 pt-28 gap-10"
      >
        <motion.div variants={fadeInUp} className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium" 
            style={{ 
              color: darkMode ? "#0c1a2e" : "#ffffff",
              background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`, 
              boxShadow: darkMode ? "0 0 15px rgba(56,189,248,0.4)" : "0 4px 12px rgba(2, 132, 199, 0.2)" 
            }}>
            <Zap className="w-4 h-4" /> Welcome to my portfolio
          </motion.span>
          <div className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span>Hi, I'm </span>
            <span style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 30px ${themeColors.accent}60` : "none" }}>Adrich Fernandes</span>
          </div>
          <p className="text-lg max-w-xl mx-auto md:mx-0 leading-relaxed" style={{ color: themeColors.textSecondary }}>
            A passionate Full Stack Developer creating beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {[
              { href: "https://github.com/Adrich-Fernandes", icon: <Github className="w-5 h-5" /> },
              { href: "https://www.linkedin.com/in/adrich-fernandes-b14b2034b/", icon: <Linkedin className="w-5 h-5" /> },
              { href: "mailto:adrichancyfernandes@gmail.com", icon: <Mail className="w-5 h-5" /> },
            ].map((social, i) => (
              <motion.a 
                key={i} 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href} 
                target={social.href.startsWith("mailto:") ? undefined : "_blank"} 
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} 
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition duration-300" 
                style={{ 
                  background: themeColors.cardBg, 
                  border: `1px solid ${themeColors.accent}40`, 
                  boxShadow: darkMode ? "0 0 10px rgba(56,189,248,0.1)" : "none",
                  color: themeColors.accent
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("projects")} 
              className="px-6 py-3 rounded-xl font-semibold transition duration-300 flex items-center gap-2" 
              style={{ border: `1px solid ${themeColors.accent}80`, color: themeColors.accent, background: `${themeColors.accent}10` }} 
            >
              View My Work <Layout className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("contact")} 
              className="px-6 py-3 rounded-xl font-semibold transition duration-300 flex items-center gap-2" 
              style={{ border: `1px solid ${themeColors.accent}80`, color: themeColors.accent, background: `${themeColors.accent}10` }} 
            >
              Get In Touch <MessageSquare className="w-4 h-4" />
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: darkMode ? "0 0 30px rgba(56,189,248,0.6)" : "0 8px 20px rgba(2, 132, 199, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="/Adrich-Fernandes.pdf?v=3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-xl font-semibold transition duration-300 text-center flex items-center gap-2" 
              style={{ 
                color: darkMode ? "#0c1a2e" : "#ffffff",
                background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`, 
                boxShadow: darkMode ? "0 0 20px rgba(56,189,248,0.4)" : "0 4px 12px rgba(2, 132, 199, 0.2)" 
              }}
            >
              View My Resume <Download className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative p-1 rounded-full group" 
            style={{ 
              background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent}, #bae6fd)`, 
              boxShadow: darkMode ? "0 0 60px rgba(56,189,248,0.4)" : "0 10px 40px rgba(2, 132, 199, 0.15)" 
            }}>
            <img
              src="https://w0.peakpx.com/wallpaper/631/529/HD-wallpaper-vagabond-art-manga-slam-dunk-takehiko-inoue-vagabond.jpg"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover transition duration-700 group-hover:scale-105"
              style={{ filter: darkMode ? "brightness(1.1) contrast(1.05) saturate(0.9) hue-rotate(10deg)" : "none" }}
            />
            <div className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700 group-hover:inset-[-10px]" style={{ border: darkMode ? "2px solid rgba(186,230,253,0.3)" : "2px solid rgba(2, 132, 199, 0.1)", boxShadow: darkMode ? "inset 0 0 30px rgba(56,189,248,0.1)" : "none" }} />
          </div>
        </motion.div>
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div 
        id="about" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 min-h-screen px-6 md:px-16 py-44"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 20px ${themeColors.accent}66` : "none" }}>About Me</h2>
          <p style={{ color: themeColors.textSecondary }} className="text-lg max-w-2xl mx-auto">I'm a developer who loves crafting digital experiences that make a difference</p>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { icon: <Code2 className="w-10 h-10" />, title: "Clean Code", desc: "Writing maintainable, scalable code that follows best practices and industry standards" },
            { icon: <Zap className="w-10 h-10" />, title: "Performance", desc: "Optimizing applications for speed, efficiency, and exceptional user experience" },
            { icon: <Layout className="w-10 h-10" />, title: "UI Design", desc: "Creating beautiful, intuitive interfaces that users love to interact with" },
          ].map((card, i) => (
            <motion.div key={i} variants={fadeInUp} className={`${glassCardHover} p-8`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${themeColors.accent}1a`, border: `1px solid ${themeColors.accent}33`, color: themeColors.accent }}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: themeColors.accent }}>{card.title}</h3>
              <p style={{ color: themeColors.textSecondary }} className="leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* PROJECTS SECTION */}
      <motion.div 
        id="projects" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 min-h-screen px-6 md:px-16 py-24"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 20px ${themeColors.accent}66` : "none" }}>Projects</h2>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[
            { 
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", 
              title: "GreenNest", 
              desc: "A full-stack gardening platform featuring a 3-tier architecture, automated stock management, and service booking engine.",
              link: "https://github.com/Adrich-Fernandes/GreenNest"
            },
            { 
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", 
              title: "RentEase", 
              desc: "A MERN-stack rental platform with Clerk authentication, real-time order tracking, and role-based management.",
              link: "https://github.com/Adrich-Fernandes/RENT_EASY"
            },
            { 
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475", 
              title: "Product List", 
              desc: "A responsive product listing application demonstrating state management and modern functional design.",
              link: "https://github.com/Adrich-Fernandes/product-List"
            },
            { 
              img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", 
              title: "AI-Extension", 
              desc: "An intelligent browser extension incorporating artificial intelligence capabilities to boost productivity.",
              link: "https://github.com/Adrich-Fernandes/AI-Extension"
            },
          ].map((project, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className={`${glassCard} overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(125,211,252,0.2)] transition-shadow duration-500`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" style={{ filter: darkMode ? "brightness(0.8) contrast(1.1)" : "none" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <p className="text-white text-sm font-medium">Click to view on GitHub</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.accent }}>{project.title}</h3>
                <p style={{ color: themeColors.textSecondary }} className="leading-relaxed mb-6 flex-grow">{project.desc}</p>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-fit px-5 py-2 rounded-xl text-sm font-semibold transition duration-300 inline-flex items-center gap-2" 
                  style={{ 
                    color: darkMode ? "#0c1a2e" : "#ffffff",
                    background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`, 
                    boxShadow: darkMode ? "0 0 15px rgba(56,189,248,0.3)" : "0 4px 12px rgba(2, 132, 199, 0.15)" 
                  }}>
                  GitHub <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* SKILLS & TOOLS SECTION */}
      <motion.div 
        id="skills" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full py-28 px-6 md:px-16"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 20px ${themeColors.accent}66` : "none" }}>
            Skills & Tools
          </h2>
          <p style={{ color: themeColors.textSecondary }} className="mt-3 text-sm max-w-xl mx-auto">
            Languages, frameworks, and tools I work with
          </p>
 
          {/* Toggle */}
          <div className="flex justify-center mt-8 mb-10">
            <div className="flex p-1 rounded-full" style={{ background: themeColors.cardBg, border: `1px solid ${themeColors.accent}33` }}>
               {["skills", "tools"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-10 py-2 rounded-full text-sm font-semibold capitalize transition duration-300 relative z-10"
                  style={{ color: activeTab === tab ? (darkMode ? "#0c1a2e" : "#ffffff") : themeColors.textSecondary }}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ 
                        background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`,
                        boxShadow: darkMode ? `0 0 20px ${themeColors.accent}66` : "none" 
                      }}
                    />
                  )}
                  {tab === "skills" ? "Skills" : "Tools"}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
              
        <AnimatePresence mode="wait">
          {activeTab === "skills" ? (
            <motion.div 
              key="skills-grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-4xl mx-auto flex flex-col gap-10"
            >
              <div>
                <h3 className="text-xl font-bold text-center mb-6" style={{ color: themeColors.accent }}>Frontend</h3>
                <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {frontendSkills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-colors duration-300"
                      style={{ background: darkMode ? "rgba(10,30,60,0.8)" : "rgba(255,255,255,0.8)", border: `1px solid ${themeColors.accent}26` }}
                    >
                      <img src={skill.img} alt={skill.name} className="w-12 h-12 object-contain" />
                      <span style={{ color: themeColors.textSecondary, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em" }}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-center mb-6" style={{ color: themeColors.accent }}>Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {backendSkills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-colors duration-300"
                      style={{ background: darkMode ? "rgba(10,30,60,0.8)" : "rgba(255,255,255,0.8)", border: `1px solid ${themeColors.accent}26` }}
                    >
                      <img src={skill.img} alt={skill.name} className="w-12 h-12 object-contain" style={{ filter: skill.name === "Express" ? "invert(0.6)" : "none" }} />
                      <span style={{ color: themeColors.textSecondary, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em" }}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="tools-grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-colors duration-300"
                  style={{ background: darkMode ? "rgba(10,30,60,0.8)" : "rgba(255,255,255,0.8)", border: `1px solid ${themeColors.accent}26` }}
                >
                  <img src={tool.img} alt={tool.name} className="w-12 h-12 object-contain" style={{ filter: tool.invert ? (darkMode ? "invert(0.6)" : "invert(1) brightness(0.2)") : "none" }} />
                  <span style={{ color: themeColors.textSecondary, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em" }}>{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* EXPERIENCE SECTION */}
      <motion.div 
        id="experience" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full py-28 px-6 md:px-16"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 20px ${themeColors.accent}66` : "none" }}>Experience</h2>
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          className="max-w-6xl mx-auto rounded-3xl p-10 transition duration-500 hover:shadow-[0_0_50px_rgba(125,211,252,0.15)]" 
          style={{ 
            background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", 
            backdropFilter: "blur(16px)", 
            border: `1px solid ${themeColors.border}` 
          }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-28 h-28 rounded-full overflow-hidden" style={{ border: `2px solid ${themeColors.accent}80`, boxShadow: darkMode ? `0 0 20px ${themeColors.accent}4d` : "none" }}>
                <img
                  src={unifiedMentorLogo}
                  alt="Company Logo"
                  className="w-full h-full object-cover"
                  style={{ filter: darkMode ? "brightness(1.1) contrast(1.1)" : "none" }}
                />
              </div>
              <span className="text-2xl font-bold" style={{ color: themeColors.textPrimary }}>Unified Mentor</span>
              <span style={{ color: themeColors.textSecondary }} className="text-sm">Oct 2025 - Nov 2025</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ color: darkMode ? "#0c1a2e" : "#ffffff", background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})` }}>
                Internship
              </span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold" style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 20px ${themeColors.accent}80` : "none" }}>MERN Stack</span>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-auto">
              {[
                { title: "GreenNest", desc: "A 3-tier gardening platform with automated inventory control.", link: "https://github.com/Adrich-Fernandes/GreenNest" },
                { title: "RentEase", desc: "A MERN rental platform with real-time tracking.", link: "https://github.com/Adrich-Fernandes/RENT_EASY" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl flex flex-col justify-between gap-4" style={{ background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", border: `1px solid ${themeColors.border}` }}>
                  <div>
                    <p className="font-semibold mb-2" style={{ color: themeColors.accent }}>{item.title}</p>
                    <p style={{ color: themeColors.textSecondary }} className="text-sm">{item.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 text-sm font-semibold rounded-lg transition duration-300 inline-flex items-center gap-2" 
                      style={{ 
                        color: darkMode ? "#0c1a2e" : "#ffffff",
                        background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`, 
                        boxShadow: darkMode ? "0 0 12px rgba(56,189,248,0.3)" : "0 4px 10px rgba(2, 132, 199, 0.1)" 
                      }}>
                      View <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CONTACT SECTION */}
      <div id="contact" className="relative z-10 w-full py-28 px-6 md:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: themeColors.accent, textShadow: darkMode ? `0 0 20px ${themeColors.accent}66` : "none" }}>Get In Touch</h2>
          <p style={{ color: themeColors.textSecondary }} className="mt-4 text-lg">Have a project in mind or just want to chat? I'd love to hear from you</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: themeColors.textPrimary }}>Let's Connect</h3>
            <p style={{ color: themeColors.textSecondary }} className="leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or contact details below.
            </p>
            {[
              { icon: <Mail className="w-6 h-6" />, label: "Email", value: contactEmail },
              { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Goa, India" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 mb-8"
              >
                <div className="p-4 rounded-xl text-xl" style={{ background: `${themeColors.accent}1a`, border: `1px solid ${themeColors.accent}33`, color: themeColors.accent }}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: themeColors.textPrimary }}>{item.label}</h4>
                  <p style={{ color: themeColors.textSecondary }}>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-10 rounded-3xl transition duration-500 hover:shadow-[0_0_50px_rgba(125,211,252,0.15)]"
            style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", backdropFilter: "blur(16px)", border: `1px solid ${themeColors.border}` }}
          >
            <div className="space-y-6">
              {[
                { label: "Name", type: "text", name: "name", placeholder: "John Doe" },
                { label: "Email", type: "email", name: "email", placeholder: "john@example.com" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block mb-2 font-medium text-sm" style={{ color: themeColors.textSecondary }}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full rounded-xl px-4 py-3 outline-none transition duration-300"
                    style={{ 
                      background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", 
                      border: `1px solid ${themeColors.border}`,
                      color: themeColors.textPrimary
                    }}
                    onFocus={e => { e.target.style.border = `1px solid ${themeColors.accent}99`; e.target.style.boxShadow = `0 0 15px ${themeColors.accent}33`; }}
                    onBlur={e => { e.target.style.border = `1px solid ${themeColors.border}`; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              ))}
              <div>
                <label className="block mb-2 font-medium text-sm" style={{ color: themeColors.textSecondary }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl px-4 py-3 outline-none transition duration-300 resize-none"
                  style={{ 
                    background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", 
                    border: `1px solid ${themeColors.border}`,
                    color: themeColors.textPrimary
                  }}
                  onFocus={e => { e.target.style.border = `1px solid ${themeColors.accent}99`; e.target.style.boxShadow = `0 0 15px ${themeColors.accent}33`; }}
                  onBlur={e => { e.target.style.border = `1px solid ${themeColors.border}`; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  color: (status === "success" || status === "error") ? "#ffffff" : (darkMode ? "#0c1a2e" : "#ffffff"),
                  background: status === "success" ? "linear-gradient(135deg, #22c55e, #4ade80)" : status === "error" ? "linear-gradient(135deg, #ef4444, #f87171)" : `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`,
                  boxShadow: status === "success" ? "0 0 25px rgba(34,197,94,0.4)" : status === "error" ? "0 0 25px rgba(239,68,68,0.4)" : darkMode ? `0 0 25px ${themeColors.accent}66` : `0 4px 15px ${themeColors.accent}33`,
                }}
              >
                {status === "submitting" ? (
                  <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : status === "success" ? (
                  <>Message Sent! <CheckCircle2 className="w-5 h-5" /></>
                ) : status === "error" ? (
                  <>Error Sending! <AlertCircle className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </motion.button>
              <AnimatePresence>
                {status === "success" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[#4ade80] text-sm font-medium"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[#f87171] text-sm font-medium"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 border-t" style={{ borderColor: themeColors.border }}>
        <p style={{ color: themeColors.textSecondary }} className="text-sm flex items-center justify-center gap-2">
        <span className="font-bold" style={{ color: themeColors.accent }}>Adrich Fernandes</span>
        </p>
      </footer>
    </div>
  );
}
