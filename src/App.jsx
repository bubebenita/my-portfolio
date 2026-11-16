import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  ArrowDown,
  MoveUpRight,
  Asterisk,
} from 'lucide-react'
import './App.css'

const projects = [
  {
    name: 'Two Flames',
    type: 'Food & Digital Commerce',
    description:
      'A food business storefront designed to make menu discovery and direct ordering easier.',
    url: 'https://twoflames.vercel.app/',
    className: 'flames',
    display: 'TWO FLAMES',
    accent: 'FOOD, MADE PERSONAL.',
    image: '/projects/two-flames.png',
  },
  {
    name: 'A.T Cosmetics',
    type: 'Beauty & E-commerce',
    description:
      'A beauty storefront featuring product discovery, shopping cart functionality and WhatsApp ordering.',
    url: 'https://at-cosmetics-t3wq.vercel.app/',
    className: 'cosmetics',
    display: 'A.T',
    accent: 'A DIFFERENT KIND OF BEAUTY.',
    image: '/projects/at-cosmetics.png',
  },
]
const experiences = [
  {
    role: 'Freelance Web Developer',
    type: 'Remote',
    period: '2026 — Present',
    description:
      'Design and develop websites for small businesses, translating client requirements into responsive digital experiences.',
    responsibilities: [
      'Website planning and development',
      'Responsive frontend implementation',
      'Testing, deployment and maintenance',
    ],
  },
  {
    role: 'Cyber Cafe Attendant',
    type: 'On-site',
    period: 'One year',
    description:
      'Worked in a busy, customer-facing environment providing computer, internet and printing services.',
    responsibilities: [
      'Customer support and computer operations',
      'Printing and document services',
      'Troubleshooting everyday computer issues',
    ],
  },
]
const skillGroups = [
  {
    title: 'Web development',
    description: 'Building for the browser.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Vite',
      'Responsive Design',
      'E-commerce Development',
      'Vercel Deployment',
    ],
  },
  {
    title: 'Technical',
    description: 'Tools and computer engineering.',
    skills: [
      'MATLAB',
      'Git & GitHub',
      'Computer Operations',
      'File Management',
      'Digital Tools',
    ],
  },
  {
    title: 'Research & communication',
    description: 'Finding, organising and communicating information.',
    skills: [
      'Online Research',
      'Writing',
      'Proofreading',
      'Documentation',
      'Data Entry',
      'Customer Support',
    ],
  },
  {
    title: 'Professional',
    description: 'How I approach my work.',
    skills: [
      'Critical Thinking',
      'Problem-solving',
      'Attention to Detail',
      'Adaptability',
      'Written Communication',
    ],
  },
]

const certificates = [
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    image: '/certificates/freecodecamp-responsive.png',
    year: '2026',
  },
  {
    name: 'A2 English for Developers',
    issuer: 'freeCodeCamp',
    image: '/certificates/freecodecamp-english.png',
    year: '2026',
  },
  {
    name: 'AI Literacy',
    issuer: 'IBM SkillsBuild',
    image: '/certificates/ibm-ai-literacy.png',
    year: '2026',
  },
  {
    name: 'AI for Business Professionals',
    issuer: 'HP LIFE',
    image: '/certificates/hp-ai-business.png',
    year: '2026',
  },
  {
    name: 'Critical Thinking in the AI Era',
    issuer: 'HP LIFE',
    image: '/certificates/hp-critical-thinking.png',
    year: '2026',
  },
  {
    name: 'MATLAB Onramp',
    issuer: 'MathWorks',
    image: '/certificates/matlab-onramp.png',
    year: '2025',
  },
]

function App() {
  const reduceMotion = useReducedMotion()

const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem('portfolio-theme') === 'dark'
})

useEffect(() => {
  const theme = isDarkMode ? 'dark' : 'light'

  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('portfolio-theme', theme)
}, [isDarkMode])

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <a href="#home" className="logo">
          CHIDI<span>✳</span>
        </a>

        <nav className="navigation" aria-label="Main navigation">
  <a href="#work">Work</a>
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#skills">Skills</a>
  <a href="#contact" className="nav-contact">
    Let's talk <ArrowUpRight size={17} />
  </a>
  <button
  type="button"
  className={`theme-toggle ${isDarkMode ? 'active' : ''}`}
  role="switch"
  aria-checked={isDarkMode}
  aria-label="Toggle dark mode"
  onClick={() => setIsDarkMode((current) => !current)}
>
  <span className="theme-toggle-label">DARK MODE</span>

  <span className="theme-toggle-track">
    <span className="theme-toggle-thumb" />
  </span>

  <span className="theme-toggle-status">
    {isDarkMode ? 'ON' : 'OFF'}
  </span>
</button>
</nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="hero-intro">
            COMPUTER ENGINEERING STUDENT · FRONTEND DEVELOPER
          </span>

        <h1>
  Hello,
  <br />
  I'm <span>Chidi.</span>
</h1>

<p className="hero-full-name">
  CHIDI EBUBECHUKWU BENITA
</p>

          <div className="hero-bottom">
            <p>
              I turn ideas into digital experiences through code,
              creativity and a little curiosity.
            </p>

            <a href="#work" className="explore-link">
              EXPLORE MY WORK <ArrowDown size={18} />
            </a>
            <a
  href="/cv.pdf"
  download="Chidi_Ebubechukwu_Benita_CV.pdf"
  className="cv-download"
>
  DOWNLOAD CV <ArrowDown size={18} />
