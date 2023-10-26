import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox, Text } from '@react-three/drei';
import { generateRandomNumber } from '../lib/randomNumer';

export const Cube = ({ setDiceWorkflow, diceWorkflow, diceSetting, setIsAnimating }) => {

  //states and references
  const meshRef = useRef();
  const [rotations, setRotations] = useState({
    isRotating: false,
    animationTime: diceSetting.spinTime * 1000,
  })
  // is needed to define all the rotations state separated in order to not lose reactivity
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);

  //this props element is passed by param to the `mesh` element, and defines 
  //all the related to the 
  const props = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [(Math.PI / 2) * xRotation, (Math.PI / 2) * yRotation, (Math.PI / 2) * zRotation] },
    config: { duration: 190 },
    reverse: false,
  });

  //
  const handleRotate = () => {
    //check if the cube is rotating to prevent double rotations
    if (rotations.isRotating) return
    setRotations({ ...rotations, isRotating: true });

    //iterating to generate a random rotation, 
    //and the duration of the rotations match with the animationTime passed as param
    for (let i = 0; i < rotations.animationTime / 200; i++) {

      //checking for the current number and adding the rotation
      //to the call stack
      setTimeout(() => {
        const rand = generateRandomNumber();

        switch (rand) {
          case 1:
            setXRotation((pastState) => pastState + 1);
            break;;
          case 0:
            setYRotation((pastState) => pastState + 1);
            break;
          case -1:
            setZRotation((pastState) => pastState + 1);
            break
        };
      }, i * 200)

      //check if all rotaions are made, to display and return the nesesary data
      if (i === (rotations.animationTime / 200 - 1)) {

        setTimeout(() => {
          setDiceWorkflow({
            ...diceWorkflow,
            diceRotation: [meshRef.current.rotation.x, meshRef.current.rotation.y, meshRef.current.rotation.z],
            diceQuaternion: meshRef.current.quaternion,
          });

          setIsAnimating(() => false);
        }, rotations.animationTime)



      }
    }
  }

  useEffect(() => {
    handleRotate()
  }, [])


  return (
    <animated.mesh position={[0, 2, 0]} ref={meshRef} {...props}>
      <group>
        <MeshWithText position={[0, 0, 5]} text={diceSetting.front} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.back} rotation={[0, Math.PI, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.right} rotation={[0, Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.left} rotation={[0, -Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.bottom} rotation={[Math.PI / 2, 0, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.top} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <RoundedBox castShadow receiveShadow args={[10, 10, 10]} radius={1.2} rotation={[0, Math.PI / 2, 0]}>
        <meshPhysicalMaterial attach="material" color={'#3e404b'} metalness={2} />
      </RoundedBox>
    </animated.mesh>
  );
};

const MeshWithText = ({ position, text, ...props }) => {
  return (
    <group {...props}>
      <mesh position={position}>
        <Text position={[0, 0, 0.03]} fontSize={1.5} textAlign="center" color={'white'}>
          {text}
        </Text>
      </mesh>
    </group>
  );
};  