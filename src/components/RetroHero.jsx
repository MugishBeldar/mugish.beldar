import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Bio } from '../data/constant';

const RetroHero = () => {
  // Clean name display - no messy ASCII
  const nameDisplay = "MUGISH";

  // Responsive text - no scrollbars
  const retroBorder = `
◄ ► WELCOME TO THE MATRIX ◄ ►
◄ ► DEVELOPER PROFILE ◄ ►`;

  const systemInfo = [
    '> SYSTEM BOOT COMPLETE',
    '> USER PROFILE LOADED: MUGISH.BELDAR',
    '> SKILLS DATABASE: ONLINE',
    '> CREATIVITY LEVEL: MAXIMUM',
    '> STATUS: READY FOR COLLABORATION',
    '> COFFEE LEVEL: OPTIMAL'
  ];

  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  const [matrixRain, setMatrixRain] = useState([]);

  useEffect(() => {
    // Matrix rain effect
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(1);
    
    const matrix = setInterval(() => {
      // eslint-disable-next-line no-unused-vars
      setMatrixRain(prev => {
        const newRain = [];
        for (let i = 0; i < columns; i++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const y = drops[i] * 20;
          newRain.push({ char, x: i * 20, y, opacity: Math.random() });
          
          if (y > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        return newRain;
      });
    }, 100);

    return () => clearInterval(matrix);
  }, []);

  return (
    <section className="retro-hero">
      {/* Matrix Rain Background */}
      <div className="matrix-rain">
        {matrixRain.map((drop, index) => (
          <span
            key={index}
            style={{
              position: 'absolute',
              left: drop.x,
              top: drop.y,
              color: `rgba(0, 255, 65, ${drop.opacity})`,
              fontSize: '14px',
              fontFamily: 'Share Tech Mono',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            {drop.char}
          </span>
        ))}
      </div>

      <div className="terminal-window" style={{ position: 'relative', zIndex: 10 }}>
        <div className="terminal-header">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span style={{ marginLeft: '1rem' }}>PORTFOLIO.EXE - MUGISH BELDAR</span>
        </div>
        
        <div className="terminal-content">
          {/* Retro Border */}
          <div style={{ marginBottom: '1rem' }}>
            <pre style={{
              color: 'var(--neon-cyan)',
              fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
              lineHeight: '1.2',
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '0 0 10px var(--neon-cyan)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'keep-all',
              overflow: 'hidden'
            }}>
              {retroBorder}
            </pre>
          </div>

          {/* System Info */}
          <div style={{ marginBottom: '1rem' }}>
            {systemInfo.map((info, index) => (
              <div
                key={index}
                className="terminal-line"
                style={{
                  color: 'var(--neon-cyan)',
                  fontSize: '0.8rem',
                  // animation: `fadeIn 0.5s ease-in ${index * 0.3}s both`
                }}
              >
                {info}
              </div>
            ))}
          </div>

          {/* <div className="name-display" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1 className="holographic robotic-title" style={{
              fontSize: '3rem',
              fontWeight: '900',
              letterSpacing: '0.5rem',
              color: 'var(--neon-pink)',
              textShadow: '0 0 20px var(--neon-pink)',
              margin: 0
            }}>
              {nameDisplay}
            </h1>
          </div> */}
          
          <div className="hero-info">
            <div className="terminal-line">
              <span className="prompt">root@portfolio:~$ </span>
              <span>whoami</span>
            </div>
            <div className="terminal-line" style={{ color: 'var(--retro-yellow)' }}>
              {Bio.name}
            </div>
            
            <div className="terminal-line">
              <span className="prompt">root@portfolio:~$ </span>
              <span>cat /etc/roles</span>
            </div>
            <div className="terminal-line" style={{ color: 'var(--retro-accent)' }}>
              <Typewriter
                words={Bio.roles}
                loop={true}
                cursor
                cursorStyle='█'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
            
            <div className="terminal-line">
              <span className="prompt">root@portfolio:~$ </span>
              <span>cat /home/mugish/bio.txt</span>
            </div>
            <div className="terminal-line" style={{ color: 'var(--retro-green)', marginTop: '1rem' }}>
              {Bio.description}
            </div>
            
            <div className="terminal-line" style={{ marginTop: '2rem' }}>
              <span className="prompt">root@portfolio:~$ </span>
              <span>ls -la /social/</span>
            </div>
            
            <div className="social-links" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={Bio.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-btn"
                style={{ textDecoration: 'none' }}
              >
                [GITHUB]
              </a>
              <a 
                href={Bio.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-btn"
                style={{ textDecoration: 'none' }}
              >
                [LINKEDIN]
              </a>
              <a 
                href={Bio.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-btn"
                style={{ textDecoration: 'none' }}
              >
                [RESUME]
              </a>
              <a 
                href={Bio.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-btn"
                style={{ textDecoration: 'none' }}
              >
                [TWITTER]
              </a>
            </div>
            
            <div className="terminal-line" style={{ marginTop: '2rem', color: 'var(--retro-purple)' }}>
              <span className="prompt">root@portfolio:~$ </span>
              <Typewriter
                words={[
                  'echo "Welcome to my digital realm"',
                  'sudo make coffee',
                  'git commit -m "Building the future"',
                  'npm run awesome',
                  'docker run --rm creativity'
                ]}
                loop={true}
                cursor
                cursorStyle='█'
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={3000}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="glitch-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1 
          className="glitch" 
          data-text="ENTER THE MATRIX"
          style={{ 
            fontSize: '1.5rem',
            fontFamily: 'Orbitron, monospace',
            textShadow: '0 0 10px var(--retro-green)'
          }}
        >
          ENTER THE MATRIX
        </h1>
      </div>
    </section>
  );
};

export default RetroHero;
