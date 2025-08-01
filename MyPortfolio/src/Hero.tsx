// import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

import profil from './assets/jpg/IMG_20250428_092309.jpg'
import VectorD from './component/vectorDown'
import down from './assets/icons/Download.svg'

import Btn from './component/boutton'

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Hero = () => {
    const color1 = '#800000';
    
    return (
        <>
            <div>
                <p>hi, i'm</p>
                <h1>fanomezan<span style={{color: color1}}>iavo</span></h1>
                <p style={{color:color1}}>
                    <Typewriter
                    options={{
                        strings: ['web developer', 'front-end', 'react'],
                        autoStart: true,
                        loop: true,
                    }}/>
                </p>
                <Btn>
                    <a href="https://cvdesignr.com/p/D0olp9elVkNLoVn?hl=fr_FR" target='blank'>download my CV here</a>
                    <VectorD nameVector={down} style={{width: '28px', height: '28px', objectFit: 'cover'}}></VectorD>
                </Btn>
            </div>
            <div>
                <figure>
                    <img src={profil} alt="profil" />
                </figure>
                <div>
                    <a href="https://linkedin.com/in/fenohery-maminiriana" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/Rktmmnrn" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://www.facebook.com/fenoherysarobidy.rakotomami" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={28} color=''/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero;