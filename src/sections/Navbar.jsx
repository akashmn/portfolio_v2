import React, {useState} from 'react'

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

                    {/*menu icon*/}
                    <button onClick={toggleMenu}>
                        <img src={!isOpen? "/assets/menu.svg": "/assets/close.svg"} alt="menu"  className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Navbar
