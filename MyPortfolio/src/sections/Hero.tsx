import Writer from '../component/MyTypeWriter'
import VectorD from '../component/vectorDown'
import Btn from '../component/boutton'

import profil from '../assets/jpg/IMG_20250428_092309.jpg'
import down from '../assets/icons/Download.svg'
import CV from './CV_DevApp_FANOMEZANIAVO.pdf';

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Hero = () => {
    const color1 = '#800000';

    const handleClick = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'CV_FANOMEZANIAVO.pdf';
        link.click();

        window.open(CV, '_blank');
    };
    return (
        <section id='Hero' className="hero">
            <div>
                <p>hi, i'm</p>
                <h1>fanomezan<span style={{ color: color1 }}>iavo</span></h1>
                <h2 style={{ color: color1 }}>
                    <Writer /> {/** autre alternatice que <Typewriter /> */}
                </h2>
                <Btn
                    onClick={handleClick}
                    className='bg-[#800000] text-white gap-2'
                >
                    download my CV here
                    <VectorD nameVector={down} style={{ width: '28px', height: '28px', objectFit: 'cover' }}></VectorD>
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
                        <FaFacebook size={28} color='' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;