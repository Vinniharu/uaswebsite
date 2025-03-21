"use client";

import { useFrame } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

// Loading indicator component
function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#D4AF37'
            }}>
                <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    border: '5px solid rgba(212, 175, 55, 0.3)',
                    borderTop: '5px solid #D4AF37', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite',
                }}>
                </div>
                <div style={{ marginTop: '10px' }}>
                    {Math.round(progress)}%
                </div>
                <style jsx>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        </Html>
    );
}

export default function Drone({path}) {
    const droneRef = useRef();
    const propellerRefs = [useRef(), useRef(), useRef(), useRef()];
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    let time = 0;

    // Load the drone model
    useEffect(() => {
        setLoading(true);
        // Dynamic import of OBJLoader from three.js
        import('three/examples/jsm/loaders/OBJLoader').then((OBJLoader) => {
            const loader = new OBJLoader.OBJLoader();
            loader.load(path, 
                // onLoad callback
                (obj) => {
                    // Apply material to all meshes in the object
                    obj.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            child.material = new THREE.MeshStandardMaterial({
                                color: "#D4AF37", // Gold color
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
                    setLoading(false);
                },
                // onProgress callback
                (xhr) => {
                    // Progress is tracked by useProgress in the Loader component
                },
                // onError callback
                (error) => {
                    console.error('An error occurred loading the drone model:', error);
                    setLoading(false);
                }
            );
        }).catch(error => {
            console.error('Error importing OBJLoader:', error);
            setLoading(false);
        });
    }, [path]);

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
            
            {/* Standard loading indicator */}
            {loading && <Loader />}
        </group>
    );
} 