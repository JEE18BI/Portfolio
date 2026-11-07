import './App.css'
import { useState } from 'react'

import {  Mail } from 'lucide-react'
import {
    ArrowUpRight,


    MapPin,
    Menu,
    X,
    Code2,
    Brain,
    Dna,
    Cloud,
    ExternalLink,
    GraduationCap,
    Award,
    BriefcaseBusiness,
    ChevronDown,
} from 'lucide-react'
import './App.css'

const projects = [

    {
        title: 'Golf Croquet World Championship 2026',
        category: 'Web Development',
        description:
            'Championship website featuring player profiles, qualifier information, participating clubs, accommodation, and tournament details.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://www.egyptiancroquet.online/',
        featured: true,
    },
    {
        title: 'US Open Croquet Championship 2026',
        category: 'Web Development',
        description:
            'A dedicated tournament website providing championship information, player details, schedules, and event resources.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://www.usopengc.com/',
        featured: true,
    },
    {
        title: 'Fletcher Sharpe Invitational 2027',
        category: 'Web Development',
        description:
            'A modern tournament website with custom visual styling, responsive layouts, and event information.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://www.fletchersharpeinvitational.com/',
        featured: false,
    },
    {
        title: 'Personalized Nutrition & Genetic Analysis',
        category: 'Bioinformatics',
        description:
            'Graduation project involving a patient-focused application integrating nutritional analysis, drug-food interactions, and biological data involving DNA and RNA.',
        tech: ['Python', 'Bioinformatics', 'Data Analysis'],
        link: 'https://github.com/JEE18BI/SafeBite',
        featured: true,
    },
    {
        title: 'Croquet Order Automation',
        category: 'Software Development',
        description:
            'A Shopify-integrated application designed to automate order processing, vendor grouping, and manufacturer communications.',
        tech: ['Node.js', 'Shopify API'],
        link: 'https://github.com/JEE18BI/Croquet_Company',
        featured: true,
    },



]

const skillGroups = [
    {
        title: 'Programming Languages',
        icon: Code2,
        skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
    },
    {
        title: 'Web Development',
        icon: Code2,
        skills: ['React.js', 'Node.js', 'HTML5', 'CSS3', 'Flask'],
    },

    {
        title: 'Bioinformatics',
        icon: Dna,
        skills: ['BLAST', 'NCBI', 'GenBank', 'FASTA/FASTQ', 'Sequence Alignment'],
    },
    {
        title: 'Cloud & Development Tools',
        icon: Cloud,
        skills: ['Microsoft Azure', 'Bash', 'Linux', 'Git', 'GitHub'],
    },
    {
        title: 'Software Testing',
        icon: Award,
        skills: ['Manual Testing', 'Selenium', 'Automation Testing'],
    },
]

const experiences = [
    {
        role: 'Freelance Frontend Developer',
        organization: 'Freelance',
        description:
            'Developed responsive websites and interactive user interfaces based on project requirements.',
        points: [
            'Built responsive interfaces using React, HTML, and CSS.',
            'Implemented website layouts, styling, and interactive components.',
            'Managed website development from initial design to implementation.',
        ],
    },
    {
        role: 'Backend Developer',
        organization: 'Al-Ahram Newspaper',
        description:
            'Contributed to backend development using Node.js.',
        points: [
            'Worked on server-side application logic and backend functionality.',
            'Contributed to backend components and application integration.',
        ],
    },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        ['About', '#about'],
        ['Experience', '#experience'],
        ['Skills', '#skills'],
        ['Projects', '#projects'],
        ['Education', '#education'],
        ['Contact', '#contact'],
        ['Achievements', '#achievements'],
    ]

    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                JM<span>.</span>
            </a>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                {menuOpen ? <X /> : <Menu />}
            </button>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {links.map(([label, href]) => (
                    <a
                        key={label}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {label}
                    </a>
                ))}
                <a href="#contact" className="nav-contact">
                    Let's talk <ArrowUpRight size={15} />
                </a>
            </div>
        </nav>
    )
}

