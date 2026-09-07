"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = "#A16207";
const TEAL = "#0F6B62";

/* ============================================================
   Lustrous Strands - shimmer particles + gold ribbon strands
   Home hero ONLY. Normal blending tuned for ivory background.
   ============================================================ */

/* --- Particle field (Points) --- */
type ParticleFieldProps = {
  count: number;
};

function ParticleField({ count }: ParticleFieldProps) {
  const pointsRef = React.useRef<THREE.Points>(null);
  const positionsRef = React.useRef<Float32Array>(new Float32Array(0));
  const baseYRef = React.useRef<Float32Array>(new Float32Array(0));
  const phaseRef = React.useRef<Float32Array>(new Float32Array(0));
  const speedRef = React.useRef<Float32Array>(new Float32Array(0));

  // Build the particle attributes once
  const geometry = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const goldColor = new THREE.Color(GOLD);
    const tealColor = new THREE.Color(TEAL);

    for (let i = 0; i < count; i++) {
      // Spread across a tall, wide field (the panel is ~portrait)
      const x = (Math.random() - 0.5) * 6.0; // -3..3
      const y = (Math.random() - 0.5) * 8.0; // -4..4
      const z = (Math.random() - 0.5) * 2.0; // -1..1
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // 60% gold, 40% teal - gold leads for warmth
      const c = Math.random() < 0.6 ? goldColor : tealColor;
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      // Size 0.02 - 0.06
      sizes[i] = 0.02 + Math.random() * 0.04;
    }

    positionsRef.current = positions;
    baseYRef.current = new Float32Array(count);
    phaseRef.current = new Float32Array(count);
    speedRef.current = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      baseYRef.current[i] = positions[i * 3 + 1];
      phaseRef.current[i] = Math.random() * Math.PI * 2;
      // 8 - 14 px/s drift; world units ~ px scale here
      speedRef.current[i] = 0.008 + Math.random() * 0.006;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [count]);

  // Soft circular sprite texture (generated in-memory, no external asset)
  const spriteTexture = React.useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.3, "rgba(255,255,255,0.55)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  // Per-frame: drift particles upward with sine sway, wrap around top
  useFrame((state) => {
    const points = pointsRef.current;
    if (!points) return;
    const t = state.clock.elapsedTime;
    const pos = positionsRef.current;
    const baseY = baseYRef.current;
    const phase = phaseRef.current;
    const speed = speedRef.current;

    for (let i = 0; i < count; i++) {
      // Upward drift
      let y = baseY[i] + t * speed[i] * 60; // 8-14px/s scaled
      // Sine sway on X
      const swayX = Math.sin(t * 0.6 + phase[i]) * 0.12;
      pos[i * 3 + 0] += swayX * 0.016; // gentle accumulation
      // Wrap y: when y exceeds 4, reset to -4
      if (y > 4.2) {
        y = -4.2;
        baseY[i] = -4.2 - t * speed[i] * 60;
        // also reset X to keep distribution even
        pos[i * 3 + 0] = (Math.random() - 0.5) * 6.0;
      }
      pos[i * 3 + 1] = y;
    }
    const attr = points.geometry.attributes.position as THREE.BufferAttribute;
    attr.needsUpdate = true;
  });

  // Dispose on unmount
  React.useEffect(() => {
    return () => {
      geometry.dispose();
      spriteTexture.dispose();
    };
  }, [geometry, spriteTexture]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        map={spriteTexture}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

/* --- Gold ribbon strands (3, animated TubeGeometry on CatmullRom) --- */
type RibbonProps = {
  index: number;
  color?: string;
};

// Number of control points along each ribbon
const RIBBON_POINTS = 12;

// Compute the initial control points for a ribbon (pure function, no refs)
function makeInitialPoints(index: number): THREE.Vector3[] {
  return Array.from({ length: RIBBON_POINTS }, (_, i) => {
    const y = -4 + (i / (RIBBON_POINTS - 1)) * 8;
    const x = (index - 1) * 0.8 + Math.sin(i * 0.7) * 0.3;
    const z = -0.5 + (index - 1) * 0.15;
    return new THREE.Vector3(x, y, z);
  });
}

function Ribbon({ index, color = GOLD }: RibbonProps) {
  const meshRef = React.useRef<THREE.Mesh>(null);

  // Mutable control points owned by this component.
  // Initialized once with the same values used to build the initial geometry.
  const controlPoints = React.useRef<THREE.Vector3[]>(makeInitialPoints(index));

  const material = React.useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
  }, [color]);

  // Initial geometry - built from the same initial points function (no ref read)
  const initialGeometry = React.useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      makeInitialPoints(index),
      false,
      "catmullrom",
      0.5
    );
    return new THREE.TubeGeometry(curve, 80, 0.012, 8, false);
  }, [index]);

  // Animate: undulate control points on a ~10s loop, then rebuild geometry
  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;
    const phase = index * 1.2;

    const pts = controlPoints.current;
    for (let i = 0; i < pts.length; i++) {
      const baseY = -4 + (i / (RIBBON_POINTS - 1)) * 8;
      const undulation =
        Math.sin(t * 0.628 + phase + i * 0.5) * 0.35; // ~10s loop (2π/0.628 ≈ 10)
      const xBase = (index - 1) * 0.8;
      pts[i].set(
        xBase + Math.sin(i * 0.7) * 0.3 + undulation * 0.5,
        baseY + undulation * 0.15,
        -0.5 + (index - 1) * 0.15 + Math.cos(t * 0.5 + i * 0.4) * 0.1
      );
    }

    // Build a new curve + geometry from the updated points.
    const curve = new THREE.CatmullRomCurve3(
      pts.map((p) => p.clone()),
      false,
      "catmullrom",
      0.5
    );
    const newGeo = new THREE.TubeGeometry(curve, 80, 0.012, 8, false);
    const oldGeo = mesh.geometry;
    mesh.geometry = newGeo;
    oldGeo.dispose();
  });

  React.useEffect(() => {
    return () => {
      initialGeometry.dispose();
      material.dispose();
    };
  }, [initialGeometry, material]);

  return (
    <mesh ref={meshRef} geometry={initialGeometry} material={material} />
  );
}

/* --- Pointer parallax (desktop only, max 3 degrees) --- */
function PointerParallax() {
  const { gl, camera } = useThree();
  React.useEffect(() => {
    // Skip on touch / small screens
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1..1
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      // Max 3 degrees = ~0.052 rad
      targetX = ny * 0.052;
      targetY = nx * 0.052;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      camera.rotation.x = currentX;
      camera.rotation.y = currentY;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [gl, camera]);

  return null;
}

/* --- The scene itself --- */
type SceneProps = {
  particleCount: number;
};

function LustrousStrandsScene({ particleCount }: SceneProps) {
  return (
    <>
      <ambientLight intensity={1} />
      <ParticleField count={particleCount} />
      <Ribbon index={0} />
      <Ribbon index={1} />
      <Ribbon index={2} />
      <PointerParallax />
    </>
  );
}

type LustrousStrandsCanvasProps = {
  particleCount?: number;
  className?: string;
};

/**
 * The actual <Canvas>. Always client-side (the dynamic wrapper guarantees ssr:false).
 */
export function LustrousStrandsCanvas({
  particleCount = 1200,
  className,
}: LustrousStrandsCanvasProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "default",
      }}
      style={{ background: "transparent" }}
      frameloop="always"
    >
      <LustrousStrandsScene particleCount={particleCount} />
    </Canvas>
  );
}
