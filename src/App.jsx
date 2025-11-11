import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <Home />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
