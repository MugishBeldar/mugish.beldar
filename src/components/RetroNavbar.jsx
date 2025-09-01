import React, { useState, useEffect } from 'react';

const RetroNavbar = ({ currentSection, setCurrentSection }) => {
  const [time, setTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memUsage, setMemUsage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setCpuUsage(Math.floor(Math.random() * 100));
      setMemUsage(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { id: 'home', label: 'HOME', command: 'cd ~/' },
    { id: 'skills', label: 'SKILLS', command: 'ls /skills/' },
    { id: 'experience', label: 'EXPERIENCE', command: 'cat /var/log/work.log' },
    { id: 'projects', label: 'PROJECTS', command: 'ls /projects/' },
    { id: 'terminal', label: 'TERMINAL', command: 'bash --interactive' },
    { id: 'contact', label: 'CONTACT', command: 'mail mugish@dev.local' }
  ];

  const handleNavClick = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <nav className="retro-navbar">
      {/* Single Line Status Bar - Like in your image */}
      {/* Full status bar for desktop */}
      <div className="retro-status-bar robotic-tech hidden md:flex" style={{
        background: 'var(--retro-green)',
        color: 'var(--retro-bg)',
        padding: '0.5rem 1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span>◄ RETRO-OS v2.0 ►</span>
          <span>🕐 {time.toLocaleTimeString()}</span>
          <span style={{ color: cpuUsage > 80 ? 'var(--laser-red)' : 'inherit' }}>
            🔥 CPU: {cpuUsage}%
          </span>
          <span>💾 MEM: {memUsage}%</span>
          <span>🌐 NET: ONLINE</span>
        </div>

        <div>
          USER: GUEST | SESSION: ACTIVE
        </div>
      </div>

      {/* Mobile status bar - only shows user info */}
      <div className="retro-status-bar-mobile robotic-tech flex md:hidden" style={{
        background: 'var(--retro-green)',
        color: 'var(--retro-bg)',
        padding: '0.5rem 1rem',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8rem',
        fontWeight: 'bold'
      }}>
        USER: GUEST | SESSION: ACTIVE
      </div>

      {/* Main Navigation - Keep original design */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span style={{ marginLeft: '1rem' }}>NAVIGATION.SYS</span>
        </div>

        <div className="terminal-content" style={{ padding: '1rem' }}>
          <div className="terminal-line" style={{ marginBottom: '1rem' }}>
            <span className="prompt">nav@portfolio:~$ </span>
            <span>ls -la /sections/</span>
          </div>

          <div className="nav-menu" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`retro-nav-btn robotic-subtitle ${currentSection === item.id ? 'active' : ''}`}
                style={{
                  background: currentSection === item.id ? 'var(--retro-green)' : 'transparent',
                  color: currentSection === item.id ? 'var(--retro-bg)' : 'var(--retro-green)',
                  border: `2px solid ${currentSection === item.id ? 'var(--retro-green)' : 'var(--retro-green)'}`,
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '120px'
                }}
              >
                <span style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  marginBottom: '0.2rem',
                  opacity: 0.7,
                  fontFamily: 'var(--font-mono)'
                }}>
                  {item.command}
                </span>
                <span style={{
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  fontSize: '0.85rem'
                }}>
                  [{item.label}]
                </span>
              </button>
            ))}
          </div>

          <div className="current-path" style={{
            color: 'var(--retro-blue)',
            fontSize: '0.9rem',
            marginTop: '1rem'
          }}>
            <span className="prompt">nav@portfolio:~$ </span>
            <span>pwd</span>
            <br />
            <span style={{ color: 'var(--retro-green)' }}>
              /home/portfolio/{currentSection}/
            </span>
          </div>
        </div>
      </div>

      {/* ASCII Art Decoration */}
      <div className="nav-decoration" style={{
        textAlign: 'center',
        marginTop: '1rem',
        color: 'var(--retro-green)',
        fontSize: '0.6rem',
        opacity: 0.7
      }}>
      </div>
    </nav>
  );
};

export default RetroNavbar;
