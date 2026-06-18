import Writer from '../component/MyTypeWriter'
import VectorD from '../component/vectorDown'
import Btn from '../component/boutton'

import profil from '../assets/png/IMG_20250428_092309.png'
import down from '../assets/icons/Download.svg'
import CV from './CV_Dev_Fanomezaniavo_RAKOTOMAMINIRIANA.pdf';

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { translations, Language } from '../component/i18n';

type HeroProps = { lang: Language };

const Hero = ({ lang }: HeroProps) => {
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
        <p>
          <span style={{ color: 'rgba(180,20,20,0.5)', fontFamily: 'var(--mono)' }}>
            fenohery@portfolio:~$&nbsp;
          </span>
          {translations[lang].hiIm}
        </p>

        {/* Titre avec effet glitch — data-text nécessaire pour ::before / ::after CSS */}
        <h1 data-text="fanomezaniavo">
          fanomezan<span>iavo</span>
        </h1>

        {/* Typewriter */}
        <h2>
          <Writer lang={lang} />
        </h2>

        {/* CTA download CV */}
        <Btn
          onClick={handleClick}
          className='bg-[#b41414] text-white gap-3'
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            letterSpacing: '2px',
            borderRadius: '2px',
            padding: '12px 22px',
          } as React.CSSProperties}
        >
          {translations[lang].downloadCv}
          <VectorD
            nameVector={down}
            style={{ width: '16px', height: '16px', objectFit: 'cover', filter: 'invert(1)' }}
          />
        </Btn>
      </div>

      {/* Colonne photo */}
      <div>
        <figure>
          <img src={profil} alt="Fanomezaniavo" />
        </figure>

        <div>
          <a href="https://linkedin.com/in/fenohery-maminiriana" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/Rktmmnrn" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={18} />
          </a>
          <a href="https://www.facebook.com/fenoherysarobidy.rakotomami" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
