import Logo from '/Logo.svg';
import { Language } from '../data/i18n';
import LanguageSelector from '../component/ui/LanguageSelector';
// import Available from '../component/ui/Available';

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
      {/* Badge disponibilité */}
      {/* <Available lang={lang} /> */}

      {/* Sélecteur de langue */}
      <LanguageSelector
        lang={lang}
        setLang={setLang} />
    </div>
  </header>
);

export default Header;
