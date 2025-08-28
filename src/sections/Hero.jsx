import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";

const Hero = () => {

    // Leva controls for debugging and adjusting the 3D model's position, rotation, and scale
    // const x = useControls('HackerRoom', {
    //     positionX: {value: 0, min: -10, max: 10, step: 0.01},
    //     positionY: {value: 0, min: -10, max: 10, step: 0.01},
    //     positionZ: {value: 0, min: -10, max: 10, step: 0.01},
    //     rotationX: {value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
    //     rotationY: {value: Math.PI * 2, min: -Math.PI, max: Math.PI, step: 0.01},
    //     rotationZ: {value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
    //     scale: {value: 0, min: 0, max: 100, step: 0.01},
    // })

    //media query for responsiveness
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'})
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})
    const isTablet = useMediaQuery({query: '(min-width: 768, max-width: 1024px)'})

    const sizes = calculateSizes(isSmallMobile, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            {/*hero section texts*/}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className='sm:text-2xl text-2xl text-neutral-600 font-bold text-center font-generalsans'>
                   Hello, I'm Akash...<span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    A Passionate <span className="text-[#9112BC]">Front-end</span> Developer, supporting <span className="text-[#FFFCB8]">Startups</span> and <span className="text-[#CADCAE]">Businesses</span> to build their online presence.
                </p>
            </div>

            {/*hero section 3js models*/}
            <div className='w-full h-full absolute inset-8'>
                {/*<Leva />*/}
                <Canvas className='h-full w-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
                        <HackerRoom
                            scale={sizes.deskScale}
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            // position={[x.positionX, x.positionY, x.positionZ]}
                            // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                            // scale={[x.scale, x.scale, x.scale]}
                        />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
 