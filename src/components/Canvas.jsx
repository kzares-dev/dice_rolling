import { Physics } from '@react-three/cannon'
import { Cube } from './Cube'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { useState } from 'react';
import { CubeWithPhisics } from './CubeWithPhisics';
import { Ground, ShadowGround } from "./Ground"
import { useEffect } from 'react';

const CanvasComponent = ({ diceSetting, setDiceSetting, setShowResults, isAnimating, setIsAnimating }) => {

    const [cubeRotation, setCubeRotation] = useState([0, 0, 0])

    useEffect(() => {
        if(!isAnimating) setShowResults(true)
        else setShowResults(false)
    }, [isAnimating])

    return (
        <Canvas
            shadows
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [30 * (2- diceSetting.diceSize/10), 90 * (2- diceSetting.diceSize/10), 70 * (2- diceSetting.diceSize/10)], fov: 35 }}
            className="w-full max-w-full h-full transition-all ease-in">


            {/* Seting up the lights*/}
            <ambientLight intensity={1} />

            <directionalLight
                castShadow
                position={[0, 10, 0]}
                shadow-camera-near={1}
                shadow-camera-far={100}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                intensity={1}
            />

            <directionalLight
                position={[10, 0, 10]}
                shadow-camera-near={1}
                shadow-camera-far={100}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                intensity={1}
            />
            {isAnimating && <Cube id="cube" diceSetting={diceSetting} position={[0, 3, 0]} setIsAnimating={setIsAnimating} setCubeRotation={setCubeRotation} />}
            {/* Rendering the cube attached to a ground */}


            <Physics gravity={[0, -60, 0]}>
                {!isAnimating && <CubeWithPhisics diceSetting={diceSetting} setDiceSetting={setDiceSetting} rotation={cubeRotation} setIsAnimating={setIsAnimating} id={"cubeWithPhisics"} position={[0, 3, 0]} />}
                <Ground />
                <ShadowGround />
            </Physics>




            {/* Controlling the camera by moving around the sceen */}
            <OrbitControls />
            <Stats />
        </Canvas>
    );
};


export default CanvasComponent
