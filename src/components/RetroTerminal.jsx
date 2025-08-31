import React, { useState, useEffect, useRef } from 'react';

const RetroTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - Display information about Mugish',
      '  skills   - List technical skills',
      '  projects - Show recent projects',
      '  contact  - Display contact information',
      '  clear    - Clear terminal',
      '  matrix   - Enter the matrix',
      '  hack     - Initiate hacking sequence',
      '  coffee   - Make coffee (essential for coding)',
      '  ls       - List directory contents',
      '  pwd      - Print working directory',
      '  whoami   - Display current user'
    ],
    about: () => [
      'MUGISH BELDAR - SOFTWARE ENGINEER',
      '================================',
      'A passionate developer who loves creating innovative solutions.',
      'Specializes in backend development with Node.js and modern web technologies.',
      'Currently working at Rapidops Inc. as a Backend Developer.',
      'Always eager to learn new technologies and take on challenging projects.'
    ],
    skills: () => [
      'TECHNICAL SKILLS INVENTORY:',
      '==========================',
      '> Backend: Node.js, Express.js, MySQL, MongoDB, Prisma',
      '> Frontend: React.js, HTML5, CSS3, JavaScript, TailwindCSS',
      '> Tools: Git, GitHub, VS Code, Postman, Docker',
      '> Databases: MySQL, MongoDB, CockroachDB',
      '> Other: Kafka, Redis, TypeScript, Bootstrap'
    ],
    projects: () => [
      'RECENT PROJECTS:',
      '===============',
      '1. EmailClient Backend - Node.js email management system',
      '2. Zentalk Chat App - Real-time messaging with Socket.io',
      '3. Breeze Weather App - React-based weather application',
      '4. Retro Portfolio - This awesome terminal-style portfolio!'
    ],
    contact: () => [
      'CONTACT INFORMATION:',
      '===================',
      'Email: mugish.beldar@example.com',
      'LinkedIn: https://www.linkedin.com/in/mugish-beldar-927686229/',
      'GitHub: https://github.com/MugishBeldar',
      'Twitter: https://twitter.com/MugishBeldar',
      'Status: Available for collaboration!'
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    matrix: () => [
      'Entering the Matrix...',
      '█▀▄▀█ ▄▀█ ▀█▀ █▀█ █ ▀▄▀',
      '█ ▀ █ █▀█  █  █▀▄ █ █ █',
      'Wake up, Neo...',
      'The Matrix has you...',
      'Follow the white rabbit...'
    ],
    hack: () => [
      'INITIATING HACKING SEQUENCE...',
      'Scanning for vulnerabilities...',
      'Bypassing firewall... [████████████] 100%',
      'Accessing mainframe... [████████████] 100%',
      'Downloading files... [████████████] 100%',
      'HACK COMPLETE! Just kidding, this is just for fun 😄'
    ],
    coffee: () => [
      'Making coffee...',
      '☕ Grinding beans...',
      '💧 Heating water...',
      '⏰ Brewing...',
      '✅ Coffee ready! Productivity +100%'
    ],
    ls: () => [
      'total 42',
      'drwxr-xr-x  2 mugish dev  4096 Dec 25 2024 skills/',
      'drwxr-xr-x  2 mugish dev  4096 Dec 25 2024 projects/',
      'drwxr-xr-x  2 mugish dev  4096 Dec 25 2024 experience/',
      '-rw-r--r--  1 mugish dev  1337 Dec 25 2024 resume.pdf',
      '-rw-r--r--  1 mugish dev   420 Dec 25 2024 bio.txt',
      '-rwxr-xr-x  1 mugish dev  2048 Dec 25 2024 awesome.exe'
    ],
    pwd: () => ['/home/mugish/portfolio'],
    whoami: () => ['mugish']
  };

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd] ? commands[trimmedCmd]() : [`Command not found: ${cmd}. Type 'help' for available commands.`];
    
    if (trimmedCmd !== 'clear') {
      setHistory(prev => [...prev, { type: 'input', content: cmd }, { type: 'output', content: output }]);
    }
    
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="retro-terminal">
      <div className="terminal-window" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
        <div className="terminal-header">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span style={{ marginLeft: '1rem' }}>INTERACTIVE TERMINAL - Type 'help' for commands</span>
        </div>
        
        <div className="terminal-content" style={{ 
          flex: 1, 
          overflow: 'auto', 
          padding: '1rem',
          fontFamily: 'Share Tech Mono'
        }}>
          {/* Welcome message */}
          <div className="terminal-line" style={{ color: 'var(--neon-cyan)', marginBottom: '1rem' }}>
            Welcome to Mugish's Interactive Terminal v2.0
          </div>
          <div className="terminal-line" style={{ color: 'var(--neon-purple)', marginBottom: '1rem' }}>
            Type 'help' to see available commands. Use ↑/↓ arrows for command history.
          </div>
          
          {/* Command history */}
          {history.map((entry, index) => (
            <div key={index}>
              {entry.type === 'input' ? (
                <div className="terminal-line">
                  <span className="prompt">mugish@portfolio:~$ </span>
                  <span>{entry.content}</span>
                </div>
              ) : (
                <div style={{ marginBottom: '1rem' }}>
                  {Array.isArray(entry.content) ? entry.content.map((line, lineIndex) => (
                    <div key={lineIndex} className="terminal-line" style={{ color: 'var(--retro-green)' }}>
                      {line}
                    </div>
                  )) : (
                    <div className="terminal-line" style={{ color: 'var(--retro-green)' }}>
                      {entry.content}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {/* Current input */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <span className="prompt">mugish@portfolio:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--retro-green)',
                fontFamily: 'Share Tech Mono',
                fontSize: '1rem',
                outline: 'none',
                flex: 1,
                marginLeft: '0.5rem'
              }}
              placeholder="Type a command..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RetroTerminal;
