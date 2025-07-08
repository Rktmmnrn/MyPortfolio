import React, { useEffect, useRef, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import './styleHN.css' // styles

import Logo from '/Logo.svg'
import talk from './assets/icons/talk-svgrepo-com.svg'
import Up from './assets/icons/vue-svgrepo-com.svg'

import Btn from './component/boutton'
import Vector from './component/vector' // svg component

import Skills from './Skills'
import Experience from './Experiences'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'

function app() {
  const section = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const up = () => {
    return (
      window.scrollTo({
        top: 0,
      })
    )
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
    <header className={scrolled ? "scrolled" : ""}>
      <figure className={scrolled ? "scrolled" : ""}>
        <img src={Logo} alt="Logo" />
      </figure>
      <nav>
        <a href="#Skl">skills & projects</a>
        <a href="#Exp">experiences</a>
        <a href="#Abt">about</a>
        <a href="#Contct">contact</a>
      </nav>
      <button className='group'>
        <span className='capitalize font-bold text-[#800000] group-hover:text-white transition-all duration-300'>let's talk !</span>
        <Vector nameVector={talk} style={{width: '28px', height: '28px', objectFit: 'cover'}}></Vector>
        <span className='z-[-1] absolute bg-[#800000] w-[100%] h-full translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
      </button>
    </header>

    <main>
      <button onClick={up} className={scrolled ? "scrolled" : ""}>
        <motion.img
        src={Up}
        animate= {{y: [0,5,0]}}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: easeInOut,
        }}
        alt="turnUp"
        />
      </button>
      <section id='Hero' className="hero">
        <Hero></Hero>
      </section>

      <section ref={section} id='Skl' className="flex-col">
        <Skills />
      </section>

      <section id='Exp' className='flex-row-reverse'>
        <Experience />
      </section>

      <section id='Abt' className="flex-row">
        <About />
      </section>

      <section id="Contct" className='flex-row-reverse'>
        <Contact />
      </section>
    </main>
    </>
  )
}

export default app
