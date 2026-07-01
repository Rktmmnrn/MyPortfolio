import Logo from '/Logo.svg';
import { translations, Language } from '../data/i18n';

type FooterProps = { lang: Language };

const Footer = ({ lang }: FooterProps) => (
  <footer className="flex items-center justify-between flex-wrap gap-3">
    {/* Indicateurs de statut */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap',
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        letterSpacing: '2px',
        color: 'var(--text-3)',
      }}
    >
      {/* Point vert : disponible */}
      <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <span
          style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 5px rgba(34,197,94,0.7)',
            animation: 'status-pulse 2.5s ease-in-out infinite',
          }}
        />
        {translations[lang].available}
      </span>

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

      <span style={{ opacity: 0.3 }}>|</span>
    </div>

    {/* Crédit */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        letterSpacing: '2px',
        color: 'var(--text-3)',
      }}
    >
      <span style={{ opacity: 0.5 }}>//</span>
      <span>{translations[lang].designedBy}</span>
      <span style={{ color: 'var(--red)', fontWeight: 600 }}>fenohery</span>
      <figure style={{ width: '18px', height: '18px', margin: 0 }}>
        <img src={Logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </figure>
    </div>
  </footer>
);

export default Footer;
