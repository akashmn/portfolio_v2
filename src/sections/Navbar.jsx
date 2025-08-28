import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name}) => (
                <li
                    key={id}
                    className="nav-li">
                    <a
                        href={href}
                        className="nav-li_a"
                        onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex mx-auto justify-between items-center py-5 c-space">
                    {/*instagram handle @akashmnandan*/}
                    <a
                    href="https://www.instagram.com/akashmnandan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    >
                        @akashmnandan
                    </a>

                    {/*toggler menu icon for small devices*/}
                    <button
                        className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex"
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}>
                        <img src={!isOpen? "/assets/menu.svg": "/assets/close.svg"} alt="menu"  className="w-6 h-6"/>
                    </button>

                    {/*menu items - NavLinks for bigger devices*/}
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>

            {/*menu items - NavLinks for small devices*/}
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}
export default Navbar
