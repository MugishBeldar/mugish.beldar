import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Information and Communication Technology",
      institution: "L.J Institute Of Engineering And Technology",
      location: "Ahmedabad, India",
      duration: "2019 - 2023",
      grade: "CGPA: 9.4/10",
      description: "Specialized in Software Engineering, Data Structures, Algorithms, and Web Development. Completed major projects in full-stack development.",
      achievements: [
        "Consistently ranked among the top 10% of the class",
        "Successfully completed multiple academic projects with real-world applications",
        "Actively participated in coding competitions and hackathons",
        "Led team-based projects demonstrating leadership and collaboration skills",
        "Presented technical papers in seminars and workshops",
        "Recognized for strong problem-solving and analytical skills"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Computer Networks",
        "Machine Learning",
        "Web Development",
        "Programming For Problem Solving"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Xavier's Higher Secondary School",
      location: "Ahmedabad, India",
      duration: "2017 - 2019",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.",
      achievements: [
        "School Topper in Mathematics",
        "Consistently among the top performers in academics",
        "Active participation in inter-school science and technical events"
      ],
      coursework: [
        "Advanced Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ]
    }

  ]

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">Education</h2>
          <p className="education-subtitle">
            Academic journey and qualifications that shaped my technical foundation
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-card">
                <div className="education-main">
                  <div className="education-icon">
                    <GraduationCap className="graduation-icon" />
                  </div>

                  <div className="education-content">
                    <div className="education-header-info">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <div className="education-meta">
                        <div className="education-institution">
                          <MapPin className="meta-icon" />
                          <span>{edu.institution}, {edu.location}</span>
                        </div>
                        <div className="education-duration">
                          <Calendar className="meta-icon" />
                          <span>{edu.duration}</span>
                        </div>
                        {
                          edu.grade && (
                            <div className="education-grade">
                              <Award className="meta-icon" />
                              <span>{edu.grade}</span>
                            </div>
                          )
                        }
                      </div>
                    </div>

                    <p className="education-description">{edu.description}</p>

                    <div className="education-details">
                      <div className="education-achievements">
                        <h4 className="details-title">Key Achievements</h4>
                        <ul className="achievements-list">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="achievement-item">{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="education-coursework">
                        <h4 className="details-title">Relevant Coursework</h4>
                        <div className="coursework-tags">
                          {edu.coursework.map((course, idx) => (
                            <span key={idx} className="coursework-tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index < educationData.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
