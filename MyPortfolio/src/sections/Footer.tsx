import Logo from '/Logo.svg';

const Footer = () => {
    return (
        <footer className="flex items-center justify-center border-t-1">
            <p className="font-bold capitalize">designed by me | <span className='font-black'>fenohery</span></p>
            <figure className="w-8 h-8">
                <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
            </figure>
        </footer>
    )
}

export default Footer;