import { useState, useEffect } from 'react'
import { FileText } from 'lucide-react'
import './Home.css'

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const roles = [
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Programmer"
  ]

  // Typewriter effect
  useEffect(() => {
    const currentRoleText = roles[currentRole]
    let currentIndex = 0

    // Clear text first
    setDisplayedText('')
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentRoleText.length) {
        setDisplayedText(currentRoleText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        // Wait before starting next role
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100) // Typing speed

    return () => clearInterval(typeInterval)
  }, [currentRole, roles.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Content */}
        <div className="home-content">
          <div className="glass-card">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="name-title">
              <span className="first-name">Mugish</span>
              <span className="last-name">Beldar</span>
            </h1>
            
            <div className="role-container">
              <span className="role-prefix">I'm a &nbsp;</span>
              <span className="dynamic-role">
                {displayedText}
                <span className={`cursor ${isTyping ? 'typing' : 'blinking'}`}>|</span>
              </span>
            </div>
            
            <p className="description">
              Passionate about creating beautiful, functional, and user-friendly 
              applications. I love turning complex problems into simple, elegant 
              solutions through clean code and innovative design.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              {/* <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div> */}
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button
                className="btn-resume"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FileText size={20} className="resume-icon" />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