function Hero() {
    return (
        <section className="hero section" id="home">
            <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </span>

                <h1>
                    Hi, I'm <span>Jana.</span>
                    <br />
                    I build things
                    <br />
                    <em>that matter.</em>
                </h1>

                <p className="hero-description">
                    Computer Science graduate with a background in Bioinformatics.
                    Interested in software development, artificial intelligence,
                    computer vision, and computational biology.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="button button-primary">
                        Explore my work <ArrowUpRight size={17} />
                    </a>
                    <a href="#contact" className="button button-outline">
                        Get in touch
                    </a>
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/JEE18BI"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jana-mohamed-a5b715283/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:janaelsaeed20@gmail.com" aria-label="Email">
                        <Mail />
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="visual-card">
                    <div className="visual-top">
                        <span>01 / ABOUT ME</span>
                        <span>2026</span>
                    </div>
                    <div className="visual-symbol">J<span>.</span></div>
                    <div className="visual-bottom">
                        <div>
                            <strong>Computer Science</strong>
                            <small>Bioinformatics Minor</small>
                        </div>
                        <Dna size={30} />
                    </div>
                </div>
                <div className="floating-tag tag-one">Software Development</div>
                <div className="floating-tag tag-two">Bioinformatics</div>
            </div>

            <a href="#about" className="scroll-indicator">
                SCROLL TO EXPLORE <ChevronDown size={16} />
            </a>
        </section>
    )
}

function SectionHeading({ number, label, title, description }) {
    return (
        <div className="section-heading">
            <span className="section-number">{number} / {label}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    )
}

