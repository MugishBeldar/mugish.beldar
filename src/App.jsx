import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import RetroHero from './components/RetroHero';
import RetroNavbar from './components/RetroNavbar';
import RetroSkills from './components/RetroSkills';
import RetroExperience from './components/RetroExperience';
import RetroProjects from './components/RetroProjects';
import RetroContact from './components/RetroContact';
import RetroTerminal from './components/RetroTerminal';
import './index.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState('');

  useEffect(() => {
    const bootSequence = [
      'INITIALIZING RETRO PORTFOLIO v2.0...',
      'LOADING SYSTEM MODULES...',
      'CHECKING MEMORY... OK',
      'LOADING GRAPHICS DRIVER... OK',
      'INITIALIZING SOUND SYSTEM... OK',
      'LOADING USER PROFILE: MUGISH BELDAR',
      'SYSTEM READY. WELCOME TO THE MATRIX.'
    ];

    let currentIndex = 0;
    let timeoutId;

    const displayNextLine = () => {
      // Double check we have a valid message
      if (currentIndex >= 0 && currentIndex < bootSequence.length && bootSequence[currentIndex]) {
        const message = bootSequence[currentIndex];
        setBootText(prev => prev + message + '\n');
        currentIndex++;

        // Only schedule next if we have more valid messages
        if (currentIndex < bootSequence.length) {
          timeoutId = setTimeout(displayNextLine, 800);
        } else {
          // Finished all messages, start portfolio
          timeoutId = setTimeout(() => setIsBooting(false), 1500);
        }
      } else {
        // Safety: if something goes wrong, just start the portfolio
        setIsBooting(false);
      }
    };

    // Start the boot sequence
    timeoutId = setTimeout(displayNextLine, 800);

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (isBooting) {
    return (
      <div className="retro-boot-screen">
        <div className="crt-effect">
          <div className="boot-container">
            <div className="boot-header">
              <div className="ascii-art">
                ╔══════════════════════════════════════╗<br/>
                ║    RETRO PORTFOLIO SYSTEM v2.0       ║<br/>
                ║         COPYRIGHT 2024               ║<br/>
                ╚══════════════════════════════════════╝
              </div>
            </div>
            <div className="boot-text">
              <pre>{bootText}</pre>
              <span className="cursor-blink">█</span>
            </div>

            {/* Retro progress bar */}
            <div style={{ marginTop: '2rem' }}>
              <div className="retro-loading"></div>
              <div style={{
                textAlign: 'center',
                marginTop: '1rem',
                color: 'var(--neon-cyan)',
                fontSize: '0.8rem'
              }}>
                ◄ ► ◄ ► LOADING RETRO EXPERIENCE ◄ ► ◄ ►
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="retro-portfolio">
      <div className="crt-effect">
        <div className="synthwave-grid"></div>
        <div className="scanlines"></div>
        <div className="retro-container">
          <RetroNavbar
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />

          <main className="retro-main">
            {currentSection === 'home' && <RetroHero />}
            {currentSection === 'skills' && <RetroSkills />}
            {currentSection === 'experience' && <RetroExperience />}
            {currentSection === 'projects' && <RetroProjects />}
            {currentSection === 'contact' && <RetroContact />}
            {currentSection === 'terminal' && <RetroTerminal />}
          </main>

          <footer className="retro-footer vhs-static">
            <div className="terminal-line">
              <span className="prompt">system@portfolio:~$ </span>
              <Typewriter
                words={[
                  'echo "Thanks for visiting the matrix!"',
                  'cat /dev/awesome | grep talent',
                  'ls -la /skills --sort=expertise',
                  'grep -r "innovation" /projects/',
                  'sudo make coffee && code',
                  'git push origin future',
                  'npm run build-dreams'
                ]}
                loop={true}
                cursor
                cursorStyle='█'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </div>

            <div style={{
              marginTop: '1rem',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--neon-cyan)'
            }}>
              <div className="neon-text">
                ◄ ► ◄ ► RETRO PORTFOLIO v1.0 ◄ ► ◄ ►
              </div>
              <div style={{ marginTop: '0.5rem', opacity: 0.7 }}>
                Powered by React • Styled with Nostalgia • Built with ❤️
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;