import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Layout } from "lucide-react";

const STATS = [
  { label: "Projects Built", value: "10+" },
  { label: "Months Experience", value: "6+" },
  { label: "Technologies", value: "15+" },
];

export default function AboutSection({ darkMode, themeColors, glassCardHover, fadeInUp, fadeInLeft, fadeInRight, staggerContainer }) {
  const cards = [
    { icon: <Code2 className="w-10 h-10" />, title: "Clean Code", desc: "Writing maintainable, scalable code that follows best practices and industry standards." },
    { icon: <Zap className="w-10 h-10" />, title: "Performance", desc: "Optimizing applications for speed, efficiency, and exceptional user experience." },
    { icon: <Layout className="w-10 h-10" />, title: "UI Design", desc: "Creating beautiful, intuitive interfaces that users love to interact with." },
  ];

  return (
    <motion.div
      id="about"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative z-10 min-h-screen px-6 md:px-16 py-32"
    >
      {/* Heading */}
      <motion.div variants={fadeInUp} className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold shimmer-text">About Me</h2>
        <div className="section-divider" />
      </motion.div>

      {/* Stat counters */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-20"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ scale: 1.08, boxShadow: `0 0 30px ${themeColors.accent}40` }}
            className="flex flex-col items-center p-4 rounded-2xl"
            style={{ background: themeColors.cardBg, border: `1px solid ${themeColors.accent}30` }}
          >
            <span className="text-3xl font-black shimmer-text">{s.value}</span>
            <span className="text-xs mt-1 text-center" style={{ color: themeColors.textSecondary }}>{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Cards */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={i === 0 ? fadeInLeft : i === 2 ? fadeInRight : fadeInUp}
            whileHover={{ y: -8, boxShadow: `0 20px 40px ${themeColors.accent}25` }}
            className={`${glassCardHover} p-8`}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `${themeColors.accent}1a`, border: `1px solid ${themeColors.accent}33`, color: themeColors.accent }}
            >
              {card.icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-4" style={{ color: themeColors.accent }}>{card.title}</h3>
            <p style={{ color: themeColors.textSecondary }} className="leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
