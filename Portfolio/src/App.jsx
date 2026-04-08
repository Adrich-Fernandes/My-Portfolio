import { useState, useEffect, useRef } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1a1a;
    --ink-soft: #3d3d3d;
    --ink-muted: #888;
    --ink-faint: #bbb;
    --paper: #FAFAF8;
    --paper-warm: #F3F0EB;
    --paper-mid: #E8E4DD;
    --rule: #e4e0d8;
    --serif: 'DM Serif Display', Georgia, serif;
    --sans: 'DM Sans', sans-serif;
    --mono: 'DM Mono', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--sans);
    background: var(--paper);
    color: var(--ink);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
    background: rgba(250,250,248,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--rule);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 64px;
  }
  .nav-logo {
    font-family: var(--serif); font-size: 22px; color: var(--ink);
    cursor: pointer; letter-spacing: -0.5px; user-select: none;
  }
  .nav-links { display: flex; gap: 0; align-items: center; }
  .nav-link {
    background: none; border: none; font-family: var(--sans);
    font-size: 12px; font-weight: 500; text-transform: uppercase;
    letter-spacing: 0.1em; color: var(--ink-muted); cursor: pointer;
    padding: 8px 18px; transition: color 0.2s;
  }
  .nav-link:hover { color: var(--ink); }
  .nav-link-cta {
    margin-left: 12px; border: 1px solid var(--ink); background: none;
    padding: 8px 20px; font-family: var(--sans); font-size: 12px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink);
    cursor: pointer; transition: all 0.2s;
  }
  .nav-link-cta:hover { background: var(--ink); color: var(--paper); }
  .nav-hamburger {
    display: none; flex-direction: column; gap: 5px;
    cursor: pointer; background: none; border: none; padding: 4px;
  }
  .ham-line { display: block; width: 22px; height: 1px; background: var(--ink); }

  /* SIDEBAR */
  .overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.3); z-index: 200;
    opacity: 0; animation: fadeIn 0.2s forwards;
  }
  @keyframes fadeIn { to { opacity: 1; } }
  .sidebar {
    position: fixed; top: 0; right: 0; height: 100%; width: 280px;
    background: var(--paper); border-left: 1px solid var(--rule); z-index: 300;
    padding: 32px 28px; transform: translateX(100%);
    animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
  }
  @keyframes slideIn { to { transform: translateX(0); } }
  .sidebar-close {
    background: none; border: none; font-size: 20px; cursor: pointer;
    color: var(--ink-muted); margin-bottom: 40px; display: block;
  }
  .sidebar-link {
    display: block; background: none; border: none; font-family: var(--serif);
    font-size: 28px; color: var(--ink); cursor: pointer; text-align: left;
    margin-bottom: 24px; padding: 0; transition: color 0.2s;
  }
  .sidebar-link:hover { color: var(--ink-muted); }

  /* HERO */
  .hero {
    min-height: 100vh; padding: 120px 48px 80px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 60px; align-items: center; border-bottom: 1px solid var(--rule);
  }
  .hero-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
  .hero-eyebrow-line { flex: 1; max-width: 40px; height: 1px; background: var(--ink-faint); }
  .hero-eyebrow-text {
    font-family: var(--mono); font-size: 11px;
    letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-muted);
  }
  .hero-h1 {
    font-family: var(--serif); font-size: clamp(52px,6vw,80px);
    line-height: 1.0; letter-spacing: -2px; color: var(--ink); margin-bottom: 28px;
  }
  .hero-h1 em { font-style: italic; color: var(--ink-soft); }
  .hero-sub {
    font-size: 16px; color: var(--ink-muted); line-height: 1.75;
    max-width: 400px; margin-bottom: 40px; font-weight: 300;
  }
  .hero-socials { display: flex; gap: 16px; margin-bottom: 36px; }
  .social-link {
    width: 36px; height: 36px; border: 1px solid var(--rule);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.2s; text-decoration: none;
    color: var(--ink-muted); font-size: 14px;
  }
  .social-link:hover { border-color: var(--ink); color: var(--ink); }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-outline {
    padding: 13px 28px; border: 1px solid var(--ink); background: transparent;
    color: var(--ink); font-family: var(--sans); font-size: 13px; font-weight: 500;
    letter-spacing: 0.04em; cursor: pointer; transition: all 0.2s;
  }
  .btn-outline:hover { background: var(--ink); color: var(--paper); }
  .btn-fill {
    padding: 13px 28px; border: 1px solid var(--ink); background: var(--ink);
    color: var(--paper); font-family: var(--sans); font-size: 13px; font-weight: 500;
    letter-spacing: 0.04em; cursor: pointer; transition: all 0.2s;
  }
  .btn-fill:hover { background: var(--ink-soft); border-color: var(--ink-soft); }
  .hero-img-wrap { display: flex; justify-content: center; align-items: center; }
  .hero-img-frame { position: relative; width: 340px; height: 400px; }
  .hero-img-bg {
    position: absolute; bottom: -16px; right: -16px; width: 100%; height: 100%;
    border: 1px solid var(--rule); background: var(--paper-warm); z-index: 0;
  }
  .hero-img {
    position: relative; z-index: 1; width: 100%; height: 100%;
    object-fit: cover; filter: grayscale(100%) contrast(1.05); display: block;
  }
  .hero-img-caption {
    position: absolute; bottom: -36px; left: 0;
    font-family: var(--mono); font-size: 10px;
    letter-spacing: 0.1em; color: var(--ink-faint); text-transform: uppercase;
  }

  /* STATS */
  .stats-bar {
    display: grid; grid-template-columns: repeat(3,1fr); border-bottom: 1px solid var(--rule);
  }
  .stat-item { padding: 36px 48px; border-right: 1px solid var(--rule); }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-family: var(--serif); font-size: 48px; color: var(--ink);
    line-height: 1; margin-bottom: 6px; letter-spacing: -2px;
  }
  .stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-muted); font-family: var(--mono); }

  /* ABOUT */
  .about {
    padding: 100px 48px; display: grid;
    grid-template-columns: 240px 1fr; gap: 80px; border-bottom: 1px solid var(--rule);
  }
  .section-label {
    font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--ink-muted); padding-top: 6px;
  }
  .about-h2 {
    font-family: var(--serif); font-size: clamp(36px,4vw,52px);
    line-height: 1.1; letter-spacing: -1px; margin-bottom: 28px; color: var(--ink);
  }
  .about-h2 em { font-style: italic; color: var(--ink-soft); }
  .about-p {
    font-size: 16px; color: var(--ink-muted); line-height: 1.8;
    max-width: 600px; margin-bottom: 20px; font-weight: 300;
  }
  .about-cards {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; margin-top: 48px; background: var(--rule); border: 1px solid var(--rule);
  }
  .about-card { padding: 28px 24px; background: var(--paper); transition: background 0.2s; }
  .about-card:hover { background: var(--paper-warm); }
  .about-card-icon {
    width: 40px; height: 40px; border: 1px solid var(--rule);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; margin-bottom: 16px; color: var(--ink-muted);
  }
  .about-card-title { font-family: var(--serif); font-size: 18px; color: var(--ink); margin-bottom: 8px; }
  .about-card-text { font-size: 13px; color: var(--ink-muted); line-height: 1.65; font-weight: 300; }

  /* PROJECTS */
  .projects { padding: 100px 48px; border-bottom: 1px solid var(--rule); }
  .section-header {
    display: grid; grid-template-columns: 240px 1fr;
    gap: 80px; margin-bottom: 60px; align-items: start;
  }
  .projects-h2 {
    font-family: var(--serif); font-size: clamp(36px,4vw,52px);
    line-height: 1.1; letter-spacing: -1px; color: var(--ink);
  }
  .projects-h2 em { font-style: italic; color: var(--ink-soft); }
  .projects-desc {
    font-size: 15px; color: var(--ink-muted); line-height: 1.75;
    max-width: 480px; font-weight: 300; padding-top: 8px;
  }
  .projects-grid {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: var(--rule); border: 1px solid var(--rule);
  }
  .project-card {
    background: var(--paper); display: flex; flex-direction: column;
    transition: background 0.25s; cursor: pointer; overflow: hidden;
  }
  .project-card:hover { background: var(--paper-warm); }
  .project-card:hover .project-img { filter: grayscale(0%); }
  .project-img {
    width: 100%; height: 200px; object-fit: cover;
    filter: grayscale(100%) contrast(1.05); transition: filter 0.4s; display: block;
  }
  .project-body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
  .project-index { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; color: var(--ink-faint); text-transform: uppercase; margin-bottom: 10px; }
  .project-title { font-family: var(--serif); font-size: 22px; color: var(--ink); margin-bottom: 10px; letter-spacing: -0.5px; }
  .project-desc { font-size: 13px; color: var(--ink-muted); line-height: 1.7; flex: 1; font-weight: 300; margin-bottom: 20px; }
  .project-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
  .project-tag { font-family: var(--mono); font-size: 10px; padding: 3px 8px; border: 1px solid var(--rule); color: var(--ink-muted); letter-spacing: 0.05em; }
  .project-link {
    display: inline-flex; align-items: center; gap: 6px; font-size: 12px;
    font-weight: 500; color: var(--ink); text-decoration: none;
    letter-spacing: 0.05em; text-transform: uppercase; transition: gap 0.2s;
    background: none; border: none; cursor: pointer; padding: 0; font-family: var(--sans);
  }
  .project-link:hover { gap: 10px; }

  /* SKILLS */
  .skills-section { padding: 100px 48px; border-bottom: 1px solid var(--rule); }
  .skills-grid {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: var(--rule); border: 1px solid var(--rule);
  }
  .skill-group { padding: 36px 32px; background: var(--paper); }
  .skill-group-title {
    font-family: var(--mono); font-size: 10px; text-transform: uppercase;
    letter-spacing: 0.15em; color: var(--ink-muted); margin-bottom: 28px;
    padding-bottom: 16px; border-bottom: 1px solid var(--rule);
  }
  .skill-row { margin-bottom: 20px; }
  .skill-meta { display: flex; justify-content: space-between; margin-bottom: 7px; }
  .skill-name { font-size: 14px; font-weight: 500; color: var(--ink); }
  .skill-pct { font-family: var(--mono); font-size: 12px; color: var(--ink-muted); }
  .skill-bar { height: 1px; background: var(--rule); position: relative; }
  .skill-bar-fill {
    position: absolute; top: 0; left: 0; height: 1px; background: var(--ink);
    transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
  }

  /* EXPERIENCE */
  .experience { padding: 100px 48px; border-bottom: 1px solid var(--rule); }
  .exp-card { border: 1px solid var(--rule); display: grid; grid-template-columns: 220px 1fr 1fr; }
  .exp-col { padding: 36px 32px; border-right: 1px solid var(--rule); }
  .exp-col:last-child { border-right: none; }
  .exp-logo-wrap {
    width: 56px; height: 56px; border: 1px solid var(--rule);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; margin-bottom: 20px;
  }
  .exp-logo { width: 100%; height: 100%; object-fit: contain; filter: grayscale(100%); }
  .exp-company { font-family: var(--serif); font-size: 20px; color: var(--ink); margin-bottom: 6px; letter-spacing: -0.3px; }
  .exp-period { font-family: var(--mono); font-size: 11px; color: var(--ink-faint); letter-spacing: 0.05em; margin-bottom: 8px; }
  .exp-type { font-size: 12px; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500; }
  .exp-role { font-family: var(--serif); font-size: 28px; color: var(--ink); letter-spacing: -0.5px; margin-bottom: 4px; }
  .exp-stack { font-family: var(--mono); font-size: 12px; color: var(--ink-muted); letter-spacing: 0.05em; }
  .exp-col-label { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--ink-faint); margin-bottom: 14px; }
  .exp-col-text { font-size: 14px; color: var(--ink-muted); line-height: 1.75; font-weight: 300; margin-bottom: 20px; }
  .exp-view-btn {
    display: inline-flex; align-items: center; gap: 6px; font-size: 11px;
    font-weight: 500; color: var(--ink); text-transform: uppercase;
    letter-spacing: 0.08em; background: none; border: 1px solid var(--rule);
    padding: 8px 16px; cursor: pointer; font-family: var(--sans); transition: all 0.2s;
  }
  .exp-view-btn:hover { border-color: var(--ink); }

  /* CONTACT */
  .contact { padding: 100px 48px; }
  .contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-top: 60px; }
  .contact-h2 { font-family: var(--serif); font-size: clamp(36px,4vw,52px); line-height: 1.1; letter-spacing: -1px; margin-bottom: 20px; color: var(--ink); }
  .contact-h2 em { font-style: italic; color: var(--ink-soft); }
  .contact-p { font-size: 15px; color: var(--ink-muted); line-height: 1.8; font-weight: 300; margin-bottom: 36px; max-width: 380px; }
  .contact-detail { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid var(--rule); }
  .contact-detail:last-of-type { border-bottom: none; }
  .contact-detail-icon { width: 36px; height: 36px; border: 1px solid var(--rule); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; color: var(--ink-muted); }
  .contact-detail-title { font-size: 12px; font-weight: 500; color: var(--ink); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px; }
  .contact-detail-val { font-size: 14px; color: var(--ink-muted); font-weight: 300; }
  .contact-form { display: flex; flex-direction: column; border: 1px solid var(--rule); }
  .form-field { border-bottom: 1px solid var(--rule); }
  .form-field:last-of-type { border-bottom: none; }
  .form-label { display: block; font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--ink-faint); padding: 16px 20px 0; }
  .form-input { display: block; width: 100%; background: transparent; border: none; outline: none; font-family: var(--sans); font-size: 15px; color: var(--ink); padding: 8px 20px 16px; font-weight: 300; resize: none; }
  .form-input::placeholder { color: var(--ink-faint); }
  .form-submit { width: 100%; padding: 18px; background: var(--ink); color: var(--paper); border: none; font-family: var(--sans); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: background 0.2s; }
  .form-submit:hover { background: var(--ink-soft); }

  /* FOOTER */
  .footer { border-top: 1px solid var(--rule); padding: 28px 48px; display: flex; align-items: center; justify-content: space-between; }
  .footer-logo { font-family: var(--serif); font-size: 18px; color: var(--ink-muted); }
  .footer-copy { font-family: var(--mono); font-size: 11px; color: var(--ink-faint); letter-spacing: 0.05em; }
  .footer-links { display: flex; gap: 20px; }
  .footer-link { font-family: var(--mono); font-size: 11px; color: var(--ink-faint); text-decoration: none; letter-spacing: 0.05em; cursor: pointer; background: none; border: none; }
  .footer-link:hover { color: var(--ink); }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .nav { padding: 0 24px; }
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
    .hero { grid-template-columns: 1fr; padding: 100px 24px 80px; gap: 48px; }
    .hero-img-frame { width: 260px; height: 300px; }
    .stats-bar { grid-template-columns: 1fr 1fr 1fr; }
    .stat-item { padding: 24px 16px; }
    .stat-num { font-size: 32px; }
    .about { grid-template-columns: 1fr; padding: 60px 24px; gap: 24px; }
    .about-cards { grid-template-columns: 1fr; }
    .section-header { grid-template-columns: 1fr; gap: 16px; }
    .projects { padding: 60px 24px; }
    .projects-grid { grid-template-columns: 1fr; }
    .skills-section { padding: 60px 24px; }
    .skills-grid { grid-template-columns: 1fr; }
    .experience { padding: 60px 24px; }
    .exp-card { grid-template-columns: 1fr; }
    .exp-col { border-right: none; border-bottom: 1px solid var(--rule); }
    .exp-col:last-child { border-bottom: none; }
    .contact { padding: 60px 24px; }
    .contact-inner { grid-template-columns: 1fr; gap: 40px; }
    .footer { flex-direction: column; gap: 16px; padding: 24px; text-align: center; }
    .footer-links { flex-wrap: wrap; justify-content: center; }
  }
