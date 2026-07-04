import Logo from '/Logo.svg';
import { translations, Language } from '../data/i18n';
import LanguageSelector from '../component/ui/LanguageSelector';

type HeaderProps = {
  scrolled: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
};

const Header = ({ scrolled, lang, setLang }: HeaderProps) => (
  <header className={scrolled ? 'scrolled' : ''}>
    {/* Logo */}
    <figure className={scrolled ? 'scrolled' : ''}>
      <img src={Logo} alt="Logo" />
    </figure>

    <div className="flex flex-col items-center w-auto gap-2">
      {/* Badge disponibilité — visible md+ */}
      <div
        className="hidden md:flex items-center gap-2"
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          color: 'var(--text-3)',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            boxShadow: '0 0 6px rgba(34,197,94,0.7)',
            animation: 'status-pulse 2.5s ease-in-out infinite',
          }}
        />
        {translations[lang].availableForWork}
      </div>

      {/* Sélecteur de langue */}
      <LanguageSelector
        lang={lang}
        setLang={setLang} />
    </div>
  </header>
);

export default Header;
