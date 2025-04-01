"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Drone from "./Drone";
import DroneFBX from "./DroneFBX";

export default function DroneWrapper({ path, color }) {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Drone path={path || "/drone3d.obj"} color={color} />

        {/* {path ? (
          <DroneFBX path={path} color={color} />
        ) : (
          <Drone path={"/drone3d.obj"} color={color} />
        )} */}

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