</a>
          </div>
        </div>

        <div className="portrait-composition">
          <div className="portrait-decoration">
            <Asterisk size={75} strokeWidth={1.2} />
          </div>

          <div
            className="portrait-frame"
            aria-label="Portrait photograph placeholder"
          >
        <img
  src="/profile.jpg"
  alt="Portrait of Chidi Ebubechukwu Benita"
/>
          </div>

          <span className="portrait-caption">
            A CREATIVE MIND IN PROGRESS.
          </span>
        </div>

        <div className="hero-decoration">
          <span>CREATIVE BY NATURE.</span>
          <span>TECHNICAL BY TRAINING.</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section">
        <p>
          I LIKE BUILDING THINGS THAT ARE
          <span> USEFUL, INTERESTING </span>
          AND A LITTLE UNEXPECTED.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="work-section" id="work">
        <div className="section-heading">
          <span className="heading-decoration">✳</span>
          <h2>
            Things I've
            <br />
            <span>put into the world.</span>
          </h2>
          <p>
            A collection of websites I've designed and developed,
            each with its own purpose and personality.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className={`project-card ${project.className}`}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
             <a
  href={project.url}
  target="_blank"
  rel="noreferrer"
  className="project-artwork"
  aria-label={`Visit ${project.name}`}
>
  <img
    src={project.image}
    alt={`${project.name} website screenshot`}
    className="project-screenshot"
    loading="lazy"
  />

  <span className="project-artwork-overlay">
    <span className="project-artwork-type">
      {project.type}
    </span>

    <span className="project-artwork-title">
      {project.display}
    </span>

    <span className="project-artwork-caption">
      {project.accent}
    </span>

    <span className="project-artwork-arrow">
      <ArrowUpRight size={28} />
    </span>
  </span>
</a>

              <div className="project-details">
                <div>
                  <span className="project-index">
                    PROJECT {index + 1}
                  </span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} website`}
                >
                  VIEW WEBSITE <MoveUpRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-heading">
          <span>A LITTLE ABOUT ME</span>
          <h2>
            Part logic.
            <br />
            Part <span>imagination.</span>
          </h2>
        </div>

        <div className="about-body">
          <p className="about-lead">
            I'm a Computer Engineering student at the Federal
            University of Technology, Owerri, with an interest
            in building digital products.
          </p>

          <p>
            I enjoy the process of taking an idea, figuring out
            how it should work, writing the code and bringing
            everything together into a usable experience.
          </p>

          <p>
            Outside development, I enjoy research, writing,
            exploring new tools and learning how things work.
            I'm constantly looking for ways to improve my craft.
          </p>

          <span className="about-location">
            CURRENTLY IN OWERRI, NIGERIA.
          </span>
        </div>
      </section>

{/* EXPERIENCE */}
<section className="experience-section" id="experience">
  <div className="experience-heading">
    <span>WHERE I'VE WORKED</span>
    <h2>
      Experience in
      <br />
      <em>practice.</em>
    </h2>
  </div>

  <div className="experience-list">
    {experiences.map((experience, index) => (
      <motion.article
        className="experience-card"
        key={experience.role}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="experience-number">
          0{index + 1}
        </div>

        <div className="experience-main">
          <div className="experience-meta">
            <span>{experience.type}</span>
            <span>{experience.period}</span>
          </div>

          <h3>{experience.role}</h3>
          <p>{experience.description}</p>

          <ul>
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.article>
    ))}
  </div>
</section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <div className="skills-heading">
          <span>WHAT I BRING TO THE TABLE</span>
          <h2>
            More than
            <br />
            <span>just code.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className={`skill-card skill-card-${index + 1}`}
              key={group.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="certificates-section" id="learning">
  <div className="certificates-heading">
    <p>Learning & development</p>
    <h2>Things I've <em>learned.</em></h2>
  </div>

  <div className="certificate-grid">
    {certificates.map((certificate) => (
      <article className="certificate-card" key={certificate.name}>
      <a
  href={certificate.image}
  target="_blank"
  rel="noreferrer"
  className="certificate-visual"
  aria-label={`View ${certificate.name} certificate`}
>
  <span className="certificate-stamp">CERTIFIED</span>

  <span className="certificate-issuer">
    {certificate.issuer}
  </span>

  <div className="certificate-image-wrap">
    <img
      src={certificate.image}
      alt={`${certificate.name} certificate`}
      loading="lazy"
    />
  </div>

  <span className="certificate-view">
    VIEW CERTIFICATE ↗
  </span>
</a>

        <div className="certificate-info">
          <div>
            <h3>{certificate.name}</h3>
            <p>{certificate.issuer}</p>
          </div>
          <span>{certificate.year}</span>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <footer className="contact-section" id="contact">
        <div className="contact-decoration">
          LET'S CREATE SOMETHING GOOD.
        </div>

        <h2>
          Have a good
          <br />
          <span>idea?</span>
        </h2>

        <a
          href="mailto:chidiebube858@gmail.com"
          className="contact-button"
        >
          LET'S TALK <ArrowUpRight size={22} />
        </a>
<a
  href="tel:+2349156340567"
  className="contact-phone"
>
  +234 915 634 0567
</a>
        <div className="contact-footer">
          <div className="social-links">
            <a
              href="https://github.com/bubebenita"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ebube-chidi-7323b0435"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:chidiebube858@gmail.com">
              Email ↗
            </a>
          </div>

          <span>MADE WITH INTENTION · © 2026</span>

          <a href="#home">BACK TO TOP ↑</a>
            <Analytics />  
        </div>
      </footer>
    </main>
  )
}

export default App