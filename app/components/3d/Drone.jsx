"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

export default function Drone() {
    const droneRef = useRef();
    const propellerRefs = [useRef(), useRef(), useRef(), useRef()];
    const [model, setModel] = useState(null);
    let time = 0;

    // Load the drone model
    useEffect(() => {
        // Dynamic import of OBJLoader from three.js
        import('three/examples/jsm/loaders/OBJLoader').then((OBJLoader) => {
            const loader = new OBJLoader.OBJLoader();
            loader.load('/drone3d.obj', (obj) => {
                // Apply material to all meshes in the object
                obj.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0xD4AF37, // Gold color
                            metalness: 0.7,
                            roughness: 0.3
                        });
                    }
                });
                // Scale for the homepage display
                obj.scale.set(0.015, 0.015, 0.015); 
                obj.rotation.y = Math.PI / 4; // Rotate for better viewing angle
                obj.position.set(0, 0, 0); // Center the model
                setModel(obj);
            });
        });
    }, []);

    useFrame(() => {
        if (droneRef.current) {
            time += 0.01;
            droneRef.current.position.y = Math.sin(time) * 0.3; // Gentle floating effect
            droneRef.current.rotation.y += 0.003; // Slow rotation
        }
        propellerRefs.forEach((prop) => {
            if (prop.current) prop.current.rotation.y += 0.2;
        });
    });

    return (
        <group ref={droneRef}>
            {/* Render the loaded OBJ model if available */}
            {model && <primitive object={model} />}
            
            {/* Fallback to basic shapes if model is not loaded yet */}
            {!model && (
                <>
                    {/* Drone body */}
                    <mesh>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color="#D4AF37" />
                    </mesh>
                    
                    {/* Propellers */}
                    {[
                        [1.5, 1, 0],
                        [-1.5, 1, 0],
                        [0, 1, 1.5],
                        [0, 1, -1.5],
                    ].map((pos, index) => (
                        <mesh key={index} ref={propellerRefs[index]} position={pos}>
                            <boxGeometry args={[0.2, 3, 0.1]} />
                            <meshStandardMaterial color="#D4AF37" /> {/* Changed from blue to gold */}
                        </mesh>
                    ))}
                </>
            )}
        </group>
    );
} 