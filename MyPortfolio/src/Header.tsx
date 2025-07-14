import Logo from '/Logo.svg';
import talk from './assets/icons/talk-svgrepo-com.svg';
import Vector from './component/vector' // svg component

type HeaderProps = {
  scrolled: boolean;
};

const Header = ({ scrolled }: HeaderProps) => (
  <header className={scrolled ? "scrolled" : ""}>
    <figure className={scrolled ? "scrolled" : ""}>
      <img src={Logo} alt="Logo" />
    </figure>
    <nav>
      <a href="#Skl">skills & projects</a>
      <a href="#Exp">experiences</a>
      <a href="#Abt">about</a>
      <a href="#Contct">contact</a>
    </nav>
    <button className='group'>
      <span className='capitalize font-bold text-[#800000] group-hover:text-white transition-all duration-300'>let's talk !</span>
      <Vector nameVector={talk} style={{ width: '28px', height: '28px', objectFit: 'cover' }} />
      <span className='z-[-1] absolute bg-[#800000] w-[100%] h-full translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
    </button>
  </header>
);

export default Header;