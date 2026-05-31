import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import unifiedMentorLogo from "../assets/unifiedmentor.png";

const PROJECTS = [
  { title: "GreenNest", desc: "A 3-tier gardening platform with automated inventory control.", link: "https://github.com/Adrich-Fernandes/GreenNest" },
  { title: "RentEase", desc: "A MERN rental platform with real-time tracking.", link: "https://github.com/Adrich-Fernandes/RENT_EASY" },
];

export default function ExperienceSection({ darkMode, themeColors, fadeInUp, fadeInLeft, fadeInRight, staggerContainer }) {
  return (
    <motion.div
      id="experience"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative z-10 w-full py-20 md:py-28 px-4 sm:px-6 md:px-16"
    >
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold shimmer-text">Experience</h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        whileHover={{ boxShadow: "0 0 60px rgba(125,211,252,0.15)" }}
        className="max-w-6xl mx-auto rounded-3xl p-5 sm:p-8 md:p-10"
        style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", backdropFilter: "blur(16px)", border: `1px solid ${themeColors.border}`, transition: "box-shadow 0.5s ease" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">

          {/* Company info */}
          <motion.div variants={fadeInLeft} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${themeColors.accent}60` }}
              className="w-28 h-28 rounded-full overflow-hidden"
              style={{ border: `2px solid ${themeColors.accent}80`, boxShadow: darkMode ? `0 0 20px ${themeColors.accent}4d` : "none" }}
            >
              <img src={unifiedMentorLogo} alt="Unified Mentor" className="w-full h-full object-cover" />
            </motion.div>
            <span className="text-2xl font-bold" style={{ color: themeColors.textPrimary }}>Unified Mentor</span>
            <span style={{ color: themeColors.textSecondary }} className="text-sm">Oct 2025 – Nov 2025</span>
            <motion.span
              animate={{ boxShadow: ["0 0 10px rgba(125,211,252,0.3)", "0 0 25px rgba(125,211,252,0.6)", "0 0 10px rgba(125,211,252,0.3)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ color: darkMode ? "#0c1a2e" : "#fff", background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})` }}
            >
              Internship
            </motion.span>
          </motion.div>

          {/* Role title */}
          <motion.div variants={fadeInUp} className="text-center">
            <motion.span
              animate={{ textShadow: [`0 0 10px ${themeColors.accent}80`, `0 0 30px ${themeColors.accent}cc`, `0 0 10px ${themeColors.accent}80`] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-3xl font-bold shimmer-text"
            >
              MERN Stack
            </motion.span>
          </motion.div>

          {/* Projects */}
          <motion.div variants={fadeInRight} className="flex flex-col gap-6 w-full md:w-auto">
            {PROJECTS.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6, boxShadow: `0 0 25px ${themeColors.accent}25` }}
                className="p-6 rounded-2xl flex flex-col justify-between gap-4"
                style={{ background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", border: `1px solid ${themeColors.border}`, transition: "all 0.3s ease" }}
              >
                <div>
                  <p className="font-semibold mb-2" style={{ color: themeColors.accent }}>{item.title}</p>
                  <p style={{ color: themeColors.textSecondary }} className="text-sm">{item.desc}</p>
                </div>
                <div className="flex justify-end">
                  <motion.a
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    href={item.link} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold rounded-lg inline-flex items-center gap-2"
                    style={{ color: darkMode ? "#0c1a2e" : "#fff", background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})` }}
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
