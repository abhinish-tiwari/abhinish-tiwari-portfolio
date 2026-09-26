import { useEffect, useState } from 'react'
import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import SectionDivider from '../common/section-divider.component'

const SinglePageLayout = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section)
              // Update URL hash when scrolling to different section
              const newHash = `#${section}`
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, null, newHash)
              }
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  // Handle URL hash navigation and browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash && ['home', 'about', 'projects', 'skills', 'contact'].includes(hash)) {
        const element = document.getElementById(hash)
        if (element) {
          const navbarHeight = 64
          const offsetTop = element.offsetTop - navbarHeight
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
          setActiveSection(hash)
        }
      } else if (!hash) {
        // If no hash, default to home
        setActiveSection('home')
        window.history.replaceState(null, null, '#home')
      }
    }

    // Handle initial hash on page load
    handleHashChange()

    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Make activeSection available globally for navbar
  useEffect(() => {
    window.activeSection = activeSection
    window.dispatchEvent(new CustomEvent('activeSectionChange', { detail: activeSection }))
  }, [activeSection])

  return (
    <div className="w-full">
      {/* Home Section */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <SectionDivider />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      <SectionDivider />

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      <SectionDivider />

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default SinglePageLayout
