import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox, Text } from '@react-three/drei';

export const Cube = ({ setIsAnimating, setCubeRotation, diceSetting }) => {
  const meshRef = useRef();

  const [isRotating, setIsRotating] = useState(false);
  const [xRotations, setXRotations] = useState(0);
  const [yRotations, setYRotations] = useState(0);
  const [animationTime, setAnimationTime] = useState(diceSetting.spinTime * 1000 )

  const props = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [(Math.PI / 2) * xRotations, (Math.PI / 2) * yRotations, 0] },
    config: { duration: 170 },
    reverse: false,

  });

  const handleRotate = () => {
    if (isRotating) return
    setIsRotating(true)

    for (let i = 0; i < animationTime/200; i++) {

      setTimeout(() => {
        const rand = Math.round(Math.random())

        if (rand === 0) {
          setXRotations((prev) => prev + 1);
        } else {
          setYRotations((prev) => prev + 1)
        }
      }, 200 * i)

    }
    setTimeout(() => {
      setIsRotating(false)
      setIsAnimating(false)
      setCubeRotation([meshRef.current.rotation.x, meshRef.current.rotation.y, meshRef.current.rotation.z])
    }, animationTime)

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
        <Text position={[0, 0, 0.01]} fontSize={1.5} textAlign="center" color={'white'}>
          {text}
        </Text>
      </mesh>
    </group>
  );
};  