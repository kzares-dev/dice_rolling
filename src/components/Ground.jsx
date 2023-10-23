import { usePlane } from '@react-three/cannon';

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -10, 0]
  }));

  return (
    <mesh
      receiveShadow 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -4, 0]} 
    >
      <planeBufferGeometry args={[0, 0]} />
      <shadowMaterial color="#000000" opacity={0} /> 
    </mesh>
  );
}

export function ShadowGround() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -20, 0]
  }));

  return (
    <mesh
      receiveShadow 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -20, 0]} 
    >
      <planeBufferGeometry args={[40, 40]} />
      <shadowMaterial color="#000000" opacity={0.1} /> // Material del plano de sombra
    </mesh>
  );
}