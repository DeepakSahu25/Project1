import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function CyberCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <TorusKnot ref={meshRef} args={[1.5, 0.4, 128, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </TorusKnot>
      
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#b026ff"
          emissive="#b026ff"
          emissiveIntensity={0.2}
          transmission={0.9}
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          ior={1.5}
          thickness={0.5}
        />
      </mesh>
    </group>
  );
}
