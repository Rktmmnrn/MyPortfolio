import { useEffect, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import './styles/styleHN.css' // styles
import ProgressBar from './component/layout/ProgressBar'
import Cube3D from './component/layout/cube3D'
import Btn from './component/ui/boutton'

import { FiArrowUp } from "react-icons/fi"

import Header from './sections/Header'
import Nav from './sections/NavMenu'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Project from './sections/Projects'
import Experience from './sections/Experiences'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Todo from './component/layout/TodoList'
import { RiKakaoTalkLine } from "react-icons/ri";
import { Language } from './data/i18n'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as Language) || 'en';
  });

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  const up = () => {
    window.scrollTo({
      top: 0,
    })
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <>
      <ProgressBar />
      <Cube3D />
      <Header scrolled={scrolled} lang={lang} setLang={changeLang} />
      <Nav lang={lang} />

      <main>
        <aside
          className={`fixed z-20 flex flex-col items-center transition-all duration-300 bottom-[40px] right-[40px] gap-5`}
        >
          <Btn
            onClick={() => window.open('mailto:rfanomezaniavo@gmail.com', '_blank')}
            className="relative transition-all duration-300"
          >
            <RiKakaoTalkLine className="w-full h-full text-[#b41414] group-hover:text-white transition-colors duration-300" />
          </Btn>
          {/* up */}
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
        </aside>

        <Hero lang={lang} />

        <Project lang={lang}/>

        <Skills lang={lang} />

        <Experience lang={lang} />

        <About lang={lang} />

        <Contact lang={lang} />
      </main>

      <Todo />
      <Footer lang={lang} />
    </>
  )
}

export default App;
