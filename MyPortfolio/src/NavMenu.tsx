import { useEffect, useState } from "react";

import { GiSkills } from "react-icons/gi";
import { AiFillExperiment } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { IoIosContacts } from "react-icons/io";

const NavMenu = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav
        className={`transition-all duration-300 g:translate-y-0 flex font-bold rounded-lg z-20 uppercase fixed bottom-5 lg:top-5 lg:bottom-auto
        ${isDesktop ? 'lg:left-0' : 'left-1/2 -translate-x-1/2'}`}
        style={{
        transform: isDesktop
          ? "translate(-0%, -0%)"
          : "translate(-50%, 0%)",
        }}
        >
            <a href="#Skl"><GiSkills className='w-5 h-5 inline lg:hidden'/> <span>skills & projects</span></a>
            <a href="#Exp"><AiFillExperiment className='w-5 h-5 inline lg:hidden'/> <span>experiences</span></a>
            <a href="#Abt"><FcAbout className='w-5 h-5 inline lg:hidden'/> <span>about</span></a>
            <a href="#Contct"><IoIosContacts className='w-5 h-5 inline lg:hidden'/> <span>contact</span></a>
        </nav>
    )
};

export default NavMenu;