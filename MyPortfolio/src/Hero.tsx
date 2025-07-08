import { motion } from 'framer-motion'

import profil from './assets/jpg/IMG_20250428_092309.jpg'
import VectorD from './component/vectorDown'
import down from './assets/icons/Download.svg'
import fb from './assets/icons/Fb.svg'
import lnkdn from './assets/icons/linkedin-svgrepo-com.svg'
import github from './assets/icons/github-icon-1.svg'

import Btn from './component/boutton'

const Hero = () => {
    const color1 = '#800000';

    return (
        <>
            <div>
            <p>hi, i'm</p>
            <h1>fanomezan<span style={{color: color1}}>iavo</span></h1>
            <p style={{color:color1}}>développeur web junior front-end</p>
            <Btn>
                <a href="https://cvdesignr.com/p/D0olp9elVkNLoVn?hl=fr_FR" target='blank'>My CV here</a>
                <VectorD nameVector={down} style={{width: '28px', height: '28px', objectFit: 'cover'}}></VectorD>
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
        </>
    )
}

export default Hero;