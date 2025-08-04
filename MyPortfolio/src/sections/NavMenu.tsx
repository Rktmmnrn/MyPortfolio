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
        className={`left-1/2 transition-all duration-300 flex font-bold rounded-lg z-20 uppercase fixed
        ${isDesktop ? 'top-0 bottom-auto -translate-x-1/2 translate-y-5' : 'bottom-0 -translate-y-5'}`}
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