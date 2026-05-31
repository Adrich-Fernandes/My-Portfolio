import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection({ darkMode, themeColors, glassCard, fadeInUp, staggerContainer, projects }) {
  return (
    <motion.div
      id="projects"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative z-10 min-h-screen px-4 sm:px-6 md:px-16 py-20 md:py-24"
    >
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold shimmer-text">Projects</h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className={`${glassCard} overflow-hidden flex flex-col group rounded-2xl`}
            style={{ transition: "box-shadow 0.4s ease", isolation: "isolate" }}

            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 50px ${themeColors.accent}33`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ""}
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                style={{ filter: darkMode ? "brightness(0.8) contrast(1.1)" : "none" }}
              />
              {/* Overlay shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-blue-200 text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</p>
              </div>
              {/* Top shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.accent }}>{project.title}</h3>
              <p style={{ color: themeColors.textSecondary }} className="leading-relaxed mb-6 flex-grow">{project.desc}</p>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${themeColors.accent}50` }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-5 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
                style={{ color: darkMode ? "#0c1a2e" : "#fff", background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})` }}
              >
                GitHub <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
