// import Logo from '/Logo.svg';
import { translations, Language } from '../data/i18n';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Available from '../component/ui/Available';

import Vector from '../component/ui/vector';
import mail from '../assets/icons/mail.svg';
import Phone from '../assets/icons/phone-calling-rounded-svgrepo-com.svg'

type FooterProps = { lang: Language };

const ContactLinks = [
  { icon: Phone, label: '+261 34 28 752 34 / +261 32 97 778 69', mark: 'WhatsApp / phone' },
  { href: 'mailto:rfanomezaniavo@gmail.com', icon: mail, label: 'rfanomezaniavo@gmail.com', mark: 'Mail' },
];

const links = [
  {
    entreprise: 'E.N.I Fianarantsoa',
    lien: 'https://eni.mg/',
  },
  {
    entreprise: 'SAHA Technology',
    lien: 'https://saha-technology.com/fr',
  },
  {
    entreprise: 'ENEAM',
    lien: 'https://eneam.mg/',
  },
]

const Footer = ({ lang }: FooterProps) => (
  <footer className="flex items-center justify-center flex-wrap">
    <div
      className='flex w-full justify-between py-5 md:flex-row md:gap-0 flex-col gap-5'
    >
      <div className='w-full flex flex-col gap-3'>
        <span className='uppercase' style={{ fontSize: '12px', fontWeight: '600' }}>
          {translations[lang].footerFollow}
        </span>
        <div className='flex flex-row items-center gap-3'>
          <a href="https://linkedin.com/in/fenohery-maminiriana" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com/Rktmmnrn" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={22} />
          </a>
          <a href="https://www.facebook.com/fenoherysarobidy.rakotomami" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook size={22} />
          </a>
        </div>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <span className='uppercase' style={{ fontSize: '12px', fontWeight: '600' }}>
          {translations[lang].footerLinks}
        </span>
        <div
          className='flex flex-col items-start'
        >
          {links.map(({ lien, entreprise }) => (
            <li className='uppercase py-1 hover:text-[var(--red-light)]'>
              <a
                key={lien}
                href={lien}
                target='_blank'
                style={{ letterSpacing: '1px', fontSize: '12px' }}
              >
                {entreprise}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <span className='uppercase' style={{ fontSize: '12px', fontWeight: '600' }}>
          {translations[lang].footerContact}
        </span>
        <div
          className='flex flex-col'
        >
          {ContactLinks.map(({ href, icon, label, mark }) => (
            <a
              key={href}
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-3 py-2 hover:border-[var(--red-glow)] hover:bg-[var(--red-faint)] hover:shadow-[var(--red-glow)] no-underline transition-all duration-200"
              style={{ letterSpacing: '1px' }}
              title={mark}
            >
              <Vector nameVector={icon} style={{ width: '16px', flexShrink: 0, filter: 'invert(0.35)' }} />
              <span style={{ color: 'var(--text-2)', fontSize: '11px' }}>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>

    <div
      className='flex w-full justify-between py-5 flex-col md:flex-row gap-4 items-end md:items-start'
      style={{ borderTop: '1px solid var(--border-md)' }}
    >
      {/* Crédit */}
      <div
        className='flex items-center gap-2'
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          color: 'var(--text-3)',
        }}
      >
        <span style={{ opacity: 0.5 }}>//</span>
        <span>{translations[lang].designedBy}</span>
        <span style={{ color: 'var(--red)', fontWeight: 600 }}>fenohery</span>
        {/* <figure style={{ width: '18px', height: '18px', margin: 0 }}>
          <img src={Logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </figure> */}
      </div>

      {/* Indicateurs de statut */}
      <div
        className='flex items-center gap-5'
        style={{
          flexWrap: 'wrap',
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          color: 'var(--text-3)',
        }}
      >
        {/* Point vert : disponible */}
        <Available lang={lang} />

        <span style={{ opacity: 0.3 }}>|</span>

        {/* Localisation */}
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span
            style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: 'var(--red)',
              boxShadow: '0 0 5px var(--red-glow)',
            }}
          />
          ANTANANARIVO / REMOTE
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
