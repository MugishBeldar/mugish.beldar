import React, { useState, useEffect } from 'react';
import { projects } from '../data/constant';

const RetroProjects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    // Simulate project scanning
    setIsScanning(true);
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          setIsScanning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(scanInterval);
  }, []);

  const projectsWithMetadata = projects.map((project, index) => ({
    ...project,
    projectId: `PROJ_${String(index + 1).padStart(3, '0')}`,
    status: 'DEPLOYED',
    version: `v${Math.floor(Math.random() * 3) + 1}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`,
    size: `${Math.floor(Math.random() * 500) + 100}KB`,
    commits: Math.floor(Math.random() * 200) + 50
  }));

  const handleProjectSelect = (index) => {
    setSelectedProject(index);
  };

  return (
    <section className="retro-projects">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span style={{ marginLeft: '1rem' }}>PROJECT_MANAGER.EXE - REPOSITORY SCANNER</span>
        </div>
        
        <div className="terminal-content">
          <div className="terminal-line">
            <span className="prompt">projects@portfolio:~$ </span>
            <span>./scan_repositories.sh --deep-analysis</span>
          </div>
          
          {isScanning && (
            <div style={{ margin: '1rem 0' }}>
              <div style={{ color: 'var(--retro-yellow)', marginBottom: '0.5rem' }}>
                Scanning project repositories... {scanProgress}%
              </div>
              <div className="retro-progress">
                <div 
                  className="retro-progress-fill"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>
          )}

          {!isScanning && (
            <>
              <div className="terminal-line" style={{ color: 'var(--retro-green)', marginBottom: '2rem' }}>
                Scan complete. {projectsWithMetadata.length} repositories found.
              </div>

              {/* Project List */}
              <div className="project-list" style={{ marginBottom: '2rem' }}>
                <div className="terminal-line" style={{ color: 'var(--retro-blue)', marginBottom: '1rem' }}>
                  <span className="prompt">projects@portfolio:~$ </span>
                  <span>ls -la /repositories/</span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1rem'
                }}>
                  {projectsWithMetadata.map((project, index) => (
                    <div
                      key={index}
                      className={`retro-card project-card ${selectedProject === index ? 'active' : ''}`}
                      onClick={() => handleProjectSelect(index)}
                      style={{
                        cursor: 'pointer',
                        borderColor: selectedProject === index ? 'var(--retro-yellow)' : 'var(--retro-green)',
                        background: selectedProject === index ? 'rgba(255, 255, 0, 0.1)' : 'var(--retro-secondary)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ color: 'var(--retro-yellow)', fontWeight: 'bold' }}>
                          {project.projectId}
                        </div>
                        <div style={{ 
                          color: 'var(--retro-green)', 
                          fontSize: '0.8rem',
                          border: '1px solid var(--retro-green)',
                          padding: '0.2rem 0.5rem'
                        }}>
                          {project.status}
                        </div>
                      </div>

                      <div style={{ color: 'var(--retro-blue)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        {project.title}
                      </div>

                      <div style={{ color: 'var(--retro-accent)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        {project.date}
                      </div>

                      <div style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                        Size: {project.size} | Version: {project.version} | Commits: {project.commits}
                      </div>

                      <div className="project-tags" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.3rem',
                        marginBottom: '1rem'
                      }}>
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            style={{
                              background: 'transparent',
                              border: '1px solid var(--retro-purple)',
                              color: 'var(--retro-purple)',
                              padding: '0.1rem 0.3rem',
                              fontSize: '0.7rem'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span style={{ color: 'var(--retro-accent)', fontSize: '0.7rem' }}>
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div style={{ fontSize: '0.8rem', color: 'var(--retro-green)' }}>
                        Click to view details →
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Project Details */}
              <div className="project-details">
                <div className="terminal-line" style={{ color: 'var(--retro-blue)', marginBottom: '1rem' }}>
                  <span className="prompt">projects@portfolio:~$ </span>
                  <span>cat /repositories/{projectsWithMetadata[selectedProject]?.projectId}/README.md</span>
                </div>

                <div className="retro-card" style={{ background: 'var(--retro-bg)', border: '2px solid var(--retro-yellow)' }}>
                  {projectsWithMetadata[selectedProject] && (
                    <>
                      <div style={{ 
                        color: 'var(--retro-yellow)', 
                        fontSize: '1.3rem', 
                        marginBottom: '1rem',
                        fontFamily: 'Orbitron'
                      }}>
                        # {projectsWithMetadata[selectedProject].title}
                      </div>

                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ color: 'var(--retro-blue)', marginBottom: '0.5rem' }}>
                          ## Project Information
                        </div>
                        <div style={{ fontSize: '0.9rem' }}>
                          **Project ID:** {projectsWithMetadata[selectedProject].projectId}<br/>
                          **Development Period:** {projectsWithMetadata[selectedProject].date}<br/>
                          **Status:** {projectsWithMetadata[selectedProject].status}<br/>
                          **Version:** {projectsWithMetadata[selectedProject].version}
                        </div>
                      </div>

                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ color: 'var(--retro-blue)', marginBottom: '0.5rem' }}>
                          ## Description
                        </div>
                        <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                          {projectsWithMetadata[selectedProject].description}
                        </div>
                      </div>

                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ color: 'var(--retro-blue)', marginBottom: '0.5rem' }}>
                          ## Technologies Used
                        </div>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem'
                        }}>
                          {projectsWithMetadata[selectedProject].tags.map((tag, index) => (
                            <span
                              key={index}
                              style={{
                                background: 'var(--retro-green)',
                                color: 'var(--retro-bg)',
                                padding: '0.3rem 0.6rem',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="project-links" style={{
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '1rem'
                      }}>
                        <a 
                          href={projectsWithMetadata[selectedProject].github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="retro-btn"
                          style={{ textDecoration: 'none' }}
                        >
                          [VIEW SOURCE]
                        </a>
                        {projectsWithMetadata[selectedProject].liveLink && (
                          <a 
                            href={projectsWithMetadata[selectedProject].liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="retro-btn"
                            style={{ textDecoration: 'none' }}
                          >
                            [LIVE DEMO]
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RetroProjects;
