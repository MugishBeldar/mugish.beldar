import React, { useState, useEffect } from 'react';
import { skills } from '../data/constant';
import SkillIcon from './SkillIcon';

const RetroSkills = () => {
  const [loadingSkills, setLoadingSkills] = useState({});
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [expandedSkill, setExpandedSkill] = useState(null);

  useEffect(() => {
    // Simulate loading skills one by one
    const loadSkills = async () => {
      for (let categoryIndex = 0; categoryIndex < skills.length; categoryIndex++) {
        const category = skills[categoryIndex];
        setDisplayedSkills(prev => [...prev, { ...category, skills: [] }]);
        
        for (let skillIndex = 0; skillIndex < category.skills.length; skillIndex++) {
          const skill = category.skills[skillIndex];
          const skillKey = `${categoryIndex}-${skillIndex}`;
          
          setLoadingSkills(prev => ({ ...prev, [skillKey]: true }));
          
          await new Promise(resolve => setTimeout(resolve, 50));
          
          setDisplayedSkills(prev => {
            const newSkills = [...prev];
            if (!newSkills[categoryIndex]) {
              newSkills[categoryIndex] = { ...category, skills: [] };
            }
            newSkills[categoryIndex].skills.push(skill);
            return newSkills;
          });
          
          setLoadingSkills(prev => ({ ...prev, [skillKey]: false }));
        }
      }
    };

    loadSkills();
  }, []);

  // Function to get skill description from the skill object
  const getSkillDescription = (skill) => {
    return skill.description || 'A powerful technology used in modern software development.';
  };

  const handleSkillClick = (skillKey) => {
    setExpandedSkill(expandedSkill === skillKey ? null : skillKey);
  };

  return (
    <section className="retro-skills">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span style={{ marginLeft: '1rem' }}>SKILLS.EXE - SYSTEM ANALYSIS</span>
        </div>
        
        <div className="terminal-content">
          <div className="terminal-line">
            <span className="prompt">skills@portfolio:~$ </span>
            <span>./scan_abilities.sh --verbose</span>
          </div>
          
          <div className="terminal-line" style={{ color: 'var(--retro-yellow)', marginBottom: '2rem' }}>
            Scanning system for installed packages and capabilities...
          </div>

          {displayedSkills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category" style={{ marginBottom: '2rem' }}>
              <div className="terminal-line" style={{ color: 'var(--retro-blue)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                <span className="prompt">└─$ </span>
                <span>ls /usr/local/{category.title.toLowerCase()}/</span>
              </div>
              
              <div className="skills-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginLeft: '2rem'
              }}>
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const isLoading = loadingSkills[skillKey];
                  const isExpanded = expandedSkill === skillKey;

                  return (
                    <div
                      key={skillIndex}
                      className="retro-card"
                      style={{
                        padding: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
                        gridColumn: isExpanded ? 'span 3' : 'span 1',
                        border: isExpanded ? '2px solid var(--neon-cyan)' : '1px solid var(--retro-green)'
                      }}
                      onClick={() => handleSkillClick(skillKey)}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: isExpanded ? 'flex-start' : 'center',
                        marginBottom: isExpanded ? '0.5rem' : '0'
                      }}>
                        <SkillIcon skillName={skill.name} />
                        <span style={{
                          color: 'var(--retro-green)',
                          fontWeight: 'bold',
                          fontFamily: 'var(--font-robotic-secondary)',
                          fontSize: '0.9rem'
                        }}>
                          {skill.name}
                        </span>
                        <span style={{
                          color: 'var(--retro-yellow)',
                          fontSize: '0.7rem',
                          fontFamily: 'Share Tech Mono'
                        }}>
                          {isLoading ? '[...]' : '[✓]'}
                        </span>
                        {isExpanded && (
                          <span style={{
                            color: 'var(--neon-cyan)',
                            fontSize: '0.7rem',
                            marginLeft: 'auto'
                          }}>
                            [EXPANDED]
                          </span>
                        )}
                      </div>

                      {isExpanded && (
                        <div style={{
                          marginTop: '0.5rem',
                          padding: '0.5rem',
                          backgroundColor: 'rgba(0, 255, 255, 0.1)',
                          border: '1px solid var(--neon-cyan)',
                          borderRadius: '4px'
                        }}>
                          <div style={{
                            color: 'var(--neon-cyan)',
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-robotic-secondary)',
                            marginBottom: '0.3rem'
                          }}>
                            DESCRIPTION:
                          </div>
                          <div style={{
                            color: 'var(--retro-green)',
                            fontSize: '0.75rem',
                            lineHeight: '1.4',
                            fontFamily: 'Share Tech Mono'
                          }}>
                            {getSkillDescription(skill)}
                          </div>
                          {skill.link && (
                            <div style={{ marginTop: '0.5rem' }}>
                              <a
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="retro-btn"
                                style={{
                                  textDecoration: 'none',
                                  fontSize: '0.7rem',
                                  padding: '0.3rem 0.6rem'
                                }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                [DOCS]
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          <div className="terminal-line" style={{ 
            marginTop: '2rem', 
            color: 'var(--retro-green)',
            borderTop: '1px solid var(--retro-green)',
            paddingTop: '1rem'
          }}>
            <span className="prompt">skills@portfolio:~$ </span>
            <span>echo "Scan complete. All systems operational."</span>
            <br />
            <span style={{ color: 'var(--retro-yellow)' }}>
              Scan complete. All systems operational.
            </span>
          </div>
          
          <div className="skill-summary" style={{
            marginTop: '1rem',
            padding: '1rem',
            border: '1px solid var(--retro-blue)',
            background: 'rgba(0, 212, 255, 0.1)'
          }}>
            <div style={{ color: 'var(--retro-blue)', marginBottom: '0.5rem' }}>
              SYSTEM SUMMARY:
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              • Total packages scanned: {skills.reduce((acc, cat) => acc + cat.skills.length, 0)}
              <br />
              • Categories analyzed: {skills.length}
              <br />
              • System status: FULLY OPERATIONAL
              <br />
              • Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetroSkills;
