import { useEffect,  useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import './styleHN.css' // styles
import ProgressBar from './component/ProgressBar'

import { FiArrowUp } from "react-icons/fi"

import Header from './Header'
import Skills from './Skills'
import Experience from './Experiences'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Nav from './NavMenu'

function App() {
  const [scrolled, setScrolled] = useState(false);

  const up = () => {
    window.scrollTo({
      top: 0,
    })
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        console.log("scroll ohhh");
      } else setScrolled(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <>
    <ProgressBar />
    <Header scrolled={scrolled} />
    <Nav />

    <main>
      <button onClick={up} className={scrolled ? "scrolled" : ""}>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: easeInOut,
          }}
          >
          <FiArrowUp size={40} color="#800000"/>
          </motion.span>
      </button>

      <section id='Hero' className="hero">
        <Hero />
      </section>

      <section id='Skl' className="flex-col lg:flex-row">
        <Skills />
      </section>

      <section id='Exp' className='flex-col lg:flex-row-reverse'>
        <Experience />
      </section>

      <section id='Abt' className="flex-col lg:flex-row">
        <About />
      </section>

      <section id="Contct" className='flex-col lg:flex-row-reverse'>
        <Contact />
      </section>
    </main>
    </>
  )
}

export default App;
