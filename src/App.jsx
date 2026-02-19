// App.jsx
// ===============================

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Sun,
  Moon,
} from "lucide-react";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "container dark" : "container light"}>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo"></div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
  <div className="hero-content">

    {/* LEFT TEXT */}
    <motion.div
      className="hero-text"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="hero-title">Sanjeev Chaurasia</h1>

      <h3 className="role">
        B.E. CSE Student | Full-Stack & Backend Developer
      </h3>

      <p className="subtitle">
        Passionate about building scalable backend systems,
        AI-powered applications, and high-performance web solutions.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">
          View Projects
        </a>

        <a href="/resume.pdf" download className="btn glass">
          <Download size={18} /> Download Resume
        </a>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="hero-image"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src="/profile.jpg" alt="Sanjeev Chaurasia" />
    </motion.div>

  </div>
</section>


      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        className="section card-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          Highly analytical and motivated Computer Science
          student with strong foundations in data structures,
          algorithms, object-oriented programming, and system
          design. Experienced in building scalable full-stack
          applications and AI-based solutions.
        </p>
      </motion.section>

      {/* ================= EDUCATION ================= */}
      <motion.section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>B.E. Computer Science & Engineering</h3>
          <p>Chandigarh University, Mohali</p>
          <p>2023 – 2027 | CGPA: 7.43</p>
        </div>

        <div className="education-card">
          <h3>Intermediate (CBSE)</h3>
          <p>Saraswati Senior Secondary Vidya Mandir</p>
          <p>2021 – 2022 | 67.6%</p>
        </div>

        <div className="education-card">
          <h3>Secondary School (CBSE)</h3>
          <p>Saraswati Senior Secondary Vidya Mandir</p>
          <p>2019 – 2020 | 87%</p>
        </div>
      </motion.section>

      {/* ================= SKILLS ================= */}
      <motion.section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Programming</h3>
            <p>C • C++ • Python • Java • SQL • JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Frameworks</h3>
            <p>React • React Native • Node.js • FastAPI • Next.js</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git • GitHub • Docker • Linux • VS Code</p>
          </div>

          <div className="skill-card">
            <h3>Cloud & DB</h3>
            <p>AWS • Firebase • MongoDB • SQL Server</p>
          </div>
        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="project-card premium">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
              alt="DressDynamo"
            />

            <h3>DressDynamo</h3>
            <p>AI-Based Outfit Recommendation System</p>

            <ul>
              <li>CNN-based image classification</li>
              <li>Content-based filtering</li>
              <li>Trend API integration</li>
              <li>Full-stack scalable architecture</li>
            </ul>
          </div>

          <div className="project-card premium">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="LeaveEase"
            />

            <h3>LeaveEase</h3>
            <p>Employee Leave Management System</p>

            <ul>
              <li>Role-based access control</li>
              <li>Leave tracking & approvals</li>
              <li>Real-time notifications</li>
              <li>Report generation</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ================= CERTIFICATIONS ================= */}
      <motion.section
        id="certifications"
        className="section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Certifications</h2>

        <div className="cert-grid">
          <div className="cert-card">
            <h3>Mastering DSA</h3>
            <p>Chandigarh University • 2025</p>
          </div>

          <div className="cert-card">
            <h3>Spring & Angular Full-Stack Developer</h3>
            <p>Infosys • 2024</p>
          </div>

          <div className="cert-card">
            <h3>Ethical Considerations for Generative AI</h3>
            <p>IBM • 2025</p>
          </div>

          <div className="cert-card">
            <h3>Cyber Peace First Responder</h3>
            <p>CyberPeace • 2024</p>
          </div>
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        className="section contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Let’s Connect</h2>
        <p>Email: sanjeevchaurasia36@gmail.com</p>

        <div className="icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={28} />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={28} />
          </a>

          <a href="mailto:sanjeevchaurasia36@gmail.com">
            <Mail size={28} />
          </a>
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer>
        © {new Date().getFullYear()} Sanjeev Chaurasia
      </footer>
    </div>
  );
}
