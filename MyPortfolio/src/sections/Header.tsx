import Logo from '/Logo.svg';
import { Language } from '../data/i18n';
import LanguageSelector from '../component/ui/LanguageSelector';
import { Theme } from '../types/theme';
import ThemeToggle from '../component/ui/ThemeToggle'

type HeaderProps = {
  scrolled: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const Header = ({ scrolled, lang, setLang, theme, toggleTheme }: HeaderProps) => (
  <header className={scrolled ? 'scrolled' : ''}>
    {/* Logo */}
    <figure className={scrolled ? 'scrolled' : ''}>
      <img src={Logo} alt="Logo" />
    </figure>

    <div className="flex flex-row items-center w-auto gap-2">
      {/* Badge disponibilité */}
      {/* <Available lang={lang} /> */}
  
      {/* Sélecteur de langue */}
      <LanguageSelector
        lang={lang}
        setLang={setLang} />

      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  </header>
);

export default Header;