function About() {
    return (
        <section className="section about-section" id="about">
            <SectionHeading
                number="01"
                label="ABOUT"
                title={<>A little about <em>me.</em></>}
            />

            <div className="about-grid">
                <div className="about-text">
                    <p className="large-text">
                        I enjoy working where technology meets real-world problems.
                    </p>
                    <p>
                        My background combines Computer Science and Bioinformatics,
                        giving me experience across software development, data analysis,
                        artificial intelligence, and computational biology.
                    </p>
                    <p>
                        I enjoy building practical applications, exploring new
                        technologies, and turning complex ideas into useful solutions.
                    </p>
                    <div className="about-location">
                        <MapPin size={17} /> Cairo, Egypt
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <strong>3.64</strong>
                        <span>CGPA / 4.0</span>
                    </div>
                    <div className="stat-card">
                        <strong>02</strong>
                        <span>Department ranking</span>
                    </div>
                    <div className="stat-card">
                        <strong>10+</strong>
                        <span>Technical projects</span>
                    </div>
                    <div className="stat-card">
                        <strong>05+</strong>
                        <span>Website projects</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Experience() {
    return (
        <section className="section experience-section" id="experience">
            <SectionHeading
                number="02"
                label="EXPERIENCE"
                title={<>Where I've <em>worked.</em></>}
            />

            <div className="experience-list">
                {experiences.map((item, index) => (
                    <article className="experience-card" key={item.role}>
                        <div className="experience-index">0{index + 1}</div>
                        <div className="experience-content">
                            <span className="experience-org">{item.organization}</span>
                            <h3>{item.role}</h3>
                            <p>{item.description}</p>
                            <ul>
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

function Skills() {
    return (
        <section className="section skills-section" id="skills">
            <SectionHeading
                number="03"
                label="SKILLS"
                title={<>Things I <em>work with.</em></>}
                description="A collection of technologies, tools, and concepts I've worked with."
            />

            <div className="skills-grid">
                {skillGroups.map((group) => {
                    const Icon = group.icon

                    return (
                        <article className="skill-card" key={group.title}>
                            <div className="skill-icon">
                                <Icon size={23} />
                            </div>
                            <h3>{group.title}</h3>
                            <div className="skill-tags">
                                {group.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

function Projects() {
    const [filter, setFilter] = useState('All')

    const filters = [
        'All',
        'Web Development',
        'Software Development',
        'Bioinformatics',
        'AI & Computer Vision',
        'AI & Machine Learning',
    ]

    const filteredProjects =
        filter === 'All'
            ? projects
            : projects.filter((project) => project.category === filter)

    return (
        <section className="section projects-section" id="projects">
            <SectionHeading
                number="04"
                label="SELECTED WORK"
                title={<>Ideas turned into <em>projects.</em></>}
                description="A selection of websites, applications, and academic projects."
            />

            <div className="project-filters">
                {filters.map((item) => (
                    <button
                        key={item}
                        className={filter === item ? 'active' : ''}
                        onClick={() => setFilter(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-image">
              <span className="project-count">
                {String(index + 1).padStart(2, '0')}
              </span>
                            <span className="project-image-label">
                {project.category}
              </span>
                            <Code2 size={58} strokeWidth={1} />
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-open"
                                    aria-label={`Open ${project.title}`}
                                >
                                    <ExternalLink />
                                </a>
                            )}
                        </div>

                        <div className="project-details">
                            <span className="project-category">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    className="project-link"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View project <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

function Education() {
    return (
        <section className="section education-section" id="education">
            <SectionHeading
                number="05"
                label="EDUCATION"
                title={<>My academic <em>background.</em></>}
            />

            <div className="education-card">
                <div className="education-icon">
                    <GraduationCap size={30} />
                </div>
                <div className="education-details">
                    <span className="education-date">2022 — 2026</span>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <h4>Ain Shams University</h4>
                    <p>Faculty of Computer and Information Sciences · Cairo, Egypt</p>
                    <div className="education-highlights">
                        <span>CGPA: 3.64 / 4.0</span>
                        <span>Minor: Bioinformatics</span>
                        <span>Ranked 2nd in Department</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Certifications() {
    const items = [
        {
            name: 'Microsoft Azure Fundamentals',
            issuer: 'Microsoft',
            detail: 'AZ-900 Certification',
        },
        {
            name: 'Software Testing Professional Training',
            issuer: 'Six-month training program',
            detail: 'Manual & Automation Testing · Selenium',
        },
        {
            name: 'Genomics Data Analysis Workshop',
            issuer: '57357 Hospital · 2025',
            detail: 'Genomics and biological data analysis',
        },
    ]

    return (
        <section className="section certifications-section" id="certifications">
            <SectionHeading
                number="06"
                label="CERTIFICATIONS"
                title={<>Learning never <em>stops.</em></>}
            />

            <div className="certification-list">
                {items.map((item, index) => (
                    <article className="certification-card" key={item.name}>
                        <div className="certification-icon">
                            <Award size={24} />
                        </div>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.issuer}</p>
                            <span>{item.detail}</span>
                        </div>
                        <span className="certification-number">0{index + 1}</span>
                    </article>
                ))}
            </div>
        </section>
    )
}

function Achievements() {
    const achievements = [
        {
            number: '01',
            title: 'World Championship',
            description:
                'Competed at the Golf Croquet World Championship, representing Egypt on the international stage.',
        },
        {
            number: '02',
            title: '10th Worldwide',
            description:
                'Ranked 10th worldwide among female players and 1st in the female youth category.',
        },
        {
            number: '03',
            title: 'Egyptian League Champion',
            description:
                'Won the Egyptian League three consecutive times.',
        },
        {
            number: '04',
            title: 'U21 Coach',
            description:
                'Coached the next generation of Golf Croquet players, sharing experience and developing young talent.',
        },
    ]

    return (
        <section className="section achievements-section" id="achievements">
            <SectionHeading
                number="07"
                label="BEYOND THE CODE"
                title={<>A little more than <em>technology.</em></>}
                description="My journey has never been limited to one field. Sport, creativity, and technology have shaped the way I approach challenges."
            />

            <div className="achievements-intro">
                <p>
                    Outside technology, I am a professional Golf Croquet
                    player who has competed internationally. My journey
                    in the sport has taught me discipline, adaptability,
                    leadership, and the value of continuous improvement.
                </p>
            </div>

            <div className="achievements-grid">
                {achievements.map((item) => (
                    <article className="achievement-card" key={item.number}>
                        <span className="achievement-number">
                            {item.number}
                        </span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>

            <div className="story-card">
                <span className="section-number">THE CONNECTION</span>
                <h3>
                    From the croquet courts
                    <br />
                    <em>to the world of code.</em>
                </h3>
                <p>
                    My involvement in the international croquet community
                    introduced me to a different side of technology.
                    I started exploring web development through a desire
                    to build useful digital experiences for tournaments
                    and sporting events.
                </p>
                <p>
                    What began as an interest in creating websites grew
                    into an opportunity to combine two things I genuinely
                    enjoy: technology and the sport that has been such
                    an important part of my life.
                </p>
                <p>
                    Today, I enjoy building websites and applications
                    that bring information, people, and experiences
                    together. I love finding ways to combine different
                    interests and turn them into something meaningful.
                </p>
            </div>
        </section>
    )
}

function Contact() {
    return (
        <section className="section contact-section" id="contact">
            <span className="section-number">08 / CONTACT</span>
            <h2>
                Have something
                <br />
                <em>in mind?</em>
            </h2>
            <p>
                I'm always interested in new opportunities, collaborations,
                and conversations about technology.
            </p>

            <a
                href="mailto:janaelsaeed20@gmail.com"
                className="button button-primary contact-button"
            >
                Let's talk <ArrowUpRight size={18} />
            </a>

            <div className="contact-socials">
                <a href="https://github.com/JEE18BI" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <a href="#home" className="logo">JM<span>.</span></a>
            <p>Designed & built by Jana Mohamed © 2026</p>
            <a href="#home" className="back-top">
                Back to top ↑
            </a>
        </footer>
    )
}

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Certifications />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </>
    )
}