/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Bio } from '../data/constant';

const RetroContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('ESTABLISHING');

  useEffect(() => {
    // Simulate connection establishment
    const statuses = ['ESTABLISHING', 'HANDSHAKE', 'AUTHENTICATED', 'CONNECTED'];
    let currentStatus = 0;
    
    const connectionInterval = setInterval(() => {
      if (currentStatus < statuses.length - 1) {
        currentStatus++;
        setConnectionStatus(statuses[currentStatus]);
      } else {
        clearInterval(connectionInterval);
      }
    }, 800);

    return () => clearInterval(connectionInterval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitProgress(0);

    // Simulate form submission
    const submitInterval = setInterval(() => {
      setSubmitProgress(prev => {
        if (prev >= 100) {
          clearInterval(submitInterval);
          setIsSubmitting(false);
          setSubmitted(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const contactMethods = [
    { 
      method: 'EMAIL', 
      address: 'mugish.beldar@example.com', 
      status: 'ACTIVE',
      icon: '📧'
    },
    { 
      method: 'LINKEDIN', 
      address: Bio.linkedin, 
      status: 'ACTIVE',
      icon: '💼'
    },
    { 
      method: 'GITHUB', 
      address: Bio.github, 
      status: 'ACTIVE',
      icon: '🐙'
    },
    { 
      method: 'TWITTER', 
      address: Bio.twitter, 
      status: 'ACTIVE',
      icon: '🐦'
    }
  ];

  return (
    <section className="retro-contact">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span style={{ marginLeft: '1rem' }}>COMMUNICATION.SYS - CONTACT INTERFACE</span>
        </div>
        
        <div className="terminal-content">
          <div className="terminal-line">
            <span className="prompt">comm@portfolio:~$ </span>
            <span>./establish_connection.sh --target=mugish.beldar</span>
          </div>
          
          <div className="connection-status" style={{ 
            margin: '1rem 0', 
            padding: '1rem',
            border: '1px solid var(--retro-blue)',
            background: 'rgba(0, 212, 255, 0.1)'
          }}>
            <div style={{ color: 'var(--retro-blue)', marginBottom: '0.5rem' }}>
              CONNECTION STATUS: {connectionStatus}
            </div>
            <div style={{ fontSize: '0.8rem' }}>
              {connectionStatus === 'CONNECTED' ? 
                '✓ Secure channel established. Ready for communication.' :
                '⟳ Establishing secure communication channel...'
              }
            </div>
          </div>

          {connectionStatus === 'CONNECTED' && (
            <>
              {/* Contact Methods */}
              <div className="contact-methods" style={{ marginBottom: '2rem' }}>
                <div className="terminal-line" style={{ color: 'var(--retro-blue)', marginBottom: '1rem' }}>
                  <span className="prompt">comm@portfolio:~$ </span>
                  <span>ls -la /communication/channels/</span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  {contactMethods.map((contact, index) => (
                    <div key={index} className="retro-card" style={{ padding: '1rem' }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '1.2rem' }}>{contact.icon}</span>
                          <span style={{ color: 'var(--retro-yellow)', fontWeight: 'bold' }}>
                            {contact.method}
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--retro-green)', 
                          fontSize: '0.7rem',
                          border: '1px solid var(--retro-green)',
                          padding: '0.1rem 0.3rem'
                        }}>
                          {contact.status}
                        </span>
                      </div>
                      
                      <div style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                        {contact.address}
                      </div>
                      
                      <a 
                        href={contact.method === 'EMAIL' ? `mailto:${contact.address}` : contact.address}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn"
                        style={{ 
                          textDecoration: 'none', 
                          fontSize: '0.7rem',
                          padding: '0.3rem 0.6rem',
                          width: '100%',
                          textAlign: 'center'
                        }}
                      >
                        [CONNECT]
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              {/* <div className="contact-form">
                <div className="terminal-line" style={{ color: 'var(--retro-blue)', marginBottom: '1rem' }}>
                  <span className="prompt">comm@portfolio:~$ </span>
                  <span>nano /tmp/message.txt</span>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="retro-card" style={{ background: 'var(--retro-bg)' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ 
                        display: 'block', 
                        color: 'var(--retro-yellow)', 
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                      }}>
                        SENDER_NAME:
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          background: 'var(--retro-secondary)',
                          border: '2px solid var(--retro-green)',
                          color: 'var(--retro-green)',
                          padding: '0.5rem',
                          fontFamily: 'Share Tech Mono',
                          fontSize: '0.9rem'
                        }}
                        placeholder="Enter your name..."
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ 
                        display: 'block', 
                        color: 'var(--retro-yellow)', 
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                      }}>
                        SENDER_EMAIL:
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          background: 'var(--retro-secondary)',
                          border: '2px solid var(--retro-green)',
                          color: 'var(--retro-green)',
                          padding: '0.5rem',
                          fontFamily: 'Share Tech Mono',
                          fontSize: '0.9rem'
                        }}
                        placeholder="your.email@domain.com"
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ 
                        display: 'block', 
                        color: 'var(--retro-yellow)', 
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                      }}>
                        MESSAGE_CONTENT:
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        style={{
                          width: '100%',
                          background: 'var(--retro-secondary)',
                          border: '2px solid var(--retro-green)',
                          color: 'var(--retro-green)',
                          padding: '0.5rem',
                          fontFamily: 'Share Tech Mono',
                          fontSize: '0.9rem',
                          resize: 'vertical'
                        }}
                        placeholder="Type your message here..."
                      />
                    </div>

                    {isSubmitting && (
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ color: 'var(--retro-yellow)', marginBottom: '0.5rem' }}>
                          Transmitting message... {submitProgress}%
                        </div>
                        <div className="retro-progress">
                          <div 
                            className="retro-progress-fill"
                            style={{ width: `${submitProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="retro-btn"
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        fontSize: '1rem',
                        opacity: isSubmitting ? 0.5 : 1
                      }}
                    >
                      {isSubmitting ? '[TRANSMITTING...]' : '[SEND MESSAGE]'}
                    </button>
                  </form>
                ) : (
                  <div className="retro-card" style={{ 
                    background: 'rgba(0, 255, 65, 0.1)',
                    border: '2px solid var(--retro-green)',
                    textAlign: 'center',
                    padding: '2rem'
                  }}>
                    <div style={{ color: 'var(--retro-green)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                      ✓ MESSAGE TRANSMITTED SUCCESSFULLY
                    </div>
                    <div style={{ fontSize: '0.9rem' }}>
                      Your message has been received and will be processed shortly.
                      <br />
                      Expected response time: 24-48 hours
                    </div>
                  </div>
                )}
              </div> */}
            </>
          )}

          <div className="terminal-line" style={{ 
            marginTop: '2rem', 
            color: 'var(--retro-green)',
            borderTop: '1px solid var(--retro-green)',
            paddingTop: '1rem'
          }}>
            <span className="prompt">comm@portfolio:~$ </span>
            <span>echo "Communication channels ready. Standing by for incoming transmissions."</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetroContact;
