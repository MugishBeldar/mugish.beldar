import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          time: new Date().toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
          })
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')

      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mugishbeldar333@gmail.com",
      link: "mailto:mugishbeldar333@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9510827064",
      link: "tel:+91-9510827064"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, India",
      link: "https://maps.google.com/?q=Ahmedabad,India"
    }
  ]

  const socialLinks = [
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      url: "https://github.com/MugishBeldar",
      color: "#333"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mugish-beldar-927686229/",
      color: "#0077b5"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/MugishBeldar?t=5YTEPARg2kg8-EW7qhltHg&s=09e",
      color: "#1da1f2"
    },
    // {
    //   icon: MessageCircle,
    //   label: "Discord",
    //   url: "https://discord.com/users/username",
    //   color: "#5865f2"
    // }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-description">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Feel free to reach out through any of the channels below.
              </p>

              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="contact-method"
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="method-icon">
                      <item.icon className="icon" />
                    </div>
                    <div className="method-content">
                      <span className="method-label">{item.label}</span>
                      <span className="method-value">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                    >
                      <social.icon className="social-icon" />
                      <span className="social-label">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-card">
              <h3 className="form-title">Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <Send className="success-icon" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <span>❌ Failed to send message. Please try again or email me directly at mugishbeldar333@gmail.com</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="submit-icon" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
