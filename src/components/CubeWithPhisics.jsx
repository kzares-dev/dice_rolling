import React, { useEffect, useRef } from 'react';
import { animated } from '@react-spring/three';
import { RoundedBox, Text } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

export const CubeWithPhisics = ({
  diceSetting,
  diceWorkflow,
  position,
}) => {

  //geometry and others params related to physics
  const [ref, api] = useBox(() => ({
    type: 'Dinamic',
    mass: 50,
    position,
    angularVelocity: [.04, 0.1, 1],
    rotation: diceWorkflow.diceRotation,
    allowSleep: false,
  }))

  return (
    <animated.mesh ref={ref}>
      <group>
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.front[0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.back[0]} rotation={[0, Math.PI, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.right[0]} rotation={[0, Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.left[0]} rotation={[0, -Math.PI / 2, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.bottom[0]} rotation={[Math.PI / 2, 0, 0]} />
        <MeshWithText position={[0, 0, 5]} text={diceSetting.faces.top[0]} rotation={[-Math.PI / 2, 0, 0]} />
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