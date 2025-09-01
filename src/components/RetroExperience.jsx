/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { experiences } from '../data/constant';

const RetroExperience = () => {
  const [currentLog, setCurrentLog] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const logEntries = experiences.map((exp, index) => ({
    ...exp,
    logId: `LOG_${String(index + 1).padStart(3, '0')}`,
    timestamp: new Date(exp.date.split(' - ')[0]).toISOString().split('T')[0],
    status: 'COMPLETED'
  }));

  useEffect(() => {
    if (currentLog < logEntries.length) {
      setIsTyping(true);
      const entry = logEntries[currentLog];
      const fullText = `
[${entry.timestamp}] ${entry.logId} - EMPLOYMENT RECORD
COMPANY: ${entry.company}
POSITION: ${entry.role}
DURATION: ${entry.date}
STATUS: ${entry.status}

DESCRIPTION:
${entry.desc}

TECHNOLOGIES DEPLOYED:
${entry.skills.map(skill => `• ${skill}`).join('\n')}

LOG END - NEXT ENTRY LOADING...
      `;
      
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => {
            setCurrentLog(prev => (prev + 1) % logEntries.length);
            setDisplayText('');
          }, 3000);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }
  }, [currentLog]);

  return (
    <section className="retro-experience">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span style={{ marginLeft: '1rem' }}>WORK_LOG.SYS - EMPLOYMENT HISTORY</span>
        </div>
        
        <div className="terminal-content">
          {/* <div className="terminal-line">
            <span className="prompt">work@portfolio:~$ </span>
            <span>tail -f /var/log/employment.log</span>
          </div>
          
          <div className="log-viewer" style={{
            background: 'var(--retro-bg)',
            border: '1px solid var(--retro-green)',
            padding: '1rem',
            margin: '1rem 0',
            minHeight: '400px',
            fontFamily: 'Share Tech Mono',
            fontSize: '0.9rem',
            whiteSpace: 'pre-wrap',
            overflow: 'hidden'
          }}>
            {displayText}
            {isTyping && <span className="cursor-blink">█</span>}
          </div> */}

          {/* Experience Timeline */}
          <div className="experience-timeline" style={{ marginTop: '2rem' }}>
            <div className="terminal-line" style={{ color: 'var(--retro-blue)', marginBottom: '1rem' }}>
              <span className="prompt">work@portfolio:~$ </span>
              <span>ls -la /career/timeline/</span>
            </div>

            <div className="timeline-container">
              {logEntries.map((entry, index) => (
                <div 
                  key={index} 
                  className={`retro-card timeline-entry ${currentLog === index ? 'active' : ''}`}
                  style={{
                    marginBottom: '1rem',
                    borderColor: currentLog === index ? 'var(--retro-yellow)' : 'var(--retro-green)',
                    background: currentLog === index ? 'rgba(255, 255, 0, 0.1)' : 'var(--retro-secondary)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <img 
                      src={entry.img} 
                      alt={entry.company}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'contain',
                        border: '2px solid var(--retro-green)',
                        padding: '0.5rem',
                        background: 'white'
                      }}
                    />
                    <div>
                      <div style={{ color: 'var(--retro-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                        {entry.company}
                      </div>
                      <div style={{ color: 'var(--retro-blue)' }}>
                        {entry.role}
                      </div>
                      <div style={{ color: 'var(--retro-accent)', fontSize: '0.9rem' }}>
                        {entry.date}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem', color: 'var(--retro-green)' }}>
                    {entry.desc}
                  </div>

                  <div className="skills-tags" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {entry.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        style={{
                          background: 'transparent',
                          border: '1px solid var(--retro-blue)',
                          color: 'var(--retro-blue)',
                          padding: '0.2rem 0.5rem',
                          fontSize: '0.8rem',
                          fontFamily: 'Share Tech Mono'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {entry.url && (
                    <div style={{ marginTop: '1rem' }}>
                      <a 
                        href={entry.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="retro-btn"
                        style={{ textDecoration: 'none', fontSize: '0.8rem' }}
                      >
                        [VISIT COMPANY]
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="terminal-line" style={{ 
            marginTop: '2rem', 
            color: 'var(--retro-green)',
            borderTop: '1px solid var(--retro-green)',
            paddingTop: '1rem'
          }}>
            <span className="prompt">work@portfolio:~$ </span>
            <span>grep -c "COMPLETED" /var/log/employment.log</span>
            <br />
            <span style={{ color: 'var(--retro-yellow)' }}>
              {logEntries.length} employment records found
            </span>
          </div>

          <div className="career-stats" style={{
            marginTop: '1rem',
            padding: '1rem',
            border: '1px solid var(--retro-purple)',
            background: 'rgba(185, 103, 219, 0.1)'
          }}>
            <div style={{ color: 'var(--retro-purple)', marginBottom: '0.5rem' }}>
              CAREER STATISTICS:
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              • Total positions: {logEntries.length}
              <br />
              • Years of experience: {new Date().getFullYear() - 2022}+
              <br />
              • Current status: ACTIVELY EMPLOYED
              <br />
              • Career progression: ASCENDING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetroExperience;
