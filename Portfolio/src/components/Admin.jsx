import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Plus, Trash2, ExternalLink, Image as ImageIcon, 
  Save, Download, CheckCircle2, FileText, Link2, Upload, Eye, X 
} from "lucide-react";
import { Link } from "react-router-dom";
import { initialProjects } from "../data/projects";

function ProjectAdmin({ darkMode, themeColors, glassCard }) {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    desc: "",
    link: "",
    img: ""
  });
  const [status, setStatus] = useState("idle");

  // Resume Manager State
  const [resumeUrl, setResumeUrl] = useState("");
  const [resumeInput, setResumeInput] = useState("");
  const [resumeStatus, setResumeStatus] = useState("idle");

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio_projects");
    if (savedProjects) {
      const parsed = JSON.parse(savedProjects);
      // Filter out stale entry
      const filtered = parsed.filter(p => p.title !== "Product List");
      
      // Merge unique ones
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

    // Load saved resume URL
    const savedResume = localStorage.getItem("portfolio_resume_url");
    if (savedResume) {
      setResumeUrl(savedResume);
      setResumeInput(savedResume);
    }
  }, []);

  const saveToLocalStorage = (updatedProjects) => {
    localStorage.setItem("portfolio_projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    const updated = [newProject, ...projects];
    saveToLocalStorage(updated);
    setNewProject({ title: "", desc: "", link: "", img: "" });
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleDeleteProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    saveToLocalStorage(updated);
  };

  const exportCode = () => {
    const code = `export const initialProjects = ${JSON.stringify(projects, null, 2)};`;
    navigator.clipboard.writeText(code);
    alert("Project data code copied to clipboard! You can paste this into src/data/projects.js for permanent update.");
  };

  // Resume handlers
  const handleSaveResume = (e) => {
    e.preventDefault();
    if (!resumeInput.trim()) return;
    localStorage.setItem("portfolio_resume_url", resumeInput.trim());
    setResumeUrl(resumeInput.trim());
    setResumeStatus("success");
    setTimeout(() => setResumeStatus("idle"), 3000);
  };

  const handleClearResume = () => {
    localStorage.removeItem("portfolio_resume_url");
    setResumeUrl("");
    setResumeInput("");
  };

  return (
    <div className="min-h-screen p-6 md:p-12" style={{ background: themeColors.bg, color: themeColors.textPrimary }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-xl transition duration-300"
            style={{ background: themeColors.cardBg, border: `1px solid ${themeColors.border}`, color: themeColors.accent }}
          >
            <ArrowLeft className="w-5 h-5" /> Back to Portfolio
          </Link>
          <h1 className="text-3xl font-bold" style={{ color: themeColors.accent }}>Admin Panel</h1>
        </div>

        {/* ─── Resume Manager ─── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${glassCard} p-8 mb-12`}
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" style={{ color: themeColors.accent }} /> Resume Manager
          </h2>

          {resumeUrl && (
            <div className="mb-6 p-4 rounded-xl flex items-center justify-between gap-4"
              style={{ background: `${themeColors.accent}10`, border: `1px solid ${themeColors.accent}30` }}>
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="w-5 h-5 shrink-0" style={{ color: themeColors.accent }} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold" style={{ color: themeColors.accent }}>Current Resume</p>
                  <p className="text-xs opacity-60 truncate">{resumeUrl}</p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg transition hover:scale-110"
                  style={{ background: `${themeColors.accent}20`, color: themeColors.accent }}>
                  <Eye className="w-4 h-4" />
                </a>
                <button onClick={handleClearResume}
                  className="p-2 rounded-lg transition hover:scale-110 hover:bg-red-500/20 text-red-400">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSaveResume} className="flex gap-3">
            <div className="relative flex-1">
              <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input
                required
                type="url"
                value={resumeInput}
                onChange={(e) => setResumeInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-blue-400 text-sm"
                placeholder="Paste your resume PDF link (Google Drive, Cloudinary, etc.)"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-bold transition duration-300 flex items-center gap-2 shrink-0 text-sm"
              style={{
                background: resumeStatus === "success"
                  ? "linear-gradient(135deg, #22c55e, #4ade80)"
                  : `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`,
                color: darkMode ? "#0c1a2e" : "#ffffff"
              }}
            >
              {resumeStatus === "success" ? <><CheckCircle2 className="w-4 h-4" /> Saved!</> : <><Upload className="w-4 h-4" /> Update</>}
            </button>
          </form>

          <p className="text-xs opacity-40 mt-3">
            💡 Tip: Upload your resume to Google Drive → Share → "Anyone with the link" → Copy link. When you update the file on Drive, the link stays the same!
          </p>
        </motion.div>

        {/* ─── Project Manager ─── */}
        <h2 className="text-2xl font-bold mb-8" style={{ color: themeColors.accent }}>Project Manager</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Add Project Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${glassCard} p-8`}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Plus className="w-6 h-6 text-blue-400" /> Add New Project
            </h2>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Project Name</label>
                <input 
                  required
                  type="text" 
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-blue-400"
                  placeholder="e.g. AI Resume Builder"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Description</label>
                <textarea 
                  required
                  rows="3"
                  value={newProject.desc}
                  onChange={(e) => setNewProject({...newProject, desc: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-blue-400 resize-none"
                  placeholder="What does it do?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">GitHub/Project Link</label>
                <input 
                  required
                  type="url" 
                  value={newProject.link}
                  onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-blue-400"
                  placeholder="https://github.com/..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Image URL (Unsplash or direct link)</label>
                <input 
                  required
                  type="url" 
                  value={newProject.img}
                  onChange={(e) => setNewProject({...newProject, img: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-blue-400"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-2 mt-4"
                style={{ 
                  background: status === "success" ? "linear-gradient(135deg, #22c55e, #4ade80)" : `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`,
                  color: darkMode ? "#0c1a2e" : "#ffffff"
                }}
              >
                {status === "success" ? <><CheckCircle2 className="w-5 h-5" /> Added!</> : <><Save className="w-5 h-5" /> Save Project</>}
              </button>
            </form>
          </motion.div>

          {/* Current Projects List */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Current Projects ({projects.length})</h2>
              <button 
                onClick={exportCode}
                className="text-xs flex items-center gap-1 opacity-60 hover:opacity-100 transition"
              >
                <Download className="w-4 h-4" /> Export Code
              </button>
            </div>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {projects.map((project, i) => (
                <div key={i} className={`${glassCard} p-4 flex gap-4 items-center group`}>
                  <img src={project.img} alt="" className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold truncate">{project.title}</h3>
                    <p className="text-xs opacity-60 truncate">{project.desc}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-blue-400">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <button onClick={() => handleDeleteProject(i)} className="p-2 rounded-lg hover:bg-red-500/20 text-red-400">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectAdmin;
