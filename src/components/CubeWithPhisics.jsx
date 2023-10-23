import React, { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

export const CubeWithPhisics = ({position, rotation, setIsAnimating, diceSetting}) => {
  const [ref, api] = useBox(() => ({
    type: 'Dinamic',
    mass: 1,
    position,
    angularVelocity: [1.1,.1,1],
    rotation:rotation
  }))

  return (
    <animated.mesh ref={ref} onClick={() => setIsAnimating(true) } >
      <group>
        <MeshWithText position={[0, 0, 5]} text={diceSetting.front} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.back} rotation={[0, Math.PI, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.right} rotation={[0, Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.left} rotation={[0, -Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.bottom} rotation={[Math.PI / 2, 0, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.top} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <RoundedBox castShadow receiveShadow args={[10, 10, 10]} radius={1} rotation={[0, Math.PI / 2, 0]}>
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