import React from 'react';

const SkillIcon = ({ skillName }) => {
  const getSkillIcon = (name) => {
    const iconStyles = {
      'Node Js': { bg: '#68A063', text: 'N', color: 'white' },
      'Express Js': { bg: '#000000', text: 'E', color: 'white' },
      'MySQL': { bg: '#00758F', text: 'SQL', color: 'white', fontSize: '8px' },
      'MongoDB': { bg: '#4DB33D', text: 'M', color: 'white' },
      'Prisma': { bg: '#2D3748', text: 'P', color: 'white' },
      'CockroachDB': { bg: '#6933FF', text: 'C', color: 'white' },
      'React Js': { bg: '#61DAFB', text: 'R', color: '#000' },
      'HTML': { bg: '#E34F26', text: 'H', color: 'white' },
      'CSS': { bg: '#1572B6', text: 'C', color: 'white' },
      'JavaScript': { bg: '#F7DF1E', text: 'JS', color: '#000', fontSize: '10px' },
      'TailwindCss': { bg: '#06B6D4', text: 'TW', color: 'white', fontSize: '9px' },
      'Bootstrap': { bg: '#7952B3', text: 'B', color: 'white' },
      'Git': { bg: '#F03C2E', text: 'Git', color: 'white', fontSize: '8px' },
      'GitHub': { bg: '#000000', text: 'GH', color: 'white', fontSize: '9px' },
      'VS Code': { bg: '#007ACC', text: 'VS', color: 'white', fontSize: '9px' },
      'Postman': { bg: '#FF6C37', text: 'PM', color: 'white', fontSize: '9px' },
      'Kafka': { bg: '#000000', text: 'K', color: 'white' },
      'Nats': { bg: '#27AAE1', text: 'N', color: 'white' },
      'Clickhouse': { bg: '#FFCC01', text: 'CH', color: '#000', fontSize: '9px' },
      'ScayllaDB': { bg: '#6CD4FF', text: 'S', color: '#000' },
      'Rust': { bg: '#000000', text: 'R', color: '#CE422B' },
      'TypeScript': { bg: '#3178C6', text: 'TS', color: 'white', fontSize: '9px' },
      'Docker': { bg: '#2496ED', text: 'D', color: 'white' },
      'Kubernetes': { bg: '#326CE5', text: 'K8', color: 'white', fontSize: '9px' },
      'Next Js': { bg: '#000000', text: 'N', color: 'white' },
      'Actix Web': { bg: '#FF6B35', text: 'AW', color: 'white', fontSize: '9px' }
    };

    const config = iconStyles[name] || { bg: 'var(--retro-green)', text: '?', color: 'var(--retro-bg)' };

    return (
      <div style={{
        width: '24px',
        height: '24px',
        backgroundColor: config.bg,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: config.color,
        fontSize: config.fontSize || '12px',
        fontWeight: 'bold',
        fontFamily: 'var(--font-robotic-secondary)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        {config.text}
      </div>
    );
  };

  return getSkillIcon(skillName);
};

export default SkillIcon;
