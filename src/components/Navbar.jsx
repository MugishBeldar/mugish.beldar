import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  // Close mobile menu when clicking on nav links
  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)
    setActiveSection(sectionId) // Immediately set active section

    // Instant scroll to section (no animation)
    const targetSection = document.getElementById(sectionId)
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'auto' // Changed from 'smooth' to 'auto' for instant scroll
      })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const updateActiveSection = () => {
      // Look for sections by their IDs instead of class
      const sectionIds = ['home', 'skills', 'education', 'experience', 'projects', 'contact']
      const scrollPos = window.scrollY + 100 // Offset for navbar height

      let currentSection = 'home' // Default to home

      sectionIds.forEach(sectionId => {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = sectionId
          }
        }
      })

      setActiveSection(currentSection)
    }

    // Navbar background opacity on scroll
    const updateNavbarOnScroll = () => {
      const navbar = document.getElementById('navbar')
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (navbar) {
        if (scrollTop > 50) {
          navbar.style.background = 'rgba(139, 92, 246, 0.15)'
          navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.6)'
        } else {
          navbar.style.background = 'rgba(139, 92, 246, 0.1)'
          navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)'
        }
      }
    }

    const handleScroll = () => {
      updateActiveSection()
      updateNavbarOnScroll()
    }

    window.addEventListener('scroll', handleScroll)
    
    // Close mobile menu when clicking outside
    const handleClickOutside = (e) => {
      const navMenu = document.getElementById('nav-menu')
      const hamburger = document.getElementById('hamburger')
      const isClickInsideNav = navMenu?.contains(e.target) || hamburger?.contains(e.target)
      
      if (!isClickInsideNav && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    // Handle window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar" id="navbar">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="nav-container">
          {/* Logo/Brand */}
          <div className="nav-brand">
            <a href="#home" className="brand-link" onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}>
              MUGISH BELDAR
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="nav-container">
          {/* Mobile Logo/Brand */}
          <div className="nav-brand">
            <span className="brand-link">
              MB
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu-container ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <ul className="nav-menu mobile-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
