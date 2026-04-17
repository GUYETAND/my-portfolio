import ProjectCard from '../components/ProjectCard.jsx';

function Home() {
  return (
    <>
      {/* Hero section with name, tagline and CTA button */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1>Arthur Guyetand</h1>
          <p className="tagline">4th Year Student at Epitech</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* About section — two column layout */}
      <section id="about" className="section about">
        <div className="about-layout">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Currently in my 4th year at Epitech, I'm passionate about web
              development and building digital solutions. My journey has led me
              to work on a variety of projects, from e-commerce websites to
              full-stack applications.
            </p>
            <p>
              I'm always eager to learn new technologies and push my limits.
              Outside of coding, I enjoy getting involved in real-world projects
              that make a tangible impact.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div className="highlight-info">
                <h3>Web Development</h3>
                <p>React, Node.js, modern web technologies</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div className="highlight-info">
                <h3>Full-Stack</h3>
                <p>End-to-end application building</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <div className="highlight-info">
                <h3>E-Commerce</h3>
                <p>Online store design &amp; deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section with responsive grid of ProjectCards */}
      <section id="projects" className="section projects">
        <div className="section-header">
          <h2>Projects</h2>
          <p className="section-subtitle">A selection of things I've built</p>
        </div>
        <div className="projects-grid">
          <ProjectCard
            title="MUSE Boutique"
            desc="E-commerce showcase website for an independent fashion boutique in Beaulieu-sur-Mer. Full design, development and deployment of muse-boutique.fr."
          />
          <ProjectCard
            title="Portfolio"
            desc="This personal portfolio site, built with Vite, React and react-router-dom. A showcase of my projects and web development skills."
          />
          <ProjectCard
            title="AutoDeploy"
            desc="Automated deployment pipeline tool. Streamlining the CI/CD workflow for faster and more reliable application releases."
          />
        </div>
      </section>

      {/* Contact section — card-based layout */}
      <section id="contact" className="section contact">
        <div className="section-header">
          <h2>Contact</h2>
          <p className="section-subtitle">Feel free to reach out</p>
        </div>
        <div className="contact-grid">
          <a href="mailto:a.guyetand@hotmail.fr" className="contact-card">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>a.guyetand@hotmail.fr</p>
            </div>
          </a>
          <a href="https://github.com/GUYETAND" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <p>github.com/GUYETAND</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/arthurguyetand/" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/arthurguyetand</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Arthur Guyetand. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
