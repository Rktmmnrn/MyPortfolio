import Logo from '/Logo.svg';
import { CiMenuFries } from "react-icons/ci";
import { RiKakaoTalkLine } from "react-icons/ri";

type HeaderProps = {
  scrolled: boolean;
};

const Header = ({ scrolled }: HeaderProps) => (
  <header className={scrolled ? "scrolled" : ""}>
    <figure className={scrolled ? "scrolled" : ""}>
      <img src={Logo} alt="Logo" />
    </figure>

    <button className='group'>
      <span className='capitalize font-bold text-[#800000] group-hover:text-white transition-all duration-300'>let's talk !</span>
        <RiKakaoTalkLine className="w-7 h-7 object-cover text-[#800000] group-hover:text-white transition-colors duration-300" />
      <span className='z-[-1] absolute bg-[#800000] w-[100%] h-full translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
    </button>
    <CiMenuFries className="cursor-pointer w-8 h-8 text-[#800000] flex lg:hidden" />
  </header>
);

export default Header;