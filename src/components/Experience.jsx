import { Briefcase, Calendar, MapPin, TrendingUp, Users, Code, Database, Server, Shield, GitBranch } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experienceData = [
    {
      position: "Software Engineer",
      company: "Rapidops Inc.",
      location: "Ahmedabad, India",
      duration: "Augest 2023 - Present",
      type: "Full-time",
      description: "Software Engineer with 2+ years of experience in designing and developing scalable web applications using modern technologies. Skilled in system architecture design, performance optimization, and debugging complex issues. Actively involved in code reviews and implementing best practices to maintain high-quality, maintainable code. Collaborated with cross-functional teams including product managers, designers, and QA engineers to deliver reliable, user-focused software solutions within deadlines. Experienced in full-stack development, API integrations, and deploying applications in cloud environments.",
      achievements: [
        "Improved application performance by 40% through optimization of critical workflows",
        "Implemented worker pool with inter-process communication for efficient event processing in analytics service",
        "Designed and optimized scalable database queries to handle millions of records with minimal latency",
        "Contributed to system architecture decisions, ensuring high availability and fault tolerance",
        "Automated deployment and monitoring pipelines, reducing release time by 30%",
        "Collaborated with cross-functional teams to deliver reliable, production-ready features on time"
      ],
      technologies: [
        "Rust", "Actix-web", "Node.js", "Express.js", "React", "Zustand", "TypeScript", "Docker", "Kubernetes", "PostgreSQL", "Mysql", "ClickHOuse", "ScyllaDB", "MSSQL", "Redis"
      ],
      highlights: [
        { icon: TrendingUp, label: "40% Performance Boost", value: "Optimization" },
        { icon: Code, label: "Code Quality", value: "95% Coverage" },
        { icon: Database, label: "High Scalability", value: "Handled 1M+ Records" },
        { icon: Server, label: "Microservices", value: "Event-driven Architecture" },
        { icon: Shield, label: "Reliability", value: "99.9% Uptime" },
        { icon: GitBranch, label: "Collaboration", value: "Agile & CI/CD Practices" }
      ]

    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Professional Experience</h2>
          <p className="experience-subtitle">
            My journey through different roles and the impact I've made in each position
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-card">
                <div className="experience-main">
                  <div className="experience-icon">
                    <Briefcase className="briefcase-icon" />
                  </div>

                  <div className="experience-content">
                    <div className="experience-header-info">
                      <h3 className="experience-position">{exp.position}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                      <div className="experience-meta">
                        <div className="experience-location">
                          <MapPin className="meta-icon" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="experience-duration">
                          <Calendar className="meta-icon" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="experience-type">
                          <span className="type-badge">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <p className="experience-description">{exp.description}</p>

                    <div className="experience-highlights">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">
                          <highlight.icon className="highlight-icon" />
                          <div className="highlight-content">
                            <span className="highlight-value">{highlight.value}</span>
                            <span className="highlight-label">{highlight.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="experience-details">
                      <div className="experience-achievements">
                        <h4 className="details-title">Key Achievements</h4>
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="achievement-item">{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="experience-technologies">
                        <h4 className="details-title">Technologies Used</h4>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index < experienceData.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
