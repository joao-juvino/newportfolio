"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ChromeModule({
  position,
  rotation,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshPhysicalMaterial
        color="#d8e1f0"
        metalness={0.72}
        roughness={0.16}
        clearcoat={1}
        clearcoatRoughness={0.08}
      />
    </mesh>
  );
}

function GlassCore({ position, scale }: { position: [number, number, number]; scale: [number, number, number] }) {
  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
      <meshPhysicalMaterial
        color="#6c8cff"
        metalness={0.08}
        roughness={0.05}
        transmission={0.96}
        thickness={1.4}
        transparent
        opacity={0.58}
        ior={1.35}
      />
    </mesh>
  );
}

function Sculpture() {
  const sculpture = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!sculpture.current) return;
    const targetX = state.pointer.y * 0.09;
    const targetY = state.pointer.x * 0.14;
    sculpture.current.rotation.x = THREE.MathUtils.damp(sculpture.current.rotation.x, targetX, 4.2, delta);
    sculpture.current.rotation.y = THREE.MathUtils.damp(sculpture.current.rotation.y, targetY, 4.2, delta);
    sculpture.current.rotation.z += delta * 0.035;
  });

  return (
    <group ref={sculpture} rotation={[0.12, -0.28, -0.12]}>
      <ChromeModule position={[-1.2, 0.75, 0]} rotation={[0.1, 0.2, -0.32]} scale={[2.35, 0.38, 0.55]} />
      <ChromeModule position={[1.05, -0.65, -0.35]} rotation={[-0.12, -0.2, -0.3]} scale={[2.2, 0.38, 0.55]} />
      <ChromeModule position={[0.95, 1.15, -0.65]} rotation={[0.18, -0.28, 0.44]} scale={[1.55, 0.3, 0.45]} />

      <GlassCore position={[0, 0.05, 0.16]} scale={[1.35, 1.35, 1.35]} />
      <GlassCore position={[-1.52, -0.72, -0.1]} scale={[0.72, 0.72, 0.72]} />

      <mesh position={[-0.88, -0.35, 0.08]} rotation={[0, 0, -0.86]}>
        <cylinderGeometry args={[0.08, 0.08, 1.95, 16]} />
        <meshStandardMaterial color="#6c84ff" metalness={0.9} roughness={0.16} emissive="#1736d4" emissiveIntensity={1.1} />
      </mesh>
      <mesh position={[0.85, 0.48, -0.2]} rotation={[0.05, 0, -0.64]}>
        <cylinderGeometry args={[0.075, 0.075, 1.8, 16]} />
        <meshStandardMaterial color="#ccd5e8" metalness={1} roughness={0.15} />
      </mesh>
      <mesh position={[0.02, 0.04, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.055, 14, 72, Math.PI * 1.55]} />
        <meshStandardMaterial color="#4b6cff" metalness={0.8} roughness={0.18} emissive="#173de0" emissiveIntensity={0.75} />
      </mesh>
      <mesh position={[0.02, 0.04, -0.18]} rotation={[Math.PI / 2, 0.45, 0]}>
        <torusGeometry args={[2.18, 0.028, 10, 72, Math.PI * 1.35]} />
        <meshStandardMaterial color="#c9d2e4" metalness={1} roughness={0.17} />
      </mesh>
    </group>
  );
}

export default function SceneCanvas() {
  return (
    <Canvas
      dpr={[1, 1.45]}
      camera={{ position: [0, 0.1, 7.2], fov: 41 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      frameloop="always"
      performance={{ min: 0.6 }}
    >
      <ambientLight intensity={0.52} />
      <hemisphereLight args={["#bfcfff", "#060915", 1.45]} />
      <directionalLight position={[-4, 5, 5]} intensity={2.7} color="#dce5ff" />
      <pointLight position={[3, 1, 3]} intensity={54} distance={8} color="#315dff" />
      <pointLight position={[-3, -2, 2]} intensity={32} distance={7} color="#7ca3ff" />
      <Sculpture />
    </Canvas>
  );
}
