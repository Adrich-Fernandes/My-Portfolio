import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactSection({
  darkMode, themeColors, glassCard,
  fadeInUp, fadeInLeft, fadeInRight, staggerContainer,
  formData, handleChange, handleSubmit, status
}) {
  return (
    <motion.div
      id="contact"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative z-10 w-full py-20 md:py-28 px-4 sm:px-6 md:px-16"
    >
      {/* Heading */}
      <motion.div variants={fadeInUp} className="text-center mb-16 space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold shimmer-text">Get In Touch</h2>
        <p style={{ color: themeColors.textSecondary }} className="text-lg">
          Have a project in mind or just want to chat? I'd love to hear from you
        </p>
        <div className="section-divider mt-4" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left — info */}
        <motion.div variants={fadeInLeft} className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: themeColors.textPrimary }}>Let's Connect</h3>
            <p style={{ color: themeColors.textSecondary }} className="leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through the form or contact details below.
            </p>
          </div>

          {/* Contact info cards */}
          {[
            { icon: <Mail className="w-5 h-5" />, label: "Email", value: "adrichancyfernandes@gmail.com" },
            { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "kumta, Karnataka" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 6, boxShadow: `0 0 20px ${themeColors.accent}25` }}
              className="flex items-center gap-5 p-4 rounded-2xl"
              style={{
                background: themeColors.cardBg,
                border: `1px solid ${themeColors.accent}25`,
                transition: "all 0.3s ease"
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${themeColors.accent}1a`, color: themeColors.accent }}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold mb-0.5" style={{ color: themeColors.textSecondary }}>{item.label}</p>
                <p className="font-medium text-sm sm:text-base break-all sm:break-normal" style={{ color: themeColors.textPrimary }}>{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { href: "https://www.instagram.com/adrich__fernandes/?__pwa=1", icon: <Instagram className="w-5 h-5" /> },
              { href: "https://github.com/Adrich-Fernandes", icon: <Github className="w-5 h-5" /> },
              { href: "https://www.linkedin.com/in/adrich-fernandes-b14b2034b/", icon: <Linkedin className="w-5 h-5" /> },
              { href: "mailto:adrichancyfernandes@gmail.com", icon: <Mail className="w-5 h-5" /> },
            ].map((s, i) => (
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
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          variants={fadeInRight}
          onSubmit={handleSubmit}
          className="space-y-5 p-5 sm:p-8 rounded-2xl"
          style={{
            background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
            border: `1px solid ${themeColors.accent}25`,
            backdropFilter: "blur(16px)"
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textSecondary }}>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
              style={{
                background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                border: `1px solid ${themeColors.accent}30`,
                color: themeColors.textPrimary,
              }}
              onFocus={e => e.target.style.borderColor = themeColors.accent}
              onBlur={e => e.target.style.borderColor = `${themeColors.accent}30`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textSecondary }}>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
              style={{
                background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                border: `1px solid ${themeColors.accent}30`,
                color: themeColors.textPrimary,
              }}
              onFocus={e => e.target.style.borderColor = themeColors.accent}
              onBlur={e => e.target.style.borderColor = `${themeColors.accent}30`}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: themeColors.textSecondary }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
              style={{
                background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                border: `1px solid ${themeColors.accent}30`,
                color: themeColors.textPrimary,
              }}
              onFocus={e => e.target.style.borderColor = themeColors.accent}
              onBlur={e => e.target.style.borderColor = `${themeColors.accent}30`}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(56,189,248,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`,
              color: darkMode ? "#0c1a2e" : "#fff",
              boxShadow: "0 0 20px rgba(56,189,248,0.3)",
              opacity: status === "submitting" ? 0.7 : 1,
            }}
          >
            {status === "submitting" ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
            ) : (
              <><Send className="w-5 h-5" /> Send Message</>
            )}
          </motion.button>

          {/* Status messages */}
          {status === "success" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
            </motion.div>
          )}
          {status === "error" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}
