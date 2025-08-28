import React from 'react'

const Hero = () => {
    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className='sm:text-2xl text-2xl text-neutral-400 font-medium text-center font-generalsans'>
                   HELLO, I'M AKASH<span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    A Passionate <span className="text-[#9112BC]">Front-end</span> Developer, supporting <span className="text-[#9112BC]">Startups</span> and <span className="text-[#9112BC]">Businesses</span> to build their online presence.
                </p>
            </div>
        </section>
    )
}
export default Hero
 