'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';

function DroneModel({ modelPath, scale = 1, rotation = 0.004, position = [0, 0, 0] }) {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Placeholder component to show while model is loading
  const Placeholder = () => (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 0.5, 2]} />
      <meshStandardMaterial color="gray" wireframe />
    </mesh>
  );

  // Actual model once loaded
  const Model = ({ modelPath }) => {
    const ref = useRef();
    const { scene } = useGLTF(modelPath, 
      // Success callback
      () => setModelLoaded(true),
      // Progress callback
      undefined,
      // Error callback
      (e) => {
        console.error("Error loading model:", e);
        setError(`Failed to load model: ${e.message}`);
      }
    );

    // Rotate model
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += rotation;
      }
    });

    // Center model in the scene
    const { camera } = useThree();
    useEffect(() => {
      if (modelLoaded) {
        camera.position.set(5, 2, 5);
        camera.lookAt(0, 0, 0);
      }
    }, [camera, modelLoaded]);

    return (
      <primitive 
        ref={ref}
        object={scene} 
        scale={scale} 
        position={position} 
      />
    );
  };

  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-xl">
          <div className="text-center p-6 bg-black/80 rounded-lg">
            <p className="text-red-400">{error}</p>
            <p className="text-white/70 mt-2">Using placeholder visualization</p>
          </div>
        </div>
      )}
      
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {modelLoaded ? (
          <Model modelPath={"/drone3d.obj"} />
        ) : (
          <Placeholder />
        )}
        
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          opacity={0.5}
          width={15}
          height={15}
          blur={2.5}
          far={1.5}
        />
        
        <Environment preset="city" />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>

      <div className="absolute bottom-4 left-4 text-xs text-white/50 mix-blend-difference">
        <p>Drag to rotate | Scroll to zoom</p>
      </div>
    </div>
  );
}

export default DroneModel; 