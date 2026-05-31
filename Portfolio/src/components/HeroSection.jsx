import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Zap, Layout, MessageSquare, Download } from "lucide-react";

const TYPING_WORDS = ["Backend Developer", "AI Integrator", "Node.js Engineer", "API Architect"];

export default function HeroSection({ darkMode, themeColors, fadeInUp, fadeInRight, scaleIn, staggerContainer, handleScroll }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  const socials = [
    { href: "https://github.com/Adrich-Fernandes", icon: <Github className="w-5 h-5" /> },
    { href: "https://www.linkedin.com/in/adrich-fernandes-b14b2034b/", icon: <Linkedin className="w-5 h-5" /> },
    { href: "mailto:adrichancyfernandes@gmail.com", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <motion.div
      id="home"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-16 pt-24 md:pt-28 gap-8 md:gap-10 overflow-hidden"
    >
      {/* Text side */}
      <motion.div variants={fadeInUp} className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
        <motion.span
          variants={scaleIn}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold glow-badge"
          style={{ color: darkMode ? "#0c1a2e" : "#fff", background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})` }}
        >
          <Zap className="w-4 h-4" /> Open to opportunities
        </motion.span>

        <motion.div variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          <span>Hi, I'm </span>
          <span className="shimmer-text">Adrich Fernandes</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-xl md:text-2xl font-bold h-8" style={{ color: themeColors.textSecondary }}>
          <span>{displayed}</span>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-base max-w-xl mx-auto md:mx-0 leading-relaxed" style={{ color: themeColors.textSecondary }}>
          Backend developer specializing in AI-integrated systems. I build and embed AI into real-world applications backed by REST APIs, JWT auth, and scalable databases using Node.js, Express.js, MongoDB — deployed on Azure.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex gap-4 justify-center md:justify-start">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.15, rotate: 8, boxShadow: `0 0 20px ${themeColors.accent}60` }}
              whileTap={{ scale: 0.9 }}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: themeColors.cardBg, border: `1px solid ${themeColors.accent}40`, color: themeColors.accent }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleScroll("projects")}
            className="btn-ripple px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold flex items-center gap-2 text-sm sm:text-base"
            style={{ border: `1px solid ${themeColors.accent}80`, color: themeColors.accent, background: `${themeColors.accent}10` }}>
            View My Work <Layout className="w-4 h-4" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleScroll("contact")}
            className="btn-ripple px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold flex items-center gap-2 text-sm sm:text-base"
            style={{ border: `1px solid ${themeColors.accent}80`, color: themeColors.accent, background: `${themeColors.accent}10` }}>
            Get In Touch <MessageSquare className="w-4 h-4" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56,189,248,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="/Adrich-Fernandes.pdf?v=3" target="_blank" rel="noopener noreferrer"
            className="btn-ripple px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold flex items-center gap-2 text-sm sm:text-base"
            style={{ color: darkMode ? "#0c1a2e" : "#fff", background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`, boxShadow: "0 0 20px rgba(56,189,248,0.4)" }}>
            View Resume <Download className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Avatar side */}
      <motion.div
        variants={fadeInRight}
        className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2"
      >
        <div className="relative">
          {/* Orbiting dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto"
            style={{ width: "110%", height: "110%", top: "-5%", left: "-5%" }}
          >
            <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 pulse-glow"
              style={{ background: themeColors.accent }} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto"
            style={{ width: "125%", height: "125%", top: "-12.5%", left: "-12.5%" }}
          >
            <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full"
              style={{ background: themeColors.accentHover }} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-1 rounded-full group overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent}, #bae6fd)`, boxShadow: "0 0 60px rgba(56,189,248,0.4)" }}
          >
            <img
              src="https://w0.peakpx.com/wallpaper/631/529/HD-wallpaper-vagabond-art-manga-slam-dunk-takehiko-inoue-vagabond.jpg"
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover transition duration-700 group-hover:scale-105"
              style={{ filter: darkMode ? "brightness(1.1) contrast(1.05) saturate(0.9) hue-rotate(10deg)" : "none" }}
            />
            <div className="absolute inset-0 rounded-full pointer-events-none shimmer-border"
              style={{ border: "2px solid rgba(186,230,253,0.3)" }} />
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  );
}
