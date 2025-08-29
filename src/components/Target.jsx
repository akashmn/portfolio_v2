import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const Target = (props) => {
    const targetRef = useRef()
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    useGSAP(() => {
        gsap.to(targetRef.current.rotation, {
            y: "+=6.28319", // 2 * Math.PI radians = 360 degrees
            duration: 20,
            ease: "none",
            repeat: -1,
            yoyo: true,
        })
    })

    return (
        <mesh {...props} ref={targetRef}>
            <primitive
                object={scene}
            />
        </mesh>
    )
}
export default Target