`;

const projects = [
  {
    index: "01",
    title: "Project One",
    desc: "A full stack web application built with modern technologies focusing on performance and clean architecture.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    index: "02",
    title: "Project Two",
    desc: "A responsive UI application designed with user experience and accessibility in mind.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["TypeScript", "Tailwind", "REST API"],
    link: "#"
  },
  {
    index: "03",
    title: "Project Three",
    desc: "Backend-focused system with optimized APIs, scalable architecture, and real-time data handling.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    tags: ["Express", "PostgreSQL", "Docker"],
    link: "#"
  }
];

const skills = [
  {
    group: "Frontend",
    items: [
      { name: "React", pct: 90 },
      { name: "TypeScript", pct: 85 },
      { name: "Tailwind CSS", pct: 95 },
      { name: "Vue.js", pct: 75 }
    ]
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", pct: 85 },
      { name: "Python", pct: 80 },
      { name: "PostgreSQL", pct: 75 },
      { name: "MongoDB", pct: 85 }
    ]
  },
  {
    group: "Tools & Others",
    items: [
      { name: "Git", pct: 90 },
      { name: "Docker", pct: 70 },
      { name: "AWS", pct: 65 },
      { name: "Figma", pct: 80 }
    ]
  }
];

function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{style}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo" onClick={() => scrollTo("home")}>AF.</div>
        <div className="nav-links">
          {["home", "about", "projects", "skills", "experience"].map(s => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <button className="nav-link-cta" onClick={() => scrollTo("contact")}>Contact</button>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </nav>

      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)} />
          <div className="sidebar">
            <button className="sidebar-close" onClick={() => setMenuOpen(false)}>✕</button>
            {["home", "about", "projects", "skills", "experience", "contact"].map(s => (
              <button key={s} className="sidebar-link" onClick={() => scrollTo(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </>
      )}

      {/* HERO */}
      <section id="home" className="hero">
        <div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Full Stack Developer · MERN Stack</span>
          </div>
          <h1 className="hero-h1">
            Hi, I'm<br />
            Adrich<br />
            <em>Fernandes.</em>
          </h1>
          <p className="hero-sub">
            A passionate developer crafting beautiful, functional web experiences
            that balance clean code with thoughtful design.
          </p>
          <div className="hero-socials">
            <a className="social-link" href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a className="social-link" href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a className="social-link" href="mailto:your.email@example.com" title="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
          </div>
          <div className="hero-btns">
            <button className="btn-outline" onClick={() => scrollTo("projects")}>View My Work</button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>Get In Touch</button>
            <button className="btn-fill">Download Resume</button>
          </div>
        </div>
        <div className="hero-img-wrap">
          <div className="hero-img-frame">
            <div className="hero-img-bg" />
            <img
              className="hero-img"
              src="https://w0.peakpx.com/wallpaper/631/529/HD-wallpaper-vagabond-art-manga-slam-dunk-takehiko-inoue-vagabond.jpg"
              alt="Adrich Fernandes"
            />
            <div className="hero-img-caption">Adrich Fernandes · 2025</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[
          { num: "12+", label: "Projects Shipped" },
          { num: "2yr", label: "Professional Experience" },
          { num: "8+", label: "Technologies Mastered" }
        ].map(s => (
          <div key={s.label} className="stat-item">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="section-label">About Me</div>
        <div>
          <h2 className="about-h2">I craft code that's<br /><em>clean and purposeful.</em></h2>
          <p className="about-p">
            I'm a full stack developer with a love for building things that live on the internet.
            Whether it's a polished UI or a robust API, I care deeply about the craft — the
            architecture, the performance, and the experience.
          </p>
          <p className="about-p">
            Currently working with the MERN stack, I bring ideas from concept to deployment
            with attention to every detail along the way.
          </p>
          <div className="about-cards">
            {[
              { icon: "◻", title: "Clean Code", text: "Maintainable, scalable code that follows best practices and industry standards." },
              { icon: "◈", title: "Performance", text: "Optimizing applications for speed, efficiency, and exceptional user experience." },
              { icon: "◉", title: "UI Design", text: "Creating beautiful, intuitive interfaces that users love to interact with." }
            ].map(c => (
              <div key={c.title} className="about-card">
                <div className="about-card-icon">{c.icon}</div>
                <div className="about-card-title">{c.title}</div>
                <div className="about-card-text">{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <div className="section-header">
          <div className="section-label">Selected Work</div>
          <div>
            <h2 className="projects-h2">Things I've<br /><em>built & shipped.</em></h2>
            <p className="projects-desc">A selection of projects I'm proud of — each one a different challenge, a different solution.</p>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.index} className="project-card">
              <img className="project-img" src={p.img} alt={p.title} />
              <div className="project-body">
                <div className="project-index">Project {p.index}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <div className="section-label">Skills & Tools</div>
          <h2 className="projects-h2">What I work<br /><em>with daily.</em></h2>
        </div>
        <div className="skills-grid">
          {skills.map(g => (
            <div key={g.group} className="skill-group">
              <div className="skill-group-title">{g.group}</div>
              {g.items.map(s => <SkillBar key={s.name} name={s.name} pct={s.pct} />)}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience">
        <div className="section-header">
          <div className="section-label">Experience</div>
          <h2 className="projects-h2">Where I've<br /><em>worked.</em></h2>
        </div>
        <div className="exp-card">
          <div className="exp-col">
            <div className="exp-logo-wrap">
              <img
                className="exp-logo"
                src="data:image/png;base64,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"
                alt="Unified Mentor"
              />
            </div>
            <div className="exp-company">Unified Mentor</div>
            <div className="exp-period">12/10/25 – 12/11/25</div>
            <div className="exp-type">Internship</div>
          </div>
          <div className="exp-col" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="exp-role">MERN Stack</div>
            <div className="exp-stack">MongoDB · Express · React · Node.js</div>
          </div>
          <div className="exp-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <div className="exp-col-label">Responsibilities</div>
              <div className="exp-col-text">Built full-stack applications, implemented REST APIs, and worked with MongoDB.</div>
              <button className="exp-view-btn">View Project →</button>
            </div>
            <div>
              <div className="exp-col-label">Achievements</div>
              <div className="exp-col-text">Improved application performance and deployed projects to production successfully.</div>
              <button className="exp-view-btn">View Project →</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="contact-h2">Let's work<br /><em>together.</em></h2>
        </div>
        <div className="contact-inner">
          <div>
            <p className="contact-p">
              Have a project in mind or just want to connect? I'm always open to
              new ideas, collaborations, and conversations.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-icon">✉</div>
              <div>
                <div className="contact-detail-title">Email</div>
                <div className="contact-detail-val">your.email@example.com</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">⌖</div>
              <div>
                <div className="contact-detail-title">Location</div>
                <div className="contact-detail-val">Your City, Country</div>
              </div>
            </div>
          </div>
          <div>
            <div className="contact-form">
              <div className="form-field">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" placeholder="John Doe" />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="john@example.com" />
              </div>
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea className="form-input" rows="5" placeholder="Tell me about your project..." />
              </div>
              <button className="form-submit">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">AF.</div>
        <div className="footer-copy">© 2025 Adrich Fernandes</div>
        <div className="footer-links">
          {["home", "about", "projects", "skills", "contact"].map(s => (
            <button key={s} className="footer-link" onClick={() => scrollTo(s)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </footer>
    </>
  );
}