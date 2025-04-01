"use client";

import { useFrame } from "@react-three/fiber";
import { Html, useProgress, useFBX } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState, useEffect, Suspense } from "react";

// Loading indicator component
function Loader() {
    const { progress, active } = useProgress();
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

// FBX Model component that loads the model
function FBXModel({ path, color }) {
    const fbx = useFBX(path);
    
    // Apply materials to the model
    useEffect(() => {
        fbx.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: color || "#D4AF37", // Gold color by default
                    metalness: 0.7,
                    roughness: 0.3
                });
            }
        });
        
        // Scale and position the model
        fbx.scale.set(0.015, 0.015, 0.015); 
        fbx.rotation.y = Math.PI / 4; // Rotate for better viewing angle
        fbx.position.set(0, 0, 0); // Center the model
    }, [fbx, color]);
    
    return <primitive object={fbx} />;
}

export default function DroneFBX({ path, color }) {
    const droneRef = useRef();
    let time = 0;

    useFrame(() => {
        if (droneRef.current) {
            time += 0.01;
            droneRef.current.position.y = Math.sin(time) * 0.3; // Gentle floating effect
            droneRef.current.rotation.y += 0.003; // Slow rotation
        }
    });

    return (
        <group ref={droneRef}>
            <Suspense fallback={<Loader />}>
                <FBXModel path={path} color={color} />
            </Suspense>
        </group>
    );
} 