import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const App = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero />
            <About />
        </div>
    )
}
export default App
