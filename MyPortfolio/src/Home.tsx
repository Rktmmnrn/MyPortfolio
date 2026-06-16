import { useEffect, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import './styles/styleHN.css' // styles
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
import { RiKakaoTalkLine } from "react-icons/ri";
import { Language } from './component/i18n'

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
          className={`fixed z-10 flex-col items-center gap-4 transition-all duration-300 ${scrolled ? 'bottom-4 right-4' : 'bottom-[-60px] right-[-60px]'}`}
        >
          <Btn
            onClick={() => window.open('mailto:rfanomezaniavo@gmail.com', '_blank')}
            className="relative transition-all duration-300"
            style={{
              padding: '9px 18px',
            } as React.CSSProperties}
          >
            <RiKakaoTalkLine className="w-10 h-10 text-[#b41414] group-hover:text-white transition-colors duration-300" />
          </Btn>
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
