import { useState, CSSProperties } from 'react';
import Writer from '../components/ui/MyTypeWriter';
import VectorD from '../components/ui/VectorDown';
import Btn from '../components/ui/Button';
import WindowPopup from '../components/ui/WindowPopup';

import profil from '../assets/png/IMG_20250428_092309.png';
import down from '../assets/icons/Download.svg';

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { translations, Language } from '../data/i18n';
import { SOCIAL_LINKS } from '../data/socials';

type HeroProps = { lang: Language };

const CV_PATH = '/CV_D_Fanomezaniavo.pdf';

const Hero = ({ lang }: HeroProps) => {
  const [showCV, setShowCV] = useState(false);
  const t = translations[lang];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV_PATH;
    link.download = 'CV_Dev_Fanomezaniavo.pdf';
    link.click();
  };

  return (
    <>
      <section id='Hero' className="hero">
        <div>
          <p>
            <span style={{ color: 'rgba(180,20,20,0.5)', fontFamily: 'var(--mono)' }}>
              fenohery@portfolio:~$&nbsp;
            </span>
            {t.hiIm}
          </p>

          {/* Titre avec effet glitch — data-text nécessaire pour ::before / ::after CSS */}
          <h1 data-text="fanomezaniavo">
            fanomezan<span>iavo</span>
          </h1>

          {/* Typewriter */}
          <h2>
            <Writer lang={lang} />
          </h2>

          {/* ouvre le CV dans la popup */}
          <Btn
            onClick={() => setShowCV(true)}
            className='bg-[#b41414] text-white gap-3 uppercase'
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              borderRadius: '2px',
              padding: '12px 22px',
            } as CSSProperties}
          >
            {t.downloadCv}
            <VectorD
              nameVector={down}
              style={{ width: '16px', height: '16px', objectFit: 'cover', filter: 'invert(1)' }}
            />
          </Btn>
        </div>

        {/* Partie photo */}
        <div>
          <figure>
            <img src={profil} alt="Fanomezaniavo" />
          </figure>

          <div className='flex-col lg:flex-row lg:w-full'>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub size={18} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Popup Visionneuse CV ── */}
      <WindowPopup
        isOpen={showCV}
        onClose={() => setShowCV(false)}
        title="CV_Dev_Fanomezaniavo.pdf"
        size="xl"
        onDownload={handleDownloadCV}
        downloadLabel={t.downloadCvBtn}
      >
        <iframe
          src={CV_PATH}
          title="CV Fanomezaniavo"
          style={{
            width: '100%',
            height: '80vh',
            border: 'none',
            display: 'block',
          }}
        />
      </WindowPopup>
    </>
  );
};

export default Hero;
