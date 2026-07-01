import { useEffect, useState } from 'react';
import { FiCpu, FiBriefcase, FiUser, FiMail, FiFolder } from 'react-icons/fi';
import { translations, Language } from '../data/i18n';

type NavMenuProps = { lang: Language };

const NavMenu = ({ lang }: NavMenuProps) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed z-20 flex font-bold uppercase transition-all duration-300 ${isDesktop
          ? 'top-0 left-1/2 -translate-x-1/2 translate-y-[18px]'
          : 'bottom-0 left-1/2 -translate-x-1/2 translate-y-[-20px]'
        }`}
    >
      <a href="#Prj">
        <FiFolder className="w-4 h-4 inline lg:hidden" />
        <span>{translations[lang].projectsNav}</span>
      </a>
      <a href="#Skl">
        <FiCpu className="w-4 h-4 inline lg:hidden" />
        <span>{translations[lang].skillsNav}</span>
      </a>
      <a href="#Exp">
        <FiBriefcase className="w-4 h-4 inline lg:hidden" />
        <span>{translations[lang].experiences}</span>
      </a>
      <a href="#Abt">
        <FiUser className="w-4 h-4 inline lg:hidden" />
        <span>{translations[lang].about}</span>
      </a>
      <a href="#Contct">
        <FiMail className="w-4 h-4 inline lg:hidden" />
        <span>{translations[lang].contact}</span>
      </a>
    </nav>
  );
};

export default NavMenu;
