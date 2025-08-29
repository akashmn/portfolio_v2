import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/*Hi, im akash M Nandan*/}
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

                {/*Tech stacks*/}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in frontend development, particularly using React.js, JavaScript, HTML/CSS, and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>

                {/*Globe*/}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: 9.3180,
                                        lng: 76.6150,
                                        text: 'Chengannur, Alappuzha, India',
                                        color: 'white',
                                        size: 445
                                    }
                                ]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Haha, just got my passport a couple of weeks ago...
                                so yes, I’m open to work worldwide ️</p>
                            <p className="grid-subtext">Based in Chengannur, Alappuzha, India — but always ready to collaborate globally.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/*Trying to make money with coding...*/}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext"> Trying to make my <span className="text-green-500">first million</span> with coding....</p>
                            <p className="grid-subtext">
                                Waiting for Jackpot… but CoffeePayments are also accepted ☕. After all, every big journey starts with small steps—and maybe even a warm cup of coffee. Supporting with a coffee isn’t just about caffeine, it’s about fueling late-night coding sessions, new ideas, and the passion that keeps projects alive. Who knows, your coffee today might just power the next big thing tomorrow.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default About;