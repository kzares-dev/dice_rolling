import { Physics } from '@react-three/cannon'
import { Canvas } from "@react-three/fiber";
import { CubeWithPhisics } from './CubeWithPhisics';
import { Cube } from './Cube'
import { Ground, ShadowGround } from "./Ground"

const CanvasComponent = ({ diceSetting, diceWorkflow, setDiceWorkflow, isAnimating, setIsAnimating }) => {

    return (
        <Canvas
            shadows
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                position:
                    [30 * (2 - diceSetting.diceSize / 10),
                    90 * (2 - diceSetting.diceSize / 10),
                    70 * (2 - diceSetting.diceSize / 10)]
                , fov: 35
            }}
            className="w-full max-w-full h-full transition-all ease-in">

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


            <Physics gravity={[0, -70, 3]} >

                {!isAnimating ?
                    <CubeWithPhisics
                        diceSetting={diceSetting}
                        diceWorkflow={diceWorkflow}
                        setDiceWorkflow={setDiceWorkflow}
                        position={[0, 3, 0]}
                        id="cubeWithPhisics"
                    /> :
                    <Cube
                        id="cube"
                        setIsAnimating={setIsAnimating}
                        diceSetting={diceSetting}
                        diceWorkflow={diceWorkflow}
                        setDiceWorkflow={setDiceWorkflow}
                        position={[0, 3, 0]} />
                }

                <Ground />
                <ShadowGround />
            </Physics>

        </Canvas>
    );
};


export default CanvasComponent
