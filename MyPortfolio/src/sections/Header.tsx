import Logo from '../components/ui/Logo';
import { Language } from '../data/i18n';
import LanguageSelector from '../components/ui/LanguageSelector';
import { Theme } from '../types/theme';
import ThemeToggle from '../components/ui/ThemeToggle'

type HeaderProps = {
  scrolled: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  show?: boolean;
};

const Header = ({ scrolled, lang, setLang, theme, toggleTheme }: HeaderProps) => (
  <header className={scrolled ? 'scrolled' : ''}>
    {/* Logo */}
    <figure className={scrolled ? 'scrolled' : ''}>
      <Logo dark={theme === 'dark'} className='w-38 h-auto' />
    </figure>

    <div className="flex flex-row items-center w-auto gap-2 justify-between">
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
