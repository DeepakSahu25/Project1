import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import type { ReactNode } from 'react';

interface CanvasWrapperProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
}

export default function CanvasWrapper({ 
  children, 
  cameraPosition = [0, 0, 5], 
  enableZoom = false 
}: CanvasWrapperProps) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00f0ff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#b026ff" />
          <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" />
          
          {children}
          
          <OrbitControls 
            enableZoom={enableZoom} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
