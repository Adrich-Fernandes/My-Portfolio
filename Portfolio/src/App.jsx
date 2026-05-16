import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProjectAdmin from "./components/Admin";
import PortfolioHome from "./components/PortfolioHome";
import { initialProjects } from "./data/projects";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio_projects");
    if (savedProjects) {
      const parsed = JSON.parse(savedProjects);
      // Filter out any stale 'Product List' entry if it exists in localStorage
      const filtered = parsed.filter(p => p.title !== "Product List");
      
      // Merge: Keep initialProjects as base, add unique projects from localStorage
      const merged = [...initialProjects];
      filtered.forEach(p => {
        if (!merged.find(ip => ip.title === p.title)) {
          merged.push(p);
        }
      });
      setProjects(merged);
    } else {
      setProjects(initialProjects);
    }
  }, []);

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

  const skillCategories = [
    {
      title: "Backend Development",
      icon: "Server",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Python", "JWT Auth", "Middleware"]
    },
    {
      title: "Database & Cloud",
      icon: "Database",
      skills: ["MongoDB", "Mongoose", "SQL", "Azure", "Cloudinary"]
    },
    {
      title: "AI & Tools",
      icon: "Brain",
      skills: ["Prompt Engineering", "GPT/Claude APIs", "Git/GitHub", "Postman", "VS Code"]
    }
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
    <Routes>
      <Route path="/" element={
        <PortfolioHome 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          themeColors={themeColors}
          glassCard={glassCard}
          glassCardHover={glassCardHover}
          fadeInUp={fadeInUp}
          staggerContainer={staggerContainer}
          skillCategories={skillCategories}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formData={formData}
          handleChange={handleChange}
          status={status}
          handleSubmit={handleSubmit}
          handleScroll={handleScroll}
          contactEmail={contactEmail}
          projects={projects}
        />
      } />
      <Route path="/admin" element={<ProjectAdmin darkMode={darkMode} themeColors={themeColors} glassCard={glassCard} />} />
    </Routes>
  );
}
