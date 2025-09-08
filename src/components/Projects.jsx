import { useState } from 'react'
import { ExternalLink, Calendar, Users, Star, Zap } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (projectTitle) => {
    setImageErrors(prev => ({
      ...prev,
      [projectTitle]: true
    }))
  }

  const renderFallbackImage = (projectTitle) => (
    <div className="project-image-fallback">
      <div className="fallback-bg-pattern">
        <div className="pattern-circle circle-1"></div>
        <div className="pattern-circle circle-2"></div>
        <div className="pattern-circle circle-3"></div>
        <div className="pattern-line line-1"></div>
        <div className="pattern-line line-2"></div>
      </div>
      <div className="fallback-content">
        <div className="fallback-icon-container">
          <div className="icon-glow"></div>
          <svg className="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21,15 16,10 5,21" />
          </svg>
        </div>
        <div className="fallback-text">
          <div className="text-primary">{projectTitle}</div>
          <div className="text-secondary">Project Preview</div>
        </div>
        <div className="loading-dots">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
      </div>
    </div>
  )

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with modern UI/UX, real-time inventory management, and secure payment processing. Built with Next.js, and PostgreSQL.",
      image: "/src/assets/ecommerce-web-application.png",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Vercel", "Shadcn UI"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard",
        "Mobile responsive design"
      ],
      links: {
        live: "https://ecommerce-abc-store.vercel.app/",
        github: "https://github.com/MugishBeldar/nextjs14-ecommerce-web-application"
      },
      status: "Live",
    },
    {
      title: "Breeze Weather Application",
      description: "Breeze, a sleek React-based weather app, leverages the OpenWeatherMap API to provide a responsive and visually appealing interface. Offering a concise five-day forecast with real-time updates, interactive maps, and customizable units, Breeze ensures users stay informed and in control of their weather plans.",
      image: "/src/assets/breeze-wheather-application.png",
      technologies: ["Node Js",
        "Express Js",
        "React Js",
        "TailwindCss",
        "Ant Design",
        "OpenWeatherMap"],
      features: [
        "Interactive data visualization",
        "Historical analysis",
        "API integration"
      ],
      links: {
        live: "https://breeze-lake.vercel.app/",
        github: "https://github.com/MugishBeldar/Weather-Application"
      },
      status: "Live",
    },
    {
      title: "Portfolio",
      description: "A modern portfolio website with aesthetic, featuring glassmorphism effects, interactive animations, and responsive design. Built with React and custom CSS to showcase projects and skills in a visually stunning interface.",
      image: "/src/assets/portfolio.png",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "Lucide Icons", "Glassmorphism"],
      features: [
        "Glassmorphism effects",
        "Responsive layout",
        "Interactive animations",
        "Modern UI/UX"
      ],
      links: {
        live: "https://mugish.is-a.dev/",
        github: "https://github.com/MugishBeldar/mugish.beldar"
      },
      status: "Live",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of my recent work and the impact I've created through innovative solutions
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                {imageErrors[project.title] ? (
                  renderFallbackImage(project.title)
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={() => handleImageError(project.title)}
                  />
                )}
                <div className="project-action-buttons">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn live-btn"
                    title="Live Demo"
                  >
                    <ExternalLink className="btn-icon" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn github-btn"
                    title="Source Code"
                  >
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>

                <p className="project-description">{project.description}</p>

                {/* <div className="project-metrics">
                  <div className="metric-item">
                    <Users className="metric-icon" />
                    <div className="metric-content">
                      <span className="metric-value">{project.metrics.users}</span>
                      <span className="metric-label">Users</span>
                    </div>
                  </div>
                  <div className="metric-item">
                    <Zap className="metric-icon" />
                    <div className="metric-content">
                      <span className="metric-value">{project.metrics.performance}</span>
                      <span className="metric-label">Uptime</span>
                    </div>
                  </div>
                  <div className="metric-item">
                    <Star className="metric-icon" />
                    <div className="metric-content">
                      <span className="metric-value">{project.metrics.rating}</span>
                      <span className="metric-label">Rating</span>
                    </div>
                  </div>
                </div> */}

                <div className="project-details">
                  <div className="project-features">
                    <h4 className="details-title">Key Features</h4>
                    <ul className="features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="project-info">
                    <div className="info-item">
                      <Calendar className="info-icon" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="info-item">
                      <Users className="info-icon" />
                      <span>{project.team}</span>
                    </div>
                  </div> */}
                </div>

                <div className="project-technologies">
                  <h4 className="details-title">Technologies</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
