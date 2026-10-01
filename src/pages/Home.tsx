import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

// The whole portfolio is one page. The text for every section is in src/data/resume.ts.
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
