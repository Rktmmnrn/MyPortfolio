import { useEffect, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import './styleHN.css' // styles
import ProgressBar from './component/ProgressBar'
import Cube3D from './component/cube3D'
import Btn from './component/boutton'

import { FiArrowUp } from "react-icons/fi"

import Header from './sections/Header'
import Nav from './sections/NavMenu'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Experience from './sections/Experiences'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Todo from './component/TodoList'

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
      <Cube3D />
      <Header scrolled={scrolled} />
      <Nav />

      <main>
        <Btn
          onClick={up}
          className={scrolled ? "scrolled" : ""}
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
              ease: easeInOut,
            }}
          >
            <FiArrowUp size={40} color="#800000" />
          </motion.span>
        </Btn>

        <Hero />


        <Skills />

        <Experience />

        <About />

        <Contact />
      </main>

      <Todo />
      <Footer />
    </>
  )
}

export default App;
