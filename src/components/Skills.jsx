import { useState, useEffect } from 'react'
import { Palette, Settings, Database, Cloud, Zap, Code, Wrench } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (skillName) => {
    setImageErrors(prev => ({
      ...prev,
      [skillName]: true
    }))
  }

  // Add staggered loading animation
  useEffect(() => {
    const items = document.querySelectorAll('.skill-item')
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('loading')
      }, index * 50)
    })
  }, [])

  const skillsData = {
    Languages: {
      icon: <Code className="category-icon" />,
      skills: [
        { name: "Rust", icon: "https://avatars.githubusercontent.com/u/5430905?s=48&v=4" },
        { name: "JavaScript", icon: "https://avatars.githubusercontent.com/u/9919?s=48&v=4" },
        { name: "TypeScript", icon: "/src/assets/typescript.png" }
      ]
    },
    Frontend: {
      icon: <Palette className="category-icon" />,
      skills: [
        { name: "React", icon: "https://avatars.githubusercontent.com/u/6412038?s=48&v=4" },
        { name: "Next.js", icon: "https://avatars.githubusercontent.com/u/14985020?s=48&v=4" },
        { name: "Vue.js", icon: "https://avatars.githubusercontent.com/u/6128107?s=48&v=4" }
      ]
    },
    Backend: {
      icon: <Settings className="category-icon" />,
      skills: [
        { name: "Actix Web", icon: "https://avatars.githubusercontent.com/u/32776943?s=48&v=4" },
        { name: "Axum", icon: "https://avatars.githubusercontent.com/u/20248544?s=48&v=4" },
        { name: "Node.js", icon: "https://avatars.githubusercontent.com/u/9950313?s=48&v=4" },
        { name: "Express.js", icon: "https://avatars.githubusercontent.com/u/5658226?s=48&v=4" }
      ]
    },
    Database: {
      icon: <Database className="category-icon" />,
      skills: [
        { name: "MySQL", icon: "https://avatars.githubusercontent.com/u/2452804?s=48&v=4" },
        { name: "MSSQL", icon: "/src/assets/sql-server.png" },
        { name: "ClickHouse", icon: "https://avatars.githubusercontent.com/u/54801242?s=48&v=4" },
        { name: "ScyllaDB", icon: "https://avatars.githubusercontent.com/u/14364730?s=48&v=4" },
        { name: "CockroachDB", icon: "https://avatars.githubusercontent.com/u/6748139?s=48&v=4" },
        { name: "PostgreSQL", icon: "https://avatars.githubusercontent.com/u/177543?s=48&v=4" },
        { name: "MongoDB", icon: "https://avatars.githubusercontent.com/u/45120?s=48&v=4" }
      ]
    },
    "Messaging & Streaming": {
      icon: <Zap className="category-icon" />,
      skills: [
        { name: "Kafka", icon: "https://avatars.githubusercontent.com/u/47359?s=48&v=4" },
        { name: "NATS", icon: "https://avatars.githubusercontent.com/u/10203055?s=200&v=4" }
      ]
    },
    DevOps: {
      icon: <Cloud className="category-icon" />,
      skills: [
        { name: "Docker", icon: "https://avatars.githubusercontent.com/u/5429470?s=48&v=4" },
        { name: "Kubernetes", icon: "https://avatars.githubusercontent.com/u/13629408?s=48&v=4" }
      ]
    },
    Tools: {
      icon: <Wrench className="category-icon" />,
      skills: [
        { name: "Lens", icon: "https://avatars.githubusercontent.com/u/62133242?s=48&v=4" },
        { name: "VS Code", icon: "", },
        { name: "JetBrains", icon: "https://avatars.githubusercontent.com/u/878437?s=48&v=4" },
        { name: "Postman", icon: "https://avatars.githubusercontent.com/u/10251060?s=48&v=4" },
        { name: "Git", icon: "https://avatars.githubusercontent.com/u/18133?s=48&v=4" },
        { name: "GitHub", icon: "https://avatars.githubusercontent.com/u/9919?s=48&v=4" }
      ]
    }
  }

  const renderFallbackIcon = (skillName) => (
    <div className="skill-icon-fallback">{skillName.charAt(0).toUpperCase()}</div>
  )

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            Technologies and tools I work with to build robust applications
          </p>
        </div>

        <div className="skills-stack">
          {Object.entries(skillsData).map(([category, data]) => (
            <div className="skill-category" key={category}>
              <div className="category-header">
                <span className="category-icon">{data.icon}</span>
                <h3 className="category-title">{category}</h3>
              </div>
              <div className="skills-list">
                {data.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    {imageErrors[skill.name] || !skill.icon ? (
                      renderFallbackIcon(skill.name)
                    ) : (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="skill-icon"
                        onError={() => handleImageError(skill.name)}
                      />
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
