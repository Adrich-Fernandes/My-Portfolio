import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Brain } from "lucide-react";

const ICON_MAP = { Server, Database, Brain };

export default function SkillsSection({ darkMode, themeColors, fadeInUp, staggerContainer, skillCategories }) {
  return (
    <motion.div
      id="skills"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative z-10 w-full py-28 px-6 md:px-16"
    >
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold shimmer-text">Technical Skills</h2>
        <div className="section-divider mt-4" />
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {skillCategories.map((category, idx) => {
          const IconComponent = ICON_MAP[category.icon] || Server;
          return (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ boxShadow: `0 0 40px ${themeColors.accent}20` }}
              className="p-8 rounded-2xl"
              style={{
                background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                border: `1px solid ${themeColors.accent}${darkMode ? "33" : "4d"}`,
                transition: "box-shadow 0.4s ease"
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="p-2 rounded-lg"
                  style={{ background: `${themeColors.accent}1a`, color: themeColors.accent }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>
                <h3 className="text-2xl font-bold" style={{ color: themeColors.textPrimary }}>{category.title}</h3>
              </div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{ initial: {}, animate: { transition: { staggerChildren: 0.07 } } }}
                className="flex flex-wrap gap-4"
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={{ initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } }}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 18px ${themeColors.accent}40`, borderColor: themeColors.accent, color: themeColors.accent }}
                    className="skill-pill px-5 py-2.5 rounded-full text-sm font-medium cursor-default"
                    style={{
                      backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                      border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                      color: themeColors.textPrimary
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
