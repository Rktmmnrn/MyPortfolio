import React, { useEffect, useRef, useState } from 'react'
import './styleHN.css' // styles

import Logo from '/Logo.svg'
import profil from './assets/jpg/IMG_20250428_092309.jpg'
import fb from './assets/icons/Fb.svg'
import lnkdn from './assets/icons/linkedin-svgrepo-com.svg'
import github from './assets/icons/github-icon-1.svg'
import down from './assets/icons/Download.svg'
import talk from './assets/icons/talk-svgrepo-com.svg'

import Btn from './component/boutton'
import Vector from './component/vector' // svg component
import Skills from './Skills'
import Experience from './Experiences'

function app() {
  const color1 = '#800000';
  const section = useRef(null);
  const [scrolled, setScrolled] = useState(false);

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
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <nav>
        <a href="#Skl">skills & projects</a>
        <a href="#Exp">experiences</a>
        <a href="">about</a>
        <a href="">contact</a>
      </nav>
      <button className='group'>
        <span className='capitalize font-bold text-[#800000] group-hover:text-white transition-all duration-300'>let's talk !</span>
        <Vector nameVector={talk} style={{width: '28px', height: '28px', objectFit: 'cover'}}></Vector>
        <span className='z-[-1] absolute bg-[#800000] w-[100%] h-full translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
      </button>
    </header>

    <main>
      <section className="hero">
        <div>
          <p>hi, i'm</p>
          <h1>fanomezan<span style={{color: color1}}>iavo</span></h1>
          <p style={{color:color1}}>développeur web junior front-end</p>
          <Btn>
            download my CV here
            <Vector nameVector={down} style={{width: '28px', height: '28px', objectFit: 'cover'}}></Vector>
          </Btn>
        </div>
        <div>
          <figure>
            <img src={profil} alt="profil" />
          </figure>
          <div>
            <a href="#" target='blank'><img src={lnkdn} alt="linkdIn" /></a>
            <a href="#" target='blank'><img src={github} alt="GitHub" /></a>
            <a href="#" target='blank'><img src={fb} alt="Fb" /></a>
          </div>
        </div>
      </section>

      <section ref={section} id='Skl' className="flex flex-col items-center mx-10">
        <Skills />
      </section>

      <section id='Exp' className='py-16 px-6 max-w-4xl'>
        <Experience/>
      </section>
    </main>
    </>
  )
}

export default app