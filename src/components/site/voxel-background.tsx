"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";

import { cn } from "@/lib/utils";

type VoxelBackgroundProps = {
  className?: string;
};

type PointerRef = MutableRefObject<{ x: number; y: number }>;

type VoxelCube = {
  position: [number, number, number];
  size: number;
  color: string;
};

function createSeededRandom(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function VoxelField({ cubes, pointer }: { cubes: VoxelCube[]; pointer: PointerRef }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const t = state.clock.getElapsedTime();
    const lerp = THREE.MathUtils.lerp;

    group.rotation.y = lerp(group.rotation.y, t * 0.08 + pointer.current.x * 0.35, 0.035);
    group.rotation.x = lerp(group.rotation.x, 0.22 + pointer.current.y * 0.25, 0.04);
    group.position.z = lerp(group.position.z, -2.5 + Math.sin(t * 0.5) * 0.2, 0.03);

    state.camera.position.x = lerp(state.camera.position.x, pointer.current.x * 0.45, 0.06);
    state.camera.position.y = lerp(state.camera.position.y, pointer.current.y * 0.3, 0.06);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, index) => (
        <mesh key={index} position={cube.position} castShadow={false} receiveShadow={false}>
          <boxGeometry args={[cube.size, cube.size, cube.size]} />
          <meshStandardMaterial
            color={cube.color}
            transparent
            opacity={0.26}
            roughness={0.4}
            metalness={0.08}
          />
        </mesh>
      ))}
    </group>
  );
}

export function VoxelBackground({ className }: VoxelBackgroundProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * -2,
      };
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [prefersReducedMotion]);

  const cubes = useMemo(() => {
    const random = createSeededRandom(17);
    const spread = 6.5;

    return Array.from({ length: 120 }, () => {
      const x = (random() - 0.5) * spread * 1.4;
      const y = (random() - 0.5) * spread * 1.1;
      const z = (random() - 0.5) * spread;
      const size = 0.12 + random() * 0.22;
      const hue = 200 + random() * 32;
      const saturation = 46 + random() * 16;
      const lightness = 46 + random() * 22;

      return {
        position: [x, y, z] as [number, number, number],
        size,
        color: `hsl(${hue} ${saturation}% ${lightness}%)`,
      };
    });
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_74%)]",
        className,
      )}
      aria-hidden
    >
      {prefersReducedMotion ? (
        <div
          className="h-full w-full bg-[radial-gradient(circle_at_50%_40%,rgba(222,221,217,0.26),rgba(23,23,23,0.92))]"
          style={{ opacity: 0.22 }}
        />
      ) : (
        <Canvas
          className="h-full w-full"
          style={{ opacity: 0.25, mixBlendMode: "screen" }}
          gl={{ antialias: false, alpha: true }}
          dpr={[1, 1.6]}
          camera={{ position: [0, 0, 7], fov: 50, near: 0.1, far: 45 }}
        >
          <ambientLight intensity={0.65} />
          <directionalLight position={[4, 6, 5]} intensity={0.35} color="#9cd9ff" />
          <directionalLight position={[-4, -6, -4]} intensity={0.18} color="#ffe1c4" />
          <VoxelField cubes={cubes} pointer={pointerRef} />
        </Canvas>
      )}
    </div>
  );
}
