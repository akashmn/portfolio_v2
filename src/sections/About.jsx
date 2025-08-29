import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m Akash M Nandan</p>
                            <p className="grid-subtext">
                                Computer Science Engineering graduate (2025) from the College of Engineering Chengannur (CEC).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;