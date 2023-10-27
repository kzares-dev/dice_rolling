import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox, Text, useFBO } from '@react-three/drei';
import { generateRandomNumber } from '../lib/randomNumer';
import { Quaternion, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { calculateFace } from '../lib/calculateTopFace';

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
  const handleRotate = (duration) => {
    //check if the cube is rotating to prevent double rotations
    if (rotations.isRotating) return
    setRotations({ ...rotations, isRotating: true });

    //iterating to generate a random rotation, 
    //and the duration of the rotations match with the animationTime passed as param
    for (let i = 0; i < duration / 200; i++) {

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
      if (i === (duration / 200 - 1)) {

        setTimeout(() => {
          checkTopFace()
        }, duration)



      }
    }
  }

  useEffect(() => {
    handleRotate(rotations.animationTime)
  }, [])

  //check if the face is a winning face 
  const checkTopFace = () => {
    const faceNumber = calculateFace(meshRef.current.quaternion);

    let diceResult;
    switch (faceNumber) {
      case 1:
        diceResult = diceSetting.faces.top;
        break;

      case 2:
        diceResult = diceSetting.faces.right;
        break;

      case 3:
        diceResult = diceSetting.faces.front;
        break;

      case 4:
        diceResult = diceSetting.faces.back;
        break;

      case 5:
        diceResult = diceSetting.faces.left;
        break;

      case 6:
        diceResult = diceSetting.faces.bottom;
        break;
      default:
        console.log("not found")
        diceResult = diceSetting.faces.front;
    }

    let isAnyWinningFace = false;
    Object.entries(diceSetting.faces).map(([key, value]) => {
      if(value[1])  isAnyWinningFace = true
    })
    
    if (!diceResult[1] && isAnyWinningFace ) {
      handleRotate(200)
    } else {
      setIsAnimating(() => false);

      setDiceWorkflow({
        ...diceWorkflow,
        diceResult: diceResult,
        diceRotation: [meshRef.current.rotation.x, meshRef.current.rotation.y, meshRef.current.rotation.z],
        showResults: true,
      })
    }
  }


  return (
    <animated.mesh position={[0, 2, 0]} ref={meshRef} {...props}>
      <group>
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.front[0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.back[0]} rotation={[0, Math.PI, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.right[0]} rotation={[0, Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.left[0]} rotation={[0, -Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.bottom[0]} rotation={[Math.PI / 2, 0, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.top[0]} rotation={[-Math.PI / 2, 0, 0]} />
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