import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, X } from "lucide-react";

import HeroSection      from "./HeroSection";
import AboutSection     from "./AboutSection";
import ProjectsSection  from "./ProjectsSection";
import SkillsSection    from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection   from "./ContactSection";

/* ── Ambient floating particles ── */
function Particles({ themeColors }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125,211,252,${p.alpha})`;
        ctx.fill();
      });
      // Draw faint connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(125,211,252,${0.07 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />;
}

/* Custom cursor removed */

/* ── Main component ── */
const PortfolioHome = ({
  darkMode, toggleDarkMode, themeColors, glassCard, glassCardHover,
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerFast,
  skillCategories, menuOpen, setMenuOpen, projects,
  handleScroll, handleSubmit, handleChange, formData, status, contactEmail
}) => {

  const NAV_ITEMS = ["home","about","projects","skills","experience"];

  return (
    <div
      className="min-h-screen transition-colors duration-500 grain-overlay"
      style={{ background: themeColors.bg, color: themeColors.textPrimary, fontFamily: "'Inter', sans-serif" }}
    >
      <Particles themeColors={themeColors} />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1,1.15,1], x: [0,25,0], y: [0,-25,0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{ width:600, height:600, background:`radial-gradient(circle,${themeColors.accent},transparent)`, top:"-100px", left:"-100px" }}
        />
        <motion.div
          animate={{ scale: [1,1.2,1], x: [0,-30,0], y: [0,30,0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{ width:500, height:500, background:`radial-gradient(circle,${themeColors.accentHover},transparent)`, bottom:"10%", right:"-80px" }}
        />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b transition-all duration-300"
        style={{ background: themeColors.navBg, backdropFilter:"blur(20px)", borderColor: themeColors.border, boxShadow: darkMode ? "0 4px 30px rgba(56,189,248,0.08)" : "0 4px 30px rgba(0,0,0,0.05)" }}>
        <div className="w-full px-6 md:px-10 h-16 flex items-center">
          <div className="flex-1">
            <motion.h1
              animate={{ textShadow: [`0 0 10px ${themeColors.accent}60`, `0 0 30px ${themeColors.accent}cc`, `0 0 10px ${themeColors.accent}60`] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-2xl md:text-3xl font-extrabold cursor-pointer tracking-tight shimmer-text"
            >
              Portfolio
            </motion.h1>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {NAV_ITEMS.map(item => (
              <button key={item} onClick={() => handleScroll(item)}
                className="nav-link px-4 py-2 rounded-lg capitalize transition duration-200"
                style={{ color: themeColors.textSecondary, background: themeColors.cardBg, border: `1px solid ${themeColors.border}` }}
                onMouseEnter={e => e.currentTarget.style.background = darkMode ? "rgba(125,211,252,0.1)" : "rgba(2,132,199,0.05)"}
                onMouseLeave={e => e.currentTarget.style.background = themeColors.cardBg}
              >
                {item === "skills" ? "Skills & Tools" : item === "experience" ? "Experience" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("contact")}
              className="px-4 py-2 rounded-lg font-semibold"
              style={{ color: darkMode ? "#0c1a2e" : "#fff", background: `linear-gradient(135deg,${themeColors.accentHover},${themeColors.accent})`, boxShadow:"0 0 20px rgba(56,189,248,0.4)" }}>
              Contact
            </motion.button>
            <motion.button whileHover={{ rotate: 20 }} onClick={toggleDarkMode}
              className="ml-2 p-2.5 rounded-xl transition-all duration-300"
              style={{ background: themeColors.cardBg, border: `1px solid ${themeColors.border}`, color: themeColors.accent }}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile menu btn */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} style={{ color: themeColors.accent }}>
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={() => setMenuOpen(true)} className="flex flex-col gap-1.5 p-2 group">
              <span className="block w-6 h-0.5 transition-all group-hover:w-4" style={{ background: themeColors.accent }} />
              <span className="block w-6 h-0.5" style={{ background: themeColors.accent }} />
              <span className="block w-6 h-0.5 transition-all group-hover:w-4" style={{ background: themeColors.accent }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" />
            <motion.div initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }}
              transition={{ type:"spring", stiffness:300, damping:30 }}
              className="fixed top-0 right-0 h-full w-64 z-50 border-l"
              style={{ background: darkMode ? "rgba(4,21,38,0.97)" : "rgba(240,249,255,0.97)", backdropFilter:"blur(20px)", borderColor: themeColors.border }}>
              <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: themeColors.border }}>
                <h2 className="text-xl font-bold" style={{ color: themeColors.accent }}>Menu</h2>
                <motion.button whileHover={{ rotate: 90 }} onClick={() => setMenuOpen(false)} style={{ color: themeColors.accent }}>
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="flex flex-col p-6 gap-6">
                {["about","projects","skills","experience","contact"].map((item, i) => (
                  <motion.button key={item} initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ delay: i * 0.07 }}
                    onClick={() => handleScroll(item)} className="text-left text-lg capitalize transition hover:translate-x-2"
                    style={{ color: themeColors.textSecondary }}>
                    {item === "skills" ? "Skills & Tools" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── SECTIONS ── */}
      <HeroSection
        darkMode={darkMode} themeColors={themeColors}
        fadeInUp={fadeInUp} fadeInRight={fadeInRight} scaleIn={scaleIn}
        staggerContainer={staggerContainer} handleScroll={handleScroll}
      />

      <AboutSection
        darkMode={darkMode} themeColors={themeColors}
        glassCardHover={glassCardHover}
        fadeInUp={fadeInUp} fadeInLeft={fadeInLeft} fadeInRight={fadeInRight}
        staggerContainer={staggerContainer}
      />

      <ProjectsSection
        darkMode={darkMode} themeColors={themeColors} glassCard={glassCard}
        fadeInUp={fadeInUp} staggerContainer={staggerContainer} projects={projects}
      />

      <SkillsSection
        darkMode={darkMode} themeColors={themeColors}
        fadeInUp={fadeInUp} staggerContainer={staggerContainer} skillCategories={skillCategories}
      />

      <ExperienceSection
        darkMode={darkMode} themeColors={themeColors}
        fadeInUp={fadeInUp} fadeInLeft={fadeInLeft} fadeInRight={fadeInRight}
        staggerContainer={staggerContainer}
      />

      <ContactSection
        darkMode={darkMode} themeColors={themeColors} glassCard={glassCard}
        fadeInUp={fadeInUp} fadeInLeft={fadeInLeft} fadeInRight={fadeInRight}
        staggerContainer={staggerContainer}
        formData={formData} handleChange={handleChange}
        handleSubmit={handleSubmit} status={status}
      />

      {/* ── FOOTER ── */}
      <div className="relative z-10 text-center py-8 border-t" style={{ borderColor: themeColors.border }}>
        <p style={{ color: "#9ca3af" }} className="text-sm">© Adrich Fernandes</p>
      </div>
    </div>
  );
};

export default PortfolioHome;
